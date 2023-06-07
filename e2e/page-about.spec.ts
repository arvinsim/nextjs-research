import { test, expect } from '@playwright/test';

test('has page title', async ({ page }) => {
    await page.goto('http://localhost:9999/about')

    const locator = page.locator('.page-title')

    await expect(locator).toHaveText(/About Page/i)
})