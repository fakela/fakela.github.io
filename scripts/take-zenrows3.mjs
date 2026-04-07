import puppeteer from 'puppeteer'
import { resolve } from 'path'

const OUTPUT_DIR = resolve('public/images/samples')

async function run() {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] })

  // Try specific archive snapshots
  const urls = [
    {
      name: 'zenrows-amazon-reviews',
      url: 'https://web.archive.org/web/20240901000000*/https://www.zenrows.com/blog/scrape-amazon-reviews'
    },
    {
      name: 'zenrows-seleniumbase-proxy',
      url: 'https://web.archive.org/web/20240901000000*/https://www.zenrows.com/blog/seleniumbase-proxy'
    }
  ]

  // First, find actual snapshot URLs
  for (const { name } of urls) {
    // Try direct live URLs with stealth user agent
    const liveUrls = {
      'zenrows-amazon-reviews': 'https://www.zenrows.com/blog/scrape-amazon-reviews',
      'zenrows-seleniumbase-proxy': 'https://www.zenrows.com/blog/seleniumbase-proxy'
    }

    const outPath = resolve(OUTPUT_DIR, `${name}.png`)
    console.log(`Capturing: ${name}`)
    try {
      const page = await browser.newPage()
      await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36')
      await page.setViewport({ width: 1280, height: 800 })
      await page.goto(liveUrls[name], { waitUntil: 'domcontentloaded', timeout: 15000 })
      await new Promise(r => setTimeout(r, 8000))
      await page.screenshot({ path: outPath, clip: { x: 0, y: 0, width: 1280, height: 800 } })
      await page.close()
      console.log(`  Saved`)
    } catch (err) {
      console.log(`  Error: ${err.message}`)
    }
  }

  await browser.close()
}

run()
