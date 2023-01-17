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
		const expectedColor = theme.newColors.almostBlack["100"];
		expect(await contentPage.getColorFromElement(contentPage.mainSectionTitle)).toBe(expectedColor);
	});

	test("Validate Edit button has grey3 as color.", async () => {
		const expectedColor = theme.newColors.grey3["100"];
		expect(await contentPage.getColorFromElement(contentPage.editButton)).toBe(expectedColor);
	});

	test("Validate Main wrapper has grey2 as border bottom.", async () => {
		const expectedColor = theme.newColors.grey2["100"];
		expect(await contentPage.getSpecificBorderFromElement(contentPage.mainWrapperLocator, "bottom")).toContain(expectedColor);
	});

	test("Validate Chios has grey2 as background color.", async () => {
		const expectedColor = theme.newColors.grey2["100"];
		for (let i = 0; i < await contentPage.chipTestIDLocator.count(); i++) {
			expect(await contentPage.getBackgroundColorFromElement(contentPage.chipTestIDLocator.nth(i))).toBe(expectedColor);
		}
	});
});
