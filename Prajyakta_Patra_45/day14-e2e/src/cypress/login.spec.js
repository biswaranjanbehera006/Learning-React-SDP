import { test, expect } from '@playwright/test';
import path from 'path';

test.describe('Local Login Page Tests', () => {

  const localLoginPath = `file://${path.resolve(__dirname, '../public/login.html')}`;

  test('successful login', async ({ page }) => {
    await page.goto(localLoginPath);
    await page.fill('#username', 'admin');
    await page.fill('#password', 'password123');
    await page.click('#login');
    await expect(page.locator('h1')).toHaveText('Dashboard');
    await page.screenshot({ path: 'screenshots/login-success.png' });
  });

  test('failed login shows error', async ({ page }) => {
    await page.goto(localLoginPath);
    await page.fill('#username', 'wronguser');
    await page.fill('#password', 'wrongpass');
    await page.click('#login');
    const errorMessage = page.locator('#error');
    await expect(errorMessage).toHaveText('Invalid credentials');
    await expect(errorMessage).toBeVisible();
    await page.screenshot({ path: 'screenshots/login-failure.png' });
  });

});
