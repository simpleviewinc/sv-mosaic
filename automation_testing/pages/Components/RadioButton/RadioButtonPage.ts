import { Locator, Page } from "@playwright/test";
import { BasePage } from "../../BasePage";

export class RadioButtonPage extends BasePage {

	readonly page_path = "components-radiobutton--group";

	readonly page: Page;
	readonly radioButtonSpan: Locator;
	readonly radioButtonInput: Locator;

	constructor(page: Page) {
		super(page);
		this.page = page;
		this.radioButtonSpan = page.locator("span[data-testid='radio-button-test']");
		this.radioButtonInput = page.locator("input[type='radio']");
	}
}
