import type { Page } from "@playwright/test";
import { test, expect } from "@playwright/test";
import { CardRecentActivityPage } from "../../../pages/Components/Card/CardRecentActivityPage";
import theme from "@simpleview/sv-mosaic/theme";

test.describe("Components - Card - Recent Activity", () => {
	let page: Page;
	let cardPage: CardRecentActivityPage;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		cardPage = new CardRecentActivityPage(page);
		await cardPage.visit(cardPage.page_path);
	});

	test.skip("Validate activity description has grey4 as color.", async () => {
		for (let i = 3; i < await cardPage.activityLocator.count(); i++) {
			expect(await cardPage.getColorFromElement(cardPage.activityLocator.nth(i))).toBe(theme.newColors.grey4["100"]);
		}
	});

	test.skip("Validate Activity date has grey3 as color.", async () => {
		for (let i = 3; i < await cardPage.page.locator("span").count();i++) {
			expect(await cardPage.getColorFromElement(cardPage.page.locator("span").nth(i))).toBe(theme.newColors.grey3["100"]);
		}
	});
});
