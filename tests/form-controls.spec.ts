
import {test, expect} from '@playwright/test';

test('interact with form controls', async ({page}) => {
    await page.goto('https://testpages.eviltester.com/pages/forms/html-form/');
    
    const dropdown = page.locator('select[name="dropdown"]');
    await dropdown.selectOption('Drop Down Item 2');
    await expect(dropdown).toHaveValue('dd2');

    const checkbox1= page.locator('input[name="checkboxes[]"][value="cb1"]');
    const checkbox2= page.locator('input[name="checkboxes[]"][value="cb2"]');
    const checkbox3= page.locator('input[name="checkboxes[]"][value="cb3"]');
    await checkbox1.check();
    await checkbox2.check();
    await checkbox3.uncheck
    await expect(checkbox1).toBeChecked();
    await expect(checkbox2).toBeChecked();
    await expect(checkbox3).not.toBeChecked();

    const radio1 = page.locator('input[name="radioval"][value="rd1"]');
    const radio3= page.locator('input[name=radioval"][value="rd3"]');
    await radio1.check();
    await expect(radio1).toBeChecked();
    await radio3.check();
    await expect(radio3).toBeChecked();
    await expect(radio1).not.toBeChecked();
});