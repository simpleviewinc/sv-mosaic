import { test, expect, Page } from "@playwright/test";
import { FormFieldRadioPage } from "../../../pages/FormFields/FormFieldRadio/FormFieldRadioPage";

test.describe("FormFields - FormFieldRadio - Kitchen Sink", () => {
	let page: Page;
	let formFieldRadioPage: FormFieldRadioPage;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		formFieldRadioPage = new FormFieldRadioPage(page);
		await formFieldRadioPage.visit(formFieldRadioPage.page_path);
	});

	test.afterAll(async ({ browser }) => {
		browser.close;
	});

	test("Validate Regular Radio Button", async () => {
		page.once("dialog", async dialog => {
			expect(dialog.message()).toContain(selectedOptionValue);
			expect(dialog.message()).toContain(selectedOptionValue.toLocaleLowerCase().replace(/ /g, "_"));
			await dialog.dismiss();
		});
		const [selectedOptionNumber, selectedOptionValue] = await formFieldRadioPage.selectRandomRadioButtonOption();
		await expect(formFieldRadioPage.regularRadioButton.locator("input").nth(selectedOptionNumber)).toBeChecked();
		await formFieldRadioPage.saveBtn.click();
	});

	test("Validate Disabled Radio Button", async () => {
		await expect(formFieldRadioPage.disabledRadioButton.locator("input").first()).toBeDisabled();
	});
});
