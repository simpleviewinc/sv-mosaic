import { test, expect, Page } from "@playwright/test";
import { CardPage } from "../../../pages/Components/Card/CardPage";
import theme from "../../../../src/theme";

test.describe.parallel("Components - Card - Recent Activity", () => {
	let page: Page;
	let cardPage: CardPage;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		cardPage = new CardPage(page);
		await cardPage.visitPage();
	});

	test.afterAll(async ({ browser }) => {
		await browser.close();
	});

	test("Validate activity description has grey4 as color.", async () => {
		const expectColor = theme.newColors.grey4["100"];
		for (let i = 2; i < await cardPage.activityLocator.count();i++) {
			expect(await cardPage.getColorFromElement(cardPage.activityLocator.nth(i))).toBe(expectColor);
		}
	});

	test("Validate Activity date has grey3 as color.", async () => {
		const expectColor = theme.newColors.grey3["100"];
		for (let i = 3; i < await cardPage.page.locator("span").count();i++) {
			expect(await cardPage.getColorFromElement(cardPage.page.locator("span").nth(i))).toBe(expectColor);
		}
	});

	test("Validate Title Bar has grey2 as background color.", async () => {
		const expectColor = theme.newColors.grey2["100"];
		expect(await cardPage.getBackgroundColorFromElement(cardPage.cardTitleBar)).toBe(expectColor);
	});

	test("Validate Card Wrapper has grey2 in border.", async () => {
		const expectColor = theme.newColors.grey2["100"];
		expect(await cardPage.getSpecificBorderFromElement(cardPage.cardWrapper)).toContain(expectColor);
	});
});
