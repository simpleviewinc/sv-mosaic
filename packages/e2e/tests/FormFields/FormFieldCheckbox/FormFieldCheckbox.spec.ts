import type { Page } from "@playwright/test";
import { test, expect } from "@playwright/test";
import { FormFieldCheckboxPage } from "../../../pages/FormFields/FormFieldCheckbox/FormFieldCheckboxPage";
import theme from "@simpleview/sv-mosaic/theme";

test.describe("FormFields - FormFieldsCheckbox - Kitchen Sink", () => {
	let page: Page;
	let formFieldCheckboxPage: FormFieldCheckboxPage;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		formFieldCheckboxPage = new FormFieldCheckboxPage(page);
		await formFieldCheckboxPage.visit(formFieldCheckboxPage.page_path);
	});

	test("Validate Regular Checkbox.", async () => {
		const selectedOption = await formFieldCheckboxPage.selectRandomCheckboxButton();
		await expect(formFieldCheckboxPage.regularCheckboxButton.locator("[data-testid='label-test-id']").nth(selectedOption)).toBeChecked();
	});

	test("Validate Disabled Checkbox displays disabled inputs", async () => {
		await expect(formFieldCheckboxPage.disableCheckbox.locator("input").first()).toBeDisabled();
	});

	test("Validate that the empty value is saved correctly.", async () => {
		const selectedOption = await formFieldCheckboxPage.selectRandomCheckboxButton();
		await formFieldCheckboxPage.saveBtn.click();
		await formFieldCheckboxPage.uncheckCheckboxOption(selectedOption);
		await formFieldCheckboxPage.saveBtn.click();
		page.once("dialog", async dialog => {
			expect(dialog.message()).toContain("Form submitted with the following data: {}");
			await dialog.accept();
		});
	});

	test.skip("Validate helper text has grey3 as color.", async () => {
		const expectColor = theme.newColors.grey3["100"];
		expect(await formFieldCheckboxPage.getColorFromElement(formFieldCheckboxPage.regularCheckboxLocator.locator("p").first())).toBe(expectColor);
		expect(await formFieldCheckboxPage.getColorFromElement(formFieldCheckboxPage.fromDBCheckboxLocator.locator("p").first())).toBe(expectColor);
	});
});
