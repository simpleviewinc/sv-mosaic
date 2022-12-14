import { test, expect, Page } from "@playwright/test";
import { SummaryPageTopComponentPage } from "../../../pages/Components/SummaryPageTopComponent/SummaryPageTopComponentPage";
import theme from "../../../../src/theme";

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

	test("Validate Star has simplyGold color.", async () => {
		const expectColor = (theme.newColors.simplyGold["100"]);
		await summaryPage.starRateIconUnchecked.click();
		expect(await summaryPage.getColorFromElement(summaryPage.starRateIconChecked)).toBe(expectColor);
	});

	test("Validate Summary title has almostBlack text color.", async () => {
		const expectColor = theme.newColors.almostBlack["100"];
		expect(await summaryPage.getColorFromElement(summaryPage.summaryTitle)).toBe(expectColor);
	});

	test("Validate Summary Page Top Component padding is valid.", async () => {
		const locator = summaryPage.summaryTopComponent;
		await locator.waitFor();
		expect(await summaryPage.getSpecificPaddingFromElement(locator, "top")).toBe("24px");
		expect(await summaryPage.getSpecificPaddingFromElement(locator, "right")).toBe("24px");
		expect(await summaryPage.getSpecificPaddingFromElement(locator, "bottom")).toBe("16px");
		expect(await summaryPage.getSpecificPaddingFromElement(locator, "left")).toBe("24px");
	});
});
