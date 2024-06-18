import { Locator, Page } from "@playwright/test";
import { BasePage } from "../../BasePage";

export class FormFieldAdvancedSelectionPage extends BasePage {

	readonly page_path = "formfields-formfieldadvancedselection--playground";

	readonly page: Page;
	readonly advancedSelectionLocator: Locator;
	readonly advancedSelectionButton: Locator;
	readonly placeholderText: Locator;
	readonly inputSearchLocator: Locator;

	constructor(page: Page) {
		super(page);
		this.page = page;
		this.advancedSelectionLocator = page.locator("#advancedSelection");
		this.advancedSelectionButton = this.advancedSelectionLocator.locator("button");
		this.placeholderText = this.advancedSelectionLocator.locator("p").first();
		this.inputSearchLocator = page.locator("input[type='text']");
	}
}
