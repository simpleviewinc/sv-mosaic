import { test, expect, Page } from "@playwright/test";
import { FormFieldDropdownPage } from "../../../pages/FormFields/FormFieldDropdown/FormFieldDropdownPage";
import theme from "../../../../src/theme";

test.describe.parallel("FormFields - FormFieldDropdown - Kitchen Sink", () => {
	let page: Page;
	let formFieldDropdownPage: FormFieldDropdownPage;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		formFieldDropdownPage = new FormFieldDropdownPage(page);
		await formFieldDropdownPage.visit(formFieldDropdownPage.page_path);
	});

	test.afterAll(async ({ browser }) => {
		browser.close;
	});

	test("Validate the regular dropdown", async () => {
		const option = "The Godfather";
		await formFieldDropdownPage.selectOptionFromDropdown(formFieldDropdownPage.regularDropdownInput, option);
		expect(await formFieldDropdownPage.regularDropdownInput.inputValue()).toBe(option);
	});

	test("Validate xs dropdown size is valid", async () => {
		expect(await formFieldDropdownPage.getElementWidth(formFieldDropdownPage.xsSizeDropdownDiv, true)).toBe(100);
	});

	test("Validate sm  dropdown size is valid", async () => {
		expect(await formFieldDropdownPage.getElementWidth(formFieldDropdownPage.smSizeDropdownDiv, true)).toBe(280);
	});

	test("Validate md dropdown size is valid", async () => {
		expect(await formFieldDropdownPage.getElementWidth(formFieldDropdownPage.mdSizeDropdownDiv, true)).toBe(450);
	});

	test("Validate lg dropdown size is valid", async () => {
		expect(await formFieldDropdownPage.getElementWidth(formFieldDropdownPage.lgSizeDropdownDiv, true)).toBe(620);
	});

	test("Validate the xs dropdown", async () => {
		await page.reload();
		const option = "The Godfather";
		await formFieldDropdownPage.selectOptionFromDropdown(formFieldDropdownPage.xsSizeDropdownInput, option);
		expect(await formFieldDropdownPage.xsSizeDropdownInput.inputValue()).toBe(option);
	});

	test("Validate the sm dropdown", async () => {
		await page.reload();
		const option = "The Godfather";
		await formFieldDropdownPage.selectOptionFromDropdown(formFieldDropdownPage.smSizeDropdownInput, option);
		expect(await formFieldDropdownPage.smSizeDropdownInput.inputValue()).toBe(option);
	});

	test("Validate the md dropdown", async () => {
		await page.reload();
		const option = "The Godfather";
		await formFieldDropdownPage.selectOptionFromDropdown(formFieldDropdownPage.mdSizeDropdownInput, option);
		expect(await formFieldDropdownPage.mdSizeDropdownInput.inputValue()).toBe(option);
	});

	test("Validate the lg dropdown", async () => {
		await page.reload();
		const option = "The Godfather";
		await formFieldDropdownPage.selectOptionFromDropdown(formFieldDropdownPage.lgSizeDropdownInput, option);
		expect(await formFieldDropdownPage.lgSizeDropdownInput.inputValue()).toBe(option);
	});

	test("Validate padding of the input fields.", async () => {
		const inputCount = await formFieldDropdownPage.inputLocator.count();
		for (let i = 0; i < inputCount; i++) {
			expect(await formFieldDropdownPage.getSpecificPaddingFromElement(formFieldDropdownPage.inputLocator.nth(i), "all")).toBe(theme.fieldSpecs.inputText.padding);
		}
	});
});
