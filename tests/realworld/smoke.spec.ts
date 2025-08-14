import { test, expect } from '@playwright/test';

test('RealWorld: smoke navigation is visible', async ({ page }) => {
  await page.goto('https://demo.realworld.io/');
  await expect(page.locator('a.nav-link:has-text("Sign in")')).toBeVisible();
  await expect(page.locator('a.nav-link:has-text("Sign up")')).toBeVisible();
  await page.click('a.nav-link:has-text("Sign in")');
  await expect(page).toHaveURL(/#\/login/);
});
