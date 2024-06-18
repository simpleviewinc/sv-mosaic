import { test, expect, Page } from "@playwright/test";
import { PageHeaderPage } from "../../../pages/Components/PageHeader/PageHeaderPage";
import { pageHeaderKnobs as knob } from "../../../utils/data/knobs";

test.describe("Components - Page Header - Playground", () => {
	let page: Page;
	let pageHeaderPage: PageHeaderPage;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		pageHeaderPage = new PageHeaderPage(page);
		await pageHeaderPage.visit(pageHeaderPage.page_path);
	});

	test("Validate the page header title style.", async () => {
		await pageHeaderPage.validateTitleStylingOfLocator(pageHeaderPage.titleLocator);
	});

	test("Validate the On Back button visibility", async () => {
		await expect(pageHeaderPage.backButton).toBeVisible();
		await pageHeaderPage.visit(pageHeaderPage.page_path, [knob.knobOnBack + "false"]);
		await expect(pageHeaderPage.backButton).not.toBeVisible();
	});

	test("Validate the Save and Cancel button visibility", async () => {
		await expect(pageHeaderPage.cancelBtn).toBeVisible();
		await expect(pageHeaderPage.saveBtn).toBeVisible();
		await pageHeaderPage.visit(pageHeaderPage.page_path, [knob.knobButtons + "false"]);
		await expect(pageHeaderPage.cancelBtn).not.toBeVisible();
		await expect(pageHeaderPage.saveBtn).not.toBeVisible();
	});
});
