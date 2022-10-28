import { test, expect, Page } from "@playwright/test";
import { SummaryPageTopComponentPage } from "../../../pages/Components/SummaryPageTopComponent/SummaryPageTopComponentPage";

test.describe.parallel("Components - SummaryPageTopComponent - Kitchen Sink", () => {
	let page: Page;
	let summaryPage: SummaryPageTopComponentPage;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		summaryPage = new SummaryPageTopComponentPage(page);
		await summaryPage.visitPage();
	});

	test.afterAll(async ({ browser }) => {
		await browser.close();
	});

	test("Validate the font weight of the title.", async () => {
		const expectedFontWeight = "250";
		const titleFontWeight = await summaryPage.getFontWeightFromElement(summaryPage.summaryTitle);
		expect(titleFontWeight).toBe(expectedFontWeight);
	});

	test("Validate the font of the title.", async () => {
		const titleFonts = await summaryPage.getFontFamilyFromElement(summaryPage.summaryTitle);
		expect(titleFonts).toContain("Museo-Sans");
	});
});
