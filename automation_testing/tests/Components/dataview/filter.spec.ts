import { expect, test } from "@playwright/test";
import { DataviewPage } from "../../../pages/Components/DataView/DataViewPage";
import { FilterComponent } from "../../../pages/Components/DataView/FilterComponent";
import { dataview_data, filter_data } from "../../../utils/data/dataview_data";
import { addQuotes, addComma } from "../../../utils/helpers/helper";

test.describe("DataView - Filter", () => {
	let dataviewPage: DataviewPage;
	let filter: FilterComponent;

	test.beforeEach(async ({ page }) => {
		dataviewPage = new DataviewPage(page);
		filter = dataviewPage.filterComponent;
		await dataviewPage.visitPage();
	});

	test("Filter title with a valid keyword and 1 result", async () => {
		// await filter.validateSnapshot(filter.keywordBtn, "filter_keyword_btn");
		await filter.keywordBtn.hover();
		// await filter.validateSnapshot(filter.keywordBtn, "filter_keyword_btn_hover");
		await filter.keywordBtn.click();
		await filter.keywordInput.type(filter_data.validKeywordFilter);
		await filter.applyBtn.click();
		expect(await (await dataviewPage.getTableRows()).count()).toBe(filter_data.expectedKeywordFilterNumber);
		expect((await dataviewPage.getAllRowTitles(dataview_data.resultPerPageDefault)).toString()).toContain(filter_data.validKeywordFilter.toLowerCase());
		expect(await dataviewPage.paginationComponent.paginationValue.textContent()).toBe(`1-${filter_data.expectedKeywordFilterNumber} of ${filter_data.expectedKeywordFilterNumber}`);
		expect(await filter.getKeywordText()).toBe(addQuotes(filter_data.validKeywordFilter));
	});

	test("Filter title with a valid keyword and several results", async () => {
		await filter.keywordBtn.click();
		await filter.keywordInput.type(filter_data.validKeywordFilterSeveralResults);
		await filter.applyBtn.click();
		expect(await (await dataviewPage.getTableRows()).count()).toBe(filter_data.expectedKeywordFilterNumberSeveralResults);
		const titles = await dataviewPage.getAllRowTitles(dataview_data.resultPerPageDefault);
		await dataviewPage.validateContainsKeyword(titles, filter_data.validKeywordFilterSeveralResults);
		expect(await dataviewPage.paginationComponent.paginationValue.textContent()).toBe(`1-${filter_data.expectedKeywordFilterNumberSeveralResults} of ${filter_data.expectedKeywordFilterNumberSeveralResults}`);
		expect(await filter.getKeywordText()).toBe(addQuotes(filter_data.validKeywordFilterSeveralResults));
	});

	test("Filter title with a valid keyword and no results", async () => {
		await filter.keywordBtn.click();
		await filter.keywordInput.type(filter_data.keywordNoResultsFilter);
		await filter.applyBtn.click();
		await expect( dataviewPage.page.locator(".noResults")).toBeVisible()
		expect(await filter.getKeywordText()).toBe(addQuotes(filter_data.keywordNoResultsFilter));
	});

	test("Filter title with a special character", async () => {
		await filter.keywordBtn.click();
		await filter.keywordInput.type("+");
		await filter.applyBtn.click();
		expect(await filter.getKeywordText()).toBe(addQuotes("+"));
	});

	test("Filter title with an Uppercase keyword", async () => {
		await filter.keywordBtn.click();
		await filter.keywordInput.type(filter_data.upperCaseKeywordFilter);
		await filter.applyBtn.click();
		expect(await (await dataviewPage.getTableRows()).count()).toBe(filter_data.upperCaseFilterNumber);
		const titles = await dataviewPage.getAllRowTitles(dataview_data.resultPerPageDefault);
		await dataviewPage.validateContainsKeyword(titles, filter_data.upperCaseKeywordFilter);
		expect(await filter.getKeywordText()).toBe(addQuotes(filter_data.upperCaseKeywordFilter));
	});

	test("Filter title with a Lowerrcase keyword", async () => {
		await filter.keywordBtn.click();
		await filter.keywordInput.type(filter_data.lowerCaseKeywordFilter);
		await filter.applyBtn.click();
		await filter.wait();
		expect(await (await dataviewPage.getTableRows()).count()).toBe(filter_data.lowerCaseFilterNumber);
		const titles = await dataviewPage.getAllRowTitles(dataview_data.resultPerPageDefault);
		await dataviewPage.validateContainsKeyword(titles, filter_data.lowerCaseKeywordFilter);
		expect(await filter.getKeywordText()).toBe(addQuotes(filter_data.lowerCaseKeywordFilter));
		await filter.validateKeywordFilterIsVisible(false);
	});

	test("Clear keyword filter", async () => {
		await filter.keywordBtn.click();
		await filter.keywordInput.type(filter_data.lowerCaseKeywordFilter);
		await filter.clearBtn.click();
		await filter.wait();
		expect(await filter.keywordInput.textContent()).toBe("");
		await filter.validateKeywordFilterIsVisible(true);
	});

	test("Clear keyword filter after apply it", async () => {
		await filter.keywordBtn.click();
		await filter.keywordInput.type(filter_data.lowerCaseKeywordFilter);
		await filter.applyBtn.click();
		await filter.keywordBtn.click();
		await filter.clearBtn.click();
		expect(await filter.keywordInput.textContent()).toBe("");
		await filter.applyBtn.click();
		await filter.wait();
		expect(await filter.getKeywordText()).toBe("Any");
		await filter.validateKeywordFilterIsVisible(false);
	});

	test("Cancel filter", async () => {
		await filter.keywordBtn.click();
		await filter.keywordInput.type(filter_data.lowerCaseKeywordFilter);
		await filter.cancelBtn.click();
		expect(await filter.getKeywordText()).toBe("Any");
		expect(await filter.keywordInput.isVisible()).toBe(false);
	});

	test("Filter category searching keyword", async () => {
		await filter.categoryBtn.click();
		await filter.categoryKeywordInput.type(filter_data.categoryKeywordFilter);
		await filter.selectCategory(filter_data.categoryKeywordFilter);
		expect(await filter.getCategorySelectedOptionValues()).toContain(filter_data.categoryKeywordFilter);
		await filter.applyBtn.click();
		expect(await (await dataviewPage.getTableRows()).count()).toBe(filter_data.categoryFilterNumber);
		const categories = await dataviewPage.getAllRowCategories(dataview_data.resultPerPageDefault);
		await dataviewPage.validateContainsKeyword(categories, filter_data.categoryKeywordFilter);
		expect(await filter.getCategoriesKeywordText()).toBe(filter_data.categoryKeywordFilter);
	});

	test("Filter categories choosing a value from the list", async () => {
		await filter.categoryBtn.click();
		await filter.selectCategory(filter_data.categoryFilterChooseItem);
		expect(await filter.getCategorySelectedOptionValues()).toContain(filter_data.categoryFilterChooseItem);
		await filter.applyBtn.click();
		expect(await (await dataviewPage.getTableRows()).count()).toBe(filter_data.categoryFilterChooseItemNumber);
		const categories = await dataviewPage.getAllRowCategories(dataview_data.resultPerPageDefault);
		await dataviewPage.validateContainsKeyword(categories, filter_data.categoryFilterChooseItem);
		expect(await filter.getCategoriesKeywordText()).toBe(filter_data.categoryFilterChooseItem);
	});

	test("Filter by 2 category", async () => {
		await filter.categoryBtn.click();
		await filter.selectCategory(filter_data.categoryFilterChooseItem);
		await filter.selectCategory(filter_data.categoryFilterMoreThanOne);
		expect(await filter.getCategorySelectedOptionValues()).toContain(filter_data.categoryFilterChooseItem);
		expect(await filter.getCategorySelectedOptionValues()).toContain(filter_data.categoryFilterMoreThanOne);
		await filter.applyBtn.click();
		expect(await (await dataviewPage.getTableRows()).count()).toBe(filter_data.categoryFilterMoreThanOneNumber);
		const categories = await dataviewPage.getAllRowCategories(dataview_data.resultPerPageDefault);
		await dataviewPage.validateContainsMoreThanOneKeyword(categories, [filter_data.categoryFilterChooseItem, filter_data.categoryFilterMoreThanOne]);
		expect(await filter.getCategoriesKeywordText()).toContain(addComma([filter_data.categoryFilterChooseItem, filter_data.categoryFilterMoreThanOne]));
	});

	test("Filter by more than 2 categories", async () => {
		await filter.categoryBtn.click();
		await filter.selectCategory(filter_data.categoryFilterChooseItem);
		await filter.selectCategory(filter_data.categoryFilterMoreThanOne);
		await filter.loadMoreBtn.click();
		await filter.selectCategory(filter_data.categoryFilterLoadMore);
		expect(await filter.getCategorySelectedOptionValues()).toContain(filter_data.categoryFilterChooseItem);
		expect(await filter.getCategorySelectedOptionValues()).toContain(filter_data.categoryFilterMoreThanOne);
		expect(await filter.getCategorySelectedOptionValues()).toContain(filter_data.categoryFilterLoadMore);
		await filter.applyBtn.click();
		expect(await (await dataviewPage.getTableRows()).count()).toBe(filter_data.categoryFilterMoreThanTwoNumber);
		const categories = await dataviewPage.getAllRowCategories(dataview_data.resultPerPageDefault);
		await dataviewPage.validateContainsMoreThanOneKeyword(categories, [filter_data.categoryFilterChooseItem, filter_data.categoryFilterMoreThanOne, filter_data.categoryFilterLoadMore]);
		expect(await filter.getCategoriesKeywordText()).toContain(addComma([filter_data.categoryFilterChooseItem, filter_data.categoryFilterMoreThanOne + " " + filter_data.categoryFilterMoreMessage]));
	});

	test("Remove category filter selected", async () => {
		await filter.categoryBtn.click();
		await filter.selectCategory(filter_data.categoryFilterChooseItem);
		await filter.selectCategory(filter_data.categoryFilterMoreThanOne);
		expect(await filter.getCategorySelectedOptionValues()).toContain(filter_data.categoryFilterChooseItem);
		expect(await filter.getCategorySelectedOptionValues()).toContain(filter_data.categoryFilterMoreThanOne);
		await filter.applyBtn.click();
		await filter.categoryBtn.click();
		await filter.wait();
		await filter.removeSelectedOptionsByName(filter_data.categoryFilterMoreThanOne);
		await filter.applyBtn.click();
		const categories = await dataviewPage.getAllRowCategories(dataview_data.resultPerPageDefault);
		await dataviewPage.validateContainsKeyword(categories, filter_data.categoryFilterChooseItem);
		expect(await (await dataviewPage.getTableRows()).count()).toBe(filter_data.categoryFilterChooseItemNumber);
		expect(await filter.getCategoriesKeywordText()).toBe(filter_data.categoryFilterChooseItem);
	});

	test("Clear category filter", async () => {
		await filter.categoryBtn.click();
		await filter.selectCategory(filter_data.categoryFilterChooseItem);
		await filter.selectCategory(filter_data.categoryFilterMoreThanOne);
		expect(await filter.getCategorySelectedOptionValues()).toContain(filter_data.categoryFilterChooseItem);
		expect(await filter.getCategorySelectedOptionValues()).toContain(filter_data.categoryFilterMoreThanOne);
		await filter.clearBtn.click();
		await filter.wait();
		expect(await filter.selectedOptions.count()).toBe(0);
		expect(await filter.getCategoriesKeywordText()).toBe("Any");
		await filter.validateCategoryFilterIsVisible(true);
	});

	test("Cancel category filter", async () => {
		await filter.categoryBtn.click();
		await filter.selectCategory(filter_data.categoryFilterChooseItem);
		await filter.selectCategory(filter_data.categoryFilterMoreThanOne);
		expect(await filter.getCategorySelectedOptionValues()).toContain(filter_data.categoryFilterChooseItem);
		expect(await filter.getCategorySelectedOptionValues()).toContain(filter_data.categoryFilterMoreThanOne);
		await filter.cancelBtn.click();
		await filter.wait();
		expect(await filter.selectedOptions.count()).toBe(0);
		expect(await filter.getCategoriesKeywordText()).toBe("Any");
		await filter.validateCategoryFilterIsVisible(false);
	});

	test("Load more category filters", async () => {
		await filter.categoryBtn.click();
		await filter.loadMoreBtn.click();
		await filter.selectCategory(filter_data.categoryFilterLoadMore);
		await filter.applyBtn.click();
		expect(await (await dataviewPage.getTableRows()).count()).toBe(filter_data.categoryFilterLoadMoreNumber);
		const categories = await dataviewPage.getAllRowCategories(dataview_data.resultPerPageDefault);
		await dataviewPage.validateContainsKeyword(categories, filter_data.categoryFilterLoadMore);
		expect(await filter.getCategoriesKeywordText()).toBe(filter_data.categoryFilterLoadMore);
	});

	test("See all categories available", async () => {
		await filter.categoryBtn.click();
		await filter.displayAllCategories();
		expect(await filter.categoryItems.count()).toBe(242);
	});
});
