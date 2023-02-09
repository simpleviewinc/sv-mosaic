import { test, expect, Page, Locator } from "@playwright/test";
import { DataViewFilterMultiselectComponent } from "../../../pages/Components/DataView/DataViewFilterMultiselect";

test.describe.parallel("Components - DataViewFilterMultiSelect - Kitchen Sink", () => {
	let page: Page;
	let multiSelectComponent: DataViewFilterMultiselectComponent;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		multiSelectComponent = new DataViewFilterMultiselectComponent(page);
		await multiSelectComponent.visit(multiSelectComponent.page_path);
	});

	test.afterAll(async ({ browser }) => {
		browser.close;
	});

	async function validateSelectedOption(comparisonLocator: Locator) {
		const optionLocator = multiSelectComponent.page.locator(multiSelectComponent.checkboxInputString).first();
		const optionSelected = await optionLocator.textContent();
		await optionLocator.click();
		await multiSelectComponent.applyBtn.click();
		expect(await comparisonLocator.textContent()).toContain(optionSelected);
	}

	test("Validate that DataView Filter MultiSelect hide the Comparison dropdown.", async () => {
		await multiSelectComponent.hideComparisonSelectorButton.click();
		await expect(multiSelectComponent.comparisonDropdown).not.toBeVisible();
	});

	test("Validate that DataView Filter MultiSelect shows the Comparison dropdown.", async () => {
		await multiSelectComponent.showComparisonSelectorButton.click();
		await expect(multiSelectComponent.comparisonDropdown).toBeVisible();
		expect(await multiSelectComponent.comparisonDropdown.locator("h3").textContent()).toBe("Comparison");
		await expect(multiSelectComponent.comparisonDropdownButton).toBeVisible();
		await expect(multiSelectComponent.helpDialogButton).toBeVisible();
	});

	test("Validate that the selected option in Hide Comparison is shown properly.", async () => {
		await multiSelectComponent.hideComparisonSelectorButton.click();
		await validateSelectedOption(multiSelectComponent.hideComparisonSelectorButton);
	});

	test("Validate that the selected option in Show Comparison is shown properly.", async () => {
		await multiSelectComponent.showComparisonSelectorButton.click();
		await validateSelectedOption(multiSelectComponent.showComparisonSelectorButton);
	});
});
