import { Locator, Page } from "@playwright/test";
import { BasePage } from "../BasePage";

export class FormFieldImageUploadPage extends BasePage {

	readonly page_path = "formfields-formfieldimageupload--kitchen-sink";

	readonly page: Page;
	readonly imageUploadWithoutSetFocusHandlerDiv: Locator;
	readonly imageUploadWithoutSetFocusHandlerInput: Locator;
	readonly imageUploadWithSetFocusHandlerDiv: Locator;
	readonly imageUploadWithSetFocusHandlerInput: Locator;
	readonly disabledImageUpload: Locator;
	readonly disabledImageUploadDiv: Locator;
	readonly instructionIcon: Locator;

	constructor(page: Page) {
		super(page);
		this.page = page;
		this.imageUploadWithoutSetFocusHandlerDiv = page.locator("//*[@id='0']/div/div/div/div/div/div[2]/div");
		this.imageUploadWithoutSetFocusHandlerInput = page.locator("#imageUploadWithMenu input[data-testid='input-file-test']");
		this.imageUploadWithSetFocusHandlerDiv = page.locator("//*[@id='1']/div/div/div/div/div/div[2]/div");
		this.imageUploadWithSetFocusHandlerInput = page.locator("#imageUploadwithSetFocus input[data-testid='input-file-test']");
		this.disabledImageUpload = page.locator("#imageUploadDisabled div[disabled='']");
		this.disabledImageUploadDiv = page.locator("#imageUploadDisabled div div").last();
		this.instructionIcon = page.locator("[data-testid='field-test-id'] svg");
	}
}
