import { BasePage } from "../../BasePage";
import { Locator, Page } from "@playwright/test";

export class DataViewFilterTextComponent extends BasePage {

	readonly page_path = "components-dataviewfiltertext--playground";

	readonly page: Page;
	readonly filterTextButton: Locator;
	readonly inputRowLocator: Locator;
	readonly wordFilterLocator: Locator;
	readonly comparisonButton: Locator;

	constructor(page: Page) {
		super(page);
		this.page = page;
		this.filterTextButton = page.locator("#root button");
		this.inputRowLocator = page.locator(".inputRow input");
		this.wordFilterLocator = this.filterTextButton.locator("p");
		this.comparisonButton = page.locator(".comparisonButton button");
	}

	async searchForWord(word: string): Promise<void> {
		await this.filterTextButton.click();
		await this.inputRowLocator.fill(word);
		await this.applyBtn.click({force: true});
		await this.filterTextButton.waitFor();
	}

	async searchWithComparison(word: string, comparison: "Contains"|"Not Contains"|"Equals"|"Not Equal"|"Exists"|"Not Exists"): Promise<void> {
		await this.filterTextButton.click();
		await this.comparisonButton.click();
		await this.menuItem.locator(":scope", { hasText: comparison }).first().click({ force: true });
		if (comparison == "Contains" || comparison == "Not Contains" || comparison == "Equals" || comparison == "Not Equal") {
			await this.inputRowLocator.fill(word);
		}
		await this.wait();
		await this.applyBtn.click({force: true});
		await this.filterTextButton.waitFor();
	}
}
