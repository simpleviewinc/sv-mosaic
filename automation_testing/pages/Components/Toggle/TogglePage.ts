import { Locator, Page } from "@playwright/test";
import { BasePage } from "../../BasePage";

export class TogglePage extends BasePage {

	readonly page_path = "components-toggle--example";

	readonly page: Page;
	readonly toggleSpan: Locator;
	readonly toggleInput: Locator;
	readonly toggleTrack: Locator;

	constructor(page: Page) {
		super(page);
		this.page = page;
		this.toggleSpan = page.locator("//*[@id='root']/label/span[1]/span[1]");
		this.toggleInput = page.locator(this.checkboxInputString);
		this.toggleTrack = page.locator("span.MuiSwitch-track");
	}
}
