import { test as setup } from "../../fixtures";
import path from "path";
import * as fs from "fs";

const localAuthFile = path.join(__dirname, "../../.auth/user.json");

const { LOGIN, PASSWORD } = process.env;

setup("Authenticate user", async ({ page, loginPage, dashboardPage }) => {
  await page.goto("/login");

  await loginPage.loginToTrello(LOGIN || "", PASSWORD || "");

  await page.waitForURL("/");
  await page.waitForURL("/u/mrochu/boards");
  await dashboardPage.isReady();

  await page.context().storageState({
    path: !!process.env.CI ? "./user.json" : localAuthFile,
  });
});
