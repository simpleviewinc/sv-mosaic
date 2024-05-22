import { test, expect, Page } from "@playwright/test";
import { FormFieldMatrixBrowsePage } from "../../../pages/FormFields/FormFieldMatrixPage/FormFieldMatrixBrowsePage";

test.describe("FormFields - FormFieldMatrix - Browse", () => {
	let page: Page;
	let ffMatrixBrowsePage: FormFieldMatrixBrowsePage;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		ffMatrixBrowsePage = new FormFieldMatrixBrowsePage(page);
		await ffMatrixBrowsePage.visit(ffMatrixBrowsePage._page_path);
	});

	test.afterEach(async() => {
		await ffMatrixBrowsePage.deleteAllRows();
	});

	test.afterAll(async ({ browser }) => {
		browser.close;
	});

	test("Validate that selected options should be visible in the matrix.", async () => {
		await ffMatrixBrowsePage.addMatrixButton.click();
		const titles = await ffMatrixBrowsePage.selectOptionsFromDrawer(2);
		await ffMatrixBrowsePage.saveBtn.nth(1).click();
		const matrixTitle = await ffMatrixBrowsePage.getRowDataFromMatrix("Title");
		for (let i = 0; i < titles.length;i++) {
			expect(matrixTitle[i]).toBe(titles[i]);
		}
	});

	test("Validate that a selected option can be edited.", async () => {
		const modifiedTag = "Modified ";
		await ffMatrixBrowsePage.addMatrixButton.click();
		const title = await ffMatrixBrowsePage.selectOptionsFromDrawer(1);
		await ffMatrixBrowsePage.saveBtn.nth(1).click();

		// We modified the Title
		await ffMatrixBrowsePage.editIconButton.first().click();
		await ffMatrixBrowsePage.titleInput.type(modifiedTag);
		await ffMatrixBrowsePage.saveBtn.nth(1).click();
		const matrixTitle = await ffMatrixBrowsePage.getRowDataFromMatrix("Title");
		expect(matrixTitle[0]).toBe(modifiedTag + title[0]);
	});

	test("Validate that a selected option can be removed.", async () => {
		await ffMatrixBrowsePage.addMatrixButton.click();
		const titles = await ffMatrixBrowsePage.selectOptionsFromDrawer(3);
		await ffMatrixBrowsePage.saveBtn.nth(1).click();
		await ffMatrixBrowsePage.deleteIconButton.first().click();
		const removedItemTitle = titles[0];
		expect(await ffMatrixBrowsePage.getRowDataFromMatrix("Title")).not.toContain(removedItemTitle);
	});
});
