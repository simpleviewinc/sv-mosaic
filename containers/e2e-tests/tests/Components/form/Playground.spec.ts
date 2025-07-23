import type { Page } from "@playwright/test";
import { test, expect } from "@playwright/test";
import { PlaygroundPage } from "../../../pages/Components/Form/PlaygroundPage";
import { commonKnobs } from "../../../utils/data/knobs";
import theme from "@simpleview/sv-mosaic/theme";
import { testIds } from "@simpleview/sv-mosaic";

test.describe("Components - Form - Playground", () => {
	let page: Page;
	let playgroundPage: PlaygroundPage;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		playgroundPage = new PlaygroundPage(page);
		await playgroundPage.visit(playgroundPage.page_path);
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
		await playgroundPage.wait();
		await playgroundPage.saveBtn.click();
		expect(await playgroundPage.errorMessage.count()).toBe(0);
	});

	test("Validate Drawer Title style.", async () => {
		await playgroundPage.advancedSelectionFieldButton.click();
		await playgroundPage.validateTitleStylingOfLocator(playgroundPage.advancedSelectionTitle);
	});

	test("Validate touched property is shown and works properly.", async () => {
		const notRequiredKnob = commonKnobs.knobRequired + "false";
		const showStateKnob = commonKnobs.knobShowState + "true";
		await playgroundPage.visit(playgroundPage.page_path, [notRequiredKnob, showStateKnob]);
		expect(await playgroundPage.showStateLocator.textContent()).toContain("touched");

		await playgroundPage.simpleText.type("Sample text");
		const expectedTouched = '"textField": true';
		expect(await playgroundPage.showStateLocator.textContent()).toContain(expectedTouched);
	});

	test("Validate the Playground title style.", async () => {
		await playgroundPage.validateTitleStylingOfLocator(playgroundPage.title.last());
	});

	test("Validate that no error message are displayed when the knob disabled is active.", async () => {
		await playgroundPage.visit(playgroundPage.page_path, [commonKnobs.knobDisabled + "true", commonKnobs.knobRequired + "true"]);
		await playgroundPage.saveBtn.click();
		await expect(playgroundPage.errorIcon).not.toBeVisible();
		await expect(playgroundPage.errorMessage).not.toBeVisible();
	});
});
