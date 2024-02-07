import { BasePage } from "../../BasePage";
import { Locator, Page } from "@playwright/test";
import { dataviewKnobs as knob } from "../../../utils/data/knobs";

export class DataViewFilterTextComponent extends BasePage {

	readonly page_path = "components-dataviewfiltertext--playground";

	readonly page: Page;

	readonly filterTextButton: Locator;
	readonly inputRowLocator: Locator;
	readonly wordFilterLocator: Locator;
	readonly inputLocator: Locator;
	readonly comparisonButton: Locator;

	constructor(page: Page) {
		super(page);
		this.page = page;
		this.inputRowLocator = page.locator(".inputRow");
		this.filterTextButton = page.locator("#root button");
		this.inputLocator = this.inputRowLocator.locator("input");
		this.wordFilterLocator = this.filterTextButton.locator("p");
		this.comparisonButton = page.locator(".inputRow .comparisonButton button");
	}

	async searchForWord(word: string): Promise<void> {
		await this.filterTextButton.click();
		await this.inputLocator.fill(word);
		await this.applyBtn.click({ force: true });
		await this.filterTextButton.waitFor();
	}

	async selectComparison(comparison: string): Promise<void> {
		await this.comparisonButton.click();
		await this.menuItem.locator(":scope", { hasText: comparison }).first().click({ force: true });
	}

	async searchWithComparison(word: string, comparison: "Contains" | "Not Contains" | "Equals" | "Not Equal" | "Exists" | "Not Exists"): Promise<void> {
		await this.filterTextButton.click();
		await this.selectComparison(comparison);
		if (comparison == "Contains" || comparison == "Not Contains" || comparison == "Equals" || comparison == "Not Equal") {
			await this.inputLocator.fill(word);
		}
		await this.wait();
		await this.applyBtn.click({ force: true });
		await this.filterTextButton.waitFor();
	}

	async visitPageWithDefaultComparison(comparison: "Equals" | "Not Equal" | "Contains" | "Not Contains" | "Exists" | "Not Exists" | string): Promise<void> {
		let comparisonOption: string;
		switch (comparison) {
		case "Equals":
			comparisonOption = "equals";
			break;
		case "Not Equal":
			comparisonOption = "not_equals";
			break;
		case "Contains":
			comparisonOption = "contains";
			break;
		case "Not Contains":
			comparisonOption = "not_contains";
			break;
		case "Exists":
			comparisonOption = "exists";
			break;
		case "Not Exists":
			comparisonOption = "not_exists";
			break;
		default:
			comparisonOption = "equals";
			break;
		}
		await this.visit(this.page_path, [knob.knobComparison + true, knob.knobDefaultComparison + comparisonOption]);
	}
}
