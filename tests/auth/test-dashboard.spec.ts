import { test } from "../../fixtures";

test("Should display all user dashboards", async ({ page, dashboardPage }) => {
  await page.goto("/u/mrochu/boards");

  await dashboardPage.isReady();
});

test("Should create new board", async ({ page, dashboardPage, boardPage }) => {
  await page.goto("/u/mrochu/boards");

  await dashboardPage.isReady();
  await dashboardPage.createNewBoard();

  await boardPage.isReady();
});
