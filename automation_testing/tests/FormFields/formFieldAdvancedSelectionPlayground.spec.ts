import { test, expect, Page } from "@playwright/test";
import { FormFieldAdvancedSelectionPage } from "../../pages/FormFields/FormFieldAdvancedSelectionPage/AdvancedSelectionPlaygroundPage";
import { ChipPage } from "../../pages/Components/Chip/ChipPage";
import theme from "../../../src/theme";

test.describe.parallel("FormFields - FormFieldAdvancedSelection - Playground", () => {
	let page: Page;
	let ffAdvancedSelectionPage: FormFieldAdvancedSelectionPage;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		ffAdvancedSelectionPage = new FormFieldAdvancedSelectionPage(page);
		await ffAdvancedSelectionPage.visit(ffAdvancedSelectionPage.page_path);
	});

	test.afterAll(async ({ browser }) => {
		browser.close;
	});

	test("Validate placeholder text has grey3 as Color.", async () => {
		const expectedColor = theme.newColors.grey3["100"];
		expect(await ffAdvancedSelectionPage.getSpecificBorderFromElement(ffAdvancedSelectionPage.placeholderText)).toContain(expectedColor);
	});

	test("Validate drawer title location is fixed.", async () => {
		await page.setViewportSize({ width: 1280, height: 400 });
		await ffAdvancedSelectionPage.advancedSelectionButton.click();
		await expect(ffAdvancedSelectionPage.formTestIDLocator.last()).toBeVisible();
		await ffAdvancedSelectionPage.page.locator("input").last().scrollIntoViewIfNeeded();
		await expect(ffAdvancedSelectionPage.formTestIDLocator.last().locator("form div").first()).toBeVisible();
	});

	test("Validate that a tooltip is displayed when the chip selected is too long.", async () => {
		const chipPage = new ChipPage(page);
		const longOpt = "Very long label that does not fit";
		await ffAdvancedSelectionPage.advancedSelectionButton.click();
		await ffAdvancedSelectionPage.listItemLabelLocator.locator(":scope", { hasText: longOpt }).click();
		await chipPage.deletableChip.hover();
		await expect(ffAdvancedSelectionPage.tooltip).toBeVisible();
		expect(await ffAdvancedSelectionPage.tooltip.textContent()).toBe(longOpt);
	});
});
