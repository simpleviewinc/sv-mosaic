import { Locator, Page } from "@playwright/test";
import { BasePage } from "../../BasePage";

export class TopSummaryPage extends BasePage {

	readonly page_path = "components-topsummary--example";

	readonly page: Page;
	readonly summaryTitle: Locator;
	readonly starRateIcon: Locator;
	readonly summaryTopComponent: Locator;
	readonly additionButtonLocator: Locator;
	readonly descriptionItemLocator: Locator;

	constructor(page: Page) {
		super(page);
		this.page = page;
		this.summaryTitle = page.locator("#root p").nth(0);
		this.starRateIcon = page.locator(this.iconButtonTestLocator).first();
		this.summaryTopComponent = page.locator("//*[@id='root']/div");
		this.backIconLocator = page.locator("button svg[data-testid='icon-button-test']").first();
		this.additionButtonLocator = page.locator("[data-testid='btn-additional-action']");
		this.descriptionItemLocator = page.locator("[data-testid='description-item']");
	}
}
