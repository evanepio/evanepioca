import { expect, test } from '@playwright/test';

test('home page has expected h1', async ({ page }) => {
	await page.goto('/');
	expect(await page.textContent('h1')).toBe('Home');
});

test('about page has expected h1', async ({ page }) => {
	await page.goto('/about');
	expect(await page.textContent('h1')).toBe('About');
});
