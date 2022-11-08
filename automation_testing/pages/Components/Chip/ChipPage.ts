import { Locator, Page } from "@playwright/test";
import { BasePage } from "../../BasePage";

export class ChipPage extends BasePage {

	readonly page_path = "components-chip--kitchen-sink";

	readonly page: Page;
	readonly chip: Locator;
	readonly deletableChip: Locator;


	constructor(page: Page) {
		super(page);
		this.page = page;
		this.chip = page.locator("[data-testid='chip-testid']");
		this.deletableChip = page.locator("[data-testid='delete-chip-testid']");
	}

	async visitPage(): Promise<void> {
		await this.visit(this.page_path, this.page.locator("h1:has-text('Chip')"));
	}
}
