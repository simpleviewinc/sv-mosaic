import type { Page } from "@playwright/test";
import { test, expect } from "@playwright/test";
import { FormFieldTogglePage } from "../../../pages/FormFields/FormFieldToggle/FormFieldTogglePage";

test.describe("FormFields - FormFieldsToggle - Kitchen Sink", () => {
	let page: Page;
	let formFieldTogglePage: FormFieldTogglePage;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		formFieldTogglePage = new FormFieldTogglePage(page);
		await formFieldTogglePage.visit(formFieldTogglePage.page_path);
	});

	test("Validate the Toggle with label.", async () => {
		page.once("dialog", async dialog => {
			const message = dialog.message().split(/[{}]/)[1].split(/[\n":]/).map(el => el.trim()).filter(el => el !== "");
			expect(message[1]).toBe("true");
			await dialog.dismiss();
		});
		await formFieldTogglePage.regularToggleWithLabel.click();
		await expect(formFieldTogglePage.regularToggleWithLabel).toBeChecked();
		expect(formFieldTogglePage.regularLabel).not.toBeNull();
		await formFieldTogglePage.saveBtn.click();
	});

	test("Validate the Toggle without label.", async () => {
		page.once("dialog", async dialog => {
			const message = dialog.message().split(/[{}]/)[1].split(/[\n":]/).map(el => el.trim()).filter(el => el !== "");
			expect(message[1]).toBe("true");
			await dialog.dismiss();
		});
		await formFieldTogglePage.regularToggleWithoutLabel.click();
		await expect(formFieldTogglePage.regularToggleWithoutLabel).toBeChecked();
		await formFieldTogglePage.saveBtn.click();
	});
});
