import { test, expect, Page } from "@playwright/test";
import { FormFieldRadioPage } from "../../pages/FormFields/FormFieldRadioPage";

test.describe("FormFields - FormFieldRadio - Kitchen Sink", () => {
	let page: Page;
	let formFieldRadioPage: FormFieldRadioPage;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		formFieldRadioPage = new FormFieldRadioPage(page);
		await formFieldRadioPage.visitPage();
	});

	test.afterAll(async ({ browser }) => {
		browser.close;
	});

	test("Validate Regular Radio Button", async ({ page }) => {
		page.on("dialog", async dialog => {
			const message = dialog.message().split(/[{}]/)[1].split(/[\n":]/).map(el => el.trim()).filter(el => el !== "");
			expect(message[1]).toBe(selectedOptionValue);
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
