import { test as base, expect } from "@playwright/test";
import withVisualTestPluginFixture from "@buddy-works/visual-tests-playwright";

const test = withVisualTestPluginFixture(base);

test.describe("navigation", () => {
  test("home page renders the hero and its call to action", async ({ page, visualTestPlugin }) => {
    await page.goto("/");

    await expect(
      page.getByRole("heading", { name: "Fewer pieces. Chosen carefully." })
    ).toBeVisible();
    await expect(page.getByTestId("hero-panel")).toBeVisible();
    await expect(page.getByTestId("hero-cta")).toBeVisible();

    await visualTestPlugin.takeSnap(page, "navigation/home-hero");
  });

  test("hero call to action leads to the collection", async ({ page, visualTestPlugin }) => {
    await page.goto("/");
    await page.getByTestId("hero-cta").click();

    await expect(page).toHaveURL("/collection/");
    await expect(page.getByRole("heading", { name: "The Collection" })).toBeVisible();

    await visualTestPlugin.takeSnap(page, "navigation/hero-cta-to-collection");
  });

  test("main navigation reaches every page", async ({ page, visualTestPlugin }) => {
    await page.goto("/");

    await page.getByRole("navigation", { name: "Main" }).getByRole("link", { name: "Collection" }).click();
    await expect(page).toHaveURL("/collection/");
    await visualTestPlugin.takeSnap(page, "navigation/main-nav-collection");

    await page.getByRole("navigation", { name: "Main" }).getByRole("link", { name: "Contact" }).click();
    await expect(page).toHaveURL("/contact/");
    await expect(page.getByRole("heading", { name: "Contact" })).toBeVisible();
    await visualTestPlugin.takeSnap(page, "navigation/main-nav-contact");

    await page.getByRole("navigation", { name: "Main" }).getByRole("link", { name: "Home" }).click();
    await expect(page).toHaveURL("/");
    await visualTestPlugin.takeSnap(page, "navigation/main-nav-home");
  });

  test("collection page lists four products", async ({ page, visualTestPlugin }) => {
    await page.goto("/collection");

    const cards = page.getByTestId("product-card");
    await expect(cards).toHaveCount(4);
    await expect(cards.first()).toBeVisible();
    await expect(page.getByRole("heading", { name: "Merino Crew" })).toBeVisible();
    await expect(
      page.getByRole("button", { name: "Add to bag" }).first()
    ).toBeEnabled();

    await visualTestPlugin.takeSnap(page, "navigation/collection-product-list");
  });

  test("contact form exposes its fields", async ({ page, visualTestPlugin }) => {
    await page.goto("/contact");

    await page.getByLabel("Name").fill("Ada Lovelace");
    await page.getByLabel("Email").fill("ada@example.com");
    await page.getByLabel("Message").fill("Do you restock the linen overshirt?");

    await expect(page.getByLabel("Name")).toHaveValue("Ada Lovelace");
    await expect(page.getByTestId("contact-submit")).toBeEnabled();

    await visualTestPlugin.takeSnap(page, "navigation/contact-form-filled");
  });
});
