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
	readonly selectedChip: Locator;
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
		this.selectedChip = page.locator("[data-testid='delete-chip-testid']");
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

	/**
	 * This method return the expected height of the data of the CheckboxList, according to the following equation.
	 * (100vh - Height of the drawer header - Height of the chips (if any) - Height of the “load more” button (if present)
		- the paddings top and bottom of the layout around it - the Height of the search bar (including its margins and paddings).
	 * @returns: Number. Returns the expected height.
	 */
	async getExpectedHeightForCheckboxList(): Promise<number> {
		const drawerHeight = Number((await this.getHeightFromElement(this.advancedSelectionDrawer)).split("px")[0]);
		const drawerHeaderHeight = Number((await this.getHeightFromElement(this.advancedSelectionDrawerHeader)).split("px")[0]);
		let chipSectionHeight = 0;
		let loadMoreSectionSectionHeight = 0;
		if (this.selectedChip.isVisible()) {
			chipSectionHeight = Number((await this.getHeightFromElement(this.chipSection)).split("px")[0]);
		}
		if (this.loadMoreButton.isVisible()) {
			loadMoreSectionSectionHeight = Number((await this.getHeightFromElement(this.loadMoreSection)).split("px")[0]);
		}
		const searchBarHeight = Number((await this.getHeightFromElement(this.searchBarSection)).split("px")[0]);
		const topPaddingLayout = Number((await this.getSpecificPaddingFromElement(this.advancedSelectionLayout, "top")).split("px")[0]);
		const bottomPaddingLayout = Number((await this.getSpecificPaddingFromElement(this.advancedSelectionLayout, "bottom")).split("px")[0]);
		const heightResult =  drawerHeight  - drawerHeaderHeight - chipSectionHeight - loadMoreSectionSectionHeight - searchBarHeight - topPaddingLayout - bottomPaddingLayout;
		return heightResult;
	}
}
