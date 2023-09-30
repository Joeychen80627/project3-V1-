const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('/home/joeychen/Documents/asu_testing/index.html');
    await page.click('#start')
    await page.goto('/home/joeychen/Documents/asu_testing/Rating.html')
    await page.click('#');
    await browser.close()
})