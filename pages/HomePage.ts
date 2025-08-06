import { expect, type Locator, type Page } from "@playwright/test";

export class TrelloHomePage {
  readonly page: Page;
  readonly logInLink: Locator;
  readonly gettingStartedHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.logInLink = page.locator("a", { hasText: "Log in" });
    this.gettingStartedHeader = page.locator("h1", {
      hasText: "Capture, organize, and tackle your to-dos from anywhere.",
    });
  }

  async checkHeaderText() {
    await expect(this.gettingStartedHeader).toBeVisible();
  }

  async clickLoginLink() {
    await this.logInLink.nth(0).click();
  }
}
