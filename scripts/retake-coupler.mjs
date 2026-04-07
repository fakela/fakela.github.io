import puppeteer from 'puppeteer'
import { resolve } from 'path'

async function run() {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] })
  const page = await browser.newPage()
  await page.setViewport({ width: 1280, height: 800 })

  await page.goto('https://web.archive.org/web/20230314162733/https://blog.coupler.io/bigquery-substring/', {
    waitUntil: 'networkidle2',
    timeout: 30000
  })

  // Try to dismiss cookie popup
  try {
    await page.waitForSelector('button', { timeout: 3000 })
    const buttons = await page.$$('button')
    for (const btn of buttons) {
      const text = await btn.evaluate(el => el.textContent)
      if (text.includes('ACCEPT ALL') || text.includes('Accept All') || text.includes('Accept')) {
        await btn.click()
        break
      }
    }
    await new Promise(r => setTimeout(r, 2000))
  } catch (e) {}

  const outPath = resolve('public/images/samples/coupler-bigquery.png')
  await page.screenshot({ path: outPath, clip: { x: 0, y: 0, width: 1280, height: 800 } })
  console.log('Saved:', outPath)

  await browser.close()
}

run()
