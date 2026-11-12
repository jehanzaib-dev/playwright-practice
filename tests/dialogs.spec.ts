
import { test, expect } from '@playwright/test';

test('Intentional Failure: Registering dialog listener AFTER the click', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

  // ❌ WRONG: Clicking the button FIRST...
  await page.click('text="Click for JS Alert"');

  // ❌ ...and trying to catch the dialog AFTER it already popped up!
  page.on('dialog', async dialog => {
    await dialog.accept();
  });
});