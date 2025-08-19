@transactions
Feature: Checkout products SauceDemo

  Background:
    Given I visit SauceDemo login page
    When I login with "standard_user" as username and "secret_sauce" as password
    Then I should be logged in successfully

  Scenario Outline: As a user, I can checkout single product by name

    When I add "<product>" to the cart
    Then I should see "1" items in the cart
    When I proceed to checkout
    Then I should see "Your Cart" page
    And I should see "<product>" in the cart overview
    When I click on "checkout" button
    And I should see "Checkout: Your Information" page
    When I fill in checkout information with "Aldy" as first name, "noverio" as last name, and "12345" as postal code
    And I click on "continue" button
    Then I should see "Checkout: Overview" page
    When I click on "finish" button
    Then I should see "Checkout: Complete!" page

    Examples:
      | product               |
      | Sauce Labs Backpack   |
      | Sauce Labs Bike Light |
