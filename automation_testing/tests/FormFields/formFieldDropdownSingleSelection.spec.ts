import { test, expect } from "@playwright/test";
import { FormFieldDropdownSingleSelectionPage } from "../../pages/FormFields/FormFieldDropdownSingleSelectionPage";

test.describe.parallel("FormFields - FormFieldDropdownSingleSelection - Kitchen Sink", () => {
	let formFieldDropdownSingleSelectionPage: FormFieldDropdownSingleSelectionPage;

	test.beforeEach(async ({ page }) => {
		formFieldDropdownSingleSelectionPage = new FormFieldDropdownSingleSelectionPage(page);
		await formFieldDropdownSingleSelectionPage.visitPage();
	});

	test("Validate the regular dropdown", async () => {
		const option = "The Godfather";
		await formFieldDropdownSingleSelectionPage.selectOptionFromDropdown(formFieldDropdownSingleSelectionPage.regularDropdownInput, option);
		expect(await formFieldDropdownSingleSelectionPage.regularDropdownInput.inputValue()).toBe(option);
	});

	test("Validate the Disabled Field.", async () => {
		expect(await formFieldDropdownSingleSelectionPage.disabledField.textContent()).toBe("placeholder");
	});

	test("Validate xs dropdown size is valid", async () => {
		expect(await formFieldDropdownSingleSelectionPage.getElementWidth(formFieldDropdownSingleSelectionPage.xsSizeDropdownDiv)).toBe(100);
	});

	test("Validate sm  dropdown size is valid", async () => {
		expect(await formFieldDropdownSingleSelectionPage.getElementWidth(formFieldDropdownSingleSelectionPage.smSizeDropdownDiv)).toBe(280);
	});

	test("Validate md dropdown size is valid", async () => {
		expect(await formFieldDropdownSingleSelectionPage.getElementWidth(formFieldDropdownSingleSelectionPage.mdSizeDropdownDiv)).toBe(450);
	});

	test("Validate lg dropdown size is valid", async () => {
		expect(await formFieldDropdownSingleSelectionPage.getElementWidth(formFieldDropdownSingleSelectionPage.lgSizeDropdownDiv)).toBe(620);
	});

	test("Validate the xs dropdown", async () => {
		const option = "The Godfather";
		await formFieldDropdownSingleSelectionPage.selectOptionFromDropdown(formFieldDropdownSingleSelectionPage.xsSizeDropdownInput, option);
		expect(await formFieldDropdownSingleSelectionPage.xsSizeDropdownInput.inputValue()).toBe(option);
	});

	test("Validate the sm dropdown", async () => {
		const option = "The Godfather";
		await formFieldDropdownSingleSelectionPage.selectOptionFromDropdown(formFieldDropdownSingleSelectionPage.smSizeDropdownInput, option);
		expect(await formFieldDropdownSingleSelectionPage.smSizeDropdownInput.inputValue()).toBe(option);
	});

	test("Validate the md dropdown", async () => {
		const option = "The Godfather";
		await formFieldDropdownSingleSelectionPage.selectOptionFromDropdown(formFieldDropdownSingleSelectionPage.mdSizeDropdownInput, option);
		expect(await formFieldDropdownSingleSelectionPage.mdSizeDropdownInput.inputValue()).toBe(option);
	});

	test("Validate the lg dropdown", async () => {
		const option = "The Godfather";
		await formFieldDropdownSingleSelectionPage.selectOptionFromDropdown(formFieldDropdownSingleSelectionPage.lgSizeDropdownInput, option);
		expect(await formFieldDropdownSingleSelectionPage.lgSizeDropdownInput.inputValue()).toBe(option);
	});
});
