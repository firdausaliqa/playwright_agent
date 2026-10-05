import { test, expect } from '@playwright/test';
import { loginAsAdmin } from './helpers';

test.describe('OrangeHRM dashboard', () => {
  test('quick launch shortcuts navigation', async ({ page }) => {
    // 3. quick launch shortcuts navigation
    await loginAsAdmin(page);

    const quickLaunchSection = page.locator('div').filter({ has: page.getByText('Quick Launch', { exact: true }) }).first();
    await expect(quickLaunchSection).toBeVisible();

    const shortcutLink = quickLaunchSection.getByRole('link').first();
    await expect(shortcutLink).toBeVisible();
    await shortcutLink.click();

    await expect(page).not.toHaveURL(/\/web\/index\.php\/dashboard\/index/);
    await expect(page.locator('body')).toBeVisible();
  });
});
