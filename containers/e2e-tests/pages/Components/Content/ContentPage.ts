import type { Locator, Page } from "@playwright/test";
import { BasePage } from "../../BasePage";
import { testIds } from "@simpleview/sv-mosaic";

export class ContentPage extends BasePage {

	readonly page_path = "components-content--playground";

	readonly page: Page;
	readonly mainContentTitle: Locator;
	readonly editButton: Locator;
	readonly mainWrapperLocator: Locator;
	readonly contentWrapperLocator: Locator;
	readonly titleBarLocator: Locator;

	constructor(page: Page) {
		super(page);
		this.page = page;
		this.mainContentTitle = page.getByRole("heading");
		this.editButton = page.locator(`[data-testid='${testIds.BUTTON_ROW}'] button [data-testid='icon-button-test']`);
		this.mainWrapperLocator = page.locator("#root div").first();
		this.contentWrapperLocator = page.locator(".content-wrapper");
		this.titleBarLocator = page.locator(".title-bar");
	}
}
