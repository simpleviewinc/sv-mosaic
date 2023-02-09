import { Locator, Page } from "@playwright/test";
import { BasePage } from "../../BasePage";

export class ChipPage extends BasePage {

	readonly page_path = "components-chip--kitchen-sink";

	readonly page: Page;
	readonly deletableChip: Locator;


	constructor(page: Page) {
		super(page);
		this.page = page;
		this.deletableChip = page.locator("[data-testid='delete-chip-testid']");
	}
}