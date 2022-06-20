const pupeeteer = require('puppeteer');

(async () => {
    //#code

    console.log('launching browser...');
    const browser = await pupeeteer.launch({ headless: false});

    const page = await browser.newPage();

    await page.goto('https://es.wikipedia.org/wiki/Node.js');
    var titulo1  = await page.evaluate(() => {
        const h1  = document.querySelector('h1');
        console.log(h1. innerHTML);

        return h1.innerHTML;
    });

    console.log(titulo1);


    console.log('close browser...');
  browser.close();
    console.log('browser closed');
})();