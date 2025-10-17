import type { Page } from "@playwright/test";
import { test, expect } from "@playwright/test";
import { DataviewPage } from "../../../pages/Components/DataView/DataViewPage";
import { advanced_filter_data, dataview_data/*, filter_data */ } from "../../../utils/data/dataviewData";
import { AdvancedFiltersComponent } from "../../../pages/Components/DataView/AdvancedFiltersComponent";
import type { PaginationComponent } from "../../../pages/Components/DataView/PaginationComponent";
import { isACorrentDateRange } from "../../../utils/helpers/helper";
import type { ColumnsComponent } from "../../../pages/Components/DataView/ColumnsComponent";
import theme from "@simpleview/sv-mosaic/theme";

test.describe("Components - Data View - Advanced Filters", () => {
	let page: Page;
	let _dataviewPage: DataviewPage;
	let advancedFilters: AdvancedFiltersComponent;
	let pagination: PaginationComponent;
	let columns: ColumnsComponent;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		_dataviewPage = new DataviewPage(page);
		advancedFilters = new AdvancedFiltersComponent(page);
		pagination = _dataviewPage.paginationComponent;
		columns = _dataviewPage.columnsComponent;
		await _dataviewPage.visit(_dataviewPage.page_path);
	});

	test.beforeEach(async() => {
		await page.reload();
		await _dataviewPage.clean();
	});

	test.afterEach(async() => {
		await _dataviewPage.removeAllSelectedFilters();
	});

	// const validateFilterStyles = async () => {
	// 	const expectedFontWeight = (theme.weight.medium).toString();
	// 	const expectedFontSize = "14px";
	// 	const expectedFontColor = theme.newColors.almostBlack[100];
	// 	const applyLocator = advancedFilters.applyBtn;
	// 	const clearLocator = advancedFilters.page.locator("div[role='presentation'] >> text=Clear");

	// 	const applyFontWeight = await advancedFilters.getFontWeightFromElement(applyLocator);
	// 	const clearFontWeight = await advancedFilters.getFontWeightFromElement(clearLocator);
	// 	const applyFontSize = await advancedFilters.getFontSizeFromElement(applyLocator);
	// 	const clearFontSize = await advancedFilters.getFontSizeFromElement(clearLocator);
	// 	const applyButtonColor = await advancedFilters.getColorFromElement(applyLocator);
	// 	const clearButtonColor = await advancedFilters.getColorFromElement(clearLocator);

	// 	//Validate Font Weight
	// 	expect.soft(applyFontWeight, "Validate Font Weight").toBe(expectedFontWeight);
	// 	expect.soft(clearFontWeight, "Validate Font Weight").toBe(expectedFontWeight);
	// 	//Validate Font Size
	// 	expect.soft(applyFontSize, "Validate Font Size").toBe(expectedFontSize);
	// 	expect.soft(clearFontSize, "Validate Font Size").toBe(expectedFontSize);
	// 	//Validate Button Font Color
	// 	expect.soft(applyButtonColor, "Validate Button Font Color").toBe(expectedFontColor);
	// 	expect(clearButtonColor, "Validate Button Font Color").toBe(expectedFontColor);
	// 	await advancedFilters.pressSpecificKeyInKeyboard("Escape");
	// };

	// test("Validate Single select category", async () => {
	// 	await advancedFilters.selectFilter("singleSelectCategory");
	// 	await advancedFilters.singleSelectCategoryBtn.click();
	// 	const categorySelected = await advancedFilters.selectARandomCategoryForSingleSelectCategoryOption();
	// 	expect((await advancedFilters._dataviewPage.getFilterText(advancedFilters.singleSelectCategoryBtn))).toBe(categorySelected);
	// 	await _dataviewPage.waitForDataviewIsVisible();
	// 	const allCategoriesOfRows = await _dataviewPage.getAllRowData("Category");
	// 	for (let i = 0; i < allCategoriesOfRows.length; i++) {
	// 		expect(allCategoriesOfRows.toString()).toContain(categorySelected.toLowerCase());
	// 	}
	// });

	test.skip("Validate Single select category styles", async () => {
		await advancedFilters.selectFilter("singleSelectCategory");
		await advancedFilters.singleSelectCategoryBtn.click();
		await advancedFilters.validateFontColorFromElement(page.getByText("Any..."), "#3B424E", true);
		await advancedFilters.validateFontColorFromElement(page.getByRole("menuitem", { name: "Accessibility" }).locator("span"), "#3B424E", true);
		expect(await advancedFilters.isFontBold(page.getByText("Any..."))).toBe(true);
		await advancedFilters.pressSpecificKeyInKeyboard("Escape");
	});

	// test("Validate Categories with Comparisons - In", async () => {
	// 	await advancedFilters.selectFilter("categoriesWithComparisons");
	// 	await advancedFilters.categoryWithComparisonBtn.click();
	// 	const selectedCategory = await advancedFilters.selectFirstCategoriesForCategoryWithComparisonOption();
	// 	await advancedFilters.comparisonDropdown.click();
	// 	await advancedFilters.comparisonInOption.click();
	// 	await advancedFilters.applyBtn.click();
	// 	const allCategoriesOfRows = await _dataviewPage.getAllRowData("Category");
	// 	for (let i = 0; i < allCategoriesOfRows.length; i++) {
	// 		expect(allCategoriesOfRows.toString()).toContain(selectedCategory.toLowerCase());
	// 	}
	// });

	// test("Validate Categories with Comparisons - Not In", async () => {
	// 	await advancedFilters.selectFilter("categoriesWithComparisons");
	// 	await advancedFilters.categoryWithComparisonBtn.click();
	// 	const selectedCategory = await advancedFilters.selectFirstCategoriesForCategoryWithComparisonOption();
	// 	await advancedFilters.comparisonDropdown.click();
	// 	await advancedFilters.comparisonNotInOption.click();
	// 	await advancedFilters.applyBtn.click();
	// 	const allCategoriesOfRows = await _dataviewPage.getAllRowData("Category");
	// 	for (let i = 0; i < allCategoriesOfRows.length; i++) {
	// 		expect(allCategoriesOfRows.toString()).not.toContain(selectedCategory);
	// 	}
	// });

	// test("Validate Categories with Comparisons - All", async () => {
	// 	await advancedFilters.selectFilter("categoriesWithComparisons");
	// 	await advancedFilters.categoryWithComparisonBtn.click();
	// 	const selectedCategory = await advancedFilters.keywordSearchForComparisonCategory("Knowledge Chaser");
	// 	await advancedFilters.comparisonDropdown.click();
	// 	await advancedFilters.comparisonAllOption.click();
	// 	await advancedFilters.applyBtn.click();
	// 	const allCategoriesOfRows = await _dataviewPage.getAllRowData("Category");
	// 	for (let i = 0; i < allCategoriesOfRows.length; i++) {
	// 		expect(allCategoriesOfRows.toString()).toBe(selectedCategory.toLowerCase());
	// 	}
	// });

	// test("Validate Categories with Comparisons - Exists", async () => {
	// 	await advancedFilters.selectFilter("categoriesWithComparisons");
	// 	await advancedFilters.categoryWithComparisonBtn.click();
	// 	await advancedFilters.comparisonDropdown.click();
	// 	await advancedFilters.comparisonExistsOption.click();
	// 	await advancedFilters.applyBtn.click();
	// 	const allCategoriesOfRows = await _dataviewPage.getAllRowData("Category");
	// 	for (let i = 0; i < allCategoriesOfRows.length; i++) {
	// 		expect(allCategoriesOfRows.toString()).not.toBe("");
	// 	}
	// });

	// test("Validate Categories with Comparisons - Not Exists", async () => {
	// 	await advancedFilters.selectFilter("categoriesWithComparisons");
	// 	await advancedFilters.categoryWithComparisonBtn.click();
	// 	await advancedFilters.comparisonDropdown.click();
	// 	await advancedFilters.comparisonNotExistsOption.click();
	// 	await advancedFilters.applyBtn.click();
	// 	const allCategoriesOfRows = await _dataviewPage.getAllRowData("Category");
	// 	for (let i = 0; i < allCategoriesOfRows.length; i++) {
	// 		expect(allCategoriesOfRows.toString()).toContain("");
	// 	}
	// });

	test("Validate Categories with Comparisons - Help Dialog", async () => {
		await advancedFilters.selectFilter("categoriesWithComparisons");
		await advancedFilters.categoryWithComparisonBtn.click();
		await advancedFilters.helpComparisonCategoriesDialogButton.click();
		const size = await advancedFilters.helpComparisonCategoriesDialog.count();
		expect(size).toBe(1);
		const text = await advancedFilters.helpComparisonCategoriesDialog.textContent();
		expect(text).toBe(advanced_filter_data.categoryComparisonHelpDialog);
		await page.reload();
	});

	// test("Validate Categories with Comparisons - Keyword search", async () => {
	// 	await advancedFilters.selectFilter("categoriesWithComparisons");
	// 	await advancedFilters.categoryWithComparisonBtn.click();
	// 	const selectedCategory = await advancedFilters.keywordSearchForComparisonCategory(filter_data.validKeywordFilter);
	// 	await advancedFilters.comparisonDropdown.click();
	// 	await advancedFilters.comparisonInOption.click();
	// 	await advancedFilters.applyBtn.click();
	// 	const allCategoriesOfRows = await _dataviewPage.getAllRowData("Category");
	// 	for (let i = 0; i < allCategoriesOfRows.length; i++) {
	// 		expect(allCategoriesOfRows.toString()).toContain(selectedCategory.toLowerCase());
	// 	}
	// });

	// test("Validate Title with Comparisons - Contains Title", async () => {
	// 	await advancedFilters.selectFilter("titleWithComparisons");
	// 	await advancedFilters.titleWithComparisonBtn.click();
	// 	await advancedFilters.searchForTitleComparison(advanced_filter_data.searchedTitleSimple);
	// 	await advancedFilters.selectTitleComparisonOptionFromDropdown("Contains");
	// 	await advancedFilters.applyBtn.click();
	// 	const allTitlesOfRows = await _dataviewPage.getAllRowData("Title");
	// 	for (let i = 0; i < allTitlesOfRows.length; i++) {
	// 		expect(allTitlesOfRows.toString()).toContain(advanced_filter_data.searchedTitleSimple.toLowerCase());
	// 	}
	// });

	// test("Validate Title with Comparisons - Not Contains Title", async () => {
	// 	await advancedFilters.selectFilter("titleWithComparisons");
	// 	await advancedFilters.titleWithComparisonBtn.click();
	// 	await advancedFilters.searchForTitleComparison(advanced_filter_data.searchedTitle);
	// 	await advancedFilters.selectTitleComparisonOptionFromDropdown("Does not contain...");
	// 	await advancedFilters.applyBtn.click();
	// 	await pagination.selectResultOption(100);
	// 	const allTitlesOfRows = await _dataviewPage.getAllRowData("Title", 100);
	// 	for (let i = 0; i < allTitlesOfRows.length; i++) {
	// 		expect(allTitlesOfRows.toString()).not.toContain(advanced_filter_data.searchedTitle.toLowerCase());
	// 	}
	// });

	// test("Validate Title with Comparisons - Equal Title", async () => {
	// 	await advancedFilters.selectFilter("titleWithComparisons");
	// 	await advancedFilters.titleWithComparisonBtn.click();
	// 	await advancedFilters.searchForTitleComparison(advanced_filter_data.searchedTitle);
	// 	await advancedFilters.selectTitleComparisonOptionFromDropdown("Equals");
	// 	await advancedFilters.applyBtn.click();
	// 	const allTitlesOfRows = await _dataviewPage.getAllRowData("Title");
	// 	for (let i = 0; i < allTitlesOfRows.length; i++) {
	// 		expect(allTitlesOfRows.toString()).toContain(advanced_filter_data.searchedTitle.toLowerCase());
	// 	}
	// });

	// test("Validate Title with Comparisons - Not Equal Title", async () => {
	// 	await advancedFilters.selectFilter("titleWithComparisons");
	// 	await advancedFilters.titleWithComparisonBtn.click();
	// 	await advancedFilters.searchForTitleComparison(advanced_filter_data.searchedTitle);
	// 	await advancedFilters.selectTitleComparisonOptionFromDropdown("Not Equal");
	// 	await advancedFilters.applyBtn.click();
	// 	const allTitlesOfRows = await _dataviewPage.getAllRowData("Title");
	// 	for (let i = 0; i < allTitlesOfRows.length; i++) {
	// 		expect(allTitlesOfRows.toString()).not.toContain(advanced_filter_data.searchedTitle.toLowerCase());
	// 	}
	// });

	// test("Validate Title with Comparisons - Exists Title", async () => {
	// 	await advancedFilters.selectFilter("titleWithComparisons");
	// 	await advancedFilters.titleWithComparisonBtn.click();
	// 	await advancedFilters.selectTitleComparisonOptionFromDropdown("Exists");
	// 	await advancedFilters.applyBtn.click();
	// 	const allTitlesOfRows = await _dataviewPage.getAllRowData("Title");
	// 	for (let i = 0; i < allTitlesOfRows.length; i++) {
	// 		expect(allTitlesOfRows.toString()).not.toBe("");
	// 	}
	// });

	test("Validate Title with Comparisons - Not Exists Title", async () => {
		await advancedFilters.selectFilter("titleWithComparisons");
		await advancedFilters.titleWithComparisonBtn.click();
		await advancedFilters.selectTitleComparisonOptionFromDropdown("Not Exists");
		await advancedFilters.applyBtn.click();
		expect(await _dataviewPage.noResults.textContent()).toBe(advanced_filter_data.noResults);
	});

	test.skip("Validate created filter with valid dates", async () => {
		const startDate = advanced_filter_data.validStartDateRange;
		const endDate = advanced_filter_data.validEndDateRange;
		await advancedFilters.selectFilter("created");
		await advancedFilters.createdBtn.click();
		await advancedFilters.selectFilterDates(startDate, endDate);
		await advancedFilters.applyBtn.click();
		await advancedFilters.waitForElementLoad();

		expect(await pagination.paginationValue.textContent()).toBe(`1-${advanced_filter_data.createdFilterResults} of ${advanced_filter_data.createdFilterResults}`);
		const createdValues = await _dataviewPage.getAllRowData("Created", dataview_data.resultPerPageDefault);
		const result = isACorrentDateRange(createdValues, startDate, endDate);
		expect(result.length).toBe(0);
	});

	test.skip("Validate created filter no return results", async () => {
		await advancedFilters.selectFilter("created");
		await advancedFilters.createdBtn.click();
		const endDate = advanced_filter_data.validEndDateRange;
		await advancedFilters.waitForElementLoad();
		await advancedFilters.selectFilterDates(endDate, endDate);
		await advancedFilters.wait();
		await advancedFilters.applyBtn.click();
		await advancedFilters.waitForElementLoad();
		expect(await _dataviewPage.noResults.textContent()).toBe(advanced_filter_data.noResults);
	});

	test.skip("Clear created filter", async () => {
		const startDate = advanced_filter_data.validStartDateRange;
		const endDate = advanced_filter_data.validEndDateRange;
		await advancedFilters.selectFilter("created");
		await advancedFilters.createdBtn.click();
		await advancedFilters.selectFilterDates(startDate, endDate);
		await advancedFilters.wait();
		await advancedFilters.clearBtn.click();

		expect(await advancedFilters.fromCalendarInput.inputValue()).toBe("");
		expect(await advancedFilters.toCalendarInput.inputValue()).toBe("");
		await advancedFilters.pressSpecificKeyInKeyboard("Escape");
	});

	test.skip("Remove created filter", async () => {
		const startDate = advanced_filter_data.validStartDateRange;
		const endDate = advanced_filter_data.validEndDateRange;
		await advancedFilters.selectFilter("created");
		await advancedFilters.createdBtn.click();
		await advancedFilters.selectFilterDates(startDate, endDate);
		await advancedFilters.applyBtn.click();
		await advancedFilters.wait();
		await advancedFilters.selectFilter("created");
		await advancedFilters.waitForElementLoad();
		expect(await pagination.paginationValue.textContent()).toBe(`1-${dataview_data.resultPerPageDefault} of ${dataview_data.totalRecords}`);
	});

	test.skip("Validate updated filter with valid dates", async () => {
		const startDate = advanced_filter_data.validStartDateRange;
		const endDate = advanced_filter_data.validEndDateRange;
		await columns.selectColumn(advanced_filter_data.updatedOptionFilter);
		await advancedFilters.waitForElementLoad();
		await advancedFilters.selectFilter("updated");
		await advancedFilters.updatedBtn.click();
		await advancedFilters.selectFilterDates(startDate, endDate);
		await advancedFilters.applyBtn.click();
		await advancedFilters.waitForElementLoad();

		expect(await pagination.paginationValue.textContent()).toBe(`1-${advanced_filter_data.updateFilterResults} of ${advanced_filter_data.updateFilterResults}`);
		const updatedValues = await _dataviewPage.getAllRowData("Updated", dataview_data.resultPerPageDefault);
		const result = isACorrentDateRange(updatedValues, startDate, endDate);
		expect(result.length).toBe(0);
	});

	test.skip("Validate updated filter no return results", async () => {
		await columns.selectColumn(advanced_filter_data.updatedOptionFilter);
		await advancedFilters.selectFilter("updated");
		await advancedFilters.updatedBtn.click();
		const endDate = advanced_filter_data.validEndDateRange;
		await advancedFilters.waitForElementLoad();
		await advancedFilters.selectFilterDates(endDate, endDate);
		await advancedFilters.wait();
		await advancedFilters.applyBtn.click();
		await advancedFilters.waitForElementLoad();
		expect(await _dataviewPage.noResults.textContent()).toBe(advanced_filter_data.noResults);
	});

	test.skip("Clear updated filter", async () => {
		const startDate = advanced_filter_data.validStartDateRange;
		const endDate = advanced_filter_data.validEndDateRange;
		await columns.selectColumn(advanced_filter_data.updatedOptionFilter);
		await advancedFilters.selectFilter("updated");
		await advancedFilters.updatedBtn.click();
		await advancedFilters.selectFilterDates(startDate, endDate);
		await advancedFilters.wait();
		await advancedFilters.clearBtn.click();
		expect(await advancedFilters.fromCalendarInput.inputValue()).toBe("");
		expect(await advancedFilters.toCalendarInput.inputValue()).toBe("");
		await advancedFilters.pressSpecificKeyInKeyboard("Escape");
	});

	test.skip("Remove updated filter", async () => {
		const startDate = advanced_filter_data.validStartDateRange;
		const endDate = advanced_filter_data.validEndDateRange;
		await columns.selectColumn(advanced_filter_data.updatedOptionFilter);

		await advancedFilters.selectFilter("updated");
		await advancedFilters.updatedBtn.click();
		await advancedFilters.selectFilterDates(startDate, endDate);
		await advancedFilters.applyBtn.click();
		await advancedFilters.wait();
		await advancedFilters.selectFilter("updated");
		await advancedFilters.wait();
		expect(await pagination.paginationValue.textContent()).toBe(`1-${dataview_data.resultPerPageDefault} of ${dataview_data.totalRecords}`);
	});

	test("Validate that Removing emply Title filter doesn't trigger a reload", async () => {
		await advancedFilters.selectFilter("title");
		await advancedFilters._dataviewPage.filtersBtn.click();
		await advancedFilters.titleOption.first().click();
		await advancedFilters.applyBtn.click();
		await expect(advancedFilters.loading).not.toBeVisible();
	});
});
