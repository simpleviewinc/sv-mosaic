import { test, expect, Page, Locator } from "@playwright/test";
import { DataViewFilterMultiselectComponent } from "../../../pages/Components/DataView/DataViewFilterMultiselect";
import { dataviewKnobs as knob } from "../../../utils/data/knobs";

test.describe.parallel("Components - DataViewFilterMultiSelect - Kitchen Sink", () => {
	let page: Page;
	let multiSelectComponent: DataViewFilterMultiselectComponent;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		multiSelectComponent = new DataViewFilterMultiselectComponent(page);
		await multiSelectComponent.visit(multiSelectComponent.page_path);
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
		await multiSelectComponent.visit(multiSelectComponent.page_path, [knob.knobComparison + "true"]);
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

	test("Validate that the padding and margin in the Multiselect selected items.", async () => {
		const expectedMargin = "16px";
		const expectedPadding = "0px 16px 0px 32px";
		await multiSelectComponent.showComparisonSelectorButton.click();
		expect(await multiSelectComponent.getSpecificMarginFromElement(multiSelectComponent.topBlockLocator, "top")).toBe(expectedMargin);
		expect(await multiSelectComponent.getSpecificPaddingFromElement(multiSelectComponent.topBlockLocator, "left")).toBe(expectedMargin);
		expect(await multiSelectComponent.getSpecificPaddingFromElement(multiSelectComponent.selectedOptionsLocator, "all")).toBe(expectedPadding);
	});
});
