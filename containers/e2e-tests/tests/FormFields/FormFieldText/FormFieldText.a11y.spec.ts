import type { Page } from "@playwright/test";
import { test, expect } from "@playwright/test";
import { FormFieldTextPage } from "../../../pages/FormFields/FormFieldText/FormFieldTextPage";
import { createAxeBuilder } from "../../../utils/helpers/axeBuilder";

test.describe("FormFields - FormFieldText - Accessibility", () => {
	let page: Page;
	let formFieldTextPage: FormFieldTextPage;

	test.beforeEach(async ({ page: testPage }) => {
		page = testPage;
		formFieldTextPage = new FormFieldTextPage(page);
	});

	test("FormFieldText should not have any accessibility issues in kitchen sink view", async () => {
		await formFieldTextPage.visit(formFieldTextPage.page_path);

		const accessibilityScanResults = await createAxeBuilder({ page }).analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});

	test("FormFieldText should not have any accessibility issues in playground view", async () => {
		await formFieldTextPage.visit(formFieldTextPage.playground_page_path);

		const accessibilityScanResults = await createAxeBuilder({ page }).analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});

	test("FormFieldText should not have any accessibility issues with regular text input", async () => {
		await formFieldTextPage.visit(formFieldTextPage.page_path);
		await formFieldTextPage.regularTextField.click();
		await formFieldTextPage.regularTextField.fill("Test input");

		const accessibilityScanResults = await createAxeBuilder({ page }).analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});

	test("FormFieldText should not have any accessibility issues with password input", async () => {
		await formFieldTextPage.visit(formFieldTextPage.page_path);
		await formFieldTextPage.passwordTextField.click();
		await formFieldTextPage.passwordTextField.fill("SecurePassword123");

		const accessibilityScanResults = await createAxeBuilder({ page }).analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});

	test("FormFieldText should not have any accessibility issues with multiline text", async () => {
		await formFieldTextPage.visit(formFieldTextPage.page_path);
		await formFieldTextPage.multilineTextField.click();
		await formFieldTextPage.multilineTextField.fill("Line one\nLine two\nLine three");

		const accessibilityScanResults = await createAxeBuilder({ page }).analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});

	test("FormFieldText should not have any accessibility issues with max character limit", async () => {
		await formFieldTextPage.visit(formFieldTextPage.page_path);
		await formFieldTextPage.fieldMaxCharTextField.click();
		await formFieldTextPage.fieldMaxCharTextField.fill("Text with character count");

		const accessibilityScanResults = await createAxeBuilder({ page }).analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});

	test("FormFieldText should not have any accessibility issues with icon", async () => {
		await formFieldTextPage.visit(formFieldTextPage.page_path);
		await formFieldTextPage.fieldWithIconTextField.focus();

		const accessibilityScanResults = await createAxeBuilder({ page }).analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});

	test("FormFieldText should not have any accessibility issues when disabled", async () => {
		await formFieldTextPage.visit(formFieldTextPage.page_path);

		const accessibilityScanResults = await createAxeBuilder({ page }).analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});

	test("FormFieldText should not have any accessibility issues with different sizes (xs, sm, md, lg)", async () => {
		await formFieldTextPage.visit(formFieldTextPage.page_path);
		await formFieldTextPage.xsSizeTextField.focus();
		await formFieldTextPage.smSizeTextField.focus();
		await formFieldTextPage.mdSizeTextField.focus();
		await formFieldTextPage.lgSizeTextField.focus();

		const accessibilityScanResults = await createAxeBuilder({ page }).analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});

	test("FormFieldText should support keyboard navigation", async () => {
		await formFieldTextPage.visit(formFieldTextPage.page_path);

		// Focus on first field and tab through
		await formFieldTextPage.regularTextField.focus();
		await expect(formFieldTextPage.regularTextField).toBeFocused();

		await page.keyboard.press("Tab");
		await expect(formFieldTextPage.passwordTextField).toBeFocused();

		await page.keyboard.press("Tab");
		await expect(formFieldTextPage.multilineTextField).toBeFocused();

		const accessibilityScanResults = await createAxeBuilder({ page }).analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});
});
