import { BasePage } from "../../BasePage";
import { Locator, Page } from "@playwright/test";

export class DataViewFilterMultiselectComponent extends BasePage {

	readonly page_path = "components-dataviewfiltermultiselect--kitchen-sink";

	readonly page: Page;
	readonly hideComparisonSelectorButton: Locator;
	readonly showComparisonSelectorButton: Locator;
	readonly comparisonDropdown: Locator;
	readonly comparisonDropdownButton: Locator;
	readonly helpDialogButton: Locator;

	constructor(page: Page) {
		super(page);
		this.page = page;
		this.hideComparisonSelectorButton = page.locator("#root button").first();
		this.showComparisonSelectorButton = page.locator("#root button").last();
		this.comparisonDropdown = page.locator(".comparisonDropdown");
		this.comparisonDropdownButton = this.comparisonDropdown.locator("button").first();
		this.helpDialogButton = this.comparisonDropdown.locator("button").last();
	}

	async visitPage(): Promise<void> {
		await this.visit(this.page_path, this.hideComparisonSelectorButton);
	}
}
