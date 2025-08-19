@sort
Feature: Sort Products SauceDemo

  Background:
    Given I visit SauceDemo login page
    When I login with "standard_user" as username and "secret_sauce" as password
    Then I should be logged in successfully

  Scenario Outline: As a user, I can sort products by name

    When I sort products by "<sort>"
    Then I validate products should be sorted by "<sort>"

    Examples:
      | sort          |
      | Name (A to Z) |
      | Name (Z to A) |

  Scenario Outline: As a user, I can sort products by price

    When I sort products by "<sort>"
    Then I validate products should be sorted by "<sort>"

    Examples:
      | sort                |
      | Price (low to high) |
      | Price (high to low) |
