import { BasePage } from "../../BasePage";
import { Locator, Page } from "@playwright/test";

export class DataViewFilterDateComponent extends BasePage {

	readonly page_path = "components-dataviewfilterdate--playground";

	readonly page: Page;
	readonly dateFilterButton: Locator;
	readonly dataviewFilterDateDropdownContent: Locator;
	readonly dataviewFilterDateOptionsList: Locator;

	constructor(page: Page) {
		super(page);
		this.page = page;
		this.dateFilterButton = page.getByRole('button', { name: 'Date filter example' });
		this.dataviewFilterDateDropdownContent = page.locator("[data-testid='dataview-filter-date-dropdown-content']");
		this.dataviewFilterDateOptionsList = page.locator("[data-testid='dataview-filter-date-options-list']");
	}
}
