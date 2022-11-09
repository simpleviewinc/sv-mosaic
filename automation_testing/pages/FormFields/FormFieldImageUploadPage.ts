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
		this.imageUploadWithoutSetFocusHandlerInput = page.locator("input[data-testid='input-file-test']").nth(0);
		this.imageUploadWithSetFocusHandlerDiv = page.locator("//*[@id='1']/div/div/div/div/div/div[2]/div");
		this.imageUploadWithSetFocusHandlerInput = page.locator("input[data-testid='input-file-test']").nth(1);
		this.disabledImageUpload = page.locator("div[disabled='']");
		this.disabledImageUploadDiv = page.locator("//*[@id='2']/div/div/div/div/div");
		this.instructionIcon = page.locator("[data-testid='field-test-id'] svg")
	}

	async visitPage(): Promise<void> {
		await this.visit(this.page_path, this.title);
	}
}
