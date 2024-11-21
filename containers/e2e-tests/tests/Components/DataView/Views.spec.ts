import type { Page } from "@playwright/test";
import { test, expect } from "@playwright/test";
import { DataviewPage } from "../../../pages/Components/DataView/DataViewPage";

test.describe.parallel("Components - Data View - Views", () => {
	let page: Page;
	let dataviewPage: DataviewPage;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		dataviewPage = new DataviewPage(page);
		await dataviewPage.visit(dataviewPage.page_path);
	});

	test.beforeEach(async () => {
		await page.reload();
		await dataviewPage.clean();
	});

	test("Selecting a view should update the list views dropdown", async () => {
		await dataviewPage.selectViewByDescription("Records in the beaches category.");
		await expect(page.getByRole("button", { name: "View: Beaches" })).toBeVisible();
	});

	test("Selecting the overwrite button should alert the user that the view has been saved", async () => {
		const expectAlertMessage = dataviewPage.addExpectedAlertHandler();

		await dataviewPage.selectViewByDescription("Art related records displayed in a grid ordered by most recent first.");
		await expect(page.getByRole("button", { name: "View: Art audit" })).toBeVisible();

		await page.getByRole("button", { name: "Save View" }).click();
		await page.getByRole("menuitem", { name: "Overwrite Current View" }).click();

		await expectAlertMessage("Current view saved");
	});

	test.skip("Selecting the save as view button and submitting the form should set the view and register it in saved views", async () => {
		const name = "No Filters Applied";
		const description = "A test view with no filters applied to it";

		await page.getByRole("button", { name: "Save View" }).click();
		await page.getByRole("menuitem", { name: "Save as New View" }).click();
		await expect(page.getByRole("heading", { name: "Save new view" })).toBeVisible();

		await page.getByLabel("Name*").fill(name);
		await page.getByLabel("Description*").fill(description);

		await page.getByRole("button", { name: "Save" }).click();
		await expect(page.getByRole("button", { name: `View: ${name}` })).toBeVisible();

		await page.getByRole("button", { name: `View: ${name}` }).click();
		await expect(page.locator("tr").filter({ hasText: description })).toBeVisible();
	});
});
