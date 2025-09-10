import { expect, type Locator, type Page } from "@playwright/test";

export class TrelloBoardPage {
  readonly page: Page;
  readonly boardTitle: Locator;
  readonly listName: Locator;

  constructor(page: Page) {
    this.page = page;
    this.boardTitle = page.locator("h1", { hasText: "Board" });
    this.listName = page.locator("span", { hasText: "List" });
  }

  async isReady() {
    await expect(this.boardTitle).toBeVisible();
  }

  async checkListVisibility() {
    await expect(this.listName).toBeVisible();
  }
}
