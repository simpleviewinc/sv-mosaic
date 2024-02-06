import { test, expect, Page } from "@playwright/test";
import { FormFieldToggleSwitchPage } from "../../../pages/FormFields/FormFieldToggleSwitch/FormFieldToggleSwitchPage";

test.describe.parallel("FormFields - FormFieldsToggleSwitch - Kitchen Sink", () => {
	let page: Page;
	let formFieldToggleSwitchPage: FormFieldToggleSwitchPage;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		formFieldToggleSwitchPage = new FormFieldToggleSwitchPage(page);
		await formFieldToggleSwitchPage.visit(formFieldToggleSwitchPage.page_path);
	});

	test.afterAll(async ({ browser }) => {
		browser.close;
	});

	test("Validate the Toggle with label.", async () => {
		page.once("dialog", async dialog => {
			const message = dialog.message().split(/[{}]/)[1].split(/[\n":]/).map(el => el.trim()).filter(el => el !== "");
			expect(message[1]).toBe("true");
			await dialog.dismiss();
		});
		await formFieldToggleSwitchPage.regularToggleWithLabel.click();
		await expect(formFieldToggleSwitchPage.regularToggleWithLabel).toBeChecked();
		expect(formFieldToggleSwitchPage.regularLabel).not.toBeNull();
		await formFieldToggleSwitchPage.saveBtn.click();
	});

	test("Validate the Toggle without label.", async () => {
		page.once("dialog", async dialog => {
			const message = dialog.message().split(/[{}]/)[1].split(/[\n":]/).map(el => el.trim()).filter(el => el !== "");
			expect(message[1]).toBe("true");
			await dialog.dismiss();
		});
		await formFieldToggleSwitchPage.regularToggleWithoutLabel.click();
		await expect(formFieldToggleSwitchPage.regularToggleWithoutLabel).toBeChecked();
		await formFieldToggleSwitchPage.saveBtn.click();
	});
});
