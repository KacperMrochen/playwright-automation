import { expect, type Locator, type Page } from "@playwright/test";

export class TrelloBoardPage {
  readonly page: Page;
  readonly boardTitle: Locator;

  constructor(page: Page) {
    this.page = page;
    this.boardTitle = page.locator("h1", { hasText: "Board" });
  }

  async isReady() {
    await expect(this.boardTitle).toBeVisible();
  }
}
