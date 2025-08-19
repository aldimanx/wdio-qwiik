const { $, browser, expect } = require("@wdio/globals");

class generalPage {
  async sortingProducts(sort) {
    await $('[data-test="product-sort-container"]').selectByVisibleText(sort);
  }

  async validateSorting(sort) {
    switch (sort) {
      case "Name (A to Z)": {
        const names = await $$(".inventory_item_name").map((el) =>
          el.getText()
        );
        const expected = [...names].sort((a, b) => a.localeCompare(b));
        await expect(names).toEqual(expected);
        break;
      }

      case "Name (Z to A)": {
        const names = await $$(".inventory_item_name").map((el) =>
          el.getText()
        );
        const expected = [...names].sort((a, b) => b.localeCompare(a));
        await expect(names).toEqual(expected);
        break;
      }

      case "Price (low to high)": {
        const prices = (
          await $$(".inventory_item_price").map((el) => el.getText())
        ).map((p) => parseFloat(p.replace("$", "")));
        const expected = [...prices].sort((a, b) => a - b);
        await expect(prices).toEqual(expected);
        break;
      }

      case "Price (high to low)": {
        const prices = (
          await $$(".inventory_item_price").map((el) => el.getText())
        ).map((p) => parseFloat(p.replace("$", "")));
        const expected = [...prices].sort((a, b) => b - a);
        await expect(prices).toEqual(expected);
        break;
      }
    }
  }

  async clickButton(buttonName) {
    const button = $(`[name="${buttonName}"]`);
    await expect(button).toBeClickable();
    await button.click();
  }

  async validateTitlePage(title) {
    await expect($('[data-test="title"]')).toHaveText(title);
  }
}

module.exports = new generalPage();
