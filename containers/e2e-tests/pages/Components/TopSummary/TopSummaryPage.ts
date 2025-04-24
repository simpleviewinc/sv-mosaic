import type { Locator, Page } from "@playwright/test";
import { BasePage } from "../../BasePage";
import { testIds } from "@simpleview/sv-mosaic";;

export class TopSummaryPage extends BasePage {

	readonly page_path = "components-topsummary--playground";

	readonly page: Page;
	readonly starRateIcon: Locator;
	readonly summaryTopComponent: Locator;
	readonly additionButtonLocator: Locator;
	readonly descriptionItemLocator: Locator;

	constructor(page: Page) {
		super(page);
		this.page = page;
		this.starRateIcon = page.locator(this.iconButtonTestLocator).first();
		this.summaryTopComponent = page.getByTestId(testIds.TOP_SUMMARY);
		this.backIconLocator = page.locator("button svg[data-testid='icon-button-test']").first();
		this.additionButtonLocator = page.locator("[data-testid='btn-additional-action']");
		this.descriptionItemLocator = page.locator("[data-testid='description-item']");
	}
}
