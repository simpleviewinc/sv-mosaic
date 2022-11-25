import { test, expect, Page } from "@playwright/test";
import { ColumnsComponent } from "../../../pages/Components/DataView/ColumnsComponent";
import { DataviewPage } from "../../../pages/Components/DataView/DataViewPage";
import { columns_data, dataview_data } from "../../../utils/data/dataview_data";
import { sortDatesAsc, sortDatesDesc } from "../../../utils/helpers/helper";

test.describe.parallel("Components - Data View - Columns", () => {
	let page: Page;
	let dataviewPage: DataviewPage;
	let columns: ColumnsComponent;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		dataviewPage = new DataviewPage(page);
		columns = dataviewPage.columnsComponent;
		await dataviewPage.visitPage();
	});

	test.beforeEach(async() => {
		await page.reload();
	});

	test.afterAll(async ({ browser }) => {
		browser.close;
	});

	test("Validate Default Columns Information", async () => {
		await columns.columnsBtn.click();
		expect(await columns.title.textContent()).toBe(columns_data.columnsTitle);
		expect((await columns.getRightItemsText()).toString()).toBe(columns_data.defaultColumnsOrder.toString());
		expect((await columns.getColumnsChecked()).toString()).toBe(columns_data.defaultColumnsChecked.toString());
		await columns.closeTableSettingIcon.click();
	})

	test("Change column order - Down", async () => {
		await columns.columnsBtn.click();
		let downArrow = await columns.getDownArrowByItemName(columns_data.changeItemDown);
		await downArrow.focus();
		await downArrow.click();
		downArrow = await columns.getDownArrowByItemName(columns_data.changeItemDown);
		await downArrow.click();
		expect((await columns.getRightItemsText()).toString()).toBe(columns_data.changeColumnsOrderDown.toString());
		await columns.closeTableSettingIcon.click();
	});

	test("Change column order - Up", async () => {
		await columns.columnsBtn.click();
		let upArrow = await columns.getUpArrowByItemName(columns_data.changeItemUp);
		await upArrow.focus();
		await upArrow.click();
		upArrow = await columns.getUpArrowByItemName(columns_data.changeItemUp);
		await upArrow.click();
		expect((await columns.getRightItemsText()).toString()).toBe(columns_data.changeColumnsOrderUp.toString());
		await columns.closeTableSettingIcon.click();
	});

	test("No Chage column order - Down", async () => {
		await columns.columnsBtn.click();
		const downArrowLocked = await columns.getLastDownArrow();
		expect(await downArrowLocked.isDisabled()).toBe(true);
		expect((await columns.getRightItemsText()).toString()).toBe(columns_data.defaultColumnsOrder.toString());
		await columns.closeTableSettingIcon.click();
	});

	test("No Chage column order - Up", async () => {
		await columns.columnsBtn.click();
		const upArrowLocked = await columns.getFirstUpArrow();
		expect(await upArrowLocked.isDisabled()).toBe(true);
		expect((await columns.getRightItemsText()).toString()).toBe(columns_data.defaultColumnsOrder.toString());
		await columns.closeTableSettingIcon.click();
	});

	test("Add column", async () => {
		await columns.columnsBtn.click();
		const item = await columns.getLeftItemByName(columns_data.addItem);
		await columns.checkLeftItem(item, true);
		expect((await columns.getColumnsChecked()).toString()).toContain(columns_data.addItem);
		expect((await columns.getRightItemsText()).toString()).toBe(columns_data.addItemOrder.toString());
		await columns.applyBtn.click();
		expect(await dataviewPage.getColumnHeadersCount() - 1).toBe(columns_data.addColumnHeadersCount);
	});

	test("Remove column", async () => {
		await columns.columnsBtn.click();
		const item = await columns.getLeftItemByName(columns_data.removeItem);
		await columns.checkLeftItem(item, false);
		expect((await columns.getColumnsChecked()).toString()).not.toContain(columns_data.removeItem);
		expect((await columns.getRightItemsText()).toString()).toBe(columns_data.removeItemOrder.toString());
		await columns.applyBtn.click();
		expect(await dataviewPage.getColumnHeadersCount() - 1).toBe(columns_data.removeColumnHeadersCount);
	});

	test("Remove all columns", async () => {
		await columns.columnsBtn.click();
		await columns.checkAllItems(false);
		expect((await columns.getColumnsChecked())).not.toContain(columns_data.defaultColumnsOrder.toString());
		await columns.applyBtn.click();
		expect(await dataviewPage.getColumnHeadersCount() - 1).toBe(columns_data.removeAllItemsCount);
	});

	test("Add all columns", async () => {
		await columns.columnsBtn.click();
		await columns.checkAllItems(true);
		expect((await columns.getColumnsChecked()).toString()).toBe(columns_data.allItemsChecked.toString());
		expect((await columns.getRightItemsText()).toString()).toBe(columns_data.allItemsOrder.toString());
		await columns.applyBtn.click();
		expect(await dataviewPage.getColumnHeadersCount() - 1).toBe(columns_data.allItemsCount);
	});

	test("Validate sorting by Title in ascending form.", async () => {
		const titles = await dataviewPage.getRowTitles();
		const titlesSort = (await dataviewPage.getRowTitles()).sort(Intl.Collator().compare);
		expect(titles.toString()).toBe(titlesSort.toString());
	});

	test("Validate sorting by Title in descending form.", async () => {
		await dataviewPage.searchForKeyword("Ant");
		const titlesSortDesc = (await dataviewPage.getRowTitles()).reverse().toString();
		const titleColumn = await dataviewPage.getSpecificColumn("Title");
		await titleColumn.click();
		const titles = (await dataviewPage.getAllRowData(dataview_data.resultPerPageDefault, "Title")).toString();
		expect(titles).toBe(titlesSortDesc);
	});

	test("Validate sorting by Created in ascending form.", async () => {
		await dataviewPage.searchForKeyword("Ant");
		const createdColum = await dataviewPage.getSpecificColumn("Created");
		const expectedCreatedSort = sortDatesAsc(await dataviewPage.getAllRowData(dataview_data.resultPerPageDefault, "Created")).toString();
		await createdColum.click();
		const actualCreated = (await dataviewPage.getRowCreated()).toString();
		expect(actualCreated).toBe(expectedCreatedSort);
	});

	test("Validate sorting by Created in descending form.", async () => {
		await dataviewPage.searchForKeyword("Ant");
		const createdColum = await dataviewPage.getSpecificColumn("Created");
		const expectedCreatedSort = sortDatesDesc(await dataviewPage.getAllRowData(dataview_data.resultPerPageDefault, "Created")).toString();
		await createdColum.click();
		await createdColum.click();
		const actualCreated = (await dataviewPage.getRowCreated()).toString();
		expect(actualCreated).toBe(expectedCreatedSort);
	});

	test("Validate that column width for long column name is valid.", async () => {
		await columns.wait();
		await columns.selectColumn("Style - Text Transform with large field text to order column");
		await columns.columnsBtn.click();
		expect(await columns.getElementWidth(columns.rightItems.locator("text=Style - Text Transform with large field text to order column"))).toBe(180);
	});
});
