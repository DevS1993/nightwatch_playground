module.exports = {
    'Test home page' : function (browser) {
      browser
        .url(browser.globals.constants.root_url)
        .waitForElementVisible('body', browser.globals.constants.time_out)
        .assert.title('devs1993')
        .waitForElementVisible('ul#menu', browser.globals.constants.time_out)
        .waitForElementVisible('div#lead-content h1', browser.globals.constants.time_out)
        .assert.containsText('div#dev-div p', 'Developer')
        .assert.attributeContains('div#dev-div a:nth-of-type(3)', 'href', 'https://www.linkedin.com/')
        .assert.cssClassPresent('div#dev-div a:nth-of-type(3) i', 'fa-linkedin')
        .waitForElementVisible('div#about h2', browser.globals.constants.time_out)
        .waitForElementVisible('div#experience-timeline', browser.globals.constants.time_out)
        // the next line will fail,
        .verify.containsText('div#education div:nth-of-type(2) span', 'Date Range')
        // as verify is used the failure is logged and execution continues
        .waitForElementVisible('div#projects .project-info', browser.globals.constants.time_out)
        .waitForElementVisible('div#skills', browser.globals.constants.time_out)
        .verify.containsText('div#skills li:nth-of-type(2)', 'Ruby on Rails')
        .assert.elementNotPresent("div#contact")
        .pause(browser.globals.constants.time_out)
        .end();
    }
  };