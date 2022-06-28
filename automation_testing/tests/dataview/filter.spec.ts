import { expect, test } from "@playwright/test";
import { DataviewPage } from "../../pages/DataViewPage";
import { FilterComponent } from "../../pages/FilterComponent";
import { dataview } from "../../utils/data/dataview_data";
import { addQuotes, addComma } from "../../utils/helpers/helper";

test.describe("DataView - Filter", () => {
	let dataviewPage: DataviewPage;
	let filter: FilterComponent;

	test.beforeEach(async ({ page }) => {
		dataviewPage = new DataviewPage(page);
		filter = dataviewPage.filterComponent;
		await dataviewPage.visit();
	});

	test("Filter title with a valid keyword and 1 result", async () => {
		await filter.validateSnapshot(filter.keywordBtn, "filter_keyword_btn");
		await filter.keywordBtn.hover();
		await filter.validateSnapshot(filter.keywordBtn, "filter_keyword_btn_hover");
		await filter.keywordBtn.click();
		await filter.keywordInput.type(dataview.validKeywordFilter);
		await filter.applyBtn.click();
		expect(await (await dataviewPage.getTableRows()).count()).toBe(dataview.expectedKeywordFilterNumber);
		expect((await dataviewPage.getAllRowTitles(dataview.resultPerPageDefault)).toString()).toContain(dataview.validKeywordFilter);
		expect(await dataviewPage.paginationComponent.paginationValue.textContent()).toBe(`1-${dataview.expectedKeywordFilterNumber} of ${dataview.expectedKeywordFilterNumber}`);
		expect(await filter.getKeywordText()).toBe(addQuotes(dataview.validKeywordFilter));
	});

	test("Filter title with a valid keyword and several results", async () => {
		await filter.keywordBtn.click();
		await filter.keywordInput.type(dataview.validKeywordFilterSeveralResults);
		await filter.applyBtn.click();
		expect(await (await dataviewPage.getTableRows()).count()).toBe(dataview.expectedKeywordFilterNumberSeveralResults);
		const titles = await dataviewPage.getAllRowTitles(dataview.resultPerPageDefault);
		await dataviewPage.validateContainsKeyword(titles, dataview.validKeywordFilterSeveralResults);
		expect(await dataviewPage.paginationComponent.paginationValue.textContent()).toBe(`1-${dataview.expectedKeywordFilterNumberSeveralResults} of ${dataview.expectedKeywordFilterNumberSeveralResults}`);
		expect(await filter.getKeywordText()).toBe(addQuotes(dataview.validKeywordFilterSeveralResults));
	});

	test("Filter title with a valid keyword and no results", async () => {
		await filter.keywordBtn.click();
		await filter.keywordInput.type(dataview.keywordNoResultsFilter);
		await filter.applyBtn.click();
		expect(await (await dataviewPage.getTableRows()).count()).toBe(0);
		expect(await filter.getKeywordText()).toBe(addQuotes(dataview.keywordNoResultsFilter));
	});

	test("Filter title with a special character", async () => {
		await filter.keywordBtn.click();
		await filter.keywordInput.type("+");
		await filter.applyBtn.click();
		expect(await dataviewPage.loading.isDisabled()).toBe(true);
		expect(await filter.getKeywordText()).toBe(addQuotes("+"));
	});

	test("Filter title with a regular expression", async () => {
		await filter.keywordBtn.click();
		await filter.keywordInput.type(dataview.regExr);
		await filter.applyBtn.click();
		expect(await (await dataviewPage.getTableRows()).count()).toBe(dataview.expectedKeywordFilterNumberSeveralResults);
		expect(await dataviewPage.paginationComponent.paginationValue.textContent()).toBe(`1-${dataview.expectedKeywordFilterNumberSeveralResults} of ${dataview.expectedKeywordFilterNumberSeveralResults}`);
		expect(await filter.getKeywordText()).toBe(addQuotes(dataview.regExr));
	});

	test("Filter title with an Uppercase keyword", async () => {
		await filter.keywordBtn.click();
		await filter.keywordInput.type(dataview.upperCaseKeywordFilter);
		await filter.applyBtn.click();
		expect(await (await dataviewPage.getTableRows()).count()).toBe(dataview.upperCaseFilterNumber);
		const titles = await dataviewPage.getAllRowTitles(dataview.resultPerPageDefault);
		await dataviewPage.validateContainsKeyword(titles, dataview.upperCaseKeywordFilter);
		expect(await filter.getKeywordText()).toBe(addQuotes(dataview.upperCaseKeywordFilter));
	});

	test("Filter title with a Lowerrcase keyword", async () => {
		await filter.keywordBtn.click();
		await filter.keywordInput.type(dataview.lowerCaseKeywordFilter);
		await filter.applyBtn.click();
		await filter.wait();
		expect(await (await dataviewPage.getTableRows()).count()).toBe(dataview.lowerCaseFilterNumber);
		const titles = await dataviewPage.getAllRowTitles(dataview.resultPerPageDefault);
		await dataviewPage.validateContainsKeyword(titles, dataview.lowerCaseKeywordFilter);
		expect(await filter.getKeywordText()).toBe(addQuotes(dataview.lowerCaseKeywordFilter));
		await filter.validateKeywordFilterIsVisible(false);
	});

	test("Clear keyword filter", async () => {
		await filter.keywordBtn.click();
		await filter.keywordInput.type(dataview.lowerCaseKeywordFilter);
		await filter.clearBtn.click();
		await filter.wait();
		expect(await filter.keywordInput.textContent()).toBe("");
		await filter.validateKeywordFilterIsVisible(true);
	});

	test("Clear keyword filter after apply it", async () => {
		await filter.keywordBtn.click();
		await filter.keywordInput.type(dataview.lowerCaseKeywordFilter);
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
		await filter.keywordInput.type(dataview.lowerCaseKeywordFilter);
		await filter.cancelBtn.click();
		expect(await filter.getKeywordText()).toBe("Any");
		expect(await filter.keywordInput.isVisible()).toBe(false);
	});

	test("Filter category searching keyword", async () => {
		await filter.categoryBtn.click();
		await filter.categoryKeywordInput.type(dataview.categoryKeywordFilter);
		await filter.selectCategory(dataview.categoryKeywordFilter);
		expect(await filter.getCategorySelectedOptionValues()).toContain(dataview.categoryKeywordFilter);
		await filter.applyBtn.click();
		expect(await (await dataviewPage.getTableRows()).count()).toBe(dataview.categoryFilterNumber);
		const categories = await dataviewPage.getAllRowCategories(dataview.resultPerPageDefault);
		await dataviewPage.validateContainsKeyword(categories, dataview.categoryKeywordFilter);
		expect(await filter.getCategoriesKeywordText()).toBe(dataview.categoryKeywordFilter);
	});

	test("Filter categories choosing a value from the list", async () => {
		await filter.categoryBtn.click();
		await filter.selectCategory(dataview.categoryFilterChooseItem);
		expect(await filter.getCategorySelectedOptionValues()).toContain(dataview.categoryFilterChooseItem);
		await filter.applyBtn.click();
		expect(await (await dataviewPage.getTableRows()).count()).toBe(dataview.categoryFilterChooseItemNumber);
		const categories = await dataviewPage.getAllRowCategories(dataview.resultPerPageDefault);
		await dataviewPage.validateContainsKeyword(categories, dataview.categoryFilterChooseItem);
		expect(await filter.getCategoriesKeywordText()).toBe(dataview.categoryFilterChooseItem);
	});

	test("Filter by 2 category", async () => {
		await filter.categoryBtn.click();
		await filter.selectCategory(dataview.categoryFilterChooseItem);
		await filter.selectCategory(dataview.categoryFilterMoreThanOne);
		expect(await filter.getCategorySelectedOptionValues()).toContain(dataview.categoryFilterChooseItem);
		expect(await filter.getCategorySelectedOptionValues()).toContain(dataview.categoryFilterMoreThanOne);
		await filter.applyBtn.click();
		expect(await (await dataviewPage.getTableRows()).count()).toBe(dataview.categoryFilterMoreThanOneNumber);
		const categories = await dataviewPage.getAllRowCategories(dataview.resultPerPageDefault);
		await dataviewPage.validateContainsMoreThanOneKeyword(categories, [dataview.categoryFilterChooseItem, dataview.categoryFilterMoreThanOne]);
		expect(await filter.getCategoriesKeywordText()).toContain(addComma([dataview.categoryFilterChooseItem, dataview.categoryFilterMoreThanOne]));
	});

	test("Filter by more than 2 categories", async () => {
		await filter.categoryBtn.click();
		await filter.selectCategory(dataview.categoryFilterChooseItem);
		await filter.selectCategory(dataview.categoryFilterMoreThanOne);
		await filter.loadMoreBtn.click();
		await filter.selectCategory(dataview.categoryFilterLoadMore);
		expect(await filter.getCategorySelectedOptionValues()).toContain(dataview.categoryFilterChooseItem);
		expect(await filter.getCategorySelectedOptionValues()).toContain(dataview.categoryFilterMoreThanOne);
		expect(await filter.getCategorySelectedOptionValues()).toContain(dataview.categoryFilterLoadMore);
		await filter.applyBtn.click();
		expect(await (await dataviewPage.getTableRows()).count()).toBe(dataview.categoryFilterMoreThanTwoNumber);
		const categories = await dataviewPage.getAllRowCategories(dataview.resultPerPageDefault);
		await dataviewPage.validateContainsMoreThanOneKeyword(categories, [dataview.categoryFilterChooseItem, dataview.categoryFilterMoreThanOne, dataview.categoryFilterLoadMore]);
		expect(await filter.getCategoriesKeywordText()).toContain(addComma([dataview.categoryFilterChooseItem, dataview.categoryFilterMoreThanOne + " " + dataview.categoryFilterMoreMessage]));
	});

	test("Remove category filter selected", async () => {
		await filter.categoryBtn.click();
		await filter.selectCategory(dataview.categoryFilterChooseItem);
		await filter.selectCategory(dataview.categoryFilterMoreThanOne);
		expect(await filter.getCategorySelectedOptionValues()).toContain(dataview.categoryFilterChooseItem);
		expect(await filter.getCategorySelectedOptionValues()).toContain(dataview.categoryFilterMoreThanOne);
		await filter.applyBtn.click();
		await filter.categoryBtn.click();
		await filter.wait();
		await filter.removeSelectedOptionsByName(dataview.categoryFilterMoreThanOne);
		await filter.applyBtn.click();
		const categories = await dataviewPage.getAllRowCategories(dataview.resultPerPageDefault);
		await dataviewPage.validateContainsKeyword(categories, dataview.categoryFilterChooseItem);
		expect(await (await dataviewPage.getTableRows()).count()).toBe(dataview.categoryFilterChooseItemNumber);
		expect(await filter.getCategoriesKeywordText()).toBe(dataview.categoryFilterChooseItem);
	});

	test("Clear category filter", async () => {
		await filter.categoryBtn.click();
		await filter.selectCategory(dataview.categoryFilterChooseItem);
		await filter.selectCategory(dataview.categoryFilterMoreThanOne);
		expect(await filter.getCategorySelectedOptionValues()).toContain(dataview.categoryFilterChooseItem);
		expect(await filter.getCategorySelectedOptionValues()).toContain(dataview.categoryFilterMoreThanOne);
		await filter.clearBtn.click();
		await filter.wait();
		expect(await filter.selectedOptions.count()).toBe(0);
		expect(await filter.getCategoriesKeywordText()).toBe("Any");
		await filter.validateCategoryFilterIsVisible(true);
	});

	test("Cancel category filter", async () => {
		await filter.categoryBtn.click();
		await filter.selectCategory(dataview.categoryFilterChooseItem);
		await filter.selectCategory(dataview.categoryFilterMoreThanOne);
		expect(await filter.getCategorySelectedOptionValues()).toContain(dataview.categoryFilterChooseItem);
		expect(await filter.getCategorySelectedOptionValues()).toContain(dataview.categoryFilterMoreThanOne);
		await filter.cancelBtn.click();
		await filter.wait();
		expect(await filter.selectedOptions.count()).toBe(0);
		expect(await filter.getCategoriesKeywordText()).toBe("Any");
		await filter.validateCategoryFilterIsVisible(false);
	});

	test("Load more category filters", async () => {
		await filter.categoryBtn.click();
		await filter.loadMoreBtn.click();
		await filter.selectCategory(dataview.categoryFilterLoadMore);
		await filter.applyBtn.click();
		expect(await (await dataviewPage.getTableRows()).count()).toBe(dataview.categoryFilterLoadMoreNumber);
		const categories = await dataviewPage.getAllRowCategories(dataview.resultPerPageDefault);
		await dataviewPage.validateContainsKeyword(categories, dataview.categoryFilterLoadMore);
		expect(await filter.getCategoriesKeywordText()).toBe(dataview.categoryFilterLoadMore);
	});

	test("See all categories available", async () => {
		await filter.categoryBtn.click();
		await filter.displayAllCategories();
		expect(await filter.categoryItems.count()).toBe(242);
	});
});