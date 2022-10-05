import { test, expect, Page } from "@playwright/test";
import { FormFieldAdvancedSelectionPage } from "../../pages/FormFields/FormFieldAdvancedSelectionPage";

test.describe.parallel("FormFields - FormFieldAdvancedSelection - Kitchen Sink", () => {
	let page: Page;
	let ffAdvancedSelectionPage: FormFieldAdvancedSelectionPage;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		ffAdvancedSelectionPage = new FormFieldAdvancedSelectionPage(page);
		await ffAdvancedSelectionPage.visitPage();
	});

	test.afterAll(async ({ browser }) => {
		browser.close;
	});

	test("Validate all the Advanced Selection buttons have the valid text.", async () => {
		const numberOfButtons = await ffAdvancedSelectionPage.advancedSelectionButton.count();
		for (let i = 0; i < numberOfButtons; i++) {
			expect(await ffAdvancedSelectionPage.advancedSelectionButton.nth(i).textContent()).toBe("ADD");
		}
	});
});
