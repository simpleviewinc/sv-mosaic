import { test, expect } from "@playwright/test";
import { DataviewPage } from "../../pages/DataView/DataViewPage";
import { advanced_filter_data, dataview_data, filter_data } from "../../utils/data/dataview_data";
import { AdvancedFiltersComponent } from "../../pages/DataView/AdvancedFiltersComponent";
import { DatePickerComponent } from "../../pages/DataView/DatePickerComponent";
import { PaginationComponent } from "../../pages/DataView/PaginationComponent";
import { isACorrentDateRange } from "../../utils/helpers/helper";
import { ColumnsComponent } from "../../pages/DataView/ColumnsComponent";


test.describe("DataView - Advanced Filters", () => {
	let dataviewPage: DataviewPage;
	let advancedFilters: AdvancedFiltersComponent;
	let datepicker: DatePickerComponent;
	let pagination: PaginationComponent;
	let columns: ColumnsComponent;

	test.beforeEach(async ({ page }) => {
		dataviewPage = new DataviewPage(page);
		advancedFilters = dataviewPage.advancedFilterComponent;
		datepicker = advancedFilters.datepicker;
		pagination = dataviewPage.paginationComponent;
		columns = dataviewPage.columnsComponent;
		await dataviewPage.visitPage();
	});

	test("Validate that all advanced filters have default value equal to Any", async () => {
		await advancedFilters.moreBtn.click();
		await advancedFilters.selectAllAdvancedFilters();
		const allSelectedFilters = await advancedFilters.getAllSelectedValuesForAdvancedFilters();
		for (let i = 0; i < allSelectedFilters.length; i++) {
			expect(allSelectedFilters.toString()).toBe("Any");
		}
	});

	test("Validate Single select category", async () => {
		await advancedFilters.moreBtn.click();
		await advancedFilters.singleSelectCategoryOption.click();
		//This clicks the title of the page so the More menu closes.
		await dataviewPage.title.click({ force: true });
		await advancedFilters.optionalFilters.click();
		const categorySelected = (await advancedFilters.selectARandomCategoryForSingleSelectCategoryOption());
		expect((await advancedFilters.getSelectedValueForSingleSelectCategoryOption())).toBe(categorySelected);
		const allCategoriesOfRows = await dataviewPage.getCategoriesFromRow();
		for (let i = 0; i < allCategoriesOfRows.length; i++) {
			expect(allCategoriesOfRows.toString()).toContain(categorySelected);
		}
	});

	test("Validate Categories with Comparisons - In", async () => {
		await advancedFilters.moreBtn.click();
		await advancedFilters.categoryWithComparisonOption.click();
		await dataviewPage.title.click({ force: true });
		await advancedFilters.optionalFilters.click();
		const selectedCategory = await advancedFilters.selectFirstCategoriesForCategoryWithComparisonOption();
		await advancedFilters.comparisonDropdown.click();
		await advancedFilters.comparisonInOption.click();
		await advancedFilters.applyBtn.click();
		const allCategoriesOfRows = await dataviewPage.getCategoriesFromRow();
		for (let i = 0; i < allCategoriesOfRows.length; i++) {
			expect(allCategoriesOfRows.toString()).toContain(selectedCategory);
		}
	});

	// Test fails because Not In is not working properly.
	test("Validate Categories with Comparisons - Not In", async () => {
		await advancedFilters.moreBtn.click();
		await advancedFilters.categoryWithComparisonOption.click();
		await dataviewPage.title.click({ force: true });
		await advancedFilters.optionalFilters.click();
		const selectedCategory = await advancedFilters.selectFirstCategoriesForCategoryWithComparisonOption();
		await advancedFilters.comparisonDropdown.click();
		await advancedFilters.comparisonNotInOption.click();
		await advancedFilters.applyBtn.click();
		const allCategoriesOfRows = await dataviewPage.getCategoriesFromRow();
		for (let i = 0; i < allCategoriesOfRows.length; i++) {
			expect(allCategoriesOfRows.toString()).not.toContain(selectedCategory);
		}
	});

	// Test fails because All is not working properly.
	test("Validate Categories with Comparisons - All", async () => {
		await advancedFilters.moreBtn.click();
		await advancedFilters.categoryWithComparisonOption.click();
		await dataviewPage.title.click({ force: true });
		await advancedFilters.optionalFilters.click();
		const selectedCategory = await advancedFilters.selectFirstCategoriesForCategoryWithComparisonOption();
		await advancedFilters.comparisonDropdown.click();
		await advancedFilters.comparisonAllOption.click();
		await advancedFilters.applyBtn.click();
		const allCategoriesOfRows = await dataviewPage.getCategoriesFromRow();
		for (let i = 0; i < allCategoriesOfRows.length; i++) {
			expect(allCategoriesOfRows.toString()).toBe(selectedCategory);
		}
	});

	test("Validate Categories with Comparisons - Exists", async () => {
		await advancedFilters.moreBtn.click();
		await advancedFilters.categoryWithComparisonOption.click();
		await dataviewPage.title.click({ force: true });
		await advancedFilters.optionalFilters.click();
		await advancedFilters.comparisonDropdown.click();
		await advancedFilters.comparisonExistsOption.click();
		await advancedFilters.applyBtn.click();
		const allCategoriesOfRows = await dataviewPage.getCategoriesFromRow();
		for (let i = 0; i < allCategoriesOfRows.length; i++) {
			expect(allCategoriesOfRows.toString()).not.toBe("");
		}
	});

	test("Validate Categories with Comparisons - Not Exists", async () => {
		await advancedFilters.moreBtn.click();
		await advancedFilters.categoryWithComparisonOption.click();
		await dataviewPage.title.click({ force: true });
		await advancedFilters.optionalFilters.click();
		await advancedFilters.comparisonDropdown.click();
		await advancedFilters.comparisonNotExistsOption.click();
		await advancedFilters.applyBtn.click();
		const allCategoriesOfRows = await dataviewPage.getCategoriesFromRow();
		for (let i = 0; i < allCategoriesOfRows.length; i++) {
			expect(allCategoriesOfRows.toString()).toContain("");
		}
	});

	test("Validate Categories with Comparisons - Help Dialog", async () => {
		await advancedFilters.moreBtn.click();
		await advancedFilters.categoryWithComparisonOption.click();
		await dataviewPage.title.click({ force: true });
		await advancedFilters.optionalFilters.click();
		await advancedFilters.helpComparisonCategoriesDialogButton.click();
		const helpDialog = await advancedFilters.getHelpDialogFromCategoryWithComparisonOption();
		expect(helpDialog.toString()).toBe(advanced_filter_data.categoryComparisonHelpDialog);
	});

	test("Validate Categories with Comparisons - Keyword search", async () => {
		await advancedFilters.moreBtn.click();
		await advancedFilters.categoryWithComparisonOption.click();
		await dataviewPage.title.click({ force: true });
		await advancedFilters.optionalFilters.click();
		const selectedCategory = await advancedFilters.keywordSearchForComparisonCategory(filter_data.validKeywordFilter);
		await advancedFilters.comparisonDropdown.click();
		await advancedFilters.comparisonInOption.click();
		await advancedFilters.applyBtn.click();
		const allCategoriesOfRows = await dataviewPage.getCategoriesFromRow();
		for (let i = 0; i < allCategoriesOfRows.length; i++) {
			expect(allCategoriesOfRows.toString()).toContain(selectedCategory);
		}
	});

	test("Validate Title with Comparisons - Contains Title", async () => {
		await advancedFilters.moreBtn.click();
		await advancedFilters.titleWithComparisonOption.click();
		await dataviewPage.title.click({ force: true });
		await advancedFilters.optionalFilters.click();
		await advancedFilters.searchForTitleComparison(advanced_filter_data.searchedTitleSimple);
		await advancedFilters.selectTitleComparisonOptionFromDropdown("Contains");
		await advancedFilters.applyBtn.click();
		const allTitlesOfRows = await dataviewPage.getRowTitles();
		for (let i = 0; i < allTitlesOfRows.length; i++) {
			expect(allTitlesOfRows.toString()).toContain(advanced_filter_data.searchedTitleSimple.toLowerCase());
		}
	});

	test("Validate Title with Comparisons - Not Contains Title", async () => {
		await advancedFilters.moreBtn.click();
		await advancedFilters.titleWithComparisonOption.click();
		await dataviewPage.title.click({ force: true });
		await advancedFilters.optionalFilters.click();
		await advancedFilters.searchForTitleComparison(advanced_filter_data.searchedTitle);
		await advancedFilters.selectTitleComparisonOptionFromDropdown("Not Contains");
		await advancedFilters.applyBtn.click();
		const allTitlesOfRows = await dataviewPage.getRowTitles();
		for (let i = 0; i < allTitlesOfRows.length; i++) {
			expect(allTitlesOfRows.toString()).not.toContain(advanced_filter_data.searchedTitle.toLowerCase());
		}
	});

	test("Validate Title with Comparisons - Equal Title", async () => {
		await advancedFilters.moreBtn.click();
		await advancedFilters.titleWithComparisonOption.click();
		await dataviewPage.title.click({ force: true });
		await advancedFilters.optionalFilters.click();
		await advancedFilters.searchForTitleComparison(advanced_filter_data.searchedTitle);
		await advancedFilters.selectTitleComparisonOptionFromDropdown("Equals");
		await advancedFilters.applyBtn.click();
		const allTitlesOfRows = await dataviewPage.getRowTitles();
		for (let i = 0; i < allTitlesOfRows.length; i++) {
			expect(allTitlesOfRows.toString()).toContain(advanced_filter_data.searchedTitle.toLowerCase());
		}
	});

	test("Validate Title with Comparisons - Not Equal Title", async () => {
		await advancedFilters.moreBtn.click();
		await advancedFilters.titleWithComparisonOption.click();
		await dataviewPage.title.click({ force: true });
		await advancedFilters.optionalFilters.click();
		await advancedFilters.searchForTitleComparison(advanced_filter_data.searchedTitle);
		await advancedFilters.selectTitleComparisonOptionFromDropdown("Not Equal");
		await advancedFilters.applyBtn.click();
		const allTitlesOfRows = await dataviewPage.getRowTitles();
		for (let i = 0; i < allTitlesOfRows.length; i++) {
			expect(allTitlesOfRows.toString()).not.toContain(advanced_filter_data.searchedTitle.toLowerCase());
		}
	});

	test("Validate Title with Comparisons - Exists Title", async () => {
		await advancedFilters.moreBtn.click();
		await advancedFilters.titleWithComparisonOption.click();
		await dataviewPage.title.click({ force: true });
		await advancedFilters.optionalFilters.click();
		await advancedFilters.selectTitleComparisonOptionFromDropdown("Exists");
		await advancedFilters.applyBtn.click();
		const allTitlesOfRows = await dataviewPage.getRowTitles();
		for (let i = 0; i < allTitlesOfRows.length; i++) {
			expect(allTitlesOfRows.toString()).not.toBe("");
		}
	});

	// Test fails because Not Exists is not working properly.
	test("Validate Title with Comparisons - Not Exists Title", async () => {
		await advancedFilters.moreBtn.click();
		await advancedFilters.titleWithComparisonOption.click();
		await dataviewPage.title.click({ force: true });
		await advancedFilters.optionalFilters.click();
		await advancedFilters.selectTitleComparisonOptionFromDropdown("Not Exists");
		await advancedFilters.applyBtn.click();
		const allTitlesOfRows = await dataviewPage.getRowTitles();
		for (let i = 0; i < allTitlesOfRows.length; i++) {
			expect(allTitlesOfRows.toString()).toContainEqual("");
		}
	});

	test("Validate created filter with valid dates", async () => {
		await advancedFilters.moreBtn.click();
		await advancedFilters.createdOption.check();
		expect(await advancedFilters.createdOption.isChecked()).toBe(true);
		await dataviewPage.title.click({ force: true });
		await advancedFilters.validateSnapshot(advancedFilters.optionalFilters.nth(0), "created_filter");
		await advancedFilters.optionalFilters.nth(0).locator("button").click();

		const startDate = advanced_filter_data.validStartDateRange;
		const endDate = advanced_filter_data.validEndDateRange;
		await advancedFilters.waitForElementLoad();
		await advancedFilters.wait();
		await advancedFilters.validateSnapshot(advancedFilters.createdFilterDiv, "created_filter_div");
		await (await advancedFilters.getFieldDate("from")).click();
		await datepicker.selectDate(startDate);
		await advancedFilters.validateSnapshot(datepicker.datepickerDiv, "datepicker_div");
		await datepicker.okBtn.click();
		await (await advancedFilters.getFieldDate("To")).click();
		await datepicker.selectDate(endDate);
		await datepicker.okBtn.click();
		await advancedFilters.applyBtn.click();
		await advancedFilters.waitForElementLoad();

		expect(await pagination.paginationValue.textContent()).toBe(`1-${advanced_filter_data.createdFilterResults} of ${advanced_filter_data.createdFilterResults}`);
		const createdValues = await dataviewPage.getAllRowCreated(dataview_data.resultPerPageDefault);
		const result = isACorrentDateRange(createdValues, startDate, endDate);
		expect(result.length).toBe(0);

	});

	test("Validate created filter with invalid range of dates", async () => {
		const startDate = advanced_filter_data.validStartDateRange;
		const endDate = advanced_filter_data.validEndDateRange;

		await advancedFilters.moreBtn.click();
		await advancedFilters.createdOption.check();
		await dataviewPage.title.click({ force: true });
		await advancedFilters.selectFilterDates(endDate, startDate);
		await advancedFilters.wait();
		expect(await advancedFilters.applyBtn.isDisabled()).toBe(true);
		expect(await advancedFilters.errorMessageDates.textContent()).toContain(advanced_filter_data.errorMessageDates);
	});

	test("Validate created filter no return results", async () => {
		await advancedFilters.moreBtn.click();
		await advancedFilters.createdOption.check();
		await dataviewPage.title.click({ force: true });
		await advancedFilters.optionalFilters.nth(0).locator("button").click();
		const endDate = advanced_filter_data.validEndDateRange;
		await advancedFilters.waitForElementLoad();
		await (await advancedFilters.getFieldDate("from")).click();
		await datepicker.selectDate(endDate);
		await datepicker.okBtn.click();
		await advancedFilters.wait();
		await advancedFilters.applyBtn.click();
		await advancedFilters.waitForElementLoad();
		expect(await dataviewPage.noResults.textContent()).toBe(advanced_filter_data.noResults);
	});

	test("Clear created filter", async () => {
		const startDate = advanced_filter_data.validStartDateRange;
		const endDate = advanced_filter_data.validEndDateRange;

		await advancedFilters.moreBtn.click();
		await advancedFilters.createdOption.check();
		await dataviewPage.title.click({ force: true });
		await advancedFilters.selectFilterDates(startDate, endDate);
		await advancedFilters.wait();
		await advancedFilters.clearBtn.click();

		expect(await (await advancedFilters.getFieldDate("from")).inputValue()).toBe("");
		expect(await (await advancedFilters.getFieldDate("to")).inputValue()).toBe("");
	});

	test("Cancel created filter", async () => {
		const startDate = advanced_filter_data.validStartDateRange;
		const endDate = advanced_filter_data.validEndDateRange;

		await advancedFilters.moreBtn.click();
		await advancedFilters.createdOption.check();
		await dataviewPage.title.click({ force: true });
		await advancedFilters.selectFilterDates(startDate, endDate);
		await advancedFilters.cancelBtn.click();
		await advancedFilters.wait();

		expect(await (await advancedFilters.getFieldDate("from")).isHidden()).toBe(true);
		expect(await (await advancedFilters.getFieldDate("to")).isHidden()).toBe(true);
		expect(await (await advancedFilters.getAllSelectedValuesForAdvancedFilters()).toString()).toBe("Any");
	});

	test("Remove created filter", async () => {
		const startDate = advanced_filter_data.validStartDateRange;
		const endDate = advanced_filter_data.validEndDateRange;

		await advancedFilters.moreBtn.click();
		await advancedFilters.createdOption.check();
		await dataviewPage.title.click({ force: true });
		await advancedFilters.selectFilterDates(startDate, endDate);
		await advancedFilters.applyBtn.click();
		await advancedFilters.wait();
		const filterBtn = await advancedFilters.optionalFilters.nth(0).locator("button");
		await (await advancedFilters.getCloseBtn(await filterBtn)).click();
		await advancedFilters.waitForElementLoad();
		expect(await pagination.paginationValue.textContent()).toBe(`1-${dataview_data.resultPerPageDefault} of ${dataview_data.totalRecords}`);
	});

	test("Validate updated filter with valid dates", async () => {
		await advancedFilters.moreBtn.click();
		await advancedFilters.updatedOption.check();
		expect(await advancedFilters.updatedOption.isChecked()).toBe(true);
		await dataviewPage.title.click({ force: true });
		await advancedFilters.validateSnapshot(advancedFilters.optionalFilters.nth(0), "updated_filter");

		await columns.selectColum(advanced_filter_data.updatedOptionFilter);

		await advancedFilters.waitForElementLoad();
		await advancedFilters.optionalFilters.nth(0).locator("button").click();

		const startDate = advanced_filter_data.validStartDateRange;
		const endDate = advanced_filter_data.validEndDateRange;
		await advancedFilters.waitForElementLoad();
		await advancedFilters.wait();
		await advancedFilters.validateSnapshot(advancedFilters.createdFilterDiv, "update_filter_div");
		await (await advancedFilters.getFieldDate("from")).click();
		await datepicker.selectDate(startDate);
		await datepicker.okBtn.click();
		await (await advancedFilters.getFieldDate("To")).click();
		await datepicker.selectDate(endDate);
		await datepicker.okBtn.click();
		await advancedFilters.applyBtn.click();
		await advancedFilters.waitForElementLoad();

		expect(await pagination.paginationValue.textContent()).toBe(`1-${advanced_filter_data.updateFilterResults} of ${advanced_filter_data.updateFilterResults}`);
		const updatedValues = await dataviewPage.getAllRowUpdated(dataview_data.resultPerPageDefault);
		const result = isACorrentDateRange(updatedValues, startDate, endDate);
		expect(result.length).toBe(0);
	});

	test("Validate updated filter with invalid range of dates", async () => {
		const startDate = advanced_filter_data.validStartDateRange;
		const endDate = advanced_filter_data.validEndDateRange;

		await columns.selectColum(advanced_filter_data.updatedOptionFilter);

		await advancedFilters.moreBtn.click();
		await advancedFilters.updatedOption.check();
		await dataviewPage.title.click({ force: true });
		await advancedFilters.selectFilterDates(endDate, startDate);
		await advancedFilters.wait();
		expect(await advancedFilters.applyBtn.isDisabled()).toBe(true);
		expect(await advancedFilters.errorMessageDates.textContent()).toContain(advanced_filter_data.errorMessageDates);
	});

	test("Validate updated filter no return results", async () => {
		await columns.selectColum(advanced_filter_data.updatedOptionFilter);

		await advancedFilters.moreBtn.click();
		await advancedFilters.updatedOption.check();
		await dataviewPage.title.click({ force: true });
		await advancedFilters.optionalFilters.nth(0).locator("button").click();
		const endDate = advanced_filter_data.validEndDateRange;
		await advancedFilters.waitForElementLoad();
		await (await advancedFilters.getFieldDate("from")).click();
		await datepicker.selectDate(endDate);
		await datepicker.okBtn.click();
		await advancedFilters.wait();
		await advancedFilters.applyBtn.click();
		await advancedFilters.waitForElementLoad();
		expect(await dataviewPage.noResults.textContent()).toBe(advanced_filter_data.noResults);
	});

	test("Clear updated filter", async () => {
		const startDate = advanced_filter_data.validStartDateRange;
		const endDate = advanced_filter_data.validEndDateRange;

		await columns.selectColum(advanced_filter_data.updatedOptionFilter);

		await advancedFilters.moreBtn.click();
		await advancedFilters.updatedOption.check();
		await dataviewPage.title.click({ force: true });
		await advancedFilters.selectFilterDates(startDate, endDate);
		await advancedFilters.wait();
		await advancedFilters.clearBtn.click();

		expect(await (await advancedFilters.getFieldDate("from")).inputValue()).toBe("");
		expect(await (await advancedFilters.getFieldDate("to")).inputValue()).toBe("");
	});

	test("Cancel updated filter", async () => {
		const startDate = advanced_filter_data.validStartDateRange;
		const endDate = advanced_filter_data.validEndDateRange;

		await columns.selectColum(advanced_filter_data.updatedOptionFilter);

		await advancedFilters.moreBtn.click();
		await advancedFilters.updatedOption.check();
		await dataviewPage.title.click({ force: true });
		await advancedFilters.selectFilterDates(startDate, endDate);
		await advancedFilters.cancelBtn.click();
		await advancedFilters.wait();

		expect(await (await advancedFilters.getFieldDate("from")).isHidden()).toBe(true);
		expect(await (await advancedFilters.getFieldDate("to")).isHidden()).toBe(true);
		expect(await (await advancedFilters.getAllSelectedValuesForAdvancedFilters()).toString()).toBe("Any");
	});

	test("Remove updated filter", async () => {
		const startDate = advanced_filter_data.validStartDateRange;
		const endDate = advanced_filter_data.validEndDateRange;

		await columns.selectColum(advanced_filter_data.updatedOptionFilter);

		await advancedFilters.moreBtn.click();
		await advancedFilters.updatedOption.check();
		await dataviewPage.title.click({ force: true });
		await advancedFilters.selectFilterDates(startDate, endDate);
		await advancedFilters.applyBtn.click();
		await advancedFilters.wait();
		const filterBtn = await advancedFilters.optionalFilters.nth(0).locator("button");
		await (await advancedFilters.getCloseBtn(await filterBtn)).click();
		await advancedFilters.waitForElementLoad();
		expect(await pagination.paginationValue.textContent()).toBe(`1-${dataview_data.resultPerPageDefault} of ${dataview_data.totalRecords}`);
	});
});
