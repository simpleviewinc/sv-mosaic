import { test, expect } from "@playwright/test";
import { dataview } from "../../utils/data/dataview_data";
import { DataviewPage } from "../../pages/DataViewPage";
import { SaveAsComponent } from "../../pages/SaveAsComponent";
import { PaginationComponent } from "../../pages/PaginationComponent";
import { ColumnsComponent } from "../../pages/ColumnsComponent";

test.describe("Data View - Save As", () => {

	let dataviewPage: DataviewPage;
	let saveAs: SaveAsComponent;
	let pagination: PaginationComponent;
	let columns: ColumnsComponent;

	test.beforeEach(async ({ page }) => {
		dataviewPage = new DataviewPage(page);
		saveAs = dataviewPage.saveAsComponent;
		pagination = dataviewPage.paginationComponent;
		columns = dataviewPage.columnsComponent;

		await dataviewPage.visit();
	});

	test("Save As", async () => {
		await saveAs.validateSnapshot(saveAs.saveAsBtn, "save_as_btn");
		await saveAs.saveAsBtn.click();
		await saveAs.validateSnapshot(saveAs.saveAsOptions, "save_as_options");
	});

	test("New View", async () => {
		await saveAs.saveAsBtn.click();
		await saveAs.selectSaveAsOption(1);
		await saveAs.validateSnapshot(saveAs.saveView, "save_as_view");
		await saveAs.validateSnapshot(saveAs.saveLabel, "save_as_label");
		await saveAs.saveLabel.type(dataview.saveAsView);
		await saveAs.saveViewBtn.click();
		expect(await saveAs.viewBtn.textContent()).toContain(dataview.saveAsView);
		await saveAs.viewBtn.click();
		expect(await (await saveAs.getViewTypeByLabel(dataview.saveAsView)).textContent()).toContain(dataview.viewNotSharedType);
	});

	test("New View Shared", async () => {
		await saveAs.fillNewView(dataview.saveAsViewShared);
		await saveAs.validateSnapshot(saveAs.saveAsCheckbox, "save_as_checkbox");
		expect((await saveAs.saveAsCheckbox.isChecked()).valueOf()).toBe(false);
		await saveAs.saveAsCheckbox.check();
		await saveAs.validateSnapshot(saveAs.saveAsCheckbox, "save_as_checkbox_checked");
		expect((await saveAs.saveAsCheckbox.isChecked()).valueOf()).toBe(true);
		await saveAs.saveViewBtn.click();
		expect(await saveAs.viewBtn.textContent()).toContain(dataview.saveAsViewShared);
		await saveAs.viewBtn.click();
		expect(await (await saveAs.getViewTypeByLabel(dataview.saveAsViewShared)).textContent()).toContain(dataview.viewSharedType);
	});

	test("Default View", async () => {
		await saveAs.viewBtn.click();
		expect(await (await saveAs.getViewTypeByLabel(dataview.defaultView)).textContent()).toContain(dataview.defaultType);
	});

	test("Change View", async () => {
		await saveAs.createNewView(dataview.saveAsView);
		await saveAs.viewBtn.click();
		const selectBtn = await saveAs.selectViewBtnByLabel(dataview.defaultView);
		await saveAs.wait();
		await saveAs.validateSnapshot(selectBtn, "save_as_select_btn");
		await selectBtn.click();
		expect(await saveAs.viewBtn.textContent()).toContain(dataview.defaultView);
	});

	test("Cancel", async () => {
		await saveAs.saveAsBtn.click();
		await saveAs.selectSaveAsOption(1);
		await saveAs.saveLabel.type(dataview.saveAsView);
		await saveAs.saveAsCheckbox.check();
		await saveAs.cancelViewBtn.click();
		expect(await saveAs.viewBtn.textContent()).toContain(dataview.defaultView);
		await saveAs.viewBtn.click();
		expect(await saveAs.isLabelPresent(dataview.saveAsView)).toBe(false);
	});

	test("Edit a View", async () => {
		await saveAs.createNewView(dataview.saveAsView);

		await saveAs.viewBtn.click();
		await saveAs.wait();
		const editBtn = await saveAs.editBtnByLabel(dataview.saveAsView);
		await saveAs.validateSnapshot(editBtn, "save_as_edit_view_btn");
		expect(await (await saveAs.getViewTypeByLabel(dataview.saveAsView)).textContent()).toContain(dataview.viewNotSharedType);
		await editBtn.click();
		await saveAs.saveLabel.fill(dataview.saveAsViewEdit);
		expect((await saveAs.editCheckbox.isChecked()).valueOf()).toBe(false);
		await saveAs.editCheckbox.check();
		await saveAs.saveViewBtn.click();

		expect(await saveAs.viewBtn.textContent()).toContain(dataview.saveAsViewEdit);

		await saveAs.closeEditViewBtn.click({ force: true });
		expect(await (await saveAs.getViewTypeByLabel(dataview.saveAsViewEdit)).textContent()).toContain(dataview.viewSharedType);
	});

	test("Remove a View", async () => {
		await saveAs.createNewView(dataview.saveAsView);

		await saveAs.viewBtn.click();
		await (await saveAs.moreOptionsBtnByLabel(dataview.saveAsView)).click();
		const removeOption = await saveAs.getRemoveOption();
		await saveAs.wait();
		await saveAs.validateSnapshot(removeOption, "save_as_edit_remove_option");
		await removeOption.click();
		await saveAs.closeSaveViewBtn.click({ force: true });

		await saveAs.viewBtn.click();
		expect(await saveAs.isLabelPresent(dataview.saveAsView)).toBe(false);
	});

	test("Overwrite view", async () => {
		await pagination.selectViewTypeGridOption();
		await pagination.changeResultPerPage(2);
		await saveAs.createNewView(dataview.saveAsOverwriteView);

		expect(await pagination.resultAmount.textContent()).toBe(`${dataview.resultPerPage50}`);
		const recordRangePerPage = await pagination.calulateRecordRangePerPage(dataview.resultPerPage50, 1);
		expect(await pagination.paginationValue.textContent()).toBe(recordRangePerPage);
		expect(await saveAs.viewBtn.textContent()).toContain(dataview.saveAsOverwriteView);
		await pagination.validateSnapshot(await columns.columnsBtn, "grid_title_arrow");
		expect(await dataviewPage.getColumnHeadersCount()).not.toBe(dataview.defaultColumnHeadersList);
		await pagination.changeResultPerPage(3);
		await saveAs.saveAsBtn.click();
		await saveAs.selectSaveAsOption(2);
		expect(await pagination.resultAmount.textContent()).toBe(`${dataview.resultPerPage100}`);

		await saveAs.viewBtn.click();
		await (await saveAs.selectViewBtnByLabel(dataview.defaultView)).click();
		expect(await pagination.resultAmount.textContent()).toBe(`${dataview.resultPerPageDefault}`);
		expect(await saveAs.viewBtn.textContent()).toContain(dataview.defaultView);

		await saveAs.viewBtn.click();
		await (await saveAs.selectViewBtnByLabel(dataview.saveAsOverwriteView)).click();
		expect(await pagination.resultAmount.textContent()).toBe(`${dataview.resultPerPage100}`);
		expect(await saveAs.viewBtn.textContent()).toContain(dataview.saveAsOverwriteView);
	});
});