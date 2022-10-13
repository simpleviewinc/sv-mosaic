import { test, expect } from "@playwright/test";
import { FormFieldRadioPage } from "../../pages/FormFields/FormFieldRadioPage";

test.describe("FormFields - FormFieldRadio - Kitchen Sink", () => {
	let formFieldRadioPage: FormFieldRadioPage;

	test.beforeEach(async ({ page }) => {
		formFieldRadioPage = new FormFieldRadioPage(page);
		await formFieldRadioPage.visitPage();
	});

	test("Validate Regular Radio Button", async ({ page }) => {
		page.on("dialog", async dialog => {
			expect(dialog.message()).toContain(selectedOptionValue);
			expect(dialog.message()).toContain(selectedOptionValue.toLocaleLowerCase().replace(/ /g,"_"));
			await dialog.dismiss();
		});
		const [ selectedOptionNumber, selectedOptionValue] = await formFieldRadioPage.selectRandomRadioButtonOption();
		await expect(formFieldRadioPage.regularRadioButton.locator("input").nth(selectedOptionNumber)).toBeChecked();
		await formFieldRadioPage.saveBtn.click();
	});

	test("Validate Disabled Radio Button", async () => {
		const amountOfOption = await formFieldRadioPage.disabledRadioButton.locator("input").count()
		for (let i = 0; i < amountOfOption; i++) {
			await expect(formFieldRadioPage.disabledRadioButton.locator("input").nth(i)).toBeDisabled();
		}
	});
});
