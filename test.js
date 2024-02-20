const {Builder, By, Key, until} = require('selenium-webdriver');

const firefox = require('selenium-webdriver/firefox');

async function example() {
    let options = new firefox.Options().setBinary('snap/bin/firefox');
    let driver = await new Builder()
        .forBrowser('firefox')
        .setFirefoxOptions(options)
        .build();
    try {
        // Navigate to DuckDuckGo
        await driver.get('https://www.duckduckgo.com');

        // Enter text "WebDriver" and perform keyboard action "Enter"
        await driver.findElement(By.name('q')).sendKeys('WebDriver', Key.ENTER);

        // DuckDuckGo's first search result
        let firstResult = await driver.wait(until.elementLocated(By.css('h2 a')), 5000);

        console.log(await firstResult.getAttribute('textContent'));
    }
    finally{
        // Quit the browser after the test
        await driver.quit();
    }
}

example();