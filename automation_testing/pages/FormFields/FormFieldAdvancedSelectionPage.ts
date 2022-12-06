import { Locator, Page } from "@playwright/test";
import { BasePage } from "../BasePage";

export class FormFieldAdvancedSelectionPage extends BasePage {

	readonly page_path = "formfields-formfieldadvancedselection--kitchen-sink";

	readonly page: Page;
	readonly advancedSelectionButton: Locator;
	readonly advancedSelectionWithOptionsPropButton: Locator;
	readonly advancedSelectionWithGetOptionsPropButton: Locator;
	readonly advancedSelectionWithCreateNewOptionPropButton: Locator;
	readonly advancedSelectionWithSelectLimitButton: Locator;
	readonly deleteSelectedOptionChip: Locator;

	constructor(page: Page) {
		super(page);
		this.page = page;
		this.advancedSelectionButton = page.locator("[data-testid='field-test-id'] button");
		this.advancedSelectionWithOptionsPropButton = this.advancedSelectionButton.nth(0);
		this.advancedSelectionWithGetOptionsPropButton = this.advancedSelectionButton.nth(1);
		this.advancedSelectionWithCreateNewOptionPropButton = this.advancedSelectionButton.nth(2);
		this.advancedSelectionWithSelectLimitButton = page.locator("[data-testid='field-test-id']", { hasText: "Advanced selection with selectLimit prop" })
			.locator("button");
		this.deleteSelectedOptionChip = page.locator("[data-testid='delete-icon-test-id']");
	}

	async visitPage(): Promise<void> {
		await this.visit(this.page_path, this.title);
	}
}
