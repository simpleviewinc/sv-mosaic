import { Locator, Page } from "@playwright/test";
import { BasePage } from "../../BasePage";

export class CardPage extends BasePage {

	readonly page_path = "components-card--playground";

	readonly page: Page;
	readonly sectionTitleLocator: Locator;
	readonly bottomSectionLocator: Locator;

	constructor(page: Page) {
		super(page);
		this.page = page;
		this.sectionTitleLocator = page.locator("#root div div").first();
		this.bottomSectionLocator = page.locator("#root div div").nth(8);
	}

	async visitPage(knobs?: string[]): Promise<void> {
		if (knobs) {
			await this.visit(this.page_path, this.sectionTitleLocator, knobs);
		} else {
			await this.visit(this.page_path, this.sectionTitleLocator);
		}
	}
}
