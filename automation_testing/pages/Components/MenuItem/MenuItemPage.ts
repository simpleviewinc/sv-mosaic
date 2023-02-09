import { Locator, Page } from "@playwright/test";
import { BasePage } from "../../BasePage";

export class MenuItemPage extends BasePage {

	readonly page_path = "components-menuitem--with-icon";

	readonly page: Page;
	readonly menuText: Locator;
	readonly deleteIcon: Locator;

	constructor(page: Page) {
		super(page);
		this.page = page;
		this.menuText = page.locator("[role='menuitem'] span");
		this.deleteIcon = page.locator("[data-testid='DeleteIcon']");
	}
}
