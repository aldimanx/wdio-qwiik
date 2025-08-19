Feature: GoREST Users API

    Scenario: Create a new user successfully
        Given I have a valid access token
        When I create a new user with name "Aldi QA" and email "aldi.qa@testing.com"
        Then the response status should be 201
        And the response should contain the name "Aldi QA"

    Scenario: Get user details
        Given I have a valid access token
        When I fetch the details of the created user
        Then the response status should be 200
        And the response should contain the name "Aldi QA"

    Scenario: Update user details
        Given I have a valid access token
        When I update the user name to "Aldi QA Updated"
        Then the response status should be 200
        And the response should contain the name "Aldi QA Updated"
