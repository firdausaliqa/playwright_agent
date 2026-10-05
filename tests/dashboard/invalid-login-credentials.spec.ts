import { test, expect } from '@playwright/test';

test.describe('OrangeHRM dashboard', () => {
  test('negative - invalid login credentials', async ({ page }) => {
    // 6. negative - invalid login credentials
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.locator('input[name="username"]').fill('Admin');
    await page.locator('input[name="password"]').fill('wrong-password');
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.getByText(/Invalid credentials/i)).toBeVisible();
    await expect(page).toHaveURL(/\/web\/index\.php\/auth\/login/);
  });
});
