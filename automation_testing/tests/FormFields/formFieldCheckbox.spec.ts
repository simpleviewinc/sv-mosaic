import { test, expect, Page } from "@playwright/test";
import { FormFieldCheckboxPage } from "../../pages/FormFields/FormFieldCheckboxPage";

test.describe("FormFields - FormFieldsCheckbox - Kitchen Sink", () => {
	let page: Page;
	let formFieldCheckboxPage: FormFieldCheckboxPage;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		formFieldCheckboxPage = new FormFieldCheckboxPage(page);
		await formFieldCheckboxPage.visitPage();
	});

	test.afterAll(async ({ browser }) => {
		browser.close;
	});

	test("Validate Regular Radio Button.", async () => {
		const selectedOption = await formFieldCheckboxPage.selectRandomCheckboxButton();
		await expect(formFieldCheckboxPage.regularCheckboxButton.locator("[data-testid='label-test-id']").nth(selectedOption)).toBeChecked();
	});

	test("Validate Disabled Radio Button.", async () => {
		const amountOfOption = await formFieldCheckboxPage.disabledCheckboxButton.locator("[data-testid='label-test-id']").count()
		for (let i = 0; i < amountOfOption; i++) {
			await expect(formFieldCheckboxPage.disabledCheckboxButton.locator("[data-testid='label-test-id']").nth(i)).toBeDisabled();
		}
	});

	test("Validate that the empty value is saved correctly.", async ({ page }) => {
		const selectedOption = await formFieldCheckboxPage.selectRandomCheckboxButton();
		await formFieldCheckboxPage.saveBtn.click();
		await formFieldCheckboxPage.uncheckCheckboxOption(selectedOption);
		await formFieldCheckboxPage.saveBtn.click();
		page.on("dialog", async dialog => {
			expect(dialog.message()).toContain("Form submitted with the following data: {}");
			await dialog.accept();
		});
	});

	test("Validate the color in the checkbox label.", async ({ page }) => {
		const numberOfLabels = await formFieldCheckboxPage.checkboxLabel.count();
		for (let i = 0; i < numberOfLabels; i++) {
			if (!await formFieldCheckboxPage.checkboxLabel.nth(i).isDisabled()) {
				await formFieldCheckboxPage.validateFontColorFromElement(formFieldCheckboxPage.checkboxLabel.nth(i), "#3B424E", true);
			}
		}
	});
});
