import { test, expect } from '@playwright/test';
import { loginAsAdmin } from './helpers';

test.describe('OrangeHRM dashboard', () => {
  test('sidebar navigation from dashboard', async ({ page }) => {
    // 4. sidebar navigation from dashboard
    await loginAsAdmin(page);

    const target = { name: 'PIM', url: /\/web\/index\.php\/pim\// };

    const navLink = page.getByRole('link', { name: target.name, exact: true }).first();
    await expect(navLink).toBeVisible();
    await navLink.click();

    await page.waitForURL(target.url, { timeout: 15000 });
    await expect(page.locator('body')).toBeVisible();
    await expect(page).toHaveURL(target.url);
  });
});
