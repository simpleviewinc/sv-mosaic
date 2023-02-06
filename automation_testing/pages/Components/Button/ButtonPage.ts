import { Locator, Page } from "@playwright/test";
import { BasePage } from "../../BasePage";

export class ButtonPage extends BasePage {

	readonly page_path = "components-button--kitchen-sink";

	readonly page: Page;
	readonly buttonTitle: Locator;
	readonly button: Locator;
	readonly leftIconButton: Locator;
	readonly rightIconButton: Locator;
	readonly buttonThatTriggersPopoverOnClick: Locator;
	readonly buttonThatTriggersPopoverOnHover: Locator;

	constructor(page: Page) {
		super(page);
		this.page = page;
		this.buttonTitle = page.locator("h1").nth(1);
		this.button = page.locator("button");
		this.leftIconButton = page.locator("button .icon_left");
		this.rightIconButton = page.locator("button .icon_right");
		this.buttonThatTriggersPopoverOnClick = page.locator("text=With Popover").first();
		this.buttonThatTriggersPopoverOnHover = page.locator("text=With Popover").nth(1);
	}
}
