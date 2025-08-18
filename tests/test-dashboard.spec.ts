import { test } from "@playwright/test";
import { TrelloDashboardPage } from "../pages/DashboardPage";
import { TrelloBoardPage } from "../pages/BoardPage";

test("Test user dashboard", async ({ page }) => {
  await page.goto("/u/mrochu/boards");

  const dashboardPage = new TrelloDashboardPage(page);

  await dashboardPage.isReady();
});

test("Test create new board", async ({ page }) => {
  await page.goto("/u/mrochu/boards");

  const dashboardPage = new TrelloDashboardPage(page);

  await dashboardPage.createNewBoard();

  const boardPage = new TrelloBoardPage(page);

  await boardPage.isReady();
});
