import { testIds } from "@simpleview/sv-mosaic";
import { BasePage } from "../../BasePage";
import type { Locator, Page } from "@playwright/test";
import { expect } from "@playwright/test";

export class DataViewFilterMultiselectComponent extends BasePage {

	readonly page_path = "components-dataviewfiltermultiselect--kitchen-sink";

	readonly page: Page;
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
		this.optionsLocator = page.getByTestId("mos:DataView:filterMultiOptions");
		this.selectedOptionsLocator = page.getByTestId("mos:DataView:filterMultiActive");
		this.hideComparisonSelectorButton = page.getByRole("button", { name: "Multi Select Category Without Comparisons" });
		this.showComparisonSelectorButton = page.getByRole("button", { name: "Multi Select Category With Comparisons" });
		this.comparisonDropdown = page.getByTestId("mos:DataView:filtersComparison");
		this.comparisonDropdownButton = this.comparisonDropdown.locator("button").first();
		this.helpDialogButton = this.comparisonDropdown.locator("button").last();
		this.selectedChips = page.getByTestId(testIds.CHIP)
			.filter({ has: page.getByTestId(testIds.CHIP_DELETE_ICON) });
		this.inputSearchLocator = page.getByPlaceholder("Keyword...");
	}
}
