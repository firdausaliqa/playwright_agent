import { test, expect } from '@playwright/test';
import { loginAsAdmin } from './helpers';

test.describe('OrangeHRM dashboard', () => {
  test('login and dashboard load', async ({ page }) => {
    // 1. login & dashboard load
    await loginAsAdmin(page);

    // Verify the dashboard is rendered
    await expect(page.getByRole('heading', { name: 'Dashboard', level: 6 })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Dashboard' })).toHaveClass(/active/);
  });
});
