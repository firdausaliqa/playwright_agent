import { test, expect } from '@playwright/test';
import { loginAsAdmin } from './helpers';

test.describe('OrangeHRM dashboard', () => {
  test('user dropdown menu', async ({ page }) => {
    // 5. user dropdown menu
    await loginAsAdmin(page);

    await page.getByAltText('profile picture').click();

    await expect(page.getByText('About', { exact: true })).toBeVisible();
    await expect(page.getByText('Support', { exact: true })).toBeVisible();
    await expect(page.getByText('Change Password', { exact: true })).toBeVisible();
    await expect(page.getByText('Logout', { exact: true })).toBeVisible();
  });
});
