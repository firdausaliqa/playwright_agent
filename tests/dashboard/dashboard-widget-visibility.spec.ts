import { test, expect } from '@playwright/test';
import { loginAsAdmin } from './helpers';

test.describe('OrangeHRM dashboard', () => {
  test('dashboard widget visibility', async ({ page }) => {
    // 2. dashboard widget visibility
    await loginAsAdmin(page);

    const widgets = [
      'Time at Work',
      'My Actions',
      'Quick Launch',
      'Buzz Latest Posts',
      'Employees on Leave Today',
      'Employee Distribution by Sub Unit',
      'Employee Distribution by Location',
    ];

    for (const widget of widgets) {
      await expect(page.getByText(widget, { exact: true }).first()).toBeVisible();
    }
  });
});
