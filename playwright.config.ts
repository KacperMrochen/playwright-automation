import { devices, defineConfig } from "@playwright/test";
// import { defineConfig } from "testable-playwright-test";
import dotenv from "dotenv";
import path from "path";

if (process.env.GITHUB_ACTIONS !== "true") {
  dotenv.config({ path: path.resolve(__dirname, ".env") });
}

export default defineConfig({
  testDir: "./tests", // Tests dir
  fullyParallel: true, // Run tests in files in parallel
  forbidOnly: !!process.env.CI, // Fail the build on CI if you accidentally left test.only in the source code.
  retries: 5, // Retry times if test fails
  workers: process.env.CI ? 1 : undefined, // Opt out of parallel tests on CI.
  reporter: "html", // Reporter to use. See https://playwright.dev/docs/test-reporters
  // Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions.
  use: {
    baseURL: process.env.URL, //Base URL to use in actions (switch between production and testing from .env)
    headless: process.env.HEADLESS !== "false", // Headless run mode (false local / true ci)
    trace: "on-first-retry", // Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer
  },
  // Configure projects for major browsers
  projects: [
    {
      name: "setup",
      testMatch: /.*\.setup\.ts/,
    },
    {
      name: "firefox",
      use: {
        ...devices["Desktop Firefox"],
        storageState: !!process.env.CI ? "user.json" : ".auth/user.json",
      },
      dependencies: ["setup"],
    },
  ],
});
