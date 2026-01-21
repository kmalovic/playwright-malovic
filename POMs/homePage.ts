import { Page, Locator, expect } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly firstArticle: Locator;
  readonly navigationMenu: Locator;
  readonly prihvatiButton: Locator;
  readonly logo: Locator;

  constructor(page: Page) {
    this.page = page;

    this.firstArticle = page.locator('article').first();

    this.navigationMenu = page.getByRole('navigation');

    this.prihvatiButton = page.getByRole('button', { name: 'Prihvati i zatvori:' });

    this.logo = page.locator('header img').first();
  }

  async goToHomepage() {
    await this.page.goto(process.env.BASE_URL!);
  }

  async acceptCookies() {
    if (await this.prihvatiButton.isVisible()) {
      await this.prihvatiButton.click();
    }
  }

  async openFirstArticle() {
    await this.firstArticle.click();
  }

}
