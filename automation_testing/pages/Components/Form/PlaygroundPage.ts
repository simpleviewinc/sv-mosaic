import { Locator, Page } from "@playwright/test";
import { BasePage } from "../../BasePage";
import { getDateFormatted } from "../../../utils/helpers/dateHelper";
import { randomIntFromInterval } from "../../../utils/helpers/helper";

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
	readonly advancedSelectionOptions: Locator;
	readonly browseImageIcon: Locator;
	readonly browseVideoIcon: Locator;
	readonly browseDocumentIcon: Locator;
	readonly browseLinkIcon: Locator;
	readonly textEditorField: Locator;
	readonly tableExampleButton: Locator;
	readonly imageUploadExampleButton: Locator;
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

	constructor(page: Page) {
		super(page);
		this.page = page;
		this.simpleText = page.locator("#textField");
		this.textArea = page.locator("#textArea");
		this.checkboxInput = page.locator(".listItem label");
		this.chipSingleSelect = page.locator("div[role='button'] p");
		this.singleSelectDropdown = page.locator("[data-testid='textfield-test-id'] input");
		this.phoneTextbox = page.locator("input.form-control");
		this.phoneSelectedFlagDropdown = page.locator(".selected-flag");
		this.selectionRadioBtn = page.locator("input[type='radio']");
		this.toggleField = page.locator("input[required=''][type='checkbox']");
		this.colorSelectorExample = page.locator("[data-testid='colordiv-test']");
		this.colorSelector = page.locator(".flexbox-fix");
		this.singleDatePickerIcon = page.locator("button [data-testid='CalendarIcon']");
		this.singleDatePickerInput = page.locator("input[placeholder='MM / DD / YYYY']")
		this.addressFieldButton = page.locator("text=ADD ADDRESS");
		this.advancedSelectionFieldButton = page.locator("//*[@id='11']/div/div/div/div/div/span/button");
		this.browseImageIcon = page.locator("[data-testid='browse-image-test']");
		this.browseVideoIcon = page.locator("[data-testid='browse-video-test']");
		this.browseDocumentIcon = page.locator("[data-testid='browse-document-test']");
		this.browseLinkIcon = page.locator("[data-testid='browse-link-test']");
		this.textEditorField = page.locator("[data-testid='text-editor-testid'] div[contenteditable='true']");
		this.tableExampleButton = page.locator("//*[@id='14']/div/div/div/div/div/div[2]/span/button");
		this.imageUploadExampleButton = page.locator("input[type='file']");
		this.mapCoordinatesExampleButton = page.locator("text=ADD COORDINATES");
		//Address Information
		this.countryDropdown = page.locator("input[role='combobox']").nth(1);
		this.firstAddressField = page.locator("#address1");
		this.secondAddressField = page.locator("#address2");
		this.thirdAddressField = page.locator("#address3");
		this.cityAddress = page.locator("#city");
		this.statesDropdown = page.locator("input[role='combobox']").nth(2);
		this.postalCode = page.locator("#postalCode");
		this.drawerButtons = page.locator("[type='DRAWER']");
		this.saveDrawerButton = page.locator("[type='DRAWER'] button", { hasText: "Save"});
		//Advanced Selection options
		this.advancedSelectionOptions = page.locator("[data-testid='label-test-id']", {hasText: "Option 1 category 2"});
	}

	async visitPage(knobs?: string[]): Promise<void> {
		if (knobs) {
			await this.visit(this.page_path, this.title, knobs);
		} else {
			await this.visit(this.page_path, this.title);
		}
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
		const today = getDateFormatted(new Date());
		await this.singleDatePickerInput.type(today);
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
		await this.browseImageIcon.click();
		await this.textEditorField.type("Sample text.");
		await this.tableExampleButton.click();
		//Upload image
		const imagePath = `${__dirname}/../../../utils/data/Images/image-example.png`;
		await this.imageUploadExampleButton.setInputFiles(imagePath);
		// Map Coordinates
		const rndLatitude = randomIntFromInterval(-90, 90).toString();
		const rndLongitude = randomIntFromInterval(-180, 180).toString();
		await this.mapCoordinatesExampleButton.click();
		await this.latitude.type(rndLatitude);
		await this.longitude.type(rndLongitude);
		await this.saveCoordinatesButton.dblclick();
	}
}
