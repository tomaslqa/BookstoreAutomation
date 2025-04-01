import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LogInPage } from '../pages/LogInPage';
import { RegisterPage } from '../pages/RegisterPage';
import { blockAds } from '../utils/adBlocker';


const config = require('../test-data/config.json');

test.beforeEach(async ({ page }) => {
  await blockAds(page);
});


test('TC01 Create account for user', async ({ page }, testInfo) => {

  const home = new HomePage(page);
  const login = new LogInPage(page);
  const register = new RegisterPage(page);
  const utils = require('../utils/utils');
  const randomName = utils.generateRandomName();
  const randomEmail = utils.generateRandomEmail();
  const randomPassword = utils.generateRandomPassword();
  console.log(`TC01_Generated name: ${randomName}\nTC01_Generated email: ${randomEmail}\nTC01_Generated password: ${randomPassword}`);

  await test.step('Step 1. Go To LogIn page', async () => {
    await page.goto(config.baseUrl);
  });
  await test.step('Step 2. Verify Sign Up button is visible', async () => {
    await home.clickLoginBtn();
    await expect(login.signUpBtn).toBeVisible();
  });
  await test.step('Step 3. Verify after clicking Sign Up button user is taken to SignUp form', async () => {
    await login.clickSignUpBtn()
    await expect(page).toHaveURL(config.baseUrl + config.urls.registrationUrl);
    console.log(`TC01_Current URL: ${page.url()}`);
  });
  await test.step('Step 4. Complete SignUp form, verify registration is sucessfull', async () => {
    await expect(register.username).toBeVisible();
    await register.completeRegistrationForm(randomName, randomEmail, randomPassword, randomPassword);
    await expect(page).toHaveURL(config.baseUrl + config.urls.loginUrl);
  });
})

test('TC02 Verify account can not be created with invalid email', async ({ page }, testInfo) => {

  const register = new RegisterPage(page);
  const utils = require('../utils/utils');
  const randomName = utils.generateRandomName();
  const invalidEmail = 'dvaa_2.com';
  const randomPassword = utils.generateRandomPassword();
  console.log(`TC02_Generated name: ${randomName}\nTC02_Invalid email: ${invalidEmail}\nTC02_Generated password: ${randomPassword}`);

  await test.step('Step 1. Go To Sign Up page', async () => {
    await page.goto(config.baseUrl + config.urls.registrationUrl);
  });
  await test.step('Step 2. Complete SignUp form with invalid email', async () => {
    await expect(register.username).toBeVisible();
    await register.completeRegistrationForm(randomName, invalidEmail, randomPassword, randomPassword);
  });
  await test.step('Step 3. Verify error is displayed on Sign up page', async () => {
    await expect(register.error).toBeVisible();
    const errorMessage = await register.error.textContent();
    console.log(`TC02_Error: ${errorMessage.trim()}`);
    expect(errorMessage.trim()).toBe(config.errorMessages.invalidEmail);
    await expect(page).toHaveURL(config.baseUrl + config.urls.registrationUrl);
  });
})
test('TC03 Verify account can not be created without confirming password', async ({ page }, testInfo) => {

  const register = new RegisterPage(page);
  const utils = require('../utils/utils');
  const randomName = utils.generateRandomName();
  const randomEmail = utils.generateRandomEmail();
  const randomPassword = utils.generateRandomPassword();
  const confirmPassword = randomPassword + '22';
  console.log(`TC03_Generated name: ${randomName}\nTC03_Generated email: ${randomEmail}\nTC03_Generated password: ${randomPassword}\nTC03_Confirm password: ${confirmPassword}`);

  await test.step('Step 1. Go To Sign Up page', async () => {
    await page.goto(config.baseUrl + config.urls.registrationUrl);
  });
  await test.step('Step 2. Complete SignUp form with different password in confirm password field', async () => {
    await expect(register.username).toBeVisible();
    await register.completeRegistrationForm(randomName, randomEmail, randomPassword, confirmPassword);
  });
  await test.step('Step 3. Verify error is displayed on Sign up page', async () => {
    await expect(register.error).toBeVisible();
    const errorMessage = await register.error.textContent();
    console.log(`TC03_Error: ${errorMessage.trim()}`);
    expect(errorMessage.trim()).toBe(config.errorMessages.passwordMismatch);
    await expect(page).toHaveURL(config.baseUrl + config.urls.registrationUrl);
  });
})
test('TC04 Verify account can not be created with too short password', async ({ page }, testInfo) => {

  const register = new RegisterPage(page);
  const utils = require('../utils/utils');
  const randomName = utils.generateRandomName();
  const randomEmail = utils.generateRandomEmail();
  const shortPassword = '1';
  console.log(`TC04_Generated name: ${randomName}\nTC04_Generated email: ${randomEmail}\nTC04_Short password: ${shortPassword}`);

  await test.step('Step 1. Go To Sign Up page', async () => {
    await page.goto(config.baseUrl + config.urls.registrationUrl);
  });
  await test.step('Step 2. Complete SignUp form with too short password', async () => {
    await expect(register.username).toBeVisible();
    await register.completeRegistrationForm(randomName, randomEmail, shortPassword, shortPassword);
  });
  await test.step('Step 3. Verify error is displayed on Sign up page', async () => {
    await expect(register.error).toBeVisible();
    const errorMessage = await register.error.textContent();
    console.log(`TC04_Error: ${errorMessage.trim()}`);
    expect(errorMessage.trim()).toBe(config.errorMessages.passwordTooShort);
    await expect(page).toHaveURL(config.baseUrl + config.urls.registrationUrl);
  });
})