import { test, expect, Page } from "@playwright/test";
import { ColumnsComponent } from "../../../pages/Components/DataView/ColumnsComponent";
import { DataviewPage } from "../../../pages/Components/DataView/DataViewPage";
import { PaginationComponent } from "../../../pages/Components/DataView/PaginationComponent";
import { columns_data, dataview_data } from "../../../utils/data/dataview_data";
import { sortDatesAsc, sortDatesDesc } from "../../../utils/helpers/helper";

test.describe.parallel("Components - Data View - Columns", () => {
	let page: Page;
	let dataviewPage: DataviewPage;
	let columns: ColumnsComponent;
	let pagination: PaginationComponent;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		dataviewPage = new DataviewPage(page);
		columns = dataviewPage.columnsComponent;
		pagination = dataviewPage.paginationComponent;
		await dataviewPage.visitPage();
	});

	test.afterAll(async ({ browser }) => {
		browser.close;
	});

	test("Validate Default Columns Information", async () => {
		// await columns.validateSnapshot(columns.columnsBtn, "column_btn");
		await columns.columnsBtn.click();
		expect(await columns.title.textContent()).toBe(columns_data.columnsTitle);
		expect((await columns.getRightItemsText()).toString()).toBe(columns_data.defaultColumnsOrder.toString());
		expect((await columns.getColumnsChecked()).toString()).toBe(columns_data.defaultColumnsChecked.toString());
		await columns.closeTableSettingIcon.click();
	})

	test("Change column order - Down", async () => {
		await columns.columnsBtn.click();
		let downArrow = await columns.getDownArrowByItemName(columns_data.changeItemDown);
		// await columns.validateSnapshot(downArrow, "column_down_arrow");
		await downArrow.focus();
		// await columns.validateSnapshot(await downArrow, "column_down_arrow_focus")
		await downArrow.click();
		downArrow = await columns.getDownArrowByItemName(columns_data.changeItemDown);
		await downArrow.click();
		expect((await columns.getRightItemsText()).toString()).toBe(columns_data.changeColumnsOrderDown.toString());
		await columns.closeTableSettingIcon.click();
	});

	test("Change column order - Up", async () => {
		await columns.columnsBtn.click();
		let upArrow = await columns.getUpArrowByItemName(columns_data.changeItemUp);
		// await columns.validateSnapshot(upArrow, "column_up_arrow");
		await upArrow.focus();
		// await columns.validateSnapshot(await upArrow, "column_up_arrow_focus")
		await upArrow.click();
		upArrow = await columns.getUpArrowByItemName(columns_data.changeItemUp);
		await upArrow.click();
		expect((await columns.getRightItemsText()).toString()).toBe(columns_data.changeColumnsOrderUp.toString());
		await columns.closeTableSettingIcon.click();
	});

	test("No Chage column order - Down", async () => {
		await columns.columnsBtn.click();
		const downArrowLocked = await columns.getLastDownArrow();
		// await columns.validateSnapshot(downArrowLocked, "column_down_arrow_locked");
		expect(await downArrowLocked.isDisabled()).toBe(true);
		expect((await columns.getRightItemsText()).toString()).toBe(columns_data.defaultColumnsOrder.toString());
		await columns.closeTableSettingIcon.click();
	});

	test("No Chage column order - Up", async () => {
		await columns.columnsBtn.click();
		const upArrowLocked = await columns.getFirstUpArrow();
		// await columns.validateSnapshot(upArrowLocked, "column_up_arrow_locked");
		expect(await upArrowLocked.isDisabled()).toBe(true);
		expect((await columns.getRightItemsText()).toString()).toBe(columns_data.defaultColumnsOrder.toString());
		await columns.closeTableSettingIcon.click();
	});

	test("Add column", async () => {
		await columns.columnsBtn.click();
		const item = await columns.getLeftItemByName(columns_data.addItem);
		await columns.checkLeftItem(item, true);
		expect(await (await columns.getColumnsChecked()).toString()).toContain(columns_data.addItem);
		expect((await columns.getRightItemsText()).toString()).toBe(columns_data.addItemOrder.toString());
		// await columns.validateSnapshot(await columns.applyBtn, "column_apply_btn");
		await columns.applyBtn.click();
		expect(await dataviewPage.getColumnHeadersCount()).toBe(columns_data.addColumnHeadersCount);
	});

	test("Remove column", async () => {
		await page.reload();
		await columns.columnsBtn.click();
		const item = await columns.getLeftItemByName(columns_data.removeItem);
		await columns.checkLeftItem(item, false);
		expect((await columns.getColumnsChecked()).toString()).not.toContain(columns_data.removeItem);
		expect((await columns.getRightItemsText()).toString()).toBe(columns_data.removeItemOrder.toString());
		await columns.applyBtn.click();
		expect(await dataviewPage.getColumnHeadersCount()).toBe(columns_data.removeColumnHeadersCount);
	});

	test("Remove all columns", async () => {
		await page.reload();
		await columns.columnsBtn.click();
		await columns.checkAllItems(false);
		expect((await columns.getColumnsChecked())).not.toContain(columns_data.defaultColumnsOrder.toString());
		await columns.applyBtn.click();
		expect(await dataviewPage.getColumnHeadersCount()).toBe(columns_data.removeAllItemsCount);
	});

	test("Add all columns", async () => {
		await page.reload();
		await columns.columnsBtn.click();
		await columns.checkAllItems(true);
		expect((await columns.getColumnsChecked()).toString()).toBe(columns_data.allItemsChecked.toString());
		expect((await columns.getRightItemsText()).toString()).toBe(columns_data.allItemsOrder.toString());
		await columns.applyBtn.click();
		expect(await dataviewPage.getColumnHeadersCount()).toBe(columns_data.allItemsCount);
		await page.reload();
	});

	test("Sort title asc", async () => {
		await pagination.changeResultPerPage(3);
		// const titleColum = await dataviewPage.getTitleColumn();
		// await dataviewPage.validateSnapshot(titleColum, "column_sort_title_asc");
		const titles = await dataviewPage.getRowTitles();
		const titlesSort = (await dataviewPage.getRowTitles()).sort(Intl.Collator().compare);
		expect(titles.toString()).toBe(titlesSort.toString());
	});

	test("Sort title desc", async () => {
		await pagination.changeResultPerPage(3);
		const titleColum = await dataviewPage.getTitleColumn();
		const titlesSortDesc = (await dataviewPage.getAllRowTitles(dataview_data.resultPerPage100)).sort(Intl.Collator().compare).reverse();
		const titleSplitPerPage = await titlesSortDesc.slice(0, dataview_data.resultPerPage100);
		await titleColum.click();
		// await dataviewPage.validateSnapshot(titleColum, "column_sort_title_desc");
		const titles = await dataviewPage.getRowTitles();
		expect(titles.toString()).toBe(titleSplitPerPage.toString());
	});

	test("Sort created asc", async () => {
		await pagination.changeResultPerPage(3);
		const createdColum = await dataviewPage.getCreatedColumn();
		// await dataviewPage.validateSnapshot(createdColum, "column_sort_created_default");
		const createdSort = sortDatesAsc((await dataviewPage.getAllRowCreated(dataview_data.resultPerPage100)));
		const createdSplitPerPage = await createdSort.slice(0, dataview_data.resultPerPage100);
		await createdColum.click();
		// await dataviewPage.validateSnapshot(await dataviewPage.getTitleColumn(), "column_sort_title_default");
		// await dataviewPage.validateSnapshot(createdColum, "column_sort_created_asc");
		const created = await dataviewPage.getRowCreated();
		expect(created.toString()).toBe(createdSplitPerPage.toString());
	});

	test("Sort created desc", async () => {
		await page.reload();
		await pagination.changeResultPerPage(3);
		const createdColum = await dataviewPage.getCreatedColumn();
		const createdSort = sortDatesDesc((await dataviewPage.getAllRowCreated(dataview_data.resultPerPage100)));
		const createdSplitPerPage = await createdSort.slice(0, dataview_data.resultPerPage100);
		await createdColum.click();
		await createdColum.click();
		await pagination.wait();
		const created = await dataviewPage.getRowCreated();
		expect(created.toString()).toBe(createdSplitPerPage.toString());
	});
});
