import { Locator, Page } from "@playwright/test";
import { BasePage } from "../../BasePage";

export class ButtonPage extends BasePage {

	readonly page_path = "components-button--kitchen-sink";

	readonly page: Page;
	readonly buttonTitle: Locator;
	readonly leftIconButton: Locator;
	readonly rightIconButton: Locator;

	constructor(page: Page) {
		super(page);
		this.page = page;
		this.buttonTitle = page.locator("h1").nth(1);
		this.leftIconButton = this.button.locator(".icon_left");
		this.rightIconButton = this.button.locator(".icon_right");
	}

	async validateMarginOfButton(margin: "right" | "left", expectedValue: string): Promise<void> {
		let locator: Locator;
		let rightFlag: boolean;
		if (margin === "right") {
			locator = this.rightIconButton;
			rightFlag = true;
		} else {
			locator = this.leftIconButton;
			rightFlag = false;
		}
		for (let i = 0; i < await locator.count(); i++) {
			await this.validateMarginValueFromElement(locator.nth(i), expectedValue, rightFlag);
		}
	}

}
