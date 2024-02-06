import { test, expect, Page } from "@playwright/test";
import { FormFieldDropdownSingleSelectionPage } from "../../../pages/FormFields/FormFieldDropdownSingleSelection/FormFieldDropdownSingleSelectionPage";
import theme from "../../../../src/theme";

test.describe.parallel("FormFields - FormFieldDropdownSingleSelection - Kitchen Sink", () => {
	let page: Page;
	let formFieldDropdownSingleSelectionPage: FormFieldDropdownSingleSelectionPage;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		formFieldDropdownSingleSelectionPage = new FormFieldDropdownSingleSelectionPage(page);
		await formFieldDropdownSingleSelectionPage.visit(formFieldDropdownSingleSelectionPage.page_path);
	});

	test.afterAll(async ({ browser }) => {
		browser.close;
	});

	test("Validate the regular dropdown", async () => {
		const option = "The Godfather";
		await formFieldDropdownSingleSelectionPage.selectOptionFromDropdown(formFieldDropdownSingleSelectionPage.regularDropdownInput, option);
		expect(await formFieldDropdownSingleSelectionPage.regularDropdownInput.inputValue()).toBe(option);
	});

	test("Validate xs dropdown size is valid", async () => {
		expect(await formFieldDropdownSingleSelectionPage.getElementWidth(formFieldDropdownSingleSelectionPage.xsSizeDropdownDiv, true)).toBe(100);
	});

	test("Validate sm  dropdown size is valid", async () => {
		expect(await formFieldDropdownSingleSelectionPage.getElementWidth(formFieldDropdownSingleSelectionPage.smSizeDropdownDiv, true)).toBe(280);
	});

	test("Validate md dropdown size is valid", async () => {
		expect(await formFieldDropdownSingleSelectionPage.getElementWidth(formFieldDropdownSingleSelectionPage.mdSizeDropdownDiv, true)).toBe(450);
	});

	test("Validate lg dropdown size is valid", async () => {
		expect(await formFieldDropdownSingleSelectionPage.getElementWidth(formFieldDropdownSingleSelectionPage.lgSizeDropdownDiv, true)).toBe(620);
	});

	test("Validate the xs dropdown", async () => {
		await page.reload();
		const option = "The Godfather";
		await formFieldDropdownSingleSelectionPage.selectOptionFromDropdown(formFieldDropdownSingleSelectionPage.xsSizeDropdownInput, option);
		expect(await formFieldDropdownSingleSelectionPage.xsSizeDropdownInput.inputValue()).toBe(option);
	});

	test("Validate the sm dropdown", async () => {
		await page.reload();
		const option = "The Godfather";
		await formFieldDropdownSingleSelectionPage.selectOptionFromDropdown(formFieldDropdownSingleSelectionPage.smSizeDropdownInput, option);
		expect(await formFieldDropdownSingleSelectionPage.smSizeDropdownInput.inputValue()).toBe(option);
	});

	test("Validate the md dropdown", async () => {
		await page.reload();
		const option = "The Godfather";
		await formFieldDropdownSingleSelectionPage.selectOptionFromDropdown(formFieldDropdownSingleSelectionPage.mdSizeDropdownInput, option);
		expect(await formFieldDropdownSingleSelectionPage.mdSizeDropdownInput.inputValue()).toBe(option);
	});

	test("Validate the lg dropdown", async () => {
		await page.reload();
		const option = "The Godfather";
		await formFieldDropdownSingleSelectionPage.selectOptionFromDropdown(formFieldDropdownSingleSelectionPage.lgSizeDropdownInput, option);
		expect(await formFieldDropdownSingleSelectionPage.lgSizeDropdownInput.inputValue()).toBe(option);
	});

	test("Validate padding of the input fields.", async () => {
		const inputCount = await formFieldDropdownSingleSelectionPage.inputLocator.count();
		for (let i = 0; i < inputCount; i++) {
			expect(await formFieldDropdownSingleSelectionPage.getSpecificPaddingFromElement(formFieldDropdownSingleSelectionPage.inputLocator.nth(i), "all")).toBe(theme.fieldSpecs.inputText.padding);
		}
	});
});
