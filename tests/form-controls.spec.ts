import { test, expect } from '@playwright/test';

test.describe('Checkout Preferences Form', () => {

  test('Should configure dropdown', async ({ page }) => {

    await page.goto('https://testpages.eviltester.com/pages/forms/html-form/');

    const dropdown = page.getByRole('combobox');

    await expect(dropdown).toHaveCount(1);

    await dropdown.selectOption('dd1');

    await expect(dropdown).toHaveValue('dd1');
  });

  test('Should configure checkbox', async ({ page }) => {
    await page.goto('https://testpages.eviltester.com/pages/forms/html-form/');

    const checkbox = page.getByRole('checkbox');
    await checkbox.nth(0).check();
    await checkbox.nth(1).check();
    await expect(checkbox.nth(0)).toBeChecked();
    await expect(checkbox.nth(1)).toBeChecked();
  });

  test('Should configure radio button', async ({ page }) => {
    await page.goto('https://testpages.eviltester.com/pages/forms/html-form/');

    const radioButton = page.getByRole('radio');
    await radioButton.nth(2).check();
    await expect(radioButton.nth(2)).toBeChecked();
  });


});