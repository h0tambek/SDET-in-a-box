import { test, expect } from '@playwright/test';

test('DemoQA: text box form shows output', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
  await page.fill('#userName', 'John Doe');
  await page.fill('#userEmail', 'john@example.com');
  await page.fill('#currentAddress', '123 Test Street');
  await page.click('#submit');

  // Output section should appear with echoed values
  await expect(page.locator('#output')).toBeVisible();
  await expect(page.locator('#output')).toContainText('John Doe');
  await expect(page.locator('#output')).toContainText('john@example.com');
});
