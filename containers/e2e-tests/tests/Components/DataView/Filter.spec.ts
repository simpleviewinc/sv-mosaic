import type { Page } from "@playwright/test";
import { expect, test } from "@playwright/test";
import { DataviewPage } from "../../../pages/Components/DataView/DataViewPage";
import { FilterComponent } from "../../../pages/Components/DataView/FilterComponent";
import { filter_data } from "../../../utils/data/dataviewData";
import { addComma } from "../../../utils/helpers/helper";
import theme from "@simpleview/sv-mosaic/theme";;

test.describe("Components - Data View - Filter", () => {
	let page: Page;
	let _dataviewPage: DataviewPage;
	let filter: FilterComponent;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		_dataviewPage = new DataviewPage(page);
		filter = new FilterComponent(page);
		await _dataviewPage.visit(_dataviewPage.page_path);
	});

	test.beforeEach(async() => {
		await page.reload();
		await _dataviewPage.clean();
	});

	test("Filter title with a valid keyword and 1 result", async () => {
		await filter.searchForTerm("keyword", filter_data.validKeywordFilter);
		expect(await (await filter._dataviewPage.getTableRows()).count()).toBe(filter_data.expectedKeywordFilterNumber);
		await _dataviewPage.waitForDataviewIsVisible();
		const titles = await filter._dataviewPage.getAllRowData("Title");
		expect(titles).toContain(filter_data.validKeywordFilter.toLowerCase());
		expect(await filter._dataviewPage.paginationComponent.paginationValue.textContent()).toBe(`1-${filter_data.expectedKeywordFilterNumber} of ${filter_data.expectedKeywordFilterNumber}`);
		expect(await filter._dataviewPage.getFilterText(filter.keywordBtn)).toBe(`is ${filter_data.validKeywordFilter}`);
	});

	test("Filter title with a valid keyword and several results", async () => {
		await filter.searchForTerm("keyword", filter_data.validKeywordFilterSeveralResults);
		expect(await (await filter._dataviewPage.getTableRows()).count()).toBe(filter_data.expectedKeywordFilterNumberSeveralResults);
		const titles = await filter._dataviewPage.getAllRowData("Title");
		await filter._dataviewPage.validateContainsKeyword(titles, filter_data.validKeywordFilterSeveralResults);
		expect(await filter._dataviewPage.paginationComponent.paginationValue.textContent()).toBe(`1-${filter_data.expectedKeywordFilterNumberSeveralResults} of ${filter_data.expectedKeywordFilterNumberSeveralResults}`);
		expect(await filter._dataviewPage.getFilterText(filter.keywordBtn)).toBe(`is ${filter_data.validKeywordFilterSeveralResults}`);
	});

	test("Filter title with a valid keyword and no results", async () => {
		await filter.searchForTerm("keyword", filter_data.keywordNoResultsFilter);
		await expect(filter._dataviewPage.noResults).toBeVisible();
		expect(await filter._dataviewPage.getFilterText(filter.keywordBtn)).toBe(`is ${filter_data.keywordNoResultsFilter}`);
	});

	test("Filter title with a special character", async () => {
		await filter.searchForTerm("keyword", "+");
		expect(await filter.keywordBtn.locator(".filter-value p").innerText()).toContain("+");
	});

	test("Filter title with an Uppercase keyword", async () => {
		await filter.searchForTerm("keyword", filter_data.upperCaseKeywordFilter);
		expect(await (await filter._dataviewPage.getTableRows()).count()).toBe(filter_data.upperCaseFilterNumber);
		const titles = await filter._dataviewPage.getAllRowData("Title");
		await filter._dataviewPage.validateContainsKeyword(titles, filter_data.upperCaseKeywordFilter);
		expect(await filter._dataviewPage.getFilterText(filter.keywordBtn)).toBe(`is ${filter_data.upperCaseKeywordFilter}`);
	});

	test("Filter the title with a Lowercase keyword.", async () => {
		await filter.searchForTerm("keyword", filter_data.lowerCaseKeywordFilter);
		expect(await (await filter._dataviewPage.getTableRows()).count()).toBe(filter_data.lowerCaseFilterNumber);
		const titles = await filter._dataviewPage.getAllRowData("Title");
		await filter._dataviewPage.validateContainsKeyword(titles, filter_data.lowerCaseKeywordFilter);
		expect(await filter._dataviewPage.getFilterText(filter.keywordBtn)).toBe(`is ${filter_data.lowerCaseKeywordFilter}`);
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

	test("Filter category searching keyword", async () => {
		await filter.searchForTerm("categories", filter_data.categoryKeywordFilter);
		expect(await (await filter._dataviewPage.getTableRows()).count()).toBe(filter_data.categoryFilterNumber);
		const categories = await filter._dataviewPage.getAllRowData("Category");
		await filter._dataviewPage.validateContainsKeyword(categories, filter_data.categoryKeywordFilter);
		expect(await filter._dataviewPage.getFilterText(filter.categoryBtn)).toBe(filter_data.categoryKeywordFilter);
	});

	test("Filter categories choosing a value from the list", async () => {
		await filter.searchForTerm("categories", filter_data.categoryFilterChooseItem);
		expect(await (await filter._dataviewPage.getTableRows()).count()).toBe(filter_data.categoryFilterChooseItemNumber);
		const categories = await filter._dataviewPage.getAllRowData("Category");
		await filter._dataviewPage.validateContainsKeyword(categories, filter_data.categoryFilterChooseItem);
		expect(await filter._dataviewPage.getFilterText(filter.categoryBtn)).toBe(filter_data.categoryFilterChooseItem);
	});

	test("Validate when Filter by multiple categories, the categories are shown as expected.", async () => {
		const expectedCategories = [filter_data.categoryFilterChooseItem, filter_data.categoryFilterMoreThanOne, filter_data.categoryFilterLoadMore].sort();
		await filter.selectFilter("categories");
		await filter.categoryBtn.click();
		for (const expectedCategory of expectedCategories) {
			await filter.clearAllValuesFromField(filter.categoryKeywordInput);
			await filter.categoryKeywordInput.type(expectedCategory);
			await filter.selectCategory(expectedCategory);
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
		for (const expectedCategory of expectedCategories) {
			await filter.clearAllValuesFromField(filter.categoryKeywordInput);
			await filter.categoryKeywordInput.type(expectedCategory);
			await filter.selectCategory(expectedCategory);
		}
		await filter.applyBtn.click();
		await filter.categoryBtn.click();
		await filter.wait();
		await filter.removeSelectedOptionsByName(filter_data.categoryFilterMoreThanOne);
		await filter.applyBtn.click();
		const categories = await filter._dataviewPage.getAllRowData("Category");
		await filter._dataviewPage.validateContainsKeyword(categories, filter_data.categoryFilterChooseItem);
		expect(await (await filter._dataviewPage.getTableRows()).count()).toBe(filter_data.categoryFilterChooseItemNumber);
		expect(await filter._dataviewPage.getFilterText(filter.categoryBtn)).toBe(filter_data.categoryFilterChooseItem);
	});

	test("Load more category filters", async () => {
		await filter.selectFilter("categories");
		await filter.categoryBtn.click();
		await filter.loadMoreBtn.click();
		await filter.selectCategory(filter_data.categoryFilterLoadMore);
		await filter.applyBtn.click();
		expect(await (await filter._dataviewPage.getTableRows()).count()).toBe(filter_data.categoryFilterLoadMoreNumber);
		const categories = await filter._dataviewPage.getAllRowData("Category");
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

	test("Validate Gap between filters is valid.", async () => {
		await filter.filtersRowLocator.waitFor();
		await filter.selectAllFilters();
		expect(await filter.getGapFromElement(filter.filtersRowLocator)).toBe("16px");
	});

	test("Validate bottons in filters selection are as expected.", async () => {
		const expectBgColor = theme.newColors.simplyGold["100"];
		await filter._dataviewPage.filtersBtn.click();
		await expect(filter.clearBtn).toBeVisible();
		await expect(filter.applyBtn).toBeVisible();
		await expect(filter.cancelBtn).not.toBeVisible();
		expect(await filter.getBackgroundColorFromElement(filter.applyBtn)).toBe(expectBgColor);

		// Now we select a filter and check the same conditions.
		await filter.pressSpecificKeyInKeyboard("Escape");
		await filter.selectFilter("categories");
		await filter.categoryBtn.click();
		await expect(filter.clearBtn).toBeVisible();
		await expect(filter.applyBtn).toBeVisible();
		await expect(filter.cancelBtn).not.toBeVisible();
		expect(await filter.getBackgroundColorFromElement(filter.applyBtn)).toBe(expectBgColor);
	});

	test("Validate that selected categories are shown properly in Selected Options.", async () => {
		await filter.selectFilter("categories");
		await filter.categoryBtn.click();
		await filter.selectCategory(filter_data.categoryFilterChooseItem);
		await filter.categoryKeywordInput.type(filter_data.categoryKeywordFilter);
		await filter.selectCategory(filter_data.categoryKeywordFilter);
		await filter.clearAllValuesFromField(filter.categoryKeywordInput);
		expect(await _dataviewPage.selectedChips.count()).toBe(2);
		expect(await _dataviewPage.selectedChips.first().textContent()).toBe(filter_data.categoryFilterChooseItem);
		expect(await _dataviewPage.selectedChips.last().textContent()).toBe(filter_data.categoryKeywordFilter);
	});

	test("Validate the alingment of the No results message.", async () => {
		const expectedMargin = "0px 20px";
		await filter.searchForTerm("keyword", filter_data.keywordNoResultsFilter);
		await expect(filter._dataviewPage.noResults).toBeVisible();
		expect(await filter.getSpecificMarginFromElement(filter._dataviewPage.noResults, "all")).toContain(expectedMargin);
	});

	test("Validate that when clicking the clear button, it removes the selected filter.", async () => {
		await filter.selectFilter("categories");
		await filter.categoryBtn.click();
		await filter.selectCategory(filter_data.categoryFilterChooseItem);
		await filter.applyBtn.click();
		await filter.categoryBtn.click();
		await filter.clearBtn.click();
		expect(await _dataviewPage.selectedChips.count()).toBe(0);
		await filter.applyBtn.click();
		expect(await filter.categoryBtn.textContent()).not.toContain(filter_data.categoryFilterChooseItem);
	});
});
