import { test, expect } from '@playwright/test';
import { HomePage } from '../POMs/homePage';
import { ArticlePage } from '../POMs/articlePage';

let homePage: HomePage;
let articlePage: ArticlePage;

test('Homepage loads successfully', async ({ page }) => {
  homePage = new HomePage(page);

  await homePage.goToHomepage();
  await homePage.acceptCookies();

  await expect(page).toHaveURL(process.env.BASE_URL!);
  await expect(homePage.logo).toBeVisible();
});

test('Article page displays a visible title and content', async ({ page }) => {
  homePage = new HomePage(page);
  articlePage = new ArticlePage(page);

  await homePage.goToHomepage();
  await homePage.acceptCookies();
  await homePage.openFirstArticle();

  await expect(articlePage.articleTitle).toBeVisible();
  await expect(articlePage.articleMeta).toBeVisible();
});

test('Navigation is visible', async ({ page }) => {
  homePage = new HomePage(page);

  await homePage.goToHomepage();
  await homePage.acceptCookies();

  await expect(homePage.navigationMenu).toBeVisible();
});
