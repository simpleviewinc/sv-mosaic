import { Locator, Page } from "@playwright/test";
import { BasePage } from "../../BasePage";

export class ContentPage extends BasePage {

	readonly page_path = "components-content--playground";

	readonly page: Page;
	readonly mainContentTitle: Locator;
	readonly editButton: Locator;
	readonly detailsButton: Locator;
	readonly mainWrapperLocator: Locator;
	readonly contentWrapperLocator: Locator;
	readonly cardWrapperLocator: Locator;
	readonly titleBarLocator: Locator;

	constructor(page: Page) {
		super(page);
		this.page = page;
		this.mainContentTitle = page.locator("span", { hasText: "Main Content Title" });
		this.editButton = page.locator(".standard-buttons button [data-testid='icon-button-test']");
		this.detailsButton = page.locator(".standard-buttons button", { hasText: "More Details" });
		this.mainWrapperLocator = page.locator("#root div").first();
		this.contentWrapperLocator = page.locator(".content-wrapper");
		this.cardWrapperLocator = page.locator(".card-wrapper");
		this.titleBarLocator = page.locator(".title-bar");
	}
}
