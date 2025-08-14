import { test, expect } from '@playwright/test';

test('SauceDemo: login and see inventory', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  // Robust selectors: try data-test first, then fallback to legacy IDs.
  const user = page.locator('[data-test="username"], #user-name');
  const pass = page.locator('[data-test="password"], #password');
  const login = page.locator('[data-test="login-button"], #login-button');

  await user.fill(process.env.SAUCE_USER || 'standard_user');
  await pass.fill(process.env.SAUCE_PASS || 'secret_sauce');
  await login.click();

  // Inventory should render
  await expect(page.locator('.inventory_list')).toBeVisible();
  const count = await page.locator('.inventory_item').count();
  console.log(`Inventory items: ${count}`);
});
