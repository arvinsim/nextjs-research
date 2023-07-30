const { After, Before } = require("@cucumber/cucumber");
const { Page, Browser, chromium } = require("playwright");

let page;
let browser;

Before(async function () {
  browser = await chromium.launch();
  page = await browser.newPage();
});

After(async function () {
  await browser.close();
});

module.exports = { page, browser };
