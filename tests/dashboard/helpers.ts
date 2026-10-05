import { expect, type Page } from '@playwright/test';

export async function loginAsAdmin(page: Page) {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  await page.waitForURL('**/web/index.php/dashboard/index', { timeout: 15000 });
  await expect(page.getByRole('heading', { name: 'Dashboard', level: 6 })).toBeVisible();
}
