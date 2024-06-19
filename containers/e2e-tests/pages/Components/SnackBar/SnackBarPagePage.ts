import { Locator, Page } from "@playwright/test";
import { BasePage } from "../../BasePage";

export class SnackBarPage extends BasePage {

	readonly page_path = "components-snackbar--playground";

	readonly page: Page;
	readonly openSnackbarButton: Locator;
	readonly snackbar: Locator;
	readonly closeSnackbarButton: Locator;

	constructor(page: Page) {
		super(page);
		this.page = page;
		this.openSnackbarButton = page.locator("button", { hasText: "Open snackbar" });
		this.snackbar = page.locator("[role='presentation']");
		this.closeSnackbarButton = page.locator("[data-testid='close-icon'] [data-testid='CloseIcon']");
	}
}
