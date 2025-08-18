import { expect, type Locator, type Page } from "@playwright/test";

export class TrelloLoginPage {
  readonly page: Page;
  readonly heading: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly continueButton: Locator;
  readonly submitButton: Locator;
  readonly errorMessage: Locator;
  readonly accountRegisteredMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.locator("h1", { hasText: "Log in to continue" });
    this.emailInput = page.getByPlaceholder("Enter your email");
    this.passwordInput = page.getByPlaceholder("Enter password");
    this.continueButton = page.getByRole("button", { name: "Continue" });
    this.submitButton = page.getByRole("button", { name: "Log in" });
    this.errorMessage = page.getByText(
      "to log in. Your current password has appeared in an external data breach and your Atlassian account is at risk."
    );
    this.accountRegisteredMessage = page.getByText(
      "It looks like you've already got an account associated with this email. Log in instead or reset your password if you've forgotten it"
    );
  }

  async checkLoginPageHeading() {
    await expect(this.heading).toBeVisible({ timeout: 10000 });
  }

  async loginToTrello(login: string, password: string) {
    await this.emailInput.fill(login);
    await this.continueButton.click();
    await this.passwordInput.fill(password);
    await this.submitButton.click();
  }

  async checkLoginError() {
    await expect(this.errorMessage).toBeVisible();
  }

  async checkAccountRegisteredMessage() {
    await expect(this.accountRegisteredMessage).toBeVisible();
  }
}
