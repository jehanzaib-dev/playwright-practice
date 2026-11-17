import { test, expect } from '@playwright/test';

test.describe('Checkout Preferences Form', () => {

  test('Should configure native dropdown and radio selection', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/dropdown'); // Or your target sandbox form URL

    // 1. Native Dropdown: Select country by its visible text label
    const dropdown = page.getByLabel('Dropdown List');
    await dropdown.selectOption({ label: 'Option 2' });
    await expect(dropdown).toHaveValue('2');

    // 2. Radio Button: Choose shipping speed (Exclusive choice)
    const expressRadio = page.getByRole('radio', { name: 'Express Shipping' });
    await expressRadio.check();
    await expect(expressRadio).toBeChecked();
  });

  test('Should handle checkbox check and uncheck workflows distinctly', async ({ page }) => {
    await page.goto('https://qaplayground.dev/');

    // 3. Checkbox: Opt-in scenario
    const newsletterCheckbox = page.getByRole('checkbox', { name: 'Subscribe to newsletter' });
    await newsletterCheckbox.check();
    await expect(newsletterCheckbox).toBeChecked();

    // 4. Checkbox: Opt-out scenario (Separate test block for alternate path)
    const termsCheckbox = page.getByRole('checkbox', { name: 'Receive promotional SMS' });
    await termsCheckbox.uncheck();
    await expect(termsCheckbox).not.toBeChecked();
  });

});