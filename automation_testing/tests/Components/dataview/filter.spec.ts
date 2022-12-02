import { expect, test, Page } from "@playwright/test";
import { DataviewPage } from "../../../pages/Components/DataView/DataViewPage";
import { FilterComponent } from "../../../pages/Components/DataView/FilterComponent";
import { dataview_data, filter_data } from "../../../utils/data/dataview_data";
import { addComma } from "../../../utils/helpers/helper";
import theme from "../../../../src/theme";

test.describe.parallel("Components - Data View - Filter", () => {
	let page: Page;
	let _dataviewPage: DataviewPage;
	let filter: FilterComponent;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		_dataviewPage = new DataviewPage(page);
		filter = new FilterComponent(page);
		await _dataviewPage.visitPage();
	});

	test.beforeEach(async() => {
		await page.reload();
	});

	test.afterAll(async ({ browser }) => {
		browser.close;
	});

	test("Filter title with a valid keyword and 1 result", async () => {
		await filter.searchForTerm("keyword", filter_data.validKeywordFilter);
		expect(await (await filter._dataviewPage.getTableRows()).count()).toBe(filter_data.expectedKeywordFilterNumber);
		expect((await filter._dataviewPage.getAllRowData(dataview_data.resultPerPageDefault, "Title")).toString()).toContain(filter_data.validKeywordFilter.toLowerCase());
		expect(await filter._dataviewPage.paginationComponent.paginationValue.textContent()).toBe(`1-${filter_data.expectedKeywordFilterNumber} of ${filter_data.expectedKeywordFilterNumber}`);
		expect(await filter._dataviewPage.getFilterText(filter.keywordBtn)).toBe(filter_data.validKeywordFilter);
	});

	test("Filter title with a valid keyword and several results", async () => {
		await filter.searchForTerm("keyword", filter_data.validKeywordFilterSeveralResults);
		expect(await (await filter._dataviewPage.getTableRows()).count()).toBe(filter_data.expectedKeywordFilterNumberSeveralResults);
		const titles = await filter._dataviewPage.getAllRowData(dataview_data.resultPerPageDefault, "Title");
		await filter._dataviewPage.validateContainsKeyword(titles, filter_data.validKeywordFilterSeveralResults);
		expect(await filter._dataviewPage.paginationComponent.paginationValue.textContent()).toBe(`1-${filter_data.expectedKeywordFilterNumberSeveralResults} of ${filter_data.expectedKeywordFilterNumberSeveralResults}`);
		expect(await filter._dataviewPage.getFilterText(filter.keywordBtn)).toBe(filter_data.validKeywordFilterSeveralResults);
	});

	test("Filter title with a valid keyword and no results", async () => {
		await filter.searchForTerm("keyword", filter_data.keywordNoResultsFilter);
		await expect(filter.page.locator(".noResults")).toBeVisible()
		expect(await filter._dataviewPage.getFilterText(filter.keywordBtn)).toBe(filter_data.keywordNoResultsFilter);
	});

	test("Filter title with a special character", async () => {
		await filter.searchForTerm("keyword", "+");
		expect(await filter.keywordBtn.locator("b").innerText()).toContain("+");
	});

	test("Filter title with an Uppercase keyword", async () => {
		await filter.searchForTerm("keyword", filter_data.upperCaseKeywordFilter);
		expect(await (await filter._dataviewPage.getTableRows()).count()).toBe(filter_data.upperCaseFilterNumber);
		const titles = await filter._dataviewPage.getAllRowData(dataview_data.resultPerPageDefault, "Title");
		await filter._dataviewPage.validateContainsKeyword(titles, filter_data.upperCaseKeywordFilter);
		expect(await filter._dataviewPage.getFilterText(filter.keywordBtn)).toBe(filter_data.upperCaseKeywordFilter);
	});

	test("Filter title with a Lowerrcase keyword", async () => {
		await filter.searchForTerm("keyword", filter_data.lowerCaseKeywordFilter);
		expect(await (await filter._dataviewPage.getTableRows()).count()).toBe(filter_data.lowerCaseFilterNumber);
		const titles = await filter._dataviewPage.getAllRowData(dataview_data.resultPerPageDefault, "Title");
		await filter._dataviewPage.validateContainsKeyword(titles, filter_data.lowerCaseKeywordFilter);
		expect(await filter._dataviewPage.getFilterText(filter.keywordBtn)).toBe(filter_data.lowerCaseKeywordFilter);
		await filter.validateKeywordFilterIsVisible(false);
	});

	test("Clear keyword filter", async () => {
		await filter.selectFilter("keyword");
		await filter.keywordBtn.click();
		await filter.keywordInput.type(filter_data.lowerCaseKeywordFilter);
		await filter.clearBtn.click();
		await filter.wait();
		expect(await filter.keywordInput.textContent()).toBe("");
		await filter.validateKeywordFilterIsVisible(true);
	});

	test("Clear keyword filter after apply it", async () => {
		await filter.searchForTerm("keyword", filter_data.lowerCaseKeywordFilter);
		await filter.keywordBtn.click();
		await filter.clearBtn.click();
		expect(await filter.keywordInput.textContent()).toBe("");
		await filter.applyBtn.click();
		await filter.wait();
		expect(await filter._dataviewPage.getFilterText(filter.keywordBtn)).toBe("Any");
		await filter.validateKeywordFilterIsVisible(false);
	});

	test("Cancel filter", async () => {
		await filter.selectFilter("keyword");
		await filter.keywordBtn.click();
		await filter.keywordInput.type(filter_data.lowerCaseKeywordFilter);
		await filter.cancelBtn.click();
		await filter.cancelBtn.waitFor({ state: "hidden" });
		expect(await filter._dataviewPage.getFilterText(filter.keywordBtn)).toBe("Any");
		expect(await filter.keywordInput.isVisible()).toBe(false);
	});

	test("Filter category searching keyword", async () => {
		await filter.searchForTerm("categories", filter_data.categoryKeywordFilter);
		expect(await (await filter._dataviewPage.getTableRows()).count()).toBe(filter_data.categoryFilterNumber);
		const categories = await filter._dataviewPage.getAllRowCategories(dataview_data.resultPerPageDefault);
		await filter._dataviewPage.validateContainsKeyword(categories, filter_data.categoryKeywordFilter);
		expect(await filter._dataviewPage.getFilterText(filter.categoryBtn)).toBe(filter_data.categoryKeywordFilter);
	});

	test("Filter categories choosing a value from the list", async () => {
		await filter.searchForTerm("categories", filter_data.categoryFilterChooseItem);
		expect(await (await filter._dataviewPage.getTableRows()).count()).toBe(filter_data.categoryFilterChooseItemNumber);
		const categories = await filter._dataviewPage.getAllRowCategories(dataview_data.resultPerPageDefault);
		await filter._dataviewPage.validateContainsKeyword(categories, filter_data.categoryFilterChooseItem);
		expect(await filter._dataviewPage.getFilterText(filter.categoryBtn)).toBe(filter_data.categoryFilterChooseItem);
	});

	test("Validate when Filter by multiple categories, the categories are shown as expected.", async () => {
		const expectedCategories = [filter_data.categoryFilterChooseItem, filter_data.categoryFilterMoreThanOne, filter_data.categoryFilterLoadMore].sort();
		await filter.selectFilter("categories");
		await filter.categoryBtn.click();
		for (let i = 0; i < expectedCategories.length; i++) {
			await filter.clearAllValuesFromField(filter.categoryKeywordInput);
			await filter.categoryKeywordInput.type(expectedCategories[i]);
			await filter.selectCategory(expectedCategories[i]);
		}
		await filter.applyBtn.click();
		expect(await filter._dataviewPage.getFilterText(filter.categoryBtn)).toContain(expectedCategories[0]);
		expect(await filter.moreCategoriesTooltip.textContent()).toBe("+" + (expectedCategories.length - 1));

		// Now we validate the tooltip text with the rest of categories.
		await filter.moreCategoriesTooltip.hover();
		const receivedTooltipText = await filter.tooltip.textContent();
		const tooltipCategories = [];
		for (let i = 1; i < expectedCategories.length; i++) {
			tooltipCategories.push(expectedCategories[i]);
		}
		expect(receivedTooltipText).toBe(addComma(tooltipCategories));
	});

	test("Remove category filter selected", async () => {
		const expectedCategories = [filter_data.categoryFilterChooseItem, filter_data.categoryFilterMoreThanOne].sort();
		await filter.selectFilter("categories");
		await filter.categoryBtn.click();
		for (let i = 0; i < expectedCategories.length; i++) {
			await filter.clearAllValuesFromField(filter.categoryKeywordInput);
			await filter.categoryKeywordInput.type(expectedCategories[i]);
			await filter.selectCategory(expectedCategories[i]);
		}
		await filter.applyBtn.click();
		await filter.categoryBtn.click();
		await filter.wait();
		await filter.removeSelectedOptionsByName(filter_data.categoryFilterMoreThanOne);
		await filter.applyBtn.click();
		const categories = await filter._dataviewPage.getAllRowCategories(dataview_data.resultPerPageDefault);
		await filter._dataviewPage.validateContainsKeyword(categories, filter_data.categoryFilterChooseItem);
		expect(await (await filter._dataviewPage.getTableRows()).count()).toBe(filter_data.categoryFilterChooseItemNumber);
		expect(await filter._dataviewPage.getFilterText(filter.categoryBtn)).toBe(filter_data.categoryFilterChooseItem);
	});

	test("Clear category filter", async () => {
		const expectedCategories = [filter_data.categoryFilterChooseItem, filter_data.categoryFilterMoreThanOne].sort();
		await filter.selectFilter("categories");
		await filter.categoryBtn.click();
		for (let i = 0; i < expectedCategories.length; i++) {
			await filter.clearAllValuesFromField(filter.categoryKeywordInput);
			await filter.categoryKeywordInput.type(expectedCategories[i]);
			await filter.selectCategory(expectedCategories[i]);
		}
		await filter.clearBtn.click();
		await filter.wait();
		expect(await filter.selectedOptions.count()).toBe(0);
		expect(await filter._dataviewPage.getFilterText(filter.categoryBtn)).toBe("Any");
		await filter.validateCategoryFilterIsVisible(true);
	});

	test("Cancel category filter", async () => {
		const expectedCategories = [filter_data.categoryFilterChooseItem, filter_data.categoryFilterMoreThanOne].sort();
		await filter.selectFilter("categories");
		await filter.categoryBtn.click();
		for (let i = 0; i < expectedCategories.length; i++) {
			await filter.clearAllValuesFromField(filter.categoryKeywordInput);
			await filter.categoryKeywordInput.type(expectedCategories[i]);
			await filter.selectCategory(expectedCategories[i]);
		}
		await filter.cancelBtn.click();
		await filter.wait();
		expect(await filter.selectedOptions.count()).toBe(0);
		expect(await filter._dataviewPage.getFilterText(filter.categoryBtn)).toBe("Any");
		await filter.validateCategoryFilterIsVisible(false);
	});

	test("Load more category filters", async () => {
		await filter.selectFilter("categories");
		await filter.categoryBtn.click();
		await filter.loadMoreBtn.click();
		await filter.selectCategory(filter_data.categoryFilterLoadMore);
		await filter.applyBtn.click();
		expect(await (await filter._dataviewPage.getTableRows()).count()).toBe(filter_data.categoryFilterLoadMoreNumber);
		const categories = await filter._dataviewPage.getAllRowCategories(dataview_data.resultPerPageDefault);
		await filter._dataviewPage.validateContainsKeyword(categories, filter_data.categoryFilterLoadMore);
		expect(await filter._dataviewPage.getFilterText(filter.categoryBtn)).toBe(filter_data.categoryFilterLoadMore);
	});

	test("See all categories available", async () => {
		await filter.selectFilter("categories");
		await filter.categoryBtn.click();
		await filter.displayAllCategories();
		expect(await filter.categoryItems.count()).toBe(242);
	});

	test("Validate selected category style", async () => {
		const expectBgColor = theme.newColors.simplyGold["100"];
		await filter.selectFilter("categories");
		await filter.categoryBtn.click();
		await filter.selectCategory(filter_data.categoryFilterChooseItem);
		expect(await filter.getBackgroundColorFromElement(_dataviewPage.selectedChips)).toBe(expectBgColor);
	});
});
