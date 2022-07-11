import { test, expect } from "@playwright/test";
import { dataview_data, saveAs_data } from "../../utils/data/dataview_data";
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

		await dataviewPage.visitPage();
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
		await saveAs.saveLabel.type(saveAs_data.saveAsView);
		await saveAs.saveViewBtn.click();
		expect(await saveAs.viewBtn.textContent()).toContain(saveAs_data.saveAsView);
		await saveAs.viewBtn.click();
		expect(await (await saveAs.getViewTypeByLabel(saveAs_data.saveAsView)).textContent()).toContain(saveAs_data.viewNotSharedType);
	});

	test("New View Shared", async () => {
		await saveAs.fillNewView(saveAs_data.saveAsViewShared);
		await saveAs.validateSnapshot(saveAs.saveAsCheckbox, "save_as_checkbox");
		expect((await saveAs.saveAsCheckbox.isChecked()).valueOf()).toBe(false);
		await saveAs.saveAsCheckbox.check();
		await saveAs.validateSnapshot(saveAs.saveAsCheckbox, "save_as_checkbox_checked");
		expect((await saveAs.saveAsCheckbox.isChecked()).valueOf()).toBe(true);
		await saveAs.saveViewBtn.click();
		expect(await saveAs.viewBtn.textContent()).toContain(saveAs_data.saveAsViewShared);
		await saveAs.viewBtn.click();
		expect(await (await saveAs.getViewTypeByLabel(saveAs_data.saveAsViewShared)).textContent()).toContain(saveAs_data.viewSharedType);
	});

	test("Default View", async () => {
		await saveAs.viewBtn.click();
		expect(await (await saveAs.getViewTypeByLabel(saveAs_data.defaultView)).textContent()).toContain(saveAs_data.defaultType);
	});

	test("Change View", async () => {
		await saveAs.createNewView(saveAs_data.saveAsView);
		await saveAs.viewBtn.click();
		const selectBtn = await saveAs.selectViewBtnByLabel(saveAs_data.defaultView);
		await saveAs.wait();
		await saveAs.validateSnapshot(selectBtn, "save_as_select_btn");
		await selectBtn.click();
		expect(await saveAs.viewBtn.textContent()).toContain(saveAs_data.defaultView);
	});

	test("Cancel", async () => {
		await saveAs.saveAsBtn.click();
		await saveAs.selectSaveAsOption(1);
		await saveAs.saveLabel.type(saveAs_data.saveAsView);
		await saveAs.saveAsCheckbox.check();
		await saveAs.cancelViewBtn.click();
		expect(await saveAs.viewBtn.textContent()).toContain(saveAs_data.defaultView);
		await saveAs.viewBtn.click();
		expect(await saveAs.isLabelPresent(saveAs_data.saveAsView)).toBe(false);
	});

	test("Edit a View", async () => {
		await saveAs.createNewView(saveAs_data.saveAsView);

		await saveAs.viewBtn.click();
		await saveAs.wait();
		const editBtn = await saveAs.editBtnByLabel(saveAs_data.saveAsView);
		await saveAs.validateSnapshot(editBtn, "save_as_edit_view_btn");
		expect(await (await saveAs.getViewTypeByLabel(saveAs_data.saveAsView)).textContent()).toContain(saveAs_data.viewNotSharedType);
		await editBtn.click();
		await saveAs.saveLabel.fill(saveAs_data.saveAsViewEdit);
		expect((await saveAs.editCheckbox.isChecked()).valueOf()).toBe(false);
		await saveAs.editCheckbox.check();
		await saveAs.saveViewBtn.click();

		expect(await saveAs.viewBtn.textContent()).toContain(saveAs_data.saveAsViewEdit);

		await saveAs.closeEditViewBtn.click({ force: true });
		expect(await (await saveAs.getViewTypeByLabel(saveAs_data.saveAsViewEdit)).textContent()).toContain(saveAs_data.viewSharedType);
	});

	test("Remove a View", async () => {
		await saveAs.createNewView(saveAs_data.saveAsView);

		await saveAs.viewBtn.click();
		await (await saveAs.moreOptionsBtnByLabel(saveAs_data.saveAsView)).click();
		const removeOption = await saveAs.getRemoveOption();
		await saveAs.wait();
		await saveAs.validateSnapshot(removeOption, "save_as_edit_remove_option");
		await removeOption.click();
		await saveAs.closeSaveViewBtn.click({ force: true });

		await saveAs.viewBtn.click();
		expect(await saveAs.isLabelPresent(saveAs_data.saveAsView)).toBe(false);
	});

	test("Overwrite view", async () => {
		await pagination.selectViewTypeGridOption();
		await pagination.changeResultPerPage(2);
		await saveAs.createNewView(saveAs_data.saveAsOverwriteView);

		expect(await pagination.resultAmount.textContent()).toBe(`${dataview_data.resultPerPage50}`);
		const recordRangePerPage = await pagination.calulateRecordRangePerPage(dataview_data.resultPerPage50, 1);
		expect(await pagination.paginationValue.textContent()).toBe(recordRangePerPage);
		expect(await saveAs.viewBtn.textContent()).toContain(saveAs_data.saveAsOverwriteView);
		await pagination.validateSnapshot(await columns.columnsBtn, "grid_title_arrow");
		expect(await dataviewPage.getColumnHeadersCount()).not.toBe(saveAs_data.defaultColumnHeadersList);
		await pagination.changeResultPerPage(3);
		await saveAs.saveAsBtn.click();
		await saveAs.selectSaveAsOption(2);
		expect(await pagination.resultAmount.textContent()).toBe(`${dataview_data.resultPerPage100}`);

		await saveAs.viewBtn.click();
		await (await saveAs.selectViewBtnByLabel(saveAs_data.defaultView)).click();
		expect(await pagination.resultAmount.textContent()).toBe(`${dataview_data.resultPerPageDefault}`);
		expect(await saveAs.viewBtn.textContent()).toContain(saveAs_data.defaultView);

		await saveAs.viewBtn.click();
		await (await saveAs.selectViewBtnByLabel(saveAs_data.saveAsOverwriteView)).click();
		expect(await pagination.resultAmount.textContent()).toBe(`${dataview_data.resultPerPage100}`);
		expect(await saveAs.viewBtn.textContent()).toContain(saveAs_data.saveAsOverwriteView);
	});
});