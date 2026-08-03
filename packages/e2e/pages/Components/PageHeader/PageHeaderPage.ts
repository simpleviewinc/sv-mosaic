import type { Locator, Page } from "@playwright/test";
import { BasePage } from "../../BasePage";

export class PageHeaderPage extends BasePage {

	readonly page_path = "components-pageheader--playground";

	readonly page: Page;
	readonly pageHeaderDivLocator: Locator;
	readonly titleLocator: Locator;
	readonly backButton: Locator;
	readonly cancelButton: Locator;
	readonly saveButton: Locator;

	constructor(page: Page) {
		super(page);
		this.page = page;
		this.pageHeaderDivLocator = page.locator("div[data-testid='page-header-test-id']");
		this.titleLocator = this.pageHeaderDivLocator.locator("h1");
		this.backButton = this.pageHeaderDivLocator.locator(".back-button button");
		this.cancelButton = this.pageHeaderDivLocator.locator(".normalButton button", { hasText: "Cancel" });
		this.saveButton = this.pageHeaderDivLocator.locator(".normalButton button", { hasText: "Save" });
	}
}
