import { BasePage } from "../../BasePage";
import { Locator, Page } from "@playwright/test";

export class DataViewFilterTextComponent extends BasePage {

	readonly page_path = "components-dataviewfiltertext--playground";

	readonly page: Page;
	readonly filterTextButton: Locator;
	readonly inputRowLocator: Locator;
	readonly wordFilterLocator: Locator;

	constructor(page: Page) {
		super(page);
		this.page = page;
		this.filterTextButton = page.locator("#root button");
		this.inputRowLocator = page.locator(".inputRow input");
		this.wordFilterLocator = this.filterTextButton.locator("p");
	}

	async searchForWord(word: string): Promise<void> {
		await this.filterTextButton.click();
		await this.inputRowLocator.fill(word);
		await this.applyBtn.click({force: true});
		await this.filterTextButton.waitFor();
	}
}
