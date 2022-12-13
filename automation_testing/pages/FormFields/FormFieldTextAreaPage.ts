import { Locator, Page } from "@playwright/test";
import { BasePage } from "../BasePage";

export class FormFieldTextAreaPage extends BasePage {

	readonly page_path = "formfields-formfieldtextarea--kitchen-sink";

	readonly page: Page;
	readonly regularTextArea: Locator;
	readonly maxCharTextArea: Locator;
	readonly maxCharCounter: Locator;
	readonly disabledTextArea: Locator;
	readonly xsSizeTextArea: Locator;
	readonly smSizeTextArea: Locator;
	readonly mdSizeTextArea: Locator;
	readonly lgSizeTextArea: Locator;
	readonly genericTextArea: Locator;

	constructor(page: Page) {
		super(page);
		this.page = page;
		this.regularTextArea = page.locator("textarea#regular");
		this.maxCharTextArea = page.locator("#withMaxChar");
		this.maxCharCounter = page.locator("//*[@id='1']/div/div/div/div/div[1]/div[1]/div[2]");
		this.disabledTextArea = page.locator("#disabledExample");
		this.xsSizeTextArea = page.locator("[data-testid='field-test-id'] div div div.MuiInputBase-formControl").nth(3);
		this.smSizeTextArea = page.locator("[data-testid='field-test-id'] div div div.MuiInputBase-formControl").nth(4);
		this.mdSizeTextArea = page.locator("[data-testid='field-test-id'] div div div.MuiInputBase-formControl").nth(5);
		this.lgSizeTextArea = page.locator("[data-testid='field-test-id'] div div div.MuiInputBase-formControl").nth(6);
		this.genericTextArea = page.locator("textarea[aria-invalid='false']")
	}

	async visitPage(): Promise<void> {
		await this.visit(this.page_path, this.title);
	}

	async removeAllValuesFromTextAreas(): Promise<void> {
		const numberOfTxtAreas = await this.genericTextArea.count();
		for (let i = 0; i < numberOfTxtAreas; i++) {
			if (!await this.genericTextArea.nth(i).isDisabled()) {
				await this.clearAllValuesFromField(this.genericTextArea.nth(i));
			}
		}
	}
}
