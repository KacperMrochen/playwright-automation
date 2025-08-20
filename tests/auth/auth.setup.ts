import { test as setup } from "../../fixtures";
import path from "path";
import * as fs from "fs";

const localAuthFile = path.join(__dirname, "../../.auth/user.json");

const { LOGIN, PASSWORD } = process.env;

setup("Authenticate user", async ({ page, loginPage, dashboardPage }) => {
  await page.goto("/login");

  await loginPage.loginToTrello(LOGIN || "", PASSWORD || "");

  console.log(process.env.TRELLO_PRODUCTION_AUTH);
  fs.readFile("user.json", "utf8", function (err, data) {
    const obj = JSON.parse(data);
    console.log("The data from the file is: " + obj);
  });

  await page.waitForURL("/");
  await page.waitForURL("/u/mrochu/boards");
  await dashboardPage.isReady();

  await page.context().storageState({
    path: !!process.env.CI ? process.env.TRELLO_PRODUCTION_AUTH : localAuthFile,
  });
});
