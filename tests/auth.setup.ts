import { test as setup, expect } from "@playwright/test";
import * as fs from "fs";
import path from "path";
import { TrelloLoginPage } from "../pages/LoginPage";

const authFile = path.join(__dirname, "../.auth/user.json");

const { LOGIN, PASSWORD } = process.env;
// const { TRELLO_LOGIN_KEY, TRELLO_LOGIN_TOKEN } = process.env;

setup("Authenticate user", async ({ page }) => {
  await page.goto("/login");

  const loginPage = new TrelloLoginPage(page);

  await loginPage.loginToTrello(LOGIN || "", PASSWORD || "");

  console.log(page.context().storageState());
  await page.waitForURL("/");
  await page.context().storageState({ path: authFile });
});
