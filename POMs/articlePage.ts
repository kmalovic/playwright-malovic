import { Page, Locator } from '@playwright/test';

export class ArticlePage {
  readonly page: Page;
  readonly sectionTitle: Locator;
  readonly articleTitle: Locator;
  readonly articleMeta: Locator;

  constructor(page: Page) {
    this.page = page;

    this.sectionTitle = page.getByText(process.env.ARTICLE_SECTION!);

    this.articleTitle = page.getByRole('heading').first();

    this.articleMeta = page.getByText(/Piše/);
  }
}
