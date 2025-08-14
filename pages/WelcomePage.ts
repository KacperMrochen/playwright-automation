import { expect, type Locator, type Page } from "@playwright/test";

export class TrelloWelcomePage {
  readonly page: Page;
  readonly heading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.locator("h1", {
      hasText: "What brings you here today?",
    });
  }

  async checkPageHeading() {
    expect(this.heading).toBeVisible();
  }
}
