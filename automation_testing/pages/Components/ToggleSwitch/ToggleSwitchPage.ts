import { Locator, Page } from "@playwright/test";
import { BasePage } from "../../BasePage";

export class ToggleSwitchPage extends BasePage {

	readonly page_path = "components-toggleswitch--example";

	readonly page: Page;
	readonly toggleSpan: Locator;
	readonly toggleInput: Locator;
	readonly toggleSwitchTrack: Locator;

	constructor(page: Page) {
		super(page);
		this.page = page;
		this.toggleSpan = page.locator("//*[@id='root']/label/span[1]/span[1]");
		this.toggleInput = page.locator("input[type='checkbox']");
		this.toggleSwitchTrack = page.locator("span.MuiSwitch-track");
	}

	async visitPage(knobs?: string[]): Promise<void> {
		if (knobs) {
			await this.visit(this.page_path, this.toggleInput, knobs);
		} else {
			await this.visit(this.page_path, this.toggleInput);
		}
	}
}
