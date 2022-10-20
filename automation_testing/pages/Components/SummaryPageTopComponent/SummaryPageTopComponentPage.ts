import { Locator, Page } from "@playwright/test";
import { BasePage } from "../../BasePage";

export class SummaryPageTopComponentPage extends BasePage {

	readonly page_path = "components-summarypagetopcomponent--example";

	readonly page: Page;
	readonly summaryTitle: Locator;

	constructor(page: Page) {
		super(page);
		this.page = page;
		this.summaryTitle = page.locator("#root p").nth(0);
	}

	async visitPage(): Promise<void> {
		await this.visit(this.page_path, this.summaryTitle);
	}
}
