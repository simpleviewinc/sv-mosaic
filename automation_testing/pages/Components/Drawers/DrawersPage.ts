import { Locator, Page } from "@playwright/test";
import { BasePage } from "../../BasePage";

export class Drawers extends BasePage {

	readonly page_path = "components-drawers--example";

	readonly page: Page;
	readonly addFormButton: Locator;
	readonly openNewFormButton: Locator;


	constructor(page: Page) {
		super(page);
		this.page = page;
		this.addFormButton = page.locator("button", { hasText: "Add Form" });
		this.openNewFormButton = page.locator("button", { hasText: "OPEN NEW FORM" });
	}

	async openSpecificAmountOfNewDrawers(amount: number): Promise<void> {
		await this.addFormButton.click();
		for (let i = 0; i < amount; i++) {
			await this.openNewFormButton.nth(i).click();
		}
	}

	async goBackSpecificAmountOfRegularDrawers(amount:number):Promise<void> {
		for (let i = amount; i >= 0; i--) {
			await this.cancelBtn.nth(i).click();
		}
	}
}
