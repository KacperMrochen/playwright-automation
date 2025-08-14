import { expect, type Locator, type Page } from "@playwright/test";

export class TrelloSignupPage {
  readonly page: Page;
  readonly formHeading: Locator;
  readonly emailInput: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.formHeading = page.locator("h1", { hasText: "Sign up to continue" });
    this.emailInput = page.getByPlaceholder("Enter your email");
    this.submitButton = page.getByRole("button", { name: "Sign up" });
  }

  async checkSignupPageHeader() {
    await expect(this.formHeading).toBeVisible();
  }

  async signupToTrello() {
    await expect(this.emailInput).toHaveValue("example@domain.com");
    await this.submitButton.click();
  }
}
