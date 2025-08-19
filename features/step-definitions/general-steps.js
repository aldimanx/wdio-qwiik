const { Given, When, Then } = require("@wdio/cucumber-framework");
const generalPage = require("../pageobjects/general.page");

When("I sort products by {string}", async (sort) => {
  await generalPage.sortingProducts(sort);
});

Then("I validate products should be sorted by {string}", async (sort) => {
  await generalPage.validateSorting(sort);
});

When("I click on {string} button", async (button) => {
  await generalPage.clickButton(button);
});

Then("I should see {string} page", async (title) => {
  await generalPage.validateTitlePage(title);
});
