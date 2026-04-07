import puppeteer from 'puppeteer'
import { mkdirSync, existsSync } from 'fs'
import { resolve } from 'path'

const OUTPUT_DIR = resolve('public/images/samples')
mkdirSync(OUTPUT_DIR, { recursive: true })

const urls = [
  {
    name: 'giskard-pytorch',
    url: 'https://www.giskard.ai/knowledge/how-to-evaluate-and-load-a-pytorch-model-with-giskard'
  },
  {
    name: 'mindee-invoice-blog',
    url: 'https://www.mindee.com/blog/how-to-extract-data-from-invoices-or-receipts-using-python'
  },
  {
    name: 'calimero-wallet-blog',
    url: 'https://web.archive.org/web/20240714201537/https://www.calimero.network/blog/how-to-connect-your-sender-wallet-with-calimero-portal'
  },
  {
    name: 'calimero-chatapp-blog',
    url: 'https://web.archive.org/web/20240804122742/https://www.calimero.network/blog/decentralized-chatapp-calimero-and-bos'
  },
  {
    name: 'coupler-bigquery',
    url: 'https://web.archive.org/web/20230314162733/https://blog.coupler.io/bigquery-substring/'
  }
]

async function run() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  })

  for (const { name, url } of urls) {
    const outPath = resolve(OUTPUT_DIR, `${name}.png`)
    if (existsSync(outPath)) {
      console.log(`Skip: ${name} (already exists)`)
      continue
    }

    console.log(`Capturing: ${name}`)
    console.log(`  URL: ${url}`)

    try {
      const page = await browser.newPage()
      await page.setViewport({ width: 1280, height: 800 })
      await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 })
      // Wait a bit for lazy-loaded content
      await new Promise(r => setTimeout(r, 2000))
      await page.screenshot({ path: outPath, clip: { x: 0, y: 0, width: 1280, height: 800 } })
      await page.close()
      console.log(`  Saved: ${outPath}`)
    } catch (err) {
      console.log(`  Error: ${err.message}`)
    }
  }

  await browser.close()
  console.log('\nDone.')
}

run()
