import { test, expect } from "@playwright/test";
import { FormFieldChipSingleSelectPage } from "../../pages/FormFields/FormFieldChipSingleSelectPage";

test.describe("FormFields - FormFieldImageUpload - Kitchen Sink", () => {
	let ffChipSingleSelectPage: FormFieldChipSingleSelectPage;

	test.beforeEach(async ({ page }) => {
		ffChipSingleSelectPage = new FormFieldChipSingleSelectPage(page);
		await ffChipSingleSelectPage.visitPage();
	});

	test("Validate the selection Regular Chip Single Select ", async () => {
		/*
		Hago click en una option
		el background color deberia ser #FDB924
		si hago click de vuelta en la misma opcion, se deberia deseleccionar >> #F0F2F5
		*/
		const numberOfOptionSelected = await ffChipSingleSelectPage.selectRandomChipOption(ffChipSingleSelectPage.regularChipSingleSelectDiv);
		const bgColor = await ffChipSingleSelectPage.getBackgroundColorFromOption(numberOfOptionSelected, false);
		expect(bgColor).toBe("rgb(252, 188, 47)")
	});

	test("Validate the Disabled Regular Chip Single Select", async () => {
		expect(await ffColorPickerPage.disabledColorPickerLabel.textContent()).toBe("Disabled Example");
		expect(await ffColorPickerPage.disabledColorPicker.getAttribute("disabled")).toBe("");
	});

	test("Validate the selection Required Chip Single Select", async ({ page }) => {
		page.on("dialog", async dialog => {
			expect(dialog.message()).toContain('"color": "#' + hexCode + '"');
			await dialog.dismiss();
		});
		const hexCode = getRandomHexCode(6);
		await ffColorPickerPage.regularColorPicker.click();
		await ffColorPickerPage.hexColorInput.selectText();
		await ffColorPickerPage.clearAllValuesFromField();
		await ffColorPickerPage.hexColorInput.type(hexCode);
		await ffColorPickerPage.saveBtn.click();

		 /*
		Hago click en una option
		el background color deberia ser #FDB924
		si hago click de vuelta en la misma opcion, NO se deberia deseleccionar 

		 */
	});


	test("Validate the selection Regular Chip Single Select", async ({ page }) => {
		page.on("dialog", async dialog => {
			expect(dialog.message()).toContain('"color": "#' + hexCode + '"');
			await dialog.dismiss();
		});
		const hexCode = getRandomHexCode(6);
		await ffColorPickerPage.regularColorPicker.click();
		await ffColorPickerPage.hexColorInput.selectText();
		await ffColorPickerPage.clearAllValuesFromField();
		await ffColorPickerPage.hexColorInput.type(hexCode);
		await ffColorPickerPage.saveBtn.click();

		 /*
		Hago click en una option
		el background color deberia ser #FDB924
		si hago click de vuelta en la misma opcion, NO se deberia deseleccionar 

		 */
	});
	
});