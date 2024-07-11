import { test, expect, Page } from "@playwright/test";
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
		expect(await dvFilterComponent.getOnlyStringWithLetters(await dvFilterComponent.wordFilterLocator.textContent())).toBe(expectedWord);
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
		await dvFilterComponent.searchWithComparison(searchWord, "Contains");
		expect(await dvFilterComponent.wordFilterLocator.textContent()).toContain("~");
		await dvFilterComponent.searchWithComparison(searchWord, "Not Contains");
		expect(await dvFilterComponent.wordFilterLocator.textContent()).toContain("!~");
		await dvFilterComponent.searchWithComparison(searchWord, "Not Equal");
		expect(await dvFilterComponent.wordFilterLocator.textContent()).toContain("!=");
		await dvFilterComponent.searchWithComparison(searchWord, ("Exists"));
		expect(await dvFilterComponent.wordFilterLocator.textContent()).toContain(("Exists").toUpperCase());
		await dvFilterComponent.searchWithComparison(searchWord, "Not Exists");
		expect(await dvFilterComponent.wordFilterLocator.textContent()).toContain(("Not Exists").toUpperCase());
	});

	test("Validate that the text filter comparison logic is consistent.", async () => {
		const comparisonsToValidate = ["Equals", "Not Equal", "Contains", "Not Contains", "Exists", "Not Exists"];
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
		dvFilterComponent.pressSpecificKeyInKeyboard("Escape");
	});

	test("Validate that the padding in the input row.", async () => {
		const expectedPadding = "16px 16px 0px";
		await dvFilterComponent.filterTextButton.click();
		expect(await dvFilterComponent.getSpecificPaddingFromElement(dvFilterComponent.inputRowLocator, "all")).toBe(expectedPadding);
	});
});
