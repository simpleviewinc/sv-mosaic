import { BasePage } from "../../BasePage";
import { Locator, Page, expect } from "@playwright/test";

export class DataViewFilterMultiselectComponent extends BasePage {

	readonly page_path = "components-dataviewfiltermultiselect--kitchen-sink";

	readonly page: Page;
	readonly topBlockLocator: Locator;
	readonly optionsLocator: Locator;
	readonly selectedOptionsLocator: Locator;
	readonly hideComparisonSelectorButton: Locator;
	readonly showComparisonSelectorButton: Locator;
	readonly comparisonDropdown: Locator;
	readonly comparisonDropdownButton: Locator;
	readonly helpDialogButton: Locator;
	readonly selectedChips: Locator;
	readonly inputSearchLocator: Locator;

	constructor(page: Page) {
		super(page);
		this.page = page;
		this.topBlockLocator = page.locator(".topBlock");
		this.optionsLocator = this.topBlockLocator.locator(".options");
		this.selectedOptionsLocator = this.topBlockLocator.locator(".selected");
		this.hideComparisonSelectorButton = page.getByRole('button', { name: 'Multi Select Category Without Comparisons' });
		this.showComparisonSelectorButton = page.getByRole('button', { name: 'Multi Select Category With Comparisons' });
		this.comparisonDropdown = page.locator(".comparisonDropdown");
		this.comparisonDropdownButton = this.comparisonDropdown.locator("button").first();
		this.helpDialogButton = this.comparisonDropdown.locator("button").last();
		this.selectedChips = page.locator(".chips [data-testid='delete-chip-testid']");
		this.inputSearchLocator = this.topBlockLocator.locator("input[type='text']");
	}

	async validateMultiselectSectionsAreVisible(): Promise<void> {
		await expect(this.optionsLocator).toBeVisible();
		await expect(this.selectedOptionsLocator).toBeVisible();
	}
}
