import { test, expect } from "@playwright/test";
import { ColumnsComponent } from "../../pages/ColumnsComponent";
import { DataviewPage } from "../../pages/DataViewPage";
import { dataview } from "../../utils/data/dataview_data";

test.describe("Data View", () => {
	let dataviewPage: DataviewPage;
	let columns: ColumnsComponent;

	test.beforeEach(async ({ page }) => {
		dataviewPage = new DataviewPage(page);
		columns = dataviewPage.columnsComponent;

		await dataviewPage.visit();
	});

	test("DataView - Create New", async () => {
		await dataviewPage.validateSnapshot(dataviewPage.createNewBtn, "create_new_btn");
		await dataviewPage.setDialogValidationListener("CREATE NEW");
		await dataviewPage.createNewBtn.click();
	});

	test("DataView - Edit Icon", async () => {
		await dataviewPage.validateSnapshot(await dataviewPage.getFirstRowEditIcon(), "edit_icon");
		await dataviewPage.setDialogValidationListener("EDIT");
		await (await dataviewPage.getFirstRowEditIcon()).click();
	});

	test("DataView - View Children", async () => {
		await dataviewPage.validateSnapshot(await dataviewPage.getFirstRowMoreOptions(), "more_options");
		await (await dataviewPage.getFirstRowMoreOptions()).click();

		await dataviewPage.validateSnapshot(dataviewPage.viewChildren, "view_children");
		await dataviewPage.setDialogValidationListener("View Children");
		await dataviewPage.viewChildren.click();
	});


	test("DataView - History", async () => {
		await (await dataviewPage.getFirstRowMoreOptions()).click();
		await dataviewPage.validateSnapshot(dataviewPage.history, "history");

		await dataviewPage.setDialogValidationListener("History");
		await dataviewPage.history.click();
	});


	test("DataView - Select A Record", async () => {
		await dataviewPage.validateSnapshot(await dataviewPage.getFirstRowCheckbox(), "checkbox");
		await (await dataviewPage.getFirstRowCheckbox()).click();
		await dataviewPage.validateSnapshot(await dataviewPage.getFirstRowCheckbox(), "checkbox_checked");
		expect(await columns.columnsBtn.isVisible()).toBe(false);
		expect(await dataviewPage.downloadBtn.isVisible()).toBe(true);
		expect(await dataviewPage.deleteBtn.isVisible()).toBe(true);
	});

	test("DataView - Delete A Record", async () => {
		await (await dataviewPage.getFirstRowCheckbox()).click();
		await dataviewPage.validateSnapshot(dataviewPage.deleteBtn, "delete_btn");
		await dataviewPage.setDialogValidationListener("DELETE");
		await dataviewPage.deleteBtn.click();
	});

	test("DataView - Download A Record", async () => {
		await (await dataviewPage.getFirstRowCheckbox()).click();
		await dataviewPage.validateSnapshot(dataviewPage.downloadBtn, "download_btn");
		await dataviewPage.setDialogValidationListener("DOWNLOAD");
		await dataviewPage.downloadBtn.click();
	});

	test("DataView - Select all records", async () => {
		await (await dataviewPage.getAllRowCheckbox()).click();
		const checkboxs = await dataviewPage.checkboxRow.elementHandles();

		for (const checkbox of checkboxs) {
			expect(await checkbox.isChecked()).toBe(true);
		}
		expect(await dataviewPage.allSelectedLabel.textContent()).toContain(dataview.allSelectedLabelMsg);
	});

	test("DataView - Delete all records", async () => {
		await (await dataviewPage.getAllRowCheckbox()).click();
		const checkboxs = await dataviewPage.checkboxRow.elementHandles();

		for (const checkbox of checkboxs) {
			expect(await checkbox.isChecked()).toBe(true);
		}
		expect(await dataviewPage.allSelectedLabel.textContent()).toContain(dataview.allSelectedLabelMsg);
		await dataviewPage.validateRecordsNumberInDialogMessage(25);
		await dataviewPage.deleteBtn.click();


	});

	test("DataView - Download all records", async () => {
		await (await dataviewPage.getAllRowCheckbox()).click();
		const checkboxs = await dataviewPage.checkboxRow.elementHandles();

		for (const checkbox of checkboxs) {
			expect(await checkbox.isChecked()).toBe(true);
		}
		expect(await dataviewPage.allSelectedLabel.textContent()).toContain(dataview.allSelectedLabelMsg);
		await dataviewPage.validateRecordsNumberInDialogMessage(25);
		await dataviewPage.downloadBtn.click();
	});
});