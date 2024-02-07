import { Locator, Page } from "@playwright/test";
import { BasePage } from "../../BasePage";

export class PopoverPage extends BasePage {

	readonly page_path = "components-popover--text-and-links";

	readonly page: Page;
	readonly openPopoverButton: Locator;
	readonly popoverTooltip: Locator;
	readonly clickableTitle: Locator;
	readonly mail: Locator;
	readonly labelLocator: Locator;
	readonly subtitleLocator: Locator;
	readonly linkSubtitleLocator: Locator;

	constructor(page: Page) {
		super(page);
		this.page = page;
		this.openPopoverButton = page.locator("button", { hasText: "Open Popover" });
		this.popoverTooltip = page.locator("[role='tooltip']");
		this.clickableTitle = this.popoverTooltip.locator("span", { hasText: "Clickable Title" });
		this.mail = this.popoverTooltip.locator("span", { hasText: "mail@gmail.com" });
		this.labelLocator = this.popoverTooltip.locator("span", { hasText: "Label" });
		this.subtitleLocator = this.popoverTooltip.locator("span", { hasText: "Subtitle" });
		this.linkSubtitleLocator = this.popoverTooltip.locator("svg");
	}
}
