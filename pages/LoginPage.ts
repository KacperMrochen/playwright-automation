import { expect, type Locator, type Page } from "@playwright/test";

export class TrelloLoginPage {
  readonly page: Page;
  readonly formHeading: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly continueButton: Locator;
  readonly submitButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.formHeading = page.locator("h1", { hasText: "Log in to continue" });
    this.emailInput = page.getByPlaceholder("Enter your email");
    this.passwordInput = page.getByPlaceholder("Enter password");
    this.continueButton = page.getByRole("button", { name: "Continue" });
    this.submitButton = page.getByRole("button", { name: "Log in" });
    this.errorMessage = page.getByText(
      "to log in. Your current password has appeared in an external data breach and your Atlassian account is at risk."
    );
  }

  async checkLoginPageHeader() {
    await expect(this.formHeading).toBeVisible();
  }

  async loginToTrello() {
    await this.emailInput.fill("example@domain.com");
    await this.continueButton.click();
    await this.passwordInput.fill("password");
    await this.submitButton.click();
  }

  async checkLoginError() {
    await expect(this.errorMessage).toBeVisible();
  }
}
