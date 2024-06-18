import { test, expect, Page } from "@playwright/test";
import { CardPage } from "../../../pages/Components/Card/CardRecentActivityPage";
import theme from "../../../../src/theme";

test.describe("Components - Card - Recent Activity", () => {
	let page: Page;
	let cardPage: CardPage;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		cardPage = new CardPage(page);
		await cardPage.visit(cardPage.page_path);
	});

	test("Validate activity description has grey4 as color.", async () => {
		for (let i = 3; i < await cardPage.activityLocator.count(); i++) {
			expect(await cardPage.getColorFromElement(cardPage.activityLocator.nth(i))).toBe(theme.newColors.grey4["100"]);
		}
	});

	test("Validate Activity date has grey3 as color.", async () => {
		for (let i = 3; i < await cardPage.page.locator("span").count();i++) {
			expect(await cardPage.getColorFromElement(cardPage.page.locator("span").nth(i))).toBe(theme.newColors.grey3["100"]);
		}
	});

	test("Validate Title Bar has grey2 as background color.", async () => {
		expect(await cardPage.getBackgroundColorFromElement(cardPage.cardTitleBar)).toBe(theme.newColors.grey2["100"]);
	});

	test("Validate Card Wrapper has grey2 in border.", async () => {
		expect(await cardPage.getSpecificBorderFromElement(cardPage.cardWrapper)).toContain(theme.newColors.grey2["100"]);
	});
});
