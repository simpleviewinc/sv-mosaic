import { Locator, Page } from "@playwright/test";
import { BasePage } from "../BasePage";

export class FormFieldAdvancedSelectionPage extends BasePage {

	readonly page_path = "formfields-formfieldadvancedselection--kitchen-sink";

	readonly page: Page;
	readonly advancedSelectionButton: Locator;
	readonly advancedSelectionWithOptionsPropButton: Locator;
	readonly advancedSelectionWithGetOptionsPropButton: Locator;
	readonly advancedSelectionWithCreateNewOptionPropButton: Locator;

	constructor(page: Page) {
		super(page);
		this.page = page;
		this.advancedSelectionButton = page.locator("[data-testid='field-test-id'] button");
		this.advancedSelectionWithOptionsPropButton = this.advancedSelectionButton.nth(0);
		this.advancedSelectionWithGetOptionsPropButton = this.advancedSelectionButton.nth(1);
		this.advancedSelectionWithCreateNewOptionPropButton = this.advancedSelectionButton.nth(2);
	}

	async visitPage(): Promise<void> {
		await this.visit(this.page_path, this.title);
	}
}
