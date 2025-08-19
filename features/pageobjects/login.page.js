const { $, browser, expect } = require("@wdio/globals");

class loginPage {
  async loginPageSauceDemo() {
    await browser.url("https://www.saucedemo.com/");
    await expect(browser).toHaveTitle("Swag Labs");
  }

  async login(username, password) {
    await $("#user-name").setValue(username);
    await $("#password").setValue(password);
    await $("#login-button").click();
  }

  async verifyingLoginSuccess() {
    await expect(await browser.getUrl()).toContain("/inventory.html");
    await expect($('[data-test="title"]')).toHaveText("Products");
  }
}

module.exports = new loginPage();
