import { Page, Locator } from "@playwright/test";
import { BasePage } from "../../BasePage";

export class SideNavPage extends BasePage {

	readonly page_path = "components-sidenav--example";

	readonly page: Page;
	readonly title: Locator;
	readonly sections: Locator;
	readonly navLocator: Locator;

	constructor(page: Page) {
		super(page);
		this.page = page;
		this.title = page.locator("#root h1");
		this.sections = page.locator("[data-testid='section-wrapper']");
		this.navLocator = page.locator("nav");
	}
}
