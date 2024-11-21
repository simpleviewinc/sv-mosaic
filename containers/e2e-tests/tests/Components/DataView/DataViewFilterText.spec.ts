import type { Page } from "@playwright/test";
import { test, expect } from "@playwright/test";
import { DataViewFilterTextComponent } from "../../../pages/Components/DataView/DataViewFilterText";
import { filter_data } from "../../../utils/data/dataviewData";
import { dataviewKnobs as knob } from "../../../utils/data/knobs";

test.describe("Components - DataViewFilterText - Playground", () => {
	let page: Page;
	let dvFilterComponent: DataViewFilterTextComponent;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		dvFilterComponent = new DataViewFilterTextComponent(page);
		await dvFilterComponent.visit(dvFilterComponent.page_path);
	});

	test("Validate that the filter is displayed when searched.", async () => {
		const expectedWord = filter_data.validKeywordFilter;
		await dvFilterComponent.searchForWord(expectedWord);
		expect(await dvFilterComponent.getOnlyStringWithLetters(await dvFilterComponent.wordFilterLocator.textContent())).toBe(`is ${expectedWord}`);
	});

	test("Validate that the comparison button is displayed.", async () => {
		await dvFilterComponent.visit(dvFilterComponent.page_path, [knob.knobComparison + "true"]);
		await dvFilterComponent.filterTextButton.click();
		await expect(dvFilterComponent.comparisonButton).toBeVisible();
		await dvFilterComponent.pressSpecificKeyInKeyboard("Escape");
	});

	test("Validate that each comparison is displayed.", async () => {
		const searchWord = filter_data.validKeywordFilter;
		await dvFilterComponent.visit(dvFilterComponent.page_path, [knob.knobComparison + "true"]);
		await dvFilterComponent.searchWithComparison(searchWord, "Contains...");
		expect(await dvFilterComponent.wordFilterLocator.textContent()).toContain("contains");
		await dvFilterComponent.searchWithComparison(searchWord, "Does not contain...");
		expect(await dvFilterComponent.wordFilterLocator.textContent()).toContain("does not contain");
		await dvFilterComponent.searchWithComparison(searchWord, "Not equal to...");
		expect(await dvFilterComponent.wordFilterLocator.textContent()).toContain("is not");
		await dvFilterComponent.searchWithComparison(searchWord, ("Exists"));
		expect(await dvFilterComponent.wordFilterLocator.textContent()).toContain(("exists"));
		await dvFilterComponent.searchWithComparison(searchWord, "Not Exists");
		expect(await dvFilterComponent.wordFilterLocator.textContent()).toContain(("does not exist"));
	});

	test("Validate that the text filter comparison logic is consistent.", async () => {
		const comparisonsToValidate = ["Equals...", "Not equal to...", "Contains...", "Does not contain...", "Exists", "Not Exists"];
		for (let i = 0; i < comparisonsToValidate.length; i++) {
			await dvFilterComponent.visitPageWithDefaultComparison(comparisonsToValidate[i]);
			await dvFilterComponent.filterTextButton.waitFor();
			await dvFilterComponent.filterTextButton.click();
			expect(await dvFilterComponent.comparisonButton.textContent()).toBe(comparisonsToValidate[i]);
			if (i === 0) {
				await dvFilterComponent.selectComparison(comparisonsToValidate[i + 1]);
			} else {
				await dvFilterComponent.selectComparison(comparisonsToValidate[0]);
			}
			await dvFilterComponent.clearBtn.click();
			const comparisonButtonText = await dvFilterComponent.comparisonButton.textContent();
			const expectedText = comparisonsToValidate[i];
			expect(comparisonButtonText).toBe(expectedText);
		}
	});

	test("Validate that the padding in the input row.", async () => {
		await dvFilterComponent.visit(dvFilterComponent.page_path);
		const expectedPadding = "16px 16px 0px";
		await dvFilterComponent.filterTextButton.click();
		expect(await dvFilterComponent.getSpecificPaddingFromElement(dvFilterComponent.inputRowLocator, "all")).toBe(expectedPadding);
	});
});
