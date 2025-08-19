import { test as setup } from "../../fixtures";
import path from "path";

const authFile = path.join(__dirname, "../../.auth/user.json");

const { LOGIN, PASSWORD } = process.env;

setup("Authenticate user", async ({ page, loginPage, dashboardPage }) => {
  await page.goto("/login");

  await loginPage.loginToTrello(LOGIN || "", PASSWORD || "");

  console.log(LOGIN || "login", PASSWORD || "password");

  await page.waitForURL("/");
  await page.waitForURL("/u/mrochu/boards");
  await dashboardPage.isReady();

  await page.context().storageState({ path: authFile });
});
