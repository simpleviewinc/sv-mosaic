import { test, expect, Page } from "@playwright/test";
import { DataviewPage } from "../../../pages/Components/DataView/DataViewPage";

test.describe.parallel("Components - Data View - Views", () => {
	let page: Page;
	let dataviewPage: DataviewPage;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		dataviewPage = new DataviewPage(page);
	});

	test("Selecting a view should update the list views dropdown", async () => {
		await dataviewPage.visit(dataviewPage.page_path);
		await dataviewPage.selectAllView();
	});

	test("Selecting the overwrite button should alert the user that the view has been saved", async () => {
		await dataviewPage.visit(dataviewPage.page_path);

		let didShowDialog = false;

		page.on("dialog", async dialog => {
			didShowDialog = true;
			expect(dialog.message()).toBe("Current view saved");
			await dialog.accept();
		});

		await dataviewPage.selectAllView();

		expect(await dataviewPage.saveViewDropdown.count()).toBe(1);
		await dataviewPage.saveViewDropdown.click();
		expect(await dataviewPage.overwriteViewButton.count()).toBe(1);
		await dataviewPage.overwriteViewButton.click();

		while (!didShowDialog) {
			await page.waitForTimeout(100);
		}
	});

	test("Selecting the save as view button and submitting the form should set the view and register it in saved views", async () => {
		await dataviewPage.visit(dataviewPage.page_path);

		expect(await dataviewPage.saveViewDropdown.count()).toBe(1);
		await dataviewPage.saveViewDropdown.click();
		expect(await dataviewPage.viewSaveAsButton.count()).toBe(1);
		await dataviewPage.viewSaveAsButton.click();
		expect(await dataviewPage.saveNewViewHeading.count()).toBe(1);
		expect(await dataviewPage.saveNewViewFields.count()).toBe(2);

		const nameField = dataviewPage.saveNewViewFields.nth(0);
		const descriptionField = dataviewPage.saveNewViewFields.nth(1);

		await nameField.type("My New View");
		await descriptionField.type("This is a custom view, just for testing");

		expect(await dataviewPage.saveNewViewSubmit.count()).toBe(1);
		await dataviewPage.saveNewViewSubmit.click();
		await new Promise((resolve) => setTimeout(() => resolve(null), 5000));

		expect(await dataviewPage.listViewsDropdownCustomSelected.count()).toBe(1);
	});
});
