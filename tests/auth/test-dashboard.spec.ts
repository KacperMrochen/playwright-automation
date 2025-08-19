import { test } from "../../fixtures";

test("Test user dashboard", async ({ page, dashboardPage }) => {
  await page.goto("/u/mrochu/boards");

  await dashboardPage.isReady();
});

test("Test create new board", async ({ page, dashboardPage, boardPage }) => {
  await page.goto("/u/mrochu/boards");

  await dashboardPage.isReady();
  await dashboardPage.createNewBoard();

  await boardPage.isReady();
});
