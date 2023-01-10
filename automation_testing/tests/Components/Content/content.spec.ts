import { test, expect, Page } from "@playwright/test";
import { ContentPage } from "../../../pages/Components/Content/ContentPage";
import theme from "../../../../src/theme";

test.describe("Components - ContentPage - Playground", () => {
	let page: Page;
	let contentPage: ContentPage;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		contentPage = new ContentPage(page);
		await contentPage.visitPage();
	});

	test.afterAll(async ({ browser }) => {
		await browser.close();
	});

	test("Validate Content title has almostBlack color.", async () => {
		const expectColor = theme.newColors.almostBlack["100"];
		expect(await contentPage.getColorFromElement(contentPage.mainSectionTitle)).toBe(expectColor);
	});

	test("Validate Edit button has grey3 as color.", async () => {
		const expectColor = theme.newColors.grey3["100"];
		expect(await contentPage.getColorFromElement(contentPage.editButton)).toBe(expectColor);
	});
});
