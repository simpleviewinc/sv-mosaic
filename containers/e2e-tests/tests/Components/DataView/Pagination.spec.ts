import { test, expect, Page } from "@playwright/test";
import { dataview_data, saveAs_data } from "../../../utils/data/dataviewData";
import { DataviewPage } from "../../../pages/Components/DataView/DataViewPage";
import { PaginationComponent } from "../../../pages/Components/DataView/PaginationComponent";
import { ColumnsComponent } from "../../../pages/Components/DataView/ColumnsComponent";

test.describe("Components - Data View - Pagination", () => {
	let page: Page;
	let dataviewPage: DataviewPage;
	let pagination: PaginationComponent;
	let columns: ColumnsComponent;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		dataviewPage = new DataviewPage(page);
		pagination = dataviewPage.paginationComponent;
		columns = dataviewPage.columnsComponent;
		await dataviewPage.visit(dataviewPage.page_path);
	});

	test.beforeEach(async() => {
		await page.reload();
		await dataviewPage.clean();
	});

	test("Select result per page - Value by default", async () => {
		expect(await pagination.resultAmount.textContent()).toBe(`${dataview_data.resultPerPageDefault}`);
		expect(await (await dataviewPage.getTableRows()).count()).toBe(dataview_data.resultPerPageDefault);
	});

	test("Select result per page - Select 50", async () => {
		await pagination.selectResultOption(50);
		expect(await pagination.resultAmount.textContent()).toBe(`${dataview_data.resultPerPage50}`);
		expect(await (await dataviewPage.getTableRows()).count()).toBe(dataview_data.resultPerPage50);
	});

	test("Select result per page - Select 100", async () => {
		await pagination.selectResultOption(100);
		expect(await pagination.resultAmount.textContent()).toBe(`${dataview_data.resultPerPage100}`);
		expect(await (await dataviewPage.getTableRows()).count()).toBe(dataview_data.resultPerPage100);
	});

	test("Default Pagination", async () => {
		expect(await pagination.paginationValue.textContent()).toBe(`1-${dataview_data.resultPerPageDefault} of ${dataview_data.totalRecords}`);
	});

	test("Validate new pagination when select result per page - 50 ", async () => {
		await pagination.selectResultOption(50);
		expect(await pagination.paginationValue.textContent()).toBe(`1-${dataview_data.resultPerPage50} of ${dataview_data.totalRecords}`);
	});

	test("Validate new pagination when select result per page - 100 ", async () => {
		await pagination.selectResultOption(100);
		expect(await pagination.paginationValue.textContent()).toBe(`1-${dataview_data.resultPerPage100} of ${dataview_data.totalRecords}`);
	});

	test("Validate pages by result per page - Default", async () => {
		const pages = await pagination.calculatePages(dataview_data.resultPerPageDefault);
		await pagination.paginationValue.click();
		expect(await (await pagination.getPagesLabel()).textContent()).toContain(`${pages}`);
	});

	test("Validate pages by result per page - 50", async () => {
		await pagination.selectResultOption(50);
		const pages = await pagination.calculatePages(dataview_data.resultPerPage50);
		await pagination.paginationValue.click();
		expect(await (await pagination.getPagesLabel()).textContent()).toContain(`${pages}`);
	});

	test("Validate pages by result per page - 100", async () => {
		await pagination.selectResultOption(100);
		const pages = await pagination.calculatePages(dataview_data.resultPerPage100);
		await pagination.paginationValue.click();
		expect(await (await pagination.getPagesLabel()).textContent()).toContain(`${pages}`);
	});

	test("Go to a valid page", async () => {
		const recordRangePerPage = await pagination.calulateRecordRangePerPage(dataview_data.resultPerPageDefault, 4);
		await pagination.paginationValue.click();
		await (await pagination.getPageInput()).type("4");
		await (await pagination.getPageGoBtn()).click();
		expect(await pagination.paginationValue.textContent()).toBe(recordRangePerPage);
	});

	test("Go to a no existing page", async () => {
		await pagination.paginationValue.click();
		await (await pagination.getPageInput()).type("50");
		await (await pagination.getPageGoBtn()).click();
	});

	test("Go to a no valid page", async () => {
		await pagination.paginationValue.click();
		await (await pagination.getPageInput()).type("p");
		await (await pagination.getPageGoBtn()).click();
	});

	test("Still same page", async () => {
		const recordRangePerPage = await pagination.calulateRecordRangePerPage(dataview_data.resultPerPageDefault, 1);
		expect(await pagination.paginationValue.textContent()).toBe(recordRangePerPage);
		await pagination.paginationValue.click();
		await (await pagination.getPageGoBtn()).click();
		expect(await pagination.paginationValue.textContent()).toBe(recordRangePerPage);
	});

	test("Navigate backward", async () => {
		const recordRangePerPageInit = await pagination.calulateRecordRangePerPage(dataview_data.resultPerPageDefault, 4);
		const recordRangePerPagePrevius = await pagination.calulateRecordRangePerPage(dataview_data.resultPerPageDefault, 3);
		await pagination.paginationValue.click();
		await (await pagination.getPageInput()).type("4");
		await (await pagination.getPageGoBtn()).click();
		expect(await pagination.paginationValue.textContent()).toBe(recordRangePerPageInit);
		await pagination.backwardArrow.click();
		expect(await pagination.paginationValue.textContent()).toBe(recordRangePerPagePrevius);
	});

	test("Navigate forward", async () => {
		const recordRangePerPageInit = await pagination.calulateRecordRangePerPage(dataview_data.resultPerPageDefault, 1);
		const recordRangePerPageNext = await pagination.calulateRecordRangePerPage(dataview_data.resultPerPageDefault, 2);
		expect(await pagination.paginationValue.textContent()).toBe(recordRangePerPageInit);
		await pagination.forwardArrow.click();
		expect(await pagination.paginationValue.textContent()).toBe(recordRangePerPageNext);
	});

	test("Navigate backward on first page", async () => {
		const recordRangePerPageInit = await pagination.calulateRecordRangePerPage(dataview_data.resultPerPageDefault, 1);
		expect(await pagination.paginationValue.textContent()).toBe(recordRangePerPageInit);
		await expect(pagination.backwardArrow).toBeDisabled();
	});

	test("Navigate forward on last page", async () => {
		const pages = await pagination.calculatePages(dataview_data.resultPerPageDefault);
		const recordRangePerPageInit = await pagination.calulateRecordRangePerPage(dataview_data.resultPerPageDefault, pages);
		await pagination.paginationValue.click();
		await (await pagination.getPageInput()).type(`${pages}`);
		await (await pagination.getPageGoBtn()).click();
		expect(await pagination.paginationValue.textContent()).toBe(recordRangePerPageInit);
		await expect(pagination.forwardArrow).toBeDisabled();
	});

	test("View Type - Validate grid view type", async () => {
		await pagination.selectViewType("Grid");
		expect(await dataviewPage.getColumnHeadersCount()).not.toBe(saveAs_data.defaultColumnHeadersList);
	});

	test("View Type - Validate list view type", async () => {
		await pagination.selectViewType("List");
		expect(await columns.columnsBtn.isVisible()).toBe(true);
		await expect(dataviewPage.columnHeaders).toHaveCount(saveAs_data.defaultColumnHeadersList + 1)
	});

	test("Validate that when selecting an image in Grid view, the rest of the checkboxes of the images are visible.", async () => {
		await pagination.selectViewType("Grid");
		const numberOfImages = await pagination.gridImageCheckbox.count();
		await pagination.gridImageCheckbox.first().locator("input").check();
		for (let i = 1; i < numberOfImages; i++) {
			await expect(pagination.gridImageCheckbox.nth(i)).toHaveClass("checkboxContainer anyChecked");
		}
	});

	test("Validate that when selecting only one image in Grid view, the header checkbox is in an intermidiate state.", async () => {
		await pagination.selectViewType("Grid");
		await pagination.gridImageCheckbox.first().locator("input").check();
		expect(await pagination.headerActionsCheckbox.getAttribute("data-indeterminate")).toBe("true");
	});
});
