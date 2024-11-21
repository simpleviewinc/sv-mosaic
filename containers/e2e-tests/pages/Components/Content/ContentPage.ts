import type { Locator, Page } from "@playwright/test";
import { BasePage } from "../../BasePage";
import testIds from "@root/utils/testIds";

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
		this.mainContentTitle = page.getByRole("heading");
		this.editButton = page.locator(`[data-testid='${testIds.BUTTON_ROW}'] button [data-testid='icon-button-test']`);
		this.detailsButton = page.locator(`[data-testid='${testIds.BUTTON_ROW}'] button`, { hasText: "More Details" });
		this.mainWrapperLocator = page.locator("#root div").first();
		this.contentWrapperLocator = page.locator(".content-wrapper");
		this.cardWrapperLocator = page.locator(".card-wrapper");
		this.titleBarLocator = page.locator(".title-bar");
	}
}
