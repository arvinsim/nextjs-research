const { Given, Then } = require("@cucumber/cucumber");
const { page } = require("./world");

Given("I am on the about page", { timeout: 60 * 1000 }, async function () {
  console.log("page", page);
  await page.goto("http://localhost:9999/about");
  return "pending";
});

Then("I should see {string}", async function (content) {
  const locator = await page.locator("text=" + content).first();
  expect(locator).toBeVisible();
});
