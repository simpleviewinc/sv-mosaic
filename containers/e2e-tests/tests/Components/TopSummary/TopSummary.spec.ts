import type { Page } from "@playwright/test";
import { test, expect } from "@playwright/test";
import { TopSummaryPage } from "../../../pages/Components/TopSummary/TopSummaryPage";
import theme from "@root/theme";
import { commonKnobs } from "../../../utils/data/knobs";

test.describe("Components - TopSummary - Kitchen Sink", () => {
	let page: Page;
	let summaryPage: TopSummaryPage;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		summaryPage = new TopSummaryPage(page);
		await summaryPage.visit(summaryPage.page_path);
	});

	test("Validate Star has simplyGold color.", async () => {
		await summaryPage.starRateIcon.waitFor();
		expect(await summaryPage.getColorFromElement(summaryPage.starRateIcon)).toBe(theme.newColors.grey3["100"]);
		await summaryPage.starRateIcon.click();
		expect(await summaryPage.getColorFromElement(summaryPage.starRateIcon)).toBe(theme.newColors.simplyGold["100"]);
	});

	test("Validate Summary Page Top Component padding is valid.", async () => {
		const locator = summaryPage.summaryTopComponent;
		await locator.waitFor();
		expect(await summaryPage.getSpecificPaddingFromElement(locator, "top")).toBe("24px");
		expect(await summaryPage.getSpecificPaddingFromElement(locator, "right")).toBe("24px");
		expect(await summaryPage.getSpecificPaddingFromElement(locator, "bottom")).toBe("16px");
		expect(await summaryPage.getSpecificPaddingFromElement(locator, "left")).toBe("24px");
	});

	test("Validate that when onBack is activated, the back icon is displayed.", async () => {
		await summaryPage.visit(summaryPage.page_path, [commonKnobs.knobOnBack + true]);
		await expect(summaryPage.backIconLocator).toBeVisible();
		await summaryPage.backIconLocator.click();
		await summaryPage.setDialogValidationListener("Cancelling, going back to previous site");
	});

	test("Validate the Summary Page Top Component title style.", async () => {
		await summaryPage.validateTitleStylingOfLocator(summaryPage.title.last());
	});

	test("Validate that the title attribute is equal to the actual title.", async () => {
		const title = await summaryPage.title.last().textContent();
		const attribute = await summaryPage.title.last().getAttribute("title");
		expect(attribute).toBe(title);
	});

	test.skip("Validate that when no addition action is active, the 3 dots button is not displayed.", async () => {
		await summaryPage.visit(summaryPage.page_path, [commonKnobs.knobAdditionalActions + 3]);
		await expect(summaryPage.additionButtonLocator).toBeVisible();
		await summaryPage.visit(summaryPage.page_path, [commonKnobs.knobAdditionalActions + 0]);
		await expect(summaryPage.additionButtonLocator).not.toBeVisible();
		await summaryPage.visit(summaryPage.page_path, [commonKnobs.knobAdditionalActions + "undefined"]);
		await expect(summaryPage.additionButtonLocator).not.toBeVisible();
	});
});
