import { test, expect, Page } from "@playwright/test";
import { FormFieldMatrixFormVariantPage } from "../../../pages/FormFields/FormFieldMatrixPage/FormFieldMatrixFormVariantPage";

test.describe("FormFields - FormFieldMatrix - Form Variant", () => {
	let page: Page;
	let ffMatrixFormVariantPage: FormFieldMatrixFormVariantPage;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		ffMatrixFormVariantPage = new FormFieldMatrixFormVariantPage(page);
		await ffMatrixFormVariantPage.visit(ffMatrixFormVariantPage.page_path);
	});

	test.afterEach(async() => {
		await ffMatrixFormVariantPage.deleteAllRows();
	});

	test.afterAll(async ({ browser }) => {
		browser.close;
	});

	test("Validate that a new record can be saved.", async () => {
		const title = "Example of a Title";
		const description = "Example of a Description";
		await ffMatrixFormVariantPage.addMatrixButton.click();
		await ffMatrixFormVariantPage.titleInput.type(title);
		await ffMatrixFormVariantPage.descriptionInput.type(description);
		await ffMatrixFormVariantPage.saveBtn.nth(1).click();
		const matrixTitle = await ffMatrixFormVariantPage.getRowDataFromMatrix("Title");
		const matrixDescription = await ffMatrixFormVariantPage.getRowDataFromMatrix("Description");
		expect(matrixTitle[0]).toBe(title);
		expect(matrixDescription[0]).toBe(description);
	});

	test("Validate that a new record can be edited.", async () => {
		const title = "Example of a Title";
		const description = "Example of a Description";
		const modifiedTag = "Modified ";
		await ffMatrixFormVariantPage.addMatrixButton.click();
		await ffMatrixFormVariantPage.titleInput.type(title);
		await ffMatrixFormVariantPage.descriptionInput.type(description);
		await ffMatrixFormVariantPage.saveBtn.nth(1).click();

		// Modified Title and Description
		await ffMatrixFormVariantPage.editIconButton.first().click();
		await ffMatrixFormVariantPage.titleInput.type(modifiedTag);
		await ffMatrixFormVariantPage.descriptionInput.type(modifiedTag);
		await ffMatrixFormVariantPage.saveBtn.nth(1).click();
		const matrixTitle = await ffMatrixFormVariantPage.getRowDataFromMatrix("Title");
		const matrixDescription = await ffMatrixFormVariantPage.getRowDataFromMatrix("Description");
		expect(matrixTitle[0]).toBe(modifiedTag + title);
		expect(matrixDescription[0]).toBe(modifiedTag + description);
	});

	test("Validate that a new record can be deleted.", async () => {
		const title = "Example of a Title";
		const description = "Example of a Description";
		await ffMatrixFormVariantPage.addMatrixButton.click();
		await ffMatrixFormVariantPage.titleInput.type(title);
		await ffMatrixFormVariantPage.descriptionInput.type(description);
		await ffMatrixFormVariantPage.saveBtn.nth(1).click();
		await ffMatrixFormVariantPage.deleteIconButton.first().click();
		expect(await ffMatrixFormVariantPage.getRowDataFromMatrix("Title")).not.toContain(title);
		expect(await ffMatrixFormVariantPage.getRowDataFromMatrix("Description")).not.toContain(description);
	});

	test("Validate that a new record isn't saved when clicking Cancel.", async () => {
		const title = "Example of a Title";
		const description = "Example of a Description";
		await ffMatrixFormVariantPage.addMatrixButton.click();
		await ffMatrixFormVariantPage.titleInput.type(title);
		await ffMatrixFormVariantPage.descriptionInput.type(description);
		await ffMatrixFormVariantPage.cancelBtn.nth(1).click();
		expect(await ffMatrixFormVariantPage.getRowDataFromMatrix("Title")).not.toContain(title);
		expect(await ffMatrixFormVariantPage.getRowDataFromMatrix("Description")).not.toContain(description);
	});
});
