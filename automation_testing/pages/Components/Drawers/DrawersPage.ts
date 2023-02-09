import { Locator, Page } from "@playwright/test";
import { BasePage } from "../../BasePage";

export class Drawers extends BasePage {

	readonly page_path = "components-drawers--example";

	readonly page: Page;
	readonly mainGridTitle: Locator;
	readonly resetButton: Locator;
	readonly incrementButton: Locator;
	readonly openRegularDrawerButton: Locator;
	readonly openFormDrawerButton: Locator;
	readonly goBackButton: Locator;
	readonly counterLabel: Locator;
	readonly simpleTextField: Locator;
	readonly drawerDiv: Locator;
	readonly openNewDrawerFromButton: Locator;

	constructor(page: Page) {
		super(page);
		this.page = page;
		this.mainGridTitle = page.locator("#root h1");
		this.resetButton = page.locator("button",{ hasText: "Reset" });
		this.incrementButton = page.locator("button",{ hasText: "Increment" });
		this.openRegularDrawerButton = page.locator("button",{ hasText: "Open Regular Drawer" });
		this.openFormDrawerButton = page.locator("button",{ hasText: "Open Form Drawer" });
		this.goBackButton = page.locator("button",{ hasText: "Go Back" });
		this.counterLabel = page.locator("#root p");
		this.simpleTextField = page.locator("#text1");
		this.drawerDiv = page.locator("div.MuiDrawer-paper");
		this.openNewDrawerFromButton = page.locator("button",{ hasText: "Open New Drawer Form" });
	}

	async openSpecificAmountOfRegularDrawers(amount:number):Promise<void> {
		for (let i = 0; i <  amount; i++) {
			await this.openRegularDrawerButton.nth(i).click();
		}
	}

	async goBackSpecificAmountOfRegularDrawers(amount:number):Promise<void> {
		for (let i = amount; i >= 0; i--) {
			await this.goBackButton.nth(i).click();
		}
	}
}
