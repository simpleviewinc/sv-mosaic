import { test, expect } from "@playwright/test";
import { FormFieldCheckboxPage } from "../../pages/FormFields/FormFieldCheckboxPage";

test.describe("FormFields - FormFieldsCheckbox - Kitchen Sink", () => {
	let formFieldCheckboxPage: FormFieldCheckboxPage;

	test.beforeEach(async ({ page }) => {
		formFieldCheckboxPage = new FormFieldCheckboxPage(page);
		await formFieldCheckboxPage.visitPage();
	});

	test("Validate Regular Radio Button", async () => {
		const selectedOption = await formFieldCheckboxPage.selectRandomCheckboxButton();
		await expect(formFieldCheckboxPage.regularCheckboxButton.locator("[data-testid='label-test-id']").nth(selectedOption)).toBeChecked();
	});

	test("Validate Disabled Radio Button", async () => {
		const amountOfOption = await formFieldCheckboxPage.disabledCheckboxButton.locator("[data-testid='label-test-id']").count()
		for (let i = 0; i < amountOfOption; i++) {
			await expect(formFieldCheckboxPage.disabledCheckboxButton.locator("[data-testid='label-test-id']").nth(i)).toBeDisabled();
		}
	});

});