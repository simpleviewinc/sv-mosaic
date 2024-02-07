import { test, expect, Page } from "@playwright/test";
import { PlaygroundPage } from "../../../pages/Components/Form/PlaygroundPage";
import { commonKnobs, playgroundKnobs } from "../../../utils/data/knobs";
import theme from "../../../../src/theme";

test.describe.parallel("Components - Form - Playground", () => {
	let page: Page;
	let playgroundPage: PlaygroundPage;
	const prepopulateKnob = playgroundKnobs.knobPrepopulate + true;
	const simplyGoldColor = theme.newColors.simplyGold["100"];
	const grey2Color = theme.newColors.grey2["100"];

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

	test("Validate that Toggle field doesn't show error.", async () => {
		await page.reload();
		await playgroundPage.toggleField.click();
		await playgroundPage.toggleField.click();
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

	test("Validate that when getFormValues() exists and default values don't exist, it should only use the return getFormValues(). ", async () => {
		// Currently skipping because this test is flaky. Should not be using timeouts to wait for DOM to be ready
		test.skip();
		const defaultValuesKnob = playgroundKnobs.knobDefaultValues + playgroundKnobs.optionNone;
		const getFormValuesKnob = playgroundKnobs.knobGetFormValues + playgroundKnobs.optionReturnData;
		await playgroundPage.visit(playgroundPage.page_path, [defaultValuesKnob, getFormValuesKnob, prepopulateKnob]);
		await playgroundPage.wait(2500);
		await playgroundPage.simpleText.waitFor();
		await playgroundPage.validateGetFromValuesExpectedResults(simplyGoldColor);
	});

	test("Validate that when getFormValues() is undefined, and default values exists, it should only use the default values.", async () => {
		const defaultValuesKnob = playgroundKnobs.knobDefaultValues + playgroundKnobs.optionHasDefaultValues;
		const getFormValuesKnob = playgroundKnobs.knobGetFormValues + playgroundKnobs.optionReturnUndefined;
		await playgroundPage.visit(playgroundPage.page_path, [defaultValuesKnob, getFormValuesKnob, prepopulateKnob]);
		await playgroundPage.wait();
		await playgroundPage.simpleText.waitFor();
		await playgroundPage.validateDefaultValuesExpectedResults(simplyGoldColor);
	});

	test("Validate that when getFormValues() exists is undefined, and default values don't exist, the form should be empty.", async () => {
		const defaultValuesKnob = playgroundKnobs.knobDefaultValues + playgroundKnobs.optionNone;
		const getFormValuesKnob = playgroundKnobs.knobGetFormValues + playgroundKnobs.optionReturnUndefined;
		await playgroundPage.visit(playgroundPage.page_path, [defaultValuesKnob, getFormValuesKnob, prepopulateKnob]);
		await playgroundPage.simpleText.waitFor();
		await playgroundPage.validateFormIsEmpty(grey2Color);
	});

	test("Validate that when getFormValues() doesn't exist, and default values exist, it should only use the default values.", async () => {
		const defaultValuesKnob = playgroundKnobs.knobDefaultValues + playgroundKnobs.optionHasDefaultValues;
		const getFormValuesKnob = playgroundKnobs.knobGetFormValues + playgroundKnobs.optionNone;
		await playgroundPage.visit(playgroundPage.page_path, [defaultValuesKnob, getFormValuesKnob, prepopulateKnob]);
		await playgroundPage.wait();
		await playgroundPage.simpleText.waitFor();
		await playgroundPage.validateDefaultValuesExpectedResults(simplyGoldColor);
	});

	test("Validate that when getFormValues() doesn't exist, and default values don't exist, it should be blank.", async () => {
		const defaultValuesKnob = playgroundKnobs.knobDefaultValues + playgroundKnobs.optionNone;
		const getFormValuesKnob = playgroundKnobs.knobGetFormValues + playgroundKnobs.optionNone;
		await playgroundPage.visit(playgroundPage.page_path, [defaultValuesKnob, getFormValuesKnob, prepopulateKnob]);
		await playgroundPage.simpleText.waitFor();
		await playgroundPage.validateFormIsEmpty(grey2Color);
	});

	test("Validate the Playground title style.", async () => {
		await playgroundPage.validateTitleStylingOfLocator(playgroundPage.title.last());
	});

	test("Validate that when the disabled knob is active, the label of the field have the correct style.", async () => {
		await playgroundPage.visit(playgroundPage.page_path, [commonKnobs.knobDisabled + "true"]);
		const labels = [playgroundPage.page.locator("label[for='textField']"), playgroundPage.page.locator("label[for='check']"),
			playgroundPage.page.locator("label[for='chipSelect']"), playgroundPage.page.locator("label[for='dropdownSingle']"),
			playgroundPage.page.locator("label[for='phoneSelect']"), playgroundPage.page.locator("label[for='radio']"),
			playgroundPage.page.locator("label[for='toggleSwitch']"), playgroundPage.page.locator("label[for='color']"),
			playgroundPage.page.locator("label[for='date']"), playgroundPage.page.locator("label[for='address']"),
			playgroundPage.page.locator("label[for='advancedSelection']"), playgroundPage.page.locator("label[for='imageVideoDocumentLink']"),
			playgroundPage.page.locator("label[for='textEditor']"),
			playgroundPage.page.locator("label[for='imageUpload']"), playgroundPage.page.locator("label[for='mapCoordinates']"),
			playgroundPage.page.locator("label[for='upload']"), playgroundPage.page.locator("label[for='numberTable']")];
		for (let i = 0; i < labels.length; i++) {
			expect(await playgroundPage.getColorFromElement(labels[i].first()), `Checking Font Color of the Label ${i}`).toBe(theme.newColors.grey4["100"]);
		}
	});

	test("Validate that no error message are displayed when the knob disabled is active.", async () => {
		await playgroundPage.visit(playgroundPage.page_path, [commonKnobs.knobDisabled + "true", commonKnobs.knobRequired + "true"]);
		await playgroundPage.saveBtn.click();
		await expect(playgroundPage.errorIcon).not.toBeVisible();
		await expect(playgroundPage.errorMessage).not.toBeVisible();
	});
});
