import { expect } from "@playwright/test";
import { test } from "../fixtures";

test.use({ storageState: { cookies: [], origins: [] } });

test("Test trello home login link", async ({ page, homePage, loginPage }) => {
  await page.goto("/");

  await homePage.isReady();
  await homePage.clickLoginLink();

  await loginPage.isReady();
});

test.use({ storageState: { cookies: [], origins: [] } });

test("Test trello home sign-up link", async ({
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
