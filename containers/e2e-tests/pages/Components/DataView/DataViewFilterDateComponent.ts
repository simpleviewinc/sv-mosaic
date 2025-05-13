import { testIds } from "@simpleview/sv-mosaic";;
import { BasePage } from "../../BasePage";
import type { Locator, Page } from "@playwright/test";

export class DataViewFilterDateComponent extends BasePage {

	readonly page_path = "components-dataviewfilterdate--playground";

	readonly page: Page;
	readonly dateFilterButton: Locator;
	readonly dataviewFilterDateDropdownContent: Locator;
	readonly dataviewFilterDateOptionsList: Locator;

	constructor(page: Page) {
		super(page);
		this.page = page;
		this.dateFilterButton = page.getByRole("button", { name: "Date filter example" });
		this.dataviewFilterDateDropdownContent = page.locator(`[data-testid='${testIds.DATA_VIEW_FILTER_DATE_CONTENT}']`);
		this.dataviewFilterDateOptionsList = page.locator(`[data-testid='${testIds.DATA_VIEW_FILTER_DATE_OPTIONS}']`);
	}
}
