import type { Locator, Page } from "@playwright/test";
import { BasePage } from "../../BasePage";
import testIds from "@root/utils/testIds";

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
		this.deletableChip = page.getByTestId(testIds.CHIP).filter({ has:page.getByTestId(testIds.CHIP_DELETE_ICON) });
		this.disabledChipNotSelected = this.chipTestIDLocator.nth(5);
		this.disabledChipSelected = this.chipTestIDLocator.nth(6);
	}
}
