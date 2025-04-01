import { test, expect } from '@playwright/test';
import { LogInPage } from '../pages/LogInPage';
import { blockAds } from '../utils/adBlocker';


const config = require('../test-data/config.json');
const user = require('../test-data/users.json');

test.beforeEach(async ({ page }) => {
    await blockAds(page);
});


test('TC05 Login with correct credentials', async ({ page }, testInfo) => {

    const login = new LogInPage(page);
    console.log(`TC05_Email: ${user.email}\nTC05_Password: ${user.password}`);

    await test.step('Step 1. Go To LogIn page', async () => {
        await page.goto(config.baseUrl + config.urls.loginUrl);
    });
    await test.step('Step 2. Verify user can log in with correct credentials', async () => {
        await expect(login.emailField).toBeVisible();
        await login.loginWithCredentials(user.email, user.password);
        await expect(page).toHaveURL(config.baseUrl + config.urls.profile);
    });
})

test('TC06 Login with incorrect credentials', async ({ page }, testInfo) => {

    const login = new LogInPage(page);
    console.log(`TC06_Email: ${user.email}\nTC06_Password: ${user.password + "z"}`);

    await test.step('Step 1. Go To LogIn page', async () => {
        await page.goto(config.baseUrl + config.urls.loginUrl);
    });
    await test.step('Step 2. Verify user can not log in with incorrect credentials', async () => {
        await expect(login.emailField).toBeVisible();
        await login.loginWithCredentials(user.email, user.password + "z");
        const errorMessage = await login.error.textContent();
        console.log(`TC06_Error: ${errorMessage.trim()}`);
        expect(errorMessage.trim()).toBe(config.errorMessages.incorrectPassword);
        await expect(page).toHaveURL(config.baseUrl + config.urls.loginUrl);
    });
})
test('TC07 Login with empty password', async ({ page }, testInfo) => {

    const login = new LogInPage(page);
    console.log(`TC07_Email: ${user.email}\nTC07_Password: ${""}`);

    await test.step('Step 1. Go To LogIn page', async () => {
        await page.goto(config.baseUrl + config.urls.loginUrl);
    });
    await test.step('Step 2. Verify user can not log in without entering password', async () => {
        await expect(login.emailField).toBeVisible();
        await login.loginWithCredentials(user.email, "");
        const errorMessage = await login.error.textContent();
        console.log(`TC07_Error: ${errorMessage.trim()}`);
        expect(errorMessage.trim()).toBe(config.errorMessages.missingPassword);
        await expect(page).toHaveURL(config.baseUrl + config.urls.loginUrl);
    });
})
test('TC08 Login with too short password', async ({ page }, testInfo) => {

    const login = new LogInPage(page);
    const shortPassword = '1';
    console.log(`TC08_Email: ${user.email}\nTC08_Short password: ${shortPassword}`);

    await test.step('Step 1. Go To Sign Up page', async () => {
        await page.goto(config.baseUrl + config.urls.loginUrl);
    });
    await test.step('Step 2. Verify user can not log in with too short password', async () => {
        await expect(login.emailField).toBeVisible();
        await login.loginWithCredentials(user.email, shortPassword);
        const errorMessage = await login.error.textContent();
        console.log(`TC08_Error: ${errorMessage.trim()}`);
        expect(errorMessage.trim()).toBe(config.errorMessages.passwordTooShortLogin);
        await expect(page).toHaveURL(config.baseUrl + config.urls.loginUrl);
    });
})