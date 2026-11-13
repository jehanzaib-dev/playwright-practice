
import {test, expect} from '@playwright/test';

test.describe('JS Dialogs test suite', () => {

    test('should handle alert dialog', async ({page}) => {
        await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
        page.on('dialog', async dialog =>{
            expect(dialog.type()).toBe('alert');
            expect(dialog.message()).toBe('I am a JS Alert');
            await dialog.accept();
        });
        await page.getByRole('button', {name: 'Click for JS Alert'}).click();
        await expect(page.getByText('You successfully clicked an alert')).toBeVisible();

    });

    test('should accept confirm dialog', async ({page}) => {
        await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
        page.on('dialog', async dialog =>{
            expect(dialog.type()).toBe('confirm');
            expect(dialog.message()).toBe('I am a JS Confirm');
            await dialog.accept();
        });
        await page.getByRole('button', {name: 'Click for JS Confirm'}).click();
        await expect(page.getByText('You clicked: Ok')).toBeVisible();
    });

    test('should dismiss confirm dialog', async ({page}) => {
        await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
        page.on('dialog', async dialog =>{
            expect(dialog.type()).toBe('confirm');
            expect(dialog.message()).toBe('I am a JS Confirm');
            await dialog.dismiss();
        });
        await page.getByRole('button', {name: 'Click for JS Confirm'}).click();
        await expect(page.getByText('You clicked: Cancel')).toBeVisible();
    });

    test('should accept prompt dialog', async ({page}) => {
        await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
        page.on('dialog', async dialog =>{
            expect(dialog.type()).toBe('prompt');
            expect(dialog.message()).toBe('I am a JS prompt');
            await dialog.accept('playwright');
        });
        await page.getByRole('button', {name: 'Click for JS Prompt'}).click();
        await expect(page.getByText('You entered: playwright')).toBeVisible();
    });

    test('should dismiss prompt dialog', async ({page}) => {
        await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
        page.on('dialog', async dialog =>{
            expect(dialog.type()).toBe('prompt');
            expect(dialog.message()).toBe('I am a JS prompt');
            await dialog.dismiss();
        });
        await page.getByRole('button', {name: 'Click for JS Prompt'}).click();
        await expect(page.getByText('You entered: null')).toBeVisible();
    });

});