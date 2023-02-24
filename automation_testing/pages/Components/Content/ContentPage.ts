import { Locator, Page } from "@playwright/test";
import { BasePage } from "../../BasePage";

export class ContentPage extends BasePage {

	readonly page_path = "components-content--playground";

	readonly page: Page;
	readonly mainContentTitle: Locator;
	readonly editButton: Locator;
	readonly mainWrapperLocator: Locator;
	readonly contentWrapperLocator: Locator;

	constructor(page: Page) {
		super(page);
		this.page = page;
		this.mainContentTitle = page.locator("span", { hasText: "Main Content Title" });
		this.editButton = page.locator("button").first();
		this.mainWrapperLocator = page.locator("#root div").first();
		this.contentWrapperLocator = page.locator(".content-wrapper");
	}
}
