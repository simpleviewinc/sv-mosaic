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
	}

	async visitPage(): Promise<void> {
		await this.visit(this.page_path, this.title);
	}
}
