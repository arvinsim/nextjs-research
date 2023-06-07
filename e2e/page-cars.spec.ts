import {test, expect} from "@playwright/test";
import {API_ENDPOINT} from "../pages/cars";

test("has page title", async ({page}) => {
    await page.goto("http://localhost:9999/cars");

    const locator = page.locator(".page-title");

    await expect(locator).toHaveText(/Cars/i);
})

test("has list of cards", async ({page}) => {
    const cars = [{
        id: 1,
        name: "Ford",
    }, {
        id: 2,
        name: "Chevrolet",
    }, {
        id: 3,
        name: 'Toyota',
    }]

    await page.route(`${API_ENDPOINT}/cars`, async route => {
        const json = {
            cars
        };
        await route.fulfill({json});
    });
    await page.goto("http://localhost:9999/cars");
    const locator = page.locator(".car :nth-child(2)");

    await expect(locator).toHaveText([cars[0].name, cars[1].name, cars[2].name]);
})
