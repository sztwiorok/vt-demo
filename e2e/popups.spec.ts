import { test, expect } from "@playwright/test";

test.describe("newsletter popup (home)", () => {
  test("opens, shows its content and closes", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByTestId("newsletter-popup")).toHaveCount(0);

    await page.getByTestId("newsletter-open").click();

    const popup = page.getByTestId("newsletter-popup");
    await expect(popup).toBeVisible();
    await expect(page.getByTestId("newsletter-window")).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Ten percent off your first order" })
    ).toBeVisible();
    await expect(page.getByLabel("Email address")).toBeVisible();

    await page.getByTestId("newsletter-close").click();
    await expect(popup).toHaveCount(0);
  });

  test("accepts an email address while open", async ({ page }) => {
    await page.goto("/");
    await page.getByTestId("newsletter-open").click();

    await page.getByLabel("Email address").fill("ada@example.com");
    await expect(page.getByLabel("Email address")).toHaveValue("ada@example.com");

    await page.getByRole("button", { name: "Sign up" }).click();
    await expect(page.getByTestId("newsletter-popup")).toBeVisible();

    await page.getByTestId("newsletter-close").click();
    await expect(page.getByTestId("newsletter-popup")).toHaveCount(0);
  });
});

test.describe("size guide popup (collection)", () => {
  test("opens, shows the measurement table and closes", async ({ page }) => {
    await page.goto("/collection");

    await expect(page.getByTestId("size-guide-popup")).toHaveCount(0);

    await page.getByTestId("size-guide-open").click();

    const popup = page.getByTestId("size-guide-popup");
    await expect(popup).toBeVisible();
    await expect(page.getByTestId("size-guide-window")).toBeVisible();
    await expect(page.getByRole("heading", { name: "Size guide" })).toBeVisible();
    await expect(page.getByRole("row")).toHaveCount(6); // header + 5 sizes
    await expect(page.getByRole("cell", { name: "M", exact: true })).toBeVisible();

    await page.getByTestId("size-guide-close").click();
    await expect(popup).toHaveCount(0);
  });

  test("closes with the Escape key", async ({ page }) => {
    await page.goto("/collection");
    await page.getByTestId("size-guide-open").click();
    await expect(page.getByTestId("size-guide-popup")).toBeVisible();

    await page.keyboard.press("Escape");
    await expect(page.getByTestId("size-guide-popup")).toHaveCount(0);
  });
});
