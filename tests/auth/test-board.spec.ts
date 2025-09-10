import { test } from "../../fixtures";

test("Should display all user baords", async ({ page, boardPage }) => {
  await page.goto("/b/CxRAL7zO/board");
  await boardPage.isReady();
});

test("Should add new list", async ({ page, boardPage }) => {
  await page.goto("/b/CxRAL7zO/board");
  await boardPage.isReady();
});
