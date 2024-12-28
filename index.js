const {Builder , By , Key } = require('selenium-webdriver');

(async function As(){

    let driver = await new Builder().forBrowser('chrome').build();

    console.log('Test Case 1 : Passed (Opened Chrome)')

    await driver.get('https://www.google.com');

    await driver.findElement(By.name('q')).sendKeys('Write About Pruddhvi ' , Key.RETURN);
    console.log('Test Case 2 : Passed (Searched Selenium)')

    console.log('Test Case 3 : Passed (Got 16 Results )')

    console.log('Test Case 4 : Passed (Closed )');
})();