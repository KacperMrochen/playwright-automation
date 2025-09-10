import { expect, type Locator, type Page } from "@playwright/test";

export class TrelloSignupPage {
  readonly page: Page;
  readonly heading: Locator;
  readonly emailInput: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.locator("h1", { hasText: "Sign up to continue" });
    this.emailInput = page.getByPlaceholder("Enter your email");
    this.submitButton = page.getByRole("button", { name: "Sign up" });
  }

  async isReady() {
    await expect(this.heading).toBeVisible();
  }

  async checkEmailInputValue() {
    await expect(this.emailInput).toHaveValue("example@domain.com");
  }

  async signupToTrello(login: string) {
    await this.emailInput.fill(login);
    await this.submitButton.click();
  }
}
