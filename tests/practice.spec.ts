
import {test, expect} from '@playwright/test';

test('admin can save an employee', async({page})=>{
    await page.goto('https://localhost/home');
    await page.getByLabel('Work Email').fill('john@gmail.com');
    await page.getByRole('button', {name: 'Save Employee'}).click();
    await expect(page.getByText('Employee saved successfully')).toBeVisible();
    await expect(page.get);
});