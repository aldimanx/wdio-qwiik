const { $, browser, expect } = require("@wdio/globals");

class transactionsPage {
  async addItemByName(productName) {
    const selector = `[data-test="add-to-cart-${productName
      .toLowerCase()
      .replaceAll(" ", "-")}"]`;
    await $(selector).click();
  }

  async validateCartCount(expectedCount) {
    await expect($(`[data-test="shopping-cart-badge"]`)).toHaveText(
      expectedCount.toString()
    );
  }

  async goToCart() {
    await $('[data-test="shopping-cart-link"]').click();
    await expect(await browser.getUrl()).toContain("/cart.html");
  }

  async validateCartItem(item) {
    await expect($(`[data-test="inventory-item-name"]`)).toHaveText(item);
  }

  async goToCheckout() {
    await $('[data-test="checkout"]').click();
    await expect(await browser.getUrl()).toContain("/checkout-step-one.html");
  }

  async fillCheckoutDetails(firstName, lastName, postalCode) {
    await $("#first-name").setValue(firstName);
    await $("#last-name").setValue(lastName);
    await $("#postal-code").setValue(postalCode);
  }

  async validateOverviewItem(item) {
    const itemSelector = `[data-test="checkout_summary_container"] [data-test="inventory_item_name"]`;
    await expect($(itemSelector)).toHaveText(item);
  }

  async completeCheckout() {
    await $('[data-test="finish"]').click();
    await expect(await browser.getUrl()).toContain("/checkout-complete.html");
    await expect($('[data-test="complete-header"]')).toHaveText(
      "Thank you for your order!"
    );
  }
}

module.exports = new transactionsPage();
