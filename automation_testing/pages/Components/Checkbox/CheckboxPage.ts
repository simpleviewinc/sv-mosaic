import { Locator, Page } from "@playwright/test";
import { BasePage } from "../../BasePage";

export class CheckboxPage extends BasePage {

	readonly page_path = "components-checkboxlist--example";

	readonly page: Page;
	readonly checkboxList: Locator;
	readonly checkboxLabel: Locator;


	constructor(page: Page) {
		super(page);
		this.page = page;
		this.checkboxList = page.locator(".listItem");
		this.checkboxLabel = page.locator("label[data-testid='label-test-id']");
	}

	async visitPage(): Promise<void> {
		await this.visit(this.page_path, this.checkboxList);
	}
}
