import { BasePage } from "../../BasePage";
import type { Locator, Page } from "@playwright/test";
import { dataviewKnobs as knob } from "../../../utils/data/knobs";

export class DataViewFilterTextComponent extends BasePage {

	readonly page_path = "components-dataviewfiltertext--playground";

	readonly page: Page;

	readonly filterTextButton: Locator;
	readonly inputRowLocator: Locator;
	readonly filterValue: Locator;
	readonly inputLocator: Locator;
	readonly comparisonButton: Locator;

	constructor(page: Page) {
		super(page);
		this.page = page;
		this.inputRowLocator = page.locator(".inputRow");
		this.filterTextButton = page.getByRole("button", { name: "Filter text example" });
		this.inputLocator = this.inputRowLocator.locator("input");
		this.filterValue = this.filterTextButton.getByTestId("mos:DataView:filterValue");
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

	async searchWithComparison(word: string, comparison: "Contains..." | "Does not contain..." | "Equals..." | "Not equal to..." | "Exists" | "Not Exists"): Promise<void> {
		await this.filterTextButton.click();
		await this.selectComparison(comparison);
		if (comparison == "Contains..." || comparison == "Does not contain..." || comparison == "Equals..." || comparison == "Not equal to...") {
			await this.inputLocator.fill(word);
		}
		await this.wait();
		await this.applyBtn.click({ force: true });
		await this.filterTextButton.waitFor();
	}

	async visitPageWithDefaultComparison(comparison: "Equals..." | "Not equal to..." | "Contains..." | "Does not contain..." | "Exists" | "Not Exists" | string): Promise<void> {
		let comparisonOption: string;
		switch (comparison) {
		case "Equals...":
			comparisonOption = "equals";
			break;
		case "Not equal to...":
			comparisonOption = "not_equals";
			break;
		case "Contains...":
			comparisonOption = "contains";
			break;
		case "Does not contain...":
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
		await this.visit(this.page_path, [knob.knobComparison + "!true", knob.knobDefaultComparison + comparisonOption]);
	}
}
