import { Locator, Page } from "@playwright/test";
import { BasePage } from "../../BasePage";

export class PopoverPage extends BasePage {

	readonly page_path = "components-popover--example";

	readonly page: Page;
	readonly openPopoverButton: Locator;
	readonly popoverTooltip: Locator;
	readonly popoverAddButton: Locator;

	constructor(page: Page) {
		super(page);
		this.page = page;
		this.openPopoverButton = page.locator("button", { hasText: "Open Popover"});
		this.popoverTooltip = page.locator("[role='tooltip']");
		this.popoverAddButton = this.popoverTooltip.locator("button");
	}

	async visitPage(): Promise<void> {
		await this.visit(this.page_path, this.openPopoverButton);
	}
}
