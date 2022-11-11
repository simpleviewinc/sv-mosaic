import { test, expect, Page } from "@playwright/test";
import { FormFieldTablePage } from "../../pages/FormFields/FormFieldTablePage";

test.describe.parallel("FormFields - FormFieldTable - Kitchen Sink", () => {
	let page: Page;
	let ffTablePage: FormFieldTablePage;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		ffTablePage = new FormFieldTablePage(page);
		await ffTablePage.visitPage();
	});

	test.afterAll(async ({ browser }) => {
		browser.close;
	});

	test("Validate labels in Table with extra actions", async () => {
		await ffTablePage.tableWithExtraActionsAddElementButton.click();
		const numberOfColumns = await ffTablePage.getNumberOfColumnsInTable();
		const tableLabels = await ffTablePage.getTableLabels();
		expect(tableLabels.length).toBe(numberOfColumns - 1);
	});

	test("Validate labels in Table with default actions", async () => {
		await page.reload();
		await ffTablePage.tableWithoutLabelAddElementButton.click();
		const tableLabels = await ffTablePage.getTableLabels();
		expect(tableLabels.length).toBe(1);
	});

	test("Validate pressing the Edit action button.", async ({ page }) => {
		page.on("dialog", async dialog => {
			expect(dialog.message()).toContain("Edit button clicked of row with index 0");
			await dialog.dismiss();
		});
		await ffTablePage.tableWithExtraActionsAddElementButton.click();
		await ffTablePage.actionButton.nth(0).click();
	});

	test("Validate pressing the Delete action button.", async () => {
		await ffTablePage.tableWithExtraActionsAddElementButton.click();
		await ffTablePage.actionButton.nth(1).click();
		page.on("dialog", async dialog => {
			expect(dialog.message()).toContain("Delete button clicked");
			await dialog.dismiss();
		});
	});

	test("Validate pressing the Menu action button.", async ({ page }) => {
		await ffTablePage.tableWithExtraActionsAddElementButton.click();
		await ffTablePage.actionButton.nth(2).click();
		page.on("dialog", async dialog => {
			expect(dialog.message()).toContain("Menu actions for row 0");
			await dialog.dismiss();
		});
	});

	test("Validate pressing the Translate action button.", async () => {
		page.on("dialog", async dialog => {
			expect(dialog.message()).toContain("Translate row 0");
			await dialog.dismiss();
		});
		await ffTablePage.tableWithExtraActionsAddElementButton.click();
		await ffTablePage.actionButton.nth(3).click();
	});

	test("Validate disabled Table", async () => {
		await expect(ffTablePage.tableDisabledAddElementButton).toBeDisabled();
	});
});
