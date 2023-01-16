import { Locator, Page } from "@playwright/test";
import { BasePage } from "../../BasePage";

export class FormFieldAdvancedSelectionPage extends BasePage {

	readonly page_path = "formfields-formfieldadvancedselection--playground";

	readonly page: Page;
	readonly advancedSelectionButton: Locator;
	readonly placeholderText: Locator;
	readonly inputSearchLocator: Locator;

	constructor(page: Page) {
		super(page);
		this.page = page;
		this.advancedSelectionButton = page.locator("#advancedSelection button");
		this.placeholderText = page.locator("#advancedSelection p").first();
		this.inputSearchLocator = page.locator("input[type='text']");
	}

	async visitPage(): Promise<void> {
		await this.visit(this.page_path, this.advancedSelectionButton);
	}
}
