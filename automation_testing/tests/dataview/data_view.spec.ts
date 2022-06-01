import { test, expect } from "@playwright/test";
import { DataviewPage } from "../../pages/DataViewPage";
import { dataview } from "../../utils/data/dataview_data";


test.describe("Data View", () => {
	let dataviewPage: DataviewPage;

	test.beforeEach(async ({ page }) => {
		dataviewPage = new DataviewPage(page);
		await dataviewPage.visit();
	});

	test("Create New", async () => {
		await dataviewPage.validateSnapshot(dataviewPage.createNewBtn, "create_new_btn");
		await dataviewPage.createNewBtn.click();
		await dataviewPage.validateDialogMessage("CREATE NEW");
	});

	test("Edit Icon", async () => {
		await dataviewPage.validateSnapshot(await dataviewPage.getFirstRowEditIcon(), "edit_icon");
		await (await dataviewPage.getFirstRowEditIcon()).click();
		await dataviewPage.validateDialogMessage("EDIT");
	});

	test("View Children", async () => {
		await dataviewPage.validateSnapshot(await dataviewPage.getFirstRowMoreOptions(), "more_options");
		await (await dataviewPage.getFirstRowMoreOptions()).click();

		await dataviewPage.validateSnapshot(dataviewPage.viewChildren, "view_children");
		await dataviewPage.viewChildren.click();

		await dataviewPage.validateDialogMessage("View Children");
	});

	test("History", async () => {
		await (await dataviewPage.getFirstRowMoreOptions()).click();
		await dataviewPage.validateSnapshot(dataviewPage.history, "history");
		await dataviewPage.history.click();
		await dataviewPage.validateDialogMessage("History");
	});

	test("Select A Record", async () => {
		await dataviewPage.validateSnapshot(await dataviewPage.getFirstRowCheckbox(), "checkbox");
		await (await dataviewPage.getFirstRowCheckbox()).click();
		await dataviewPage.validateSnapshot(await dataviewPage.getFirstRowCheckbox(), "checkbox_checked");
		expect(await dataviewPage.columnsBtn.isVisible()).toBe(false);
		expect(await dataviewPage.downloadBtn.isVisible()).toBe(true);
		expect(await dataviewPage.deleteBtn.isVisible()).toBe(true);
	});

	test("Delete A Record", async () => {
		await (await dataviewPage.getFirstRowCheckbox()).click();
		await dataviewPage.validateSnapshot(dataviewPage.deleteBtn, "delete_btn");
		await dataviewPage.deleteBtn.click();
		await dataviewPage.validateDialogMessage("DELETE");
	});

	test("Download A Record", async () => {
		await (await dataviewPage.getFirstRowCheckbox()).click();
		await dataviewPage.validateSnapshot(dataviewPage.downloadBtn, "download_btn");
		await dataviewPage.downloadBtn.click();
		await dataviewPage.validateDialogMessage("DOWNLOAD");
	});

	test("Select all records", async () => {
		await (await dataviewPage.getAllRowCheckbox()).click();
		const checkboxs = await dataviewPage.checkboxRow.elementHandles();

		for (const checkbox of checkboxs) {
			expect(await checkbox.isChecked()).toBe(true);
		}
		expect(await dataviewPage.allSelectedLabel.textContent()).toContain(dataview.allSelectedLabelMsg);
	});

	test("Delete all records", async () => {
		await (await dataviewPage.getAllRowCheckbox()).click();
		const checkboxs = await dataviewPage.checkboxRow.elementHandles();

		for (const checkbox of checkboxs) {
			expect(await checkbox.isChecked()).toBe(true);
		}
		expect(await dataviewPage.allSelectedLabel.textContent()).toContain(dataview.allSelectedLabelMsg);
		await dataviewPage.deleteBtn.click();

		await dataviewPage.validateRecordsNumberInDialogMessage(25);
	});

	test("Download all records", async () => {
		await (await dataviewPage.getAllRowCheckbox()).click();
		const checkboxs = await dataviewPage.checkboxRow.elementHandles();

		for (const checkbox of checkboxs) {
			expect(await checkbox.isChecked()).toBe(true);
		}
		expect(await dataviewPage.allSelectedLabel.textContent()).toContain(dataview.allSelectedLabelMsg);
		await dataviewPage.downloadBtn.click();

		await dataviewPage.validateRecordsNumberInDialogMessage(25);
	});
});