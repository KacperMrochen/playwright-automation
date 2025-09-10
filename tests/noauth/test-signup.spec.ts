import { expect } from "@playwright/test";
import { test } from "../../fixtures";
import { randomInt } from "crypto";

test.describe("Testing signup functionality", () => {
  test.use({ storageState: { cookies: [], origins: [] } });
  test("Should not register new Trello account", async ({
    page,
    loginPage,
    signupPage,
  }) => {
    await page.goto("/signup");

    await signupPage.isReady();
    await signupPage.signupToTrello("example@domain.com");

    // Signup anti-bot protection
    test.skip();
    await loginPage.isReady();
    await loginPage.checkAccountRegisteredMessage();
  });

  test("Should create new Trello account", async ({
    page,
    signupPage,
    welcomePage,
  }) => {
    page.goto("/signup");

    await signupPage.isReady();
    await signupPage.signupToTrello(`example${randomInt(10000000)}@domain.com`);

    // Signup anti-bot protection
    test.skip();
    await welcomePage.isReady();
  });
});
