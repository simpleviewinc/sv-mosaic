import { Locator, Page } from "@playwright/test";
import { BasePage } from "../../BasePage";

export class ChipPage extends BasePage {

	readonly page_path = "components-chip--kitchen-sink";

	readonly page: Page;
	readonly basicChipWithOnClickNotSelected: Locator;
	readonly basicChipWithOnClickSelected: Locator;
	readonly basicChipWithoutOnClickNotSelected: Locator;
	readonly basicChipWithoutOnClickSelected: Locator;
	readonly deletableChip: Locator;
	readonly disabledChipNotSelected: Locator;
	readonly disabledChipSelected: Locator;

	constructor(page: Page) {
		super(page);
		this.page = page;
		this.basicChipWithOnClickNotSelected = this.chipTestIDLocator.first();
		this.basicChipWithOnClickSelected = this.chipTestIDLocator.nth(1);
		this.basicChipWithoutOnClickNotSelected = this.chipTestIDLocator.nth(2);
		this.basicChipWithoutOnClickSelected = this.chipTestIDLocator.nth(3);
		this.deletableChip = page.locator("[data-testid='delete-chip-testid']");
		this.disabledChipNotSelected = this.chipTestIDLocator.nth(4);
		this.disabledChipSelected = this.chipTestIDLocator.nth(5);
	}
}
