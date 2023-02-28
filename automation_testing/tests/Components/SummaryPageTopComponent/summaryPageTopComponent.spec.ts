import { test, expect, Page } from "@playwright/test";
import { SummaryPageTopComponentPage } from "../../../pages/Components/SummaryPageTopComponent/SummaryPageTopComponentPage";
import theme from "../../../../src/theme";
import { commonKnobs } from "../../../utils/data/knobs";

test.describe.parallel("Components - SummaryPageTopComponent - Kitchen Sink", () => {
	let page: Page;
	let summaryPage: SummaryPageTopComponentPage;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		summaryPage = new SummaryPageTopComponentPage(page);
		await summaryPage.visit(summaryPage.page_path);
	});

	test.afterAll(async ({ browser }) => {
		await browser.close();
	});

	test("Validate Star has simplyGold color.", async () => {
		const expectColor = theme.newColors.simplyGold["100"];
		await summaryPage.starRateIconUnchecked.click();
		expect(await summaryPage.getColorFromElement(summaryPage.starRateIconChecked)).toBe(expectColor);
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
});
