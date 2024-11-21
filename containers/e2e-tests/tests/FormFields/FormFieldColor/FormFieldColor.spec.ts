import type { Page } from "@playwright/test";
import { test, expect } from "@playwright/test";
import { FormFieldColorPage } from "../../../pages/FormFields/FormFieldColor/FormFieldColorPage";
import { getRandomHexCode } from "../../../utils/helpers/helper";
import theme from "@root/theme";

test.describe("FormFields - FormFieldColor - Kitchen Sink", () => {
	let page: Page;
	let ffColorPage: FormFieldColorPage;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		ffColorPage = new FormFieldColorPage(page);
		await ffColorPage.visit(ffColorPage.page_path);
	});

	test("Validate the selection of a color in Regular Color Picker by clicking", async () => {
		page.once("dialog", async dialog => {
			expect(dialog.message()).toContain('"color": "#' + hexCode);
			await dialog.dismiss();
		});
		await ffColorPage.regularColor.click();
		await ffColorPage.clickRandomColorInSketchPicker();
		const hexCode = (await ffColorPage.hexColorInput.inputValue()).toLocaleLowerCase();
		await ffColorPage.page.locator(".MuiBackdrop-root").click();
		await ffColorPage.saveBtn.click();
	});

	test("Validate the selection of a color in Regular Color Picker by writing HEX code", async () => {
		page.once("dialog", async dialog => {
			expect(dialog.message()).toContain('"color": "#' + hexCode);
			await dialog.dismiss();
		});
		const hexCode = getRandomHexCode(6);
		await ffColorPage.regularColor.click();
		await ffColorPage.clearAllValuesFromField(ffColorPage.hexColorInput);
		await ffColorPage.hexColorInput.type(hexCode);
		await ffColorPage.page.locator(".MuiBackdrop-root").click();
		await ffColorPage.saveBtn.click();
	});

	test("Validate Default Regular Color in Color Picker", async () => {
		const expectBgColor = theme.newColors.realTeal["100"];
		expect(await ffColorPage.getBackgroundColorFromElement(ffColorPage.regularColor)).toBe(expectBgColor);
	});
});
