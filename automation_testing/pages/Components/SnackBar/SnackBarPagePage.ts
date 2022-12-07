import { Locator, Page } from "@playwright/test";
import { BasePage } from "../../BasePage";

export class SnackBarPage extends BasePage {

	readonly page_path = "components-snackbar--example";

	readonly page: Page;
	readonly openSnackbarButton: Locator;

	constructor(page: Page) {
		super(page);
		this.page = page;
		this.openSnackbarButton = page.locator("button", { hasText: "Open snackbar"});
	}

	async visitPage(): Promise<void> {
		await this.visit(this.page_path, this.openSnackbarButton);
	}
}
