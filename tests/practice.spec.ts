
import {test, expect} from '@playwright/test';

test('cancel an employee deletion', async({page})=>{
    const modal=page.getByRole('dialog', {name:'Delete Employee'});
    await page.getByRole('button', {name:'Delete Employee'}).click();
    await expect(modal).toBeVisible();
    await expect(modal).toHaveText('Are you sure you want to delete Ali Khan?');
    await modal.getByRole('button', {name:'Cancel'}).click();
    await expect(modal).toBeHidden();
    await expect(page.getByText('Ali Khan')).toBeVisible();
});