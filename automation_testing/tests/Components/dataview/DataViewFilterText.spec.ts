import { test, expect, Page } from "@playwright/test";
import { DataViewFilterTextComponent } from "../../../pages/Components/DataView/DataViewFilterText";
import { filter_data } from "../../../utils/data/dataview_data";

test.describe.parallel("Components - DataViewFilterText - Playground", () => {
	let page: Page;
	let dvFilterComponent: DataViewFilterTextComponent;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		dvFilterComponent = new DataViewFilterTextComponent(page);
		await dvFilterComponent.visit(dvFilterComponent.page_path);
	});

	test.afterAll(async ({ browser }) => {
		browser.close;
	});

	test("Validate that the filter is displayed.", async () => {
		const expectedWord = filter_data.validKeywordFilter;
		await dvFilterComponent.searchForWord(expectedWord);
		expect(dvFilterComponent.wordFilterLocator.textContent()).toBe(expectedWord);
	});

});
