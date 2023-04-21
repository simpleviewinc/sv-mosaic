import { test, expect, Page } from "@playwright/test";
import { FormFieldColorPickerPage } from "../../../pages/FormFields/FormFieldColorPicker/FormFieldColorPickerPage";
import { getRandomHexCode } from "../../../utils/helpers/helper";
import theme from "../../../../src/theme";

test.describe.parallel("FormFields - FormFieldColorPicker - Kitchen Sink", () => {
	let page: Page;
	let ffColorPickerPage: FormFieldColorPickerPage;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		ffColorPickerPage = new FormFieldColorPickerPage(page);
		await ffColorPickerPage.visit(ffColorPickerPage.page_path);
	});

	test.afterAll(async ({ browser }) => {
		browser.close;
	});

	test("Validate the selection of a color in Regular Color Picker by clicking", async () => {
		page.on("dialog", async dialog => {
			expect(dialog.message()).toContain('"color": "#' + hexCode);
			await dialog.dismiss();
		});
		await ffColorPickerPage.regularColorPicker.click();
		await ffColorPickerPage.clickRandomColorInSketchPicker();
		const hexCode = (await ffColorPickerPage.hexColorInput.inputValue()).toLocaleLowerCase();
		await ffColorPickerPage.saveBtn.click();
	});

	test("Validate the selection of a color in Regular Color Picker by writing HEX code", async () => {
		page.on("dialog", async dialog => {
			expect(dialog.message()).toContain('"color": "#' + hexCode);
			await dialog.dismiss();
		});
		const hexCode = getRandomHexCode(6);
		await ffColorPickerPage.regularColorPicker.click();
		await ffColorPickerPage.clearAllValuesFromField(ffColorPickerPage.hexColorInput);
		await ffColorPickerPage.hexColorInput.type(hexCode);
		await ffColorPickerPage.saveBtn.click();
	});

	test("Validate Disabled Color Picker", async () => {
		expect(await ffColorPickerPage.disabledColorPickerLabel.textContent()).toBe("Disabled Example");
		expect(await ffColorPickerPage.disabledColorPicker.getAttribute("disabled")).toBe("");
	});

	test("Validate Default Regular Color in Color Picker", async () => {
		const expectBgColor = theme.newColors.realTeal["100"];
		expect(await ffColorPickerPage.getBackgroundColorFromElement(ffColorPickerPage.regularColorPicker)).toBe(expectBgColor);
		expect(await ffColorPickerPage.getBackgroundColorFromElement(ffColorPickerPage.disabledColorPicker)).toBe(expectBgColor);
	});
});
