import { test, expect, Page } from "@playwright/test";
import { PlaygroundPage } from "../../../pages/Components/Form/PlaygroundPage";
import { knobs } from "../../../utils/data/knobs";
import theme from "../../../../src/theme";

test.describe.parallel("Components - Form - Playground", () => {
	let page: Page;
	let playgroundPage: PlaygroundPage;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		playgroundPage = new PlaygroundPage(page);
		await playgroundPage.visitPage();
	});

	test.afterAll(async ({ browser }) => {
		browser.close;
	});

	test("Validate error messages when saving with empty required fields", async () => {
		await playgroundPage.saveBtn.click();
		await playgroundPage.wait();
		const expectedNumberOfRequiredFields = await playgroundPage.getNumberOfFieldsRequired();
		for (let i = 0; i < expectedNumberOfRequiredFields; i++) {
			expect(await playgroundPage.errorMessage.nth(i).textContent()).toBe("This field is required, please fill it");
		}
	});

	//Skipping tests until better approach
	test.skip("Validate that you can save when completing all required fields", async () => {
		await page.reload();
		await playgroundPage.fillAllRequiredFields();
		await playgroundPage.wait()
		await playgroundPage.saveBtn.click();
		expect(await playgroundPage.errorMessage.count()).toBe(0);
	});

	test("Validate that Toggle field doesn't show error.", async () => {
		await page.reload();
		await playgroundPage.toggleField.click();
		await playgroundPage.toggleField.click();
		expect(await playgroundPage.errorMessage.count()).toBe(0);
	});

	test("Validate the font weight of the Title in Top Component.", async () => {
		const expectedFontWeight = (theme.fontWeight.light).toString();
		const titleFontWeight = await playgroundPage.getFontWeightFromElement(playgroundPage.title);
		expect(titleFontWeight).toBe(expectedFontWeight);
	});

	test("Validate the font weight of the Description in Top Component.", async () => {
		const expectedFontWeight = (theme.fontWeight.light).toString();
		const descriptionFontWeight = await playgroundPage.getFontWeightFromElement(playgroundPage.description);
		expect(descriptionFontWeight).toBe(expectedFontWeight);
	});

	test("Validate font family and font weight for Drawer Title.", async () => {
		const expectedFontWeight = (theme.fontWeight.normal).toString();
		await playgroundPage.advancedSelectionFieldButton.click();
		const titleFontWeight = await playgroundPage.getFontWeightFromElement(playgroundPage.drawerTitle);
		const titleFontFamily = await playgroundPage.getFontFamilyFromElement(playgroundPage.drawerTitle);
		expect(titleFontWeight).toBe(expectedFontWeight);
		expect(titleFontFamily).toContain("Museo-Sans");
	});

	test("Validate touched property is shown and works properly.", async () => {
		const notRequiredKnob = knobs.knobRequired + "false";
		const showStateKnob = knobs.knobShowState + "true";
		await playgroundPage.visitPage([notRequiredKnob, showStateKnob]);
		expect(await playgroundPage.showStateLocator.textContent()).toContain("touched");

		await playgroundPage.simpleText.type("Sample text");
		const expectedTouched = '"textField": true';
		expect(await playgroundPage.showStateLocator.textContent()).toContain(expectedTouched);
	});
});
