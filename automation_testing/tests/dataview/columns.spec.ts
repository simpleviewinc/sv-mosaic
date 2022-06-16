
import { test, expect } from "@playwright/test";
import { ColumnsComponent } from "../../pages/ColumnsComponent";
import { DataviewPage } from "../../pages/DataViewPage";
import { dataview } from "../../utils/data/dataview_data";

test.describe("DataView - Columns", () => {
	let dataviewPage: DataviewPage;
	let columns: ColumnsComponent;

	test.beforeEach(async ({ page }) => {
		dataviewPage = new DataviewPage(page);
		columns = dataviewPage.columnsComponent;

		await dataviewPage.visit();
	});

	test("Validate Default Columns Information", async () => {
		await dataviewPage.validateSnapshot(columns.columnsBtn, "column_btn");
		await columns.columnsBtn.click();
		expect(await columns.title.textContent()).toBe(dataview.columnsTitle);
		expect((await columns.getRightItemsText()).toString()).toBe(dataview.defaultColumnsOrder.toString());
		expect((await columns.getColumnsChecked()).toString()).toBe(dataview.defaultColumnsChecked.toString());
	})

	test("Change column order - Down", async () => {
		await columns.columnsBtn.click();
		let downArrow = await columns.getDownArrowByItemName(dataview.changeItemDown);
		await dataviewPage.validateSnapshot(downArrow, "column_down_arrow");
		await downArrow.focus();
		await dataviewPage.validateSnapshot(await downArrow, "column_down_arrow_focus")
		await downArrow.click();
		downArrow = await columns.getDownArrowByItemName(dataview.changeItemDown);
		await downArrow.click();
		expect((await columns.getRightItemsText()).toString()).toBe(dataview.changeColumnsOrderDown.toString());
	});

	test("Change column order - Up", async () => {
		await columns.columnsBtn.click();
		let upArrow = await columns.getUpArrowByItemName(dataview.changeItemUp);
		await dataviewPage.validateSnapshot(upArrow, "column_up_arrow");
		await upArrow.focus();
		await dataviewPage.validateSnapshot(await upArrow, "column_up_arrow_focus")
		await upArrow.click();
		upArrow = await columns.getUpArrowByItemName(dataview.changeItemUp);
		await upArrow.click();
		expect((await columns.getRightItemsText()).toString()).toBe(dataview.changeColumnsOrderUp.toString());
	});

	test("No Chage column order - Down", async () => {
		await columns.columnsBtn.click();
		const downArrowLocked = await columns.getLastDownArrow();
		await dataviewPage.validateSnapshot(downArrowLocked, "column_down_arrow_locked");
		expect(await downArrowLocked.isDisabled()).toBe(true);
		expect((await columns.getRightItemsText()).toString()).toBe(dataview.defaultColumnsOrder.toString());
	});

	test("No Chage column order - Up", async () => {
		await columns.columnsBtn.click();
		const upArrowLocked = await columns.getFirstUpArrow();
		await dataviewPage.validateSnapshot(upArrowLocked, "column_up_arrow_locked");
		expect(await upArrowLocked.isDisabled()).toBe(true);
		expect((await columns.getRightItemsText()).toString()).toBe(dataview.defaultColumnsOrder.toString());
	});

	test("Add column", async () => {
		await columns.columnsBtn.click();
		const item = await columns.getLeftItemByName(dataview.addItem);
		await columns.checkLeftItem(item, true);
		expect(await (await columns.getColumnsChecked()).toString()).toContain(dataview.addItem);
		expect((await columns.getRightItemsText()).toString()).toBe(dataview.addItemOrder.toString());
		await dataviewPage.validateSnapshot(await columns.applyBtn, "column_apply_btn");
		await columns.applyBtn.click();
		expect(await dataviewPage.getColumnHeadersCount()).toBe(dataview.addColumnHeadersCount);
	});

	test("CRemove column", async () => {
		await columns.columnsBtn.click();
		const item = await columns.getLeftItemByName(dataview.removeItem);
		await columns.checkLeftItem(item, false);
		expect((await columns.getColumnsChecked()).toString()).not.toContain(dataview.removeItem);
		expect((await columns.getRightItemsText()).toString()).toBe(dataview.removeItemOrder.toString());
		await columns.applyBtn.click();
		expect(await dataviewPage.getColumnHeadersCount()).toBe(dataview.removeColumnHeadersCount);
	});

	test("Remove all columns", async () => {
		await columns.columnsBtn.click();
		await columns.checkAllItems(false);
		expect((await columns.getColumnsChecked())).not.toContain(dataview.defaultColumnsOrder.toString());
		await columns.applyBtn.click();
		expect(await dataviewPage.getColumnHeadersCount()).toBe(dataview.removeAllItemsCount);
	});

	test("Add all columns", async () => {
		await columns.columnsBtn.click();
		await columns.checkAllItems(true);
		expect((await columns.getColumnsChecked()).toString()).toBe(dataview.allItemsChecked.toString());
		expect((await columns.getRightItemsText()).toString()).toBe(dataview.allItemsOrder.toString());
		await columns.applyBtn.click();
		expect(await dataviewPage.getColumnHeadersCount()).toBe(dataview.allItemsCount);
	});
});
