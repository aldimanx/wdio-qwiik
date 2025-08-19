import { Given, When, Then } from "@wdio/cucumber-framework";
import axios from "axios";
import { expect } from "chai";

const BASE_URL = "https://gorest.co.in/public/v2";
let response;
let userId;

Given("I have a valid access token", function () {
  this.token = process.env.GOREST_TOKEN;
  expect(this.token).to.not.be.undefined;
});

When(
  "I create a new user with name {string} and email {string}",
  async function (name, email) {
    response = await axios.post(
      `${BASE_URL}/users`,
      {
        name,
        email,
        gender: "male",
        status: "active",
      },
      {
        headers: { Authorization: `Bearer ${this.token}` },
      }
    );
    userId = response.data.id; // save user id for later
  }
);

When("I fetch the details of the created user", async function () {
  response = await axios.get(`${BASE_URL}/users/${userId}`, {
    headers: { Authorization: `Bearer ${this.token}` },
  });
});

When("I update the user name to {string}", async function (newName) {
  response = await axios.put(
    `${BASE_URL}/users/${userId}`,
    { name: newName },
    { headers: { Authorization: `Bearer ${this.token}` } }
  );
});

Then("the response status should be {int}", function (statusCode) {
  expect(response.status).to.equal(statusCode);
});

Then("the response should contain the name {string}", function (expectedName) {
  expect(response.data.name).to.equal(expectedName);
});
