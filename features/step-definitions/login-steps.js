const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect, $ } = require("@wdio/globals");

const loginPage = require("../pageobjects/login.page.js");

Given("I visit SauceDemo login page", async () => {
  await loginPage.loginPageSauceDemo();
});

When(
  "I login with {string} as username and {string} as password",
  async (username, password) => {
    await loginPage.login(username, password);
  }
);

Then("I should be logged in successfully", async () => {
  await loginPage.verifyingLoginSuccess();
});
