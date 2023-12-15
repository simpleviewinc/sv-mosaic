import { Locator, Page } from "@playwright/test";
import { BasePage } from "../../BasePage";

export class CardPage extends BasePage {

	readonly page_path = "components-card--playground";

	readonly page: Page;
	readonly sectionTitleLocator: Locator;
	readonly bottomSectionLocator: Locator;
	readonly cardTitle: Locator;

	constructor(page: Page) {
		super(page);
		this.page = page;
		this.sectionTitleLocator = page.locator("#root div div").first();
		this.bottomSectionLocator = page.locator("#root div div").nth(8);
		this.cardTitle = page.getByRole("heading");
	}
}
