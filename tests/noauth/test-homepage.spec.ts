import { expect } from "@playwright/test";
import { test } from "../../fixtures";

test.describe("Testing homepage", () => {
  test.use({ storageState: { cookies: [], origins: [] } });
  test("Should open trello home log-in page", async ({
    page,
    homePage,
    loginPage,
  }) => {
    await page.goto("/");

    await homePage.isReady();
    await homePage.clickLoginLink();

    await loginPage.isReady();
  });

  test("Should open Trello home sign-up page", async ({
    page,
    homePage,
    signupPage,
  }) => {
    await page.goto("/");

    await homePage.fillSignUpEmail();
    await homePage.clickSignUpButton();

    await signupPage.isReady();
    await signupPage.checkEmailInputValue();
  });
});
