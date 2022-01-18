const puppeteer = require('puppeteer');

// NOTE: I do not currently know how to bypass capchas, so if there is one this will not work.

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setDefaultNavigationTimeout(0);

    // Go to Poshmark homepage
    await page.goto('https://poshmark.com/feed');

    // Type username
    await page.type('#login_form_username_email', 'TuckTuckCC');

    // Type password
    await page.type('#login_form_password', 'craigt847');

    // Click Log In
    await page.click('.btn--primary');
    await page.waitForNavigation();

    // Click user dropdown
    await page.click('.user-image');

    // Click on my closet
    await page.click('.dropdown__menu__item');
    await page.waitForNavigation();

    // Click the first post
    await page.click('.tile__covershot');
    await page.waitForNavigation();

    // Click edit post
    await page.click('.btn--icon');
    await page.waitForNavigation();

    // Get XPath for the delete button becuse it does not have a unique identifier
    await page.waitForXPath("//a[@class='td--ul tc--lg']");
    const delBtn = await page.$x("//a[@class='td--ul tc--lg']");

    // Click the delete button
    await delBtn[0].click();
    await page.waitFor(2000);


    // x: 482, y: 363
    // Click the confirm button for deleting, I used coordinates because I couldn't get this element selected in puppeteer correctly
    await page.mouse.click(500, 380)

    // Close the browser
    await browser.close();
})();