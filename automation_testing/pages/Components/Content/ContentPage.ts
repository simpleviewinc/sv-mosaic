import { Locator, Page } from "@playwright/test";
import { BasePage } from "../../BasePage";

export class ContentPage extends BasePage {

	readonly page_path = "components-content--playground";

	readonly page: Page;
	readonly mainSectionTitle: Locator;
	readonly editButton: Locator;
	readonly mainWrapperLocator: Locator;

	constructor(page: Page) {
		super(page);
		this.page = page;
		this.mainSectionTitle = page.locator("span", { hasText: "Main Section Title" });
		this.editButton = page.locator("button").first();
		this.mainWrapperLocator = page.locator("#root div").first();
	}

	async visitPage(): Promise<void> {
		await this.visit(this.page_path, this.mainSectionTitle);
	}
}
