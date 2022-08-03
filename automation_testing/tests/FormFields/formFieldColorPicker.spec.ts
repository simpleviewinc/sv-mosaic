import { test, expect } from "@playwright/test";
import { FormFieldColorPickerPage } from "../../pages/FormFields/FormFieldColorPickerPage";

test.describe("FormFields - FormFieldImageUpload - Kitchen Sink", () => {
	let ffColorPickerPage: FormFieldColorPickerPage;

	test.beforeEach(async ({ page }) => {
		ffColorPickerPage = new FormFieldColorPickerPage(page);
		await ffColorPickerPage.visitPage();
	});

	test("Validate the selection of a color in Regular Color Picker by clicking", async ({ page }) => {
		page.on("dialog", async dialog => {
			expect(dialog.message()).toContain('"color": "#' + hexCode + '"');
			await dialog.dismiss();
		});

		await ffColorPickerPage.regularColorPicker.click();
		await ffColorPickerPage.clickRandomColorInSketchPicker();
		const hexCode = (await ffColorPickerPage.hexColorInput.inputValue()).toLocaleLowerCase();
		console.log("hexCode:", hexCode)
		await ffColorPickerPage.saveBtn.click();
	});

	test("Validate Disabled Color Picker", async () => {
		await expect(ffColorPickerPage.disabledColorPicker).toBeDisabled();
	});
});