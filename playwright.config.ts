import { devices, defineConfig } from "@playwright/test";
// import { defineConfig } from "testable-playwright-test";
import dotenv from "dotenv";
import path from "path";

if (process.env.GITHUB_ACTIONS !== "true") {
  dotenv.config({ path: path.resolve(__dirname, ".env") });
}

const userAgents = [
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0",
  "Mozilla/5.0 (X11; CrOS x86_64 14541.0.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.3.1 Safari/605.1.15",
];

function useRandomUserAgent(list: string[]): string {
  return list[Math.floor(Math.random() * list.length)];
}

export default defineConfig(
  {
    testDir: "./tests", // Tests dir
    fullyParallel: true, // Run tests in files in parallel
    forbidOnly: !!process.env.CI, // Fail the build on CI if you accidentally left test.only in the source code.
    retries: 2, // Retry
    workers: process.env.CI ? 1 : undefined, // Opt out of parallel tests on CI.
    reporter: "html", // Reporter to use. See https://playwright.dev/docs/test-reporters
    // Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions.
    use: {
      locale: "en-GB",
      userAgent: useRandomUserAgent(userAgents),
      baseURL: process.env.URL, //Base URL to use in actions (switch between production and testing from .env)
      headless: process.env.HEADLESS !== "false", // Headless run mode (false local / true ci)
      trace: "on-first-retry", // Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer
    },
    globalSetup: require.resolve("./global-setup"),
    // Configure projects for major browsers
    projects: [
      // {
      //   name: "chromium",
      //   use: { ...devices["Desktop Chrome"] },
      // },
      {
        name: "firefox",
        use: { ...devices["Desktop Firefox"] },
      },
      // {
      //   name: "webkit",
      //   use: { ...devices["Desktop Safari"] },
      // },
      /* Test against mobile viewports. */
      // {
      //   name: "Mobile Chrome",
      //   use: { ...devices["Pixel 5"] },
      // },
      // {
      //   name: "Mobile Safari",
      //   use: { ...devices["iPhone 12"] },
      // },
      /* Test against branded browsers. */
      // {
      //   name: 'Microsoft Edge',
      //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
      // },
      // {
      //   name: "Google Chrome",
      //   use: { ...devices["Desktop Chrome"], channel: "chrome" },
      // },
    ],

    // Run your local dev server before starting the tests
    // webServer: {
    //   command: 'npm run start',
    //   url: 'http://localhost:3000',
    //   reuseExistingServer: !process.env.CI,
    // },
  }

  // Testable config https://a.testable.io/remote-configurator

  // {
  //   serverUrl: "wss://playwright.testable.io/",
  //   key: process.env.TESTABLE_API_KEY,
  //   playwrightVersion: "1.48.0",
  //   testCaseName: "Test Case",
  //   region: "aws-eu-central-1",
  //   screenshot: "afterFailed",
  //   tags: `test-${Date.now()}`,
  // }
);
