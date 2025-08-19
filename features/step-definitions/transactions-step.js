const { Given, When, Then } = require("@wdio/cucumber-framework");
const transactionsPage = require("../pageobjects/transactions.page");

When("I add {string} to the cart", async (productName) => {
  await transactionsPage.addItemByName(productName);
});

Then("I should see {string} items in the cart", async (count) => {
  await transactionsPage.validateCartCount(count);
});

When("I proceed to checkout", async () => {
  await transactionsPage.goToCart();
});

Then("I should see {string} in the cart overview", async (productName) => {
  await transactionsPage.validateCartItem(productName);
});

When("I go to checkout page", async () => {
  await transactionsPage.goToCheckout();
});

When(
  "I fill in checkout information with {string} as first name, {string} as last name, and {string} as postal code",
  async (firstName, lastName, postalCode) => {
    await transactionsPage.fillCheckoutDetails(firstName, lastName, postalCode);
  }
);
