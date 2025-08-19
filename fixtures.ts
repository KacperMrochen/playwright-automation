import { test as base } from "@playwright/test";
import { TrelloLoginPage } from "./pages/LoginPage";
import { TrelloSignupPage } from "./pages/SignupPage";
import { TrelloHomePage } from "./pages/HomePage";
import { TrelloDashboardPage } from "./pages/DashboardPage";
import { TrelloBoardPage } from "./pages/BoardPage";

export type TestOptions = {
  loginPage: TrelloLoginPage;
  signupPage: TrelloSignupPage;
  homePage: TrelloHomePage;
  dashboardPage: TrelloDashboardPage;
  boardPage: TrelloBoardPage;
};

export const test = base.extend<TestOptions>({
  loginPage: async ({ page }, use) => {
    const loginpage = new TrelloLoginPage(page);
    await use(loginpage);
  },
  signupPage: async ({ page }, use) => {
    const signuppage = new TrelloSignupPage(page);
    await use(signuppage);
  },
  homePage: async ({ page }, use) => {
    const homepage = new TrelloHomePage(page);
    await use(homepage);
  },
  dashboardPage: async ({ page }, use) => {
    const dashboardpage = new TrelloDashboardPage(page);
    await use(dashboardpage);
  },
  boardPage: async ({ page }, use) => {
    const boardpage = new TrelloBoardPage(page);
    await use(boardpage);
  },
});

export { expect } from "@playwright/test";
