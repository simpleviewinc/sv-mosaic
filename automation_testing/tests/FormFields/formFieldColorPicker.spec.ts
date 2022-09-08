import { test, expect } from "@playwright/test";
import { FormFieldColorPickerPage } from "../../pages/FormFields/FormFieldColorPickerPage";
import { getRandomHexCode } from "../../utils/helpers/helper";

test.describe("FormFields - FormFieldColorPicker - Kitchen Sink", () => {
	let ffColorPickerPage: FormFieldColorPickerPage;

	test.beforeEach(async ({ page }) => {
		ffColorPickerPage = new FormFieldColorPickerPage(page);
		await ffColorPickerPage.visitPage();
	});

	test("Validate the selection of a color in Regular Color Picker by clicking", async ({ page }) => {
		page.on("dialog", async dialog => {
			expect(dialog.message()).toContain('"color": "#' + hexCode);
			await dialog.dismiss();
		});
		await ffColorPickerPage.regularColorPicker.click();
		await ffColorPickerPage.clickRandomColorInSketchPicker();
		const hexCode = (await ffColorPickerPage.hexColorInput.inputValue()).toLocaleLowerCase();
		await ffColorPickerPage.saveBtn.click();
	});

	test("Validate the selection of a color in Regular Color Picker by writing HEX code", async ({ page }) => {
		page.on("dialog", async dialog => {
			expect(dialog.message()).toContain('"color": "#' + hexCode);
			await dialog.dismiss();
		});
		const hexCode = getRandomHexCode(6);
		await ffColorPickerPage.regularColorPicker.click();
		await ffColorPickerPage.hexColorInput.selectText();
		await ffColorPickerPage.clearAllValuesFromField();
		await ffColorPickerPage.hexColorInput.type(hexCode);
		await ffColorPickerPage.saveBtn.click();
	});

	test("Validate Disabled Color Picker", async () => {
		expect(await ffColorPickerPage.disabledColorPickerLabel.textContent()).toBe("Disabled Example");
		expect(await ffColorPickerPage.disabledColorPicker.getAttribute("disabled")).toBe("");
	});
});
