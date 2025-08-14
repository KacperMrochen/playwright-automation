import { expect, type Locator, type Page } from "@playwright/test";

export class TrelloHomePage {
  readonly page: Page;
  readonly logInLink: Locator;
  readonly gettingStartedHeader: Locator;
  readonly signUpButton: Locator;
  readonly signUpEmail: Locator;

  constructor(page: Page) {
    this.page = page;
    this.logInLink = page.locator("a", { hasText: "Log in" });
    this.gettingStartedHeader = page.locator("h1", {
      hasText: "Capture, organize, and tackle your to-dos from anywhere.",
    });
    this.signUpButton = page.locator("button", {
      hasText: "Sign up - it’s free!",
    });
    this.signUpEmail = page.getByPlaceholder("Email");
  }

  async checkHeaderText() {
    await expect(this.gettingStartedHeader).toBeVisible();
  }

  async clickLoginLink() {
    await this.logInLink.nth(0).click();
  }

  async fillSignUpEmail() {
    await this.signUpEmail.nth(0).fill("example@domain.com");
  }

  async clickSignUpButton() {
    await this.signUpButton.nth(0).click();
  }
}
