import type { Locator, Page } from "@playwright/test";
import { expect } from "@playwright/test";
import { BasePage } from "../../BasePage";
import { randomIntFromInterval } from "../../../utils/helpers/helper";
import { getFormAndDefaultValuesExpected } from "../../../utils/data/formData";
import { testIds } from "@simpleview/sv-mosaic";;

export class PlaygroundPage extends BasePage {

	readonly page_path = "components-form--playground";

	readonly page: Page;
	readonly simpleText: Locator;
	readonly textArea: Locator;
	readonly checkboxInput: Locator;
	readonly chipSingleSelect: Locator;
	readonly singleSelectDropdown: Locator;
	readonly phoneTextbox: Locator;
	readonly phoneSelectedFlagDropdown: Locator;
	readonly selectionRadioBtn: Locator;
	readonly toggleField: Locator;
	readonly colorSelectorExample: Locator;
	readonly colorPicker: Locator;
	readonly colorSelector: Locator;
	readonly singleDatePickerIcon: Locator;
	readonly singleDatePickerInput: Locator;
	readonly addressFieldButton: Locator;
	readonly advancedSelectionFieldButton: Locator;
	readonly advancedSelectionChip: Locator;
	readonly advancedSelectionTitle: Locator;
	readonly advancedSelectionOptions: Locator;
	readonly textEditorField: Locator;
	readonly mapCoordinatesExampleButton: Locator;

	//Address Information
	readonly countryDropdown: Locator;
	readonly firstAddressField: Locator;
	readonly secondAddressField: Locator;
	readonly thirdAddressField: Locator;
	readonly cityAddress: Locator;
	readonly statesDropdown: Locator;
	readonly postalCode: Locator;
	readonly drawerButtons: Locator;
	readonly saveDrawerButton: Locator;
	readonly latitudeMapCard: Locator;
	readonly longitudeMapCard: Locator;
	readonly addressFieldTitle: Locator;

	constructor(page: Page) {
		super(page);
		this.page = page;
		this.simpleText = page.locator("input#textField-input");
		this.textArea = page.locator("textarea#textArea-input");
		this.checkboxInput = page.locator("#check input");
		this.chipSingleSelect = page.locator("#chipSelect").getByTestId(testIds.CHIP);
		this.singleSelectDropdown = page.locator("[data-testid='textfield-test-id'] input");
		this.phoneTextbox = page.locator("input.form-control");
		this.phoneSelectedFlagDropdown = page.locator(".selected-flag");
		this.selectionRadioBtn = page.locator("#radio input[type='radio']");
		this.toggleField = page.locator("#toggle input[type='checkbox']");
		this.colorSelectorExample = page.locator("#color [data-testid='colordiv-test']");
		this.colorSelector = page.locator(".flexbox-fix");
		this.singleDatePickerIcon = page.locator("button [data-testid='CalendarIcon']");
		this.singleDatePickerInput = page.locator("#date input");
		this.addressFieldButton = page.locator("text=ADD ADDRESS");
		this.advancedSelectionChip = page.locator(`#advancedSelection [data-testid='${testIds.CHIP_LIST}'] [role='button']`);
		this.advancedSelectionFieldButton = page.locator("#advancedSelection button");
		this.textEditorField = page.locator("#textEditor div[contenteditable='true']");
		this.mapCoordinatesExampleButton = page.locator("text=Add Coordinates");
		//Address Information
		this.countryDropdown = page.locator("input[role='combobox']").nth(1);
		this.firstAddressField = page.locator("#address1 input");
		this.secondAddressField = page.locator("input#address2-input");
		this.thirdAddressField = page.locator("input#address3-input");
		this.cityAddress = page.locator("input#city-input");
		this.statesDropdown = page.locator("input[role='combobox']").nth(2);
		this.postalCode = page.locator("input#postalCode-input");
		this.drawerButtons = page.locator("[type='DRAWER']");
		this.saveDrawerButton = page.locator("[type='DRAWER'] button", { hasText: "Save" });
		//Advanced Selection options
		this.advancedSelectionTitle = page.locator(".advancedSelection h1");
		this.advancedSelectionOptions = page.locator("[data-testid='label-test-id']", { hasText: "Option 1 category 2" });

		this.latitudeMapCard = page.locator("#mapCoordinates div span").nth(2);
		this.longitudeMapCard = page.locator("#mapCoordinates div span").nth(4);
		this.addressFieldTitle = page.locator("#address [data-testid='address-card-test'] span").first();
		this.backIconLocator = page.locator("button svg[data-testid='icon-button-test']");
	}

	async getNumberOfFieldsRequired():Promise<number> {
		return this.page.locator("#root .section [required=''] label").count();
	}

	async fillAllRequiredFields():Promise<void> {
		await this.simpleText.type("Sample text");
		await this.textArea.type("Sample text area content");
		await this.checkboxInput.nth(0).click();
		await this.chipSingleSelect.nth(0).click();
		await this.selectOptionFromDropdown(this.singleSelectDropdown, "The Godfather");
		await this.phoneTextbox.type("17021234567");
		await this.selectionRadioBtn.nth(0).click();
		await this.toggleField.click();
		await this.colorSelectorExample.click();
		await this.colorSelector.locator("[title='#000000']").click();
		await this.page.locator("#root").click();
		await this.singleDatePickerInput.type(await this.getTodayDate());
		await this.addressFieldButton.click();
		await this.selectOptionFromDropdown(this.countryDropdown, "United States");
		await this.firstAddressField.type("4242 Hillview Street");
		await this.cityAddress.type("Brooks");
		await this.selectOptionFromDropdown(this.statesDropdown, "Kentucky");
		await this.postalCode.type("40109");
		await this.checkboxInput.locator(":scope", { hasText: "Physical" }).click();
		await this.checkboxInput.locator(":scope", { hasText: "Physical" }).click();
		await this.checkboxInput.locator(":scope", { hasText: "Physical" }).click();
		await this.saveDrawerButton.click();
		await this.advancedSelectionFieldButton.click();
		await this.advancedSelectionOptions.click();
		await this.saveDrawerButton.click();
		await this.textEditorField.type("Sample text.");
		// Map Coordinates
		const rndLatitude = randomIntFromInterval(-90, 90).toString();
		const rndLongitude = randomIntFromInterval(-180, 180).toString();
		await this.mapCoordinatesExampleButton.click();
		await this.latitude.type(rndLatitude);
		await this.longitude.type(rndLongitude);
		await this.saveCoordinatesButton.dblclick();
	}

	async validateGetFromValuesExpectedResults(expectBgColor: string): Promise<void> {
		expect(await this.simpleText.inputValue()).toBe(getFormAndDefaultValuesExpected.simpleTextFormValues);
		expect(await this.checkboxInput.first().isChecked()).toBeTruthy();
		expect(await this.checkboxInput.nth(1).isChecked()).toBeTruthy();
		expect(await this.getBackgroundColorFromElement(this.chipSingleSelect.first())).toBe(expectBgColor);
		expect(await this.singleSelectDropdown.inputValue()).toContain(getFormAndDefaultValuesExpected.dropdownSingleSelectFormValues);
		expect(await this.phoneTextbox.inputValue()).toContain(getFormAndDefaultValuesExpected.phoneSelectionFormValues);
		expect(await this.selectionRadioBtn.nth(1).isChecked()).toBeTruthy();
		expect(await this.toggleField.isChecked()).toBeTruthy();
		expect(await this.colorSelectorExample.getAttribute("color")).toBe(getFormAndDefaultValuesExpected.colorFormValues);
		expect(await this.singleDatePickerInput.inputValue()).toContain(await this.getTodayDate());
		expect(await this.addressFieldTitle.textContent()).toBe(getFormAndDefaultValuesExpected.addressTypeFormValues);
		for (let i = 1; i <= await this.advancedSelectionChip.count(); i++) {
			expect(await this.advancedSelectionChip.nth(i - 1).textContent()).toBe("getFormValues " + i.toString());
		}
	}

	async validateDefaultValuesExpectedResults(): Promise<void> {
		expect(await this.simpleText.inputValue()).toBe(getFormAndDefaultValuesExpected.simpleTextDefaultValues);
		for (let i = 0; i < await this.checkboxInput.count(); i++) {
			expect(await this.checkboxInput.nth(i).isChecked()).toBeTruthy();
		}
		/**
		 * @TODO Address this test, it causes problems due to some kind of race condition
		 */
		// expect(await this.getBackgroundColorFromElement(this.chipSingleSelect.last())).toBe(expectBgColor);
		expect(await this.singleSelectDropdown.inputValue()).toBe(getFormAndDefaultValuesExpected.dropdownSingleSelectDefaultValues);
		expect(await this.phoneTextbox.inputValue()).toBe(getFormAndDefaultValuesExpected.phoneSelectionDefaultValues);
		expect(await this.selectionRadioBtn.last().isChecked()).toBeTruthy();
		expect(await this.toggleField.isChecked()).toBeTruthy();
		expect(await this.singleDatePickerInput.inputValue()).toBe(await this.getTodayDate());
		expect(await this.addressFieldTitle.textContent()).toBe(getFormAndDefaultValuesExpected.addressTypeDefaultValues);
		for (let i = 0; i < await this.advancedSelectionChip.count(); i++) {
			expect(await this.advancedSelectionChip.nth(i).textContent()).toBe(getFormAndDefaultValuesExpected.advancedSelectionDefaultValues[i]);
		}
		expect(await this.textEditorField.textContent()).toBe(getFormAndDefaultValuesExpected.simpleTextDefaultValues);
		expect(await this.latitudeMapCard.textContent()).toBe(getFormAndDefaultValuesExpected.latitudeMapCoordinates);
		expect(await this.longitudeMapCard.textContent()).toBe(getFormAndDefaultValuesExpected.longitudeMapCoordinates);
	}
	async validateFormIsEmpty(expectBgColor: string): Promise<void> {
		await expect(this.simpleText).toBeEmpty();
		for (let i = 0; i < await this.checkboxInput.count(); i++) {
			expect(await this.checkboxInput.nth(i).isChecked()).toBeFalsy();
		}
		for (let i = 0; i < await this.chipSingleSelect.count(); i++) {
			expect(await this.getBackgroundColorFromElement(this.chipSingleSelect.nth(i))).toBe(expectBgColor);
		}
		await expect(this.singleSelectDropdown).toBeEmpty();
		expect(await this.phoneTextbox.inputValue()).toBe("+1");
		for (let i = 0; i < await this.selectionRadioBtn.count(); i++) {
			expect(await this.selectionRadioBtn.nth(i).isChecked()).toBeFalsy();
		}
		expect(await this.toggleField.isChecked()).toBeFalsy();
		await expect(this.singleDatePickerInput).toBeEmpty();
		expect(await this.addressFieldTitle.isVisible()).toBeFalsy();
		expect(await this.advancedSelectionChip.isVisible()).toBeFalsy();
		await expect(this.textEditorField).toBeEmpty();
	}
}
