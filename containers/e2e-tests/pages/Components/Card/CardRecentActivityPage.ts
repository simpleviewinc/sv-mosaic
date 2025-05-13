import type { Locator, Page } from "@playwright/test";
import { BasePage } from "../../BasePage";
import { testIds } from "@simpleview/sv-mosaic";;

export class CardRecentActivityPage extends BasePage {

	readonly page_path = "components-card--recent-activity";

	readonly page: Page;
	readonly showAllButton: Locator;
	readonly activityLocator: Locator;
	readonly cardTitleBar: Locator;
	readonly cardWrapper: Locator;

	constructor(page: Page) {
		super(page);
		this.page = page;
		this.showAllButton = page.locator("button", { hasText: "Show All" });
		this.activityLocator = page.locator("p");
		this.cardTitleBar = page.getByTestId(testIds.CARD_HEADING);
		this.cardWrapper = page.getByTestId(testIds.CARD);
	}
}
