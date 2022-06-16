import { test, expect } from "@playwright/test";
import { dataview } from "../../utils/data/dataview_data";
import { DataviewPage } from "../../pages/DataViewPage";
import { PaginationComponent } from "../../pages/PaginationComponent";
import { ColumnsComponent } from "../../pages/ColumnsComponent";

test.describe("Data View - Pagination", () => {
	let dataviewPage: DataviewPage;
	let pagination: PaginationComponent;
	let columns: ColumnsComponent;

	test.beforeEach(async ({ page }) => {
		dataviewPage = new DataviewPage(page);
		pagination = dataviewPage.paginationComponent;
		columns = dataviewPage.columnsComponent;
		await dataviewPage.visit();
	});

	test("Select result per page - Value by default", async () => {
		expect(await pagination.resultAmount.textContent()).toBe(`${dataview.resultPerPageDefault}`);

		expect(await dataviewPage.getTableRows()).toBe(dataview.resultPerPageDefault);
	});

	test("Select result per page - Select 50", async () => {
		await pagination.resultAmount.click();
		await dataviewPage.validateSnapshot(pagination.resultOptions, "pagination_result_options");
		await pagination.selectResultOption(2);
		expect(await pagination.resultAmount.textContent()).toBe(`${dataview.resultPerPage50}`);
		expect(await dataviewPage.getTableRows()).toBe(dataview.resultPerPage50);
	});

	test("Select result per page - Select 100", async () => {
		await pagination.resultAmount.click();
		await dataviewPage.validateSnapshot(pagination.resultOptions, "pagination_result_options");
		await pagination.selectResultOption(3);
		expect(await pagination.resultAmount.textContent()).toBe(`${dataview.resultPerPage100}`);
		expect(await dataviewPage.getTableRows()).toBe(dataview.resultPerPage100);
	});

	test("Default Pagination", async () => {
		expect(await pagination.paginationValue.textContent()).toBe(`1-${dataview.resultPerPageDefault} of ${dataview.totalRecords}`)
	});

	test("Validate new pagination when select result per page - 50 ", async () => {
		await pagination.changeResultPerPage(2);
		expect(await pagination.paginationValue.textContent()).toBe(`1-${dataview.resultPerPage50} of ${dataview.totalRecords}`)
	});

	test("Validate new pagination when select result per page - 100 ", async () => {
		await pagination.changeResultPerPage(3);
		expect(await pagination.paginationValue.textContent()).toBe(`1-${dataview.resultPerPage100} of ${dataview.totalRecords}`)
	});

	test("Validate pages by result per page - Default", async () => {
		const pages = await pagination.calculatePages(dataview.resultPerPageDefault);
		await pagination.paginationValue.click();
		expect(await (await pagination.getPagesLabel()).textContent()).toContain(`${pages}`);
	});

	test("Validate pages by result per page - 50", async () => {
		await pagination.changeResultPerPage(2);
		const pages = await pagination.calculatePages(dataview.resultPerPage50);
		await pagination.paginationValue.click();
		expect(await (await pagination.getPagesLabel()).textContent()).toContain(`${pages}`);
	});

	test("Validate pages by result per page - 100", async () => {
		await pagination.changeResultPerPage(3);
		const pages = await pagination.calculatePages(dataview.resultPerPage100);
		await pagination.paginationValue.click();
		expect(await (await pagination.getPagesLabel()).textContent()).toContain(`${pages}`);
	});

	test("Go to a valid page", async () => {
		const recordRangePerPage = await pagination.calulateRecordRangePerPage(dataview.resultPerPageDefault, 4);
		await pagination.paginationValue.click();
		await (await pagination.getPageInput()).type("4");
		await (await pagination.getPageGoBtn()).click();
		expect(await pagination.paginationValue.textContent()).toBe(recordRangePerPage);
	});

	test("Go to a no existing page", async () => {
		await pagination.paginationValue.click();
		await (await pagination.getPageInput()).type("50");
		await (await pagination.getPageGoBtn()).click();
		await dataviewPage.validateSnapshot(await pagination.getPageInput(), "pagination_input_error_no_existing");
	});

	test("Go to a no valid page", async () => {
		await pagination.paginationValue.click();
		await (await pagination.getPageInput()).type("p");
		await (await pagination.getPageGoBtn()).click();
		await dataviewPage.validateSnapshot(await pagination.getPageInput(), "pagination_input_error_no_valid");
	});

	test("Still same page", async () => {
		const recordRangePerPage = await pagination.calulateRecordRangePerPage(dataview.resultPerPageDefault, 1);
		expect(await pagination.paginationValue.textContent()).toBe(recordRangePerPage);
		await pagination.paginationValue.click();
		await (await pagination.getPageGoBtn()).click();
		expect(await pagination.paginationValue.textContent()).toBe(recordRangePerPage);
	});

	test("Navigate backward", async () => {
		const recordRangePerPageInit = await pagination.calulateRecordRangePerPage(dataview.resultPerPageDefault, 4);
		const recordRangePerPagePrevius = await pagination.calulateRecordRangePerPage(dataview.resultPerPageDefault, 3);
		await pagination.paginationValue.click();
		await (await pagination.getPageInput()).type("4");
		await (await pagination.getPageGoBtn()).click();
		expect(await pagination.paginationValue.textContent()).toBe(recordRangePerPageInit);
		await dataviewPage.validateSnapshot(await pagination.backwardArrow, "pagination_backward_arrow");
		await pagination.backwardArrow.click();
		expect(await pagination.paginationValue.textContent()).toBe(recordRangePerPagePrevius);
	});

	test("Navigate forward", async () => {
		const recordRangePerPageInit = await pagination.calulateRecordRangePerPage(dataview.resultPerPageDefault, 1);
		const recordRangePerPageNext = await pagination.calulateRecordRangePerPage(dataview.resultPerPageDefault, 2);
		expect(await pagination.paginationValue.textContent()).toBe(recordRangePerPageInit);
		await dataviewPage.validateSnapshot(await pagination.forwardArrow, "pagination_forward_arrow");
		await pagination.forwardArrow.click();
		expect(await pagination.paginationValue.textContent()).toBe(recordRangePerPageNext);
	});

	test("Navigate backward on first page", async () => {
		const recordRangePerPageInit = await pagination.calulateRecordRangePerPage(dataview.resultPerPageDefault, 1);
		expect(await pagination.paginationValue.textContent()).toBe(recordRangePerPageInit);
		await dataviewPage.validateSnapshot(await pagination.backwardArrow, "pagination_backward_arrow_locked");
		await pagination.backwardArrow.click();
		expect(await pagination.paginationValue.textContent()).toBe(recordRangePerPageInit);
	})

	test("Navigate forward on last page", async () => {
		const pages = await pagination.calculatePages(dataview.resultPerPageDefault);
		const recordRangePerPageInit = await pagination.calulateRecordRangePerPage(dataview.resultPerPageDefault, pages);
		await pagination.paginationValue.click();
		await (await pagination.getPageInput()).type(`${pages}`);
		await (await pagination.getPageGoBtn()).click();
		expect(await pagination.paginationValue.textContent()).toBe(recordRangePerPageInit);
		await dataviewPage.validateSnapshot(await pagination.forwardArrow, "pagination_forward_arrow_locked");
		await pagination.forwardArrow.click();
		expect(await pagination.paginationValue.textContent()).toBe(recordRangePerPageInit);
	});

	test("View Type - Validate grid view type", async () => {
		await dataviewPage.validateSnapshot(pagination.viewTypeBtn, "view_type_btn");
		await pagination.selectViewTypeGridOption();
		expect(await columns.columnsBtn.isVisible()).toBe(false);
		expect(await dataviewPage.getColumnHeadersCount()).not.toBe(dataview.defaultColumnHeadersList);
	});

	test("View Type - Validate list view type", async () => {
		await dataviewPage.validateSnapshot(pagination.viewTypeBtn, "view_type_btn");
		await pagination.selectViewTypeListOption();
		expect(await columns.columnsBtn.isVisible()).toBe(true);
		expect(await dataviewPage.getColumnHeadersCount()).toBe(dataview.defaultColumnHeadersList);
	});
});