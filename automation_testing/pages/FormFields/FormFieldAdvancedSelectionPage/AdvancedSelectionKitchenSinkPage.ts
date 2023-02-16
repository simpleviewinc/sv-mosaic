import { Locator, Page } from "@playwright/test";
import { BasePage } from "../../BasePage";

export class FormFieldAdvancedSelectionPage extends BasePage {

	readonly page_path = "formfields-formfieldadvancedselection--kitchen-sink";

	readonly page: Page;
	readonly advancedSelectionButton: Locator;
	readonly advancedSelectionWithOptionsPropButton: Locator;
	readonly advancedSelectionWithGetOptionsPropButton: Locator;
	readonly advancedSelectionWithCreateNewOptionPropButton: Locator;
	readonly advancedSelectionWithSelectLimitButton: Locator;
	readonly searchOptionInput: Locator;
	readonly checkboxListLocator: Locator;
	readonly advancedSelectionLocator: Locator;
	readonly advancedSelectionDrawer: Locator;
	readonly advancedSelectionLayout: Locator;
	readonly advancedSelectionDrawerHeader: Locator;
	readonly chipSection: Locator;
	readonly searchBarSection: Locator;
	readonly loadMoreSection: Locator;
	readonly loadMoreButton: Locator;

	constructor(page: Page) {
		super(page);
		this.page = page;
		this.advancedSelectionButton = page.locator("[data-testid='field-test-id'] button");
		this.advancedSelectionWithOptionsPropButton = this.advancedSelectionButton.nth(0);
		this.advancedSelectionWithGetOptionsPropButton = this.advancedSelectionButton.nth(1);
		this.advancedSelectionWithCreateNewOptionPropButton = this.advancedSelectionButton.nth(2);
		this.advancedSelectionWithSelectLimitButton = page.locator("[data-testid='field-test-id']", { hasText: "Advanced selection with selectLimit prop" })
			.locator("button");
		this.searchOptionInput = page.locator("input[type='text']");
		this.checkboxListLocator = page.locator("#checkboxList");
		this.advancedSelectionLocator = page.locator(".advancedSelection");
		this.advancedSelectionDrawer = this.advancedSelectionLocator.locator("form");
		this.advancedSelectionDrawerHeader = this.advancedSelectionDrawer.locator("div").first();
		this.advancedSelectionLayout = this.advancedSelectionLocator.locator("[data-testid='form-layout-test-id']");
		this.chipSection = this.advancedSelectionLocator.locator("[data-testid='section-test-id']").first();
		this.searchBarSection = this.advancedSelectionLocator.locator("[data-testid='section-test-id']").nth(1);
		this.loadMoreSection = this.advancedSelectionLocator.locator("[data-testid='section-test-id']").last();
		this.loadMoreButton = this.advancedSelectionLocator.locator("button", { hasText: "Load more" });
	}
}
