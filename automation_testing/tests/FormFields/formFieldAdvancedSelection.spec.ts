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

	test("Validate options are disabled once the maximum amount of options is selected.", async () => {
		await ffAdvancedSelectionPage.advancedSelectionWithSelectLimitButton.click();
		const numberOfOptions = await ffAdvancedSelectionPage.checkboxTestIdLocator.count();
		await ffAdvancedSelectionPage.checkboxTestIdLocator.first().check();
		await ffAdvancedSelectionPage.checkboxTestIdLocator.last().check();
		for (let i = 0; i < numberOfOptions; i++) {
			await expect(ffAdvancedSelectionPage.checkboxTestIdLocator.nth(i)).toBeDisabled();
		}

		await ffAdvancedSelectionPage.deleteSelectedOptionChip.first().click();
		for (let i = 0; i < numberOfOptions; i++) {
			await expect(ffAdvancedSelectionPage.checkboxTestIdLocator.nth(i)).toBeEnabled();
		}
	});
});
