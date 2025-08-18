import { expect, type Locator, type Page } from "@playwright/test";

export class TrelloDashboardPage {
  readonly page: Page;
  readonly homeDashboard: Locator;
  readonly createNewBoardButton: Locator;
  readonly boardTitleInput: Locator;
  readonly submitNewBoard: Locator;

  constructor(page: Page) {
    this.page = page;
    this.homeDashboard = page.locator("h3", { hasText: "YOUR WORKSPACES" });
    this.createNewBoardButton = page.locator("button", {
      hasText: "Create new board",
    });
    this.boardTitleInput = page.locator(
      "input[data-testid='create-board-title-input']"
    );
    this.submitNewBoard = page.locator(
      "button[data-testid='create-board-submit-button']"
    );
  }

  async isReady() {
    await expect(this.homeDashboard).toBeVisible();
  }

  async createNewBoard() {
    await this.createNewBoardButton.click();
    await this.boardTitleInput.fill("Board");
    await this.submitNewBoard.click();
  }
}
