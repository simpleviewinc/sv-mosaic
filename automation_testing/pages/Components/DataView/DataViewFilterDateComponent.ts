import { BasePage } from "../../BasePage";
import { Locator, Page } from "@playwright/test";

export class DataViewFilterDateComponent extends BasePage {

	readonly page_path = "components-dataviewfilterdate--example";

	readonly page: Page;
	readonly dateFilterButton: Locator;
	readonly dataviewFilterDateDropdownContent: Locator;
	readonly dataviewFilterDateOptionsList: Locator;

	constructor(page: Page) {
		super(page);
		this.page = page;
		this.dateFilterButton = page.locator("#root button", { hasText: "Date filter example" });
		this.dataviewFilterDateDropdownContent = page.locator("[data-testid='dataview-filter-date-dropdown-content']");
		this.dataviewFilterDateOptionsList = page.locator("[data-testid='dataview-filter-date-date-options-list']");

	}

	async visitPage(knobs?: string[]): Promise<void> {
		if (knobs) {
			await this.visit(this.page_path, this.dateFilterButton, knobs);
		} else {
			await this.visit(this.page_path, this.dateFilterButton);
		}
	}
}
