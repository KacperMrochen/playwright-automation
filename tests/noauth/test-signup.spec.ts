import { expect } from "@playwright/test";
import { test } from "../../fixtures";

test.describe("Testing signup functionality", () => {
  test.use({ storageState: { cookies: [], origins: [] } });
  test("Test trello registered credentials signup page", async ({
    page,
    loginPage,
    signupPage,
  }) => {
    await page.goto("/signup");

    await signupPage.isReady();
    await signupPage.signupToTrello();

    // Signup anti-bot protection
    test.skip();
    await loginPage.isReady();
    await loginPage.checkAccountRegisteredMessage();
  });
});
