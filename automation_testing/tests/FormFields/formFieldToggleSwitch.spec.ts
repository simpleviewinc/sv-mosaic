import { test, expect, Page } from "@playwright/test";
import { FormFieldToggleSwitchPage } from "../../pages/FormFields/FormFieldToggleSwitchPage";

test.describe.parallel("FormFields - FormFieldsToggleSwitch - Kitchen Sink", () => {
	let page: Page;
	let formFieldToggleSwitchPage: FormFieldToggleSwitchPage;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		formFieldToggleSwitchPage = new FormFieldToggleSwitchPage(page);
		await formFieldToggleSwitchPage.visitPage();
	});

	test.afterAll(async ({ browser }) => {
		browser.close;
	});

	test("Validate the Toggle with label.", async ({ page }) => {
		page.on("dialog", async dialog => {
			const message = dialog.message().split(/[{}]/)[1].split(/[\n":]/).map(el => el.trim()).filter(el => el !== "");
			expect(message[1]).toBe("true");
			await dialog.dismiss();
		});
		await formFieldToggleSwitchPage.regularToggleWithLabel.click();
		await expect(formFieldToggleSwitchPage.regularToggleWithLabel).toBeChecked()
		expect(formFieldToggleSwitchPage.regularLabel).not.toBeNull();
		await formFieldToggleSwitchPage.saveBtn.click();
	});

	test("Validate the Disabled Toggle.", async () => {
		await expect(formFieldToggleSwitchPage.disabledToggle).toBeDisabled();
	});

	test("Validate the Toggle without label.", async ({ page }) => {
		page.on("dialog", async dialog => {
			const message = dialog.message().split(/[{}]/)[1].split(/[\n":]/).map(el => el.trim()).filter(el => el !== "");
			expect(message[1]).toBe("true");
			await dialog.dismiss();
		});
		await formFieldToggleSwitchPage.regularToggleWithoutLabel.click();
		await expect(formFieldToggleSwitchPage.regularToggleWithoutLabel).toBeChecked();
		await formFieldToggleSwitchPage.saveBtn.click();
	});
});
