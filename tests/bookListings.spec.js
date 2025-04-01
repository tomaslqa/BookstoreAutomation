import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { blockAds } from '../utils/adBlocker';

const config = require('../test-data/config.json');
const book = require('../test-data/books.json');

test.beforeEach(async ({ page }) => {
  await blockAds(page);
});


test('TC09 Verify book listings can be sorted ascending', async ({ page }, testInfo) => {

  const home = new HomePage(page);

  await test.step('Step 1. Go To Home page', async () => {
    await page.goto(config.baseUrl);
  });
  await test.step('Step 2. Verify Sorting droplist is visible', async () => {
    await expect(home.sortPrice).toBeVisible();
  });
  await test.step('Step 3. Select Sort By Asc option and verify titles are sorted ascending', async () => {
    await home.sortByAsc();
    const titles = await page.locator('a').allInnerTexts();
    console.log('TC09_Book Titles:', titles);
    const sortedTitles = [...titles].sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
    expect(titles).toEqual(sortedTitles);

  });
})
test('TC10 Verify book can be searched by full title', async ({ page }, testInfo) => {

  const home = new HomePage(page);

  await test.step('Step 1. Go To Home page', async () => {
    await page.goto(config.baseUrl);
  });
  await test.step('Step 2. Search for a book title and verify that results match', async () => {
    await expect(home.searchField).toBeVisible();
    await home.searchForBook(book[0].title);
    console.log('TC10_Searched Title:', book[0].title);
    const title = await home.resultsTitle.innerText();
    console.log('TC10_Returned Title:', title);
    expect(title).toBe(book[0].title);
  });
})

test('TC11 Verify book can be searched by part of the title', async ({ page }, testInfo) => {

  const home = new HomePage(page);

  await test.step('Step 1. Go To Home page', async () => {
    await page.goto(config.baseUrl);
  });
  await test.step('Step 2. Search for a book by only part of the title and verify that results match', async () => {
    await expect(home.searchField).toBeVisible();
    await home.searchForBook(book[0].title.split(" ")[0]);
    console.log('TC11_Searched phrase:', book[0].title.split(" ")[0]);
    const title = await home.resultsTitle.innerText();
    console.log('TC11_Returned Title:', title);
    expect(title).toBe(book[0].title);
  });
})
test('TC12 Verify searching book by nonexistent title returns no results', async ({ page }, testInfo) => {

  const home = new HomePage(page);

  await test.step('Step 1. Go To Home page', async () => {
    await page.goto(config.baseUrl);
  });
  await test.step('Step 2. Search for a book by only part of the title and verify that results match', async () => {
    await expect(home.searchField).toBeVisible();
    await home.searchForBook(book[3].title);
    console.log('TC12_Searched title:', book[3].title);
    const error = await home.results.innerText();
    console.log('TC12_Returned error:', error);
    expect(error).toBe(config.errorMessages.booksNoResults);
  });
})
