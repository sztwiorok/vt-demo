import { test, expect } from "@playwright/test";

test.describe("navigation", () => {
  test("home page renders the hero and its call to action", async ({ page }) => {
    await page.goto("/");

    await expect(
      page.getByRole("heading", { name: "Fewer pieces. Chosen carefully." })
    ).toBeVisible();
    await expect(page.getByTestId("hero-panel")).toBeVisible();
    await expect(page.getByTestId("hero-cta")).toBeVisible();
  });

  test("hero call to action leads to the collection", async ({ page }) => {
    await page.goto("/");
    await page.getByTestId("hero-cta").click();

    await expect(page).toHaveURL("/collection/");
    await expect(page.getByRole("heading", { name: "The Collection" })).toBeVisible();
  });

  test("main navigation reaches every page", async ({ page }) => {
    await page.goto("/");

    await page.getByRole("navigation", { name: "Main" }).getByRole("link", { name: "Collection" }).click();
    await expect(page).toHaveURL("/collection/");

    await page.getByRole("navigation", { name: "Main" }).getByRole("link", { name: "Contact" }).click();
    await expect(page).toHaveURL("/contact/");
    await expect(page.getByRole("heading", { name: "Contact" })).toBeVisible();

    await page.getByRole("navigation", { name: "Main" }).getByRole("link", { name: "Home" }).click();
    await expect(page).toHaveURL("/");
  });

  test("collection page lists four products", async ({ page }) => {
    await page.goto("/collection");

    const cards = page.getByTestId("product-card");
    await expect(cards).toHaveCount(4);
    await expect(cards.first()).toBeVisible();
    await expect(page.getByRole("heading", { name: "Merino Crew" })).toBeVisible();
    await expect(
      page.getByRole("button", { name: "Add to bag" }).first()
    ).toBeEnabled();
  });

  test("contact form exposes its fields", async ({ page }) => {
    await page.goto("/contact");

    await page.getByLabel("Name").fill("Ada Lovelace");
    await page.getByLabel("Email").fill("ada@example.com");
    await page.getByLabel("Message").fill("Do you restock the linen overshirt?");

    await expect(page.getByLabel("Name")).toHaveValue("Ada Lovelace");
    await expect(page.getByTestId("contact-submit")).toBeEnabled();
  });
});
