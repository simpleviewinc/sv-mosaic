import type { Locator, Page } from "@playwright/test";
import { BasePage } from "../../BasePage";
import { testIds } from "@simpleview/sv-mosaic";

export class CheckboxPage extends BasePage {

	readonly checkboxlist_page_path = "components-checkboxlist--playground";
	readonly checkbox_page_path = "components-checkbox--playground";

	readonly page: Page;
	readonly checkboxList: Locator;
	readonly checkboxLabel: Locator;
	readonly checkboxInput: Locator;
	readonly checkboxIcon: Locator;

	constructor(page: Page) {
		super(page);
		this.page = page;
		this.checkboxList = page.locator(".listItem");
		this.checkboxLabel = page.locator("[data-testid='label-test-id'] > span:last-child");
		this.checkboxInput = page.locator("[data-testid='label-test-id'] input");
		this.checkboxIcon = page.locator(`span[data-testid='${testIds.CHECKBOX_WRAPPER}']`);
	}
}
