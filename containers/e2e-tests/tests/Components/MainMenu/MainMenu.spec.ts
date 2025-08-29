import type { Page } from "@playwright/test";
import { test, expect } from "@playwright/test";
import { MainMenuPage } from "../../../pages/Components/MainMenu/MainMenuPage";
import { mainmenu_data } from "../../../utils/data/mainMenuData";

test.describe("Components - LeftNav - Example", () => {
	let page: Page;
	let mainMenuPage: MainMenuPage;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		mainMenuPage = new MainMenuPage(page);
	});

	test.beforeEach(async () => {
		await mainMenuPage.visit(mainMenuPage.page_path);
		await page.getByRole("navigation").waitFor({ state: "attached" });
	});

	test("should display all available top level items", async () => {
		expect(await mainMenuPage.allLeftItems.count()).toBe(10);
	});

	test("should hide the main menu when hidden display is clicked", async () => {
		await mainMenuPage.selectTypeOfNavDisplay(mainmenu_data.hidden);
		const count = await mainMenuPage.allLeftItems.count();
		expect(count).toBe(0);
	});

	test("should show the parent title in the flyout menu", async () => {
		await mainMenuPage.selectTypeOfNavDisplay(mainmenu_data.full);
		await mainMenuPage.allLeftItems.filter({ hasText: "Sitemap" }).click();
		await expect(page.getByTestId("mos:MainMenu:flyoutTitle")).toHaveText("Sitemap");
	});

	test("should show flyout with child menu items", async () => {
		await mainMenuPage.selectTypeOfNavDisplay(mainmenu_data.full);
		await mainMenuPage.allLeftItems.filter({ hasText: "Sitemap" }).click();
		const flyout = page.getByTestId("mos:MainMenu:flyout");
		await expect(flyout).toBeVisible();
		await expect(flyout.getByRole("listitem")).toHaveCount(4);
	});

	test("should go deeper than a single level of children and go back", async () => {
		await mainMenuPage.selectTypeOfNavDisplay(mainmenu_data.full);
		await mainMenuPage.allLeftItems.filter({ hasText: "Sitemap" }).click();
		const flyout = page.getByTestId("mos:MainMenu:flyout");
		const primary = flyout.getByRole("button", { name: "Primary" });
		expect(primary).toBeVisible();
		await primary.click();
		await expect(page.getByTestId("mos:MainMenu:flyoutTitle")).toHaveText("Primary");
		const back = flyout.getByRole("button", { name: "Back" });
		expect(back).toBeVisible();
		await back.click();
		await expect(page.getByTestId("mos:MainMenu:flyoutTitle")).toHaveText("Sitemap");
	});

	test("should close the flyout", async () => {
		await mainMenuPage.selectTypeOfNavDisplay(mainmenu_data.full);
		await mainMenuPage.allLeftItems.filter({ hasText: "Sitemap" }).click();
		const flyout = page.getByTestId("mos:MainMenu:flyout");
		const close = flyout.getByRole("button", { name: "Close" });
		await expect(close).toBeVisible();
	});
});
