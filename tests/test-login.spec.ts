import { test, expect } from "@playwright/test";

test("Test trello incorrect login page", async ({ page }) => {
  await test.step("Navigating to url", async () => {
    await page.goto("/home");
    await page
      .getByTestId("bignav")
      .getByRole("link", { name: "Log in" })
      .click();
    await expect(
      page.getByRole("heading", { name: "Log in to continue" })
    ).toBeVisible();

    await test.step("Fill username & password", async () => {
      await page.getByTestId("username").click();
      await page.getByTestId("username").fill("example@domain.com");
      await page.getByTestId("login-submit-idf-testid").click();
      await page.getByTestId("password").fill("password");
    });

    await test.step("Submit login", async () => {
      await page.getByTestId("login-submit-idf-testid").click();
    });

    await test.step("Check error message", async () => {
      await expect(
        page.getByText("You must change your password")
      ).toBeVisible();
    });
  });
});
