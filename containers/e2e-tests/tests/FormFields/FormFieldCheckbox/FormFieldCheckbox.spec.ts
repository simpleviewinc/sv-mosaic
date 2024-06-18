import { test, expect, Page } from "@playwright/test";
import { FormFieldCheckboxPage } from "../../../pages/FormFields/FormFieldCheckbox/FormFieldCheckboxPage";
import theme from "../../../../src/theme";

test.describe("FormFields - FormFieldsCheckbox - Kitchen Sink", () => {
	let page: Page;
	let formFieldCheckboxPage: FormFieldCheckboxPage;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		formFieldCheckboxPage = new FormFieldCheckboxPage(page);
		await formFieldCheckboxPage.visit(formFieldCheckboxPage.page_path);
	});

	test.afterAll(async ({ browser }) => {
		browser.close;
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

	test("Validate the color in the checkbox label.", async () => {
		const numberOfLabels = await formFieldCheckboxPage.checkboxLabel.count();
		for (let i = 0; i < numberOfLabels; i++) {
			if (!await formFieldCheckboxPage.checkboxLabel.nth(i).isDisabled()) {
				await formFieldCheckboxPage.validateFontColorFromElement(formFieldCheckboxPage.checkboxLabel.nth(i), "#3B424E", true);
			}
		}
	});

	test("Validate checkbox text has grey4 as color.", async () => {
		const expectColor = theme.newColors.grey4["100"];
		for (let i = 0; i < await formFieldCheckboxPage.checkboxLabel.count();i++) {
			if (!await formFieldCheckboxPage.checkboxLabel.nth(i).isDisabled()) {
				expect(await formFieldCheckboxPage.getColorFromElement(formFieldCheckboxPage.checkboxLabel.nth(i))).toBe(expectColor);
			}
		}
	});

	test("Validate helper text has grey3 as color.", async () => {
		const expectColor = theme.newColors.grey3["100"];
		expect(await formFieldCheckboxPage.getColorFromElement(formFieldCheckboxPage.regularCheckboxLocator.locator("p").first())).toBe(expectColor);
		expect(await formFieldCheckboxPage.getColorFromElement(formFieldCheckboxPage.fromDBCheckboxLocator.locator("p").first())).toBe(expectColor);
	});
});
