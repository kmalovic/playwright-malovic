import { test, expect } from '@playwright/test';
import { HomePage } from '../POMs/homePage';
import { ArticlePage } from '../POMs/articlePage';

let homePage: HomePage;
let articlePage: ArticlePage;

test('Clicking an article leads to the article page', async ({ page }) => {
  homePage = new HomePage(page);

  await homePage.goToHomepage();
  await homePage.acceptCookies();
  await homePage.openFirstArticle();

  await expect(page).toHaveURL(process.env.ARTICLE_URL!);
});

test('Article displays its category', async ({ page }) => {
  homePage = new HomePage(page);
  articlePage = new ArticlePage(page);

  await homePage.goToHomepage();
  await homePage.acceptCookies();
  await homePage.openFirstArticle();

  await expect(articlePage.sectionTitle).toBeVisible();
});
