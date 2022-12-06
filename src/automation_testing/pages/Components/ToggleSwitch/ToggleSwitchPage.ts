import { Locator, Page } from "@playwright/test";
import { BasePage } from "../../BasePage";

export class ToggleSwitchPage extends BasePage {

	readonly page_path = "components-toggleswitch--example";

	readonly page: Page;
	readonly toggleSpan: Locator;
	readonly toggleInput: Locator;

	constructor(page: Page) {
		super(page);
		this.page = page;
		this.toggleSpan = page.locator("//*[@id='root']/label/span[1]/span[1]");
		this.toggleInput = page.locator("input[type='checkbox']");
	}

	async visitPage(): Promise<void> {
		await this.visit(this.page_path, this.toggleInput);
	}
}
