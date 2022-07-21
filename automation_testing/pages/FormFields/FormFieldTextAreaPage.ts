import { Locator, Page } from "@playwright/test";
import { FormFieldBasePage } from "../FormFields/formFieldBasePage";

export class FormFieldTextAreaPage extends FormFieldBasePage {

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
		this.maxCharCounter = page.locator("//*[@id='root']/div/form/div[2]/div[2]/div/div/div/div/div[1]/div[1]/div[2]");
		this.disabledTextArea = page.locator("#disabledExample");
		this.xsSizeTextArea = page.locator("//*[@id='root']/div/form/div[2]/div[4]/div/div/div/div/div[1]/div[2]/div");
		this.smSizeTextArea = page.locator("//*[@id='root']/div/form/div[2]/div[5]/div/div/div/div/div[1]/div[2]/div");
		this.mdSizeTextArea = page.locator("//*[@id='root']/div/form/div[2]/div[6]/div/div/div/div/div[1]/div[2]/div");
		this.lgSizeTextArea = page.locator("//*[@id='root']/div/form/div[2]/div[7]/div/div/div/div/div[1]/div[2]/div");
	}

	async visitPage(): Promise<void> {
		await this.visit(this.page_path, this.title);
	}
}