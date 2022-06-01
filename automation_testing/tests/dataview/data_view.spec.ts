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
});