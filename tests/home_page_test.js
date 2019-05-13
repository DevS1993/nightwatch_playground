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
        .assert.containsText('div#education div:nth-of-type(1) span', 'June 2011 - May 2014')
        .waitForElementVisible('div#skills', browser.globals.constants.time_out)
        .verify.containsText('div#skills li:nth-of-type(2)', 'Ruby on Rails')
        .assert.elementNotPresent("div#contact")
        .pause(browser.globals.constants.time_out)
        .end();
    }
  };