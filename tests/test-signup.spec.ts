import { expect } from "@playwright/test";
import { test } from "../fixtures";

test.describe("Testing signup functionality", () => {
  test("Test trello registered credentials signup page", async ({
    page,
    loginPage,
    signupPage,
  }) => {
    await page.goto("/signup");

    await signupPage.isReady();
    await signupPage.signupToTrello();

    test.skip("Signup bot protection", () => {});

    await loginPage.isReady();
    await loginPage.checkAccountRegisteredMessage();
  });
});
