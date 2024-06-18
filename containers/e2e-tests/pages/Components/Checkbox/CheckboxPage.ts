import { Locator, Page } from "@playwright/test";
import { BasePage } from "../../BasePage";

export class CheckboxPage extends BasePage {

	readonly checkboxlist_page_path = "components-checkboxlist--example";
	readonly checkbox_page_path = "components-checkbox--example";

	readonly page: Page;
	readonly checkboxList: Locator;
	readonly checkboxLabel: Locator;
	readonly checkboxInput: Locator;
	readonly checkboxIcon: Locator;

	constructor(page: Page) {
		super(page);
		this.page = page;
		this.checkboxList = page.locator(".listItem");
		this.checkboxLabel = page.locator("label[data-testid='label-test-id']");
		this.checkboxInput = this.checkboxList.locator(this.checkboxInputString);
		this.checkboxIcon = page.locator("span[data-testid='checkbox-test-id']");
	}
}
