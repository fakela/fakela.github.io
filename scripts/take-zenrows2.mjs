import puppeteer from 'puppeteer'
import { resolve } from 'path'

const OUTPUT_DIR = resolve('public/images/samples')

const urls = [
  {
    name: 'zenrows-amazon-reviews',
    url: 'https://web.archive.org/web/2024/https://www.zenrows.com/blog/scrape-amazon-reviews'
  },
  {
    name: 'zenrows-seleniumbase-proxy',
    url: 'https://web.archive.org/web/2024/https://www.zenrows.com/blog/seleniumbase-proxy'
  }
]

async function run() {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] })

  for (const { name, url } of urls) {
    const outPath = resolve(OUTPUT_DIR, `${name}.png`)
    console.log(`Capturing: ${name}`)
    try {
      const page = await browser.newPage()
      await page.setViewport({ width: 1280, height: 800 })
      await page.goto(url, { waitUntil: 'networkidle2', timeout: 45000 })
      await new Promise(r => setTimeout(r, 3000))
      await page.screenshot({ path: outPath, clip: { x: 0, y: 0, width: 1280, height: 800 } })
      await page.close()
      console.log(`  Saved: ${outPath}`)
    } catch (err) {
      console.log(`  Error: ${err.message}`)
    }
  }

  await browser.close()
}

run()
