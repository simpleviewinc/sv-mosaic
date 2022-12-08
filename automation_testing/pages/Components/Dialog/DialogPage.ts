import { Locator, Page } from "@playwright/test";
import { BasePage } from "../../BasePage";

export class DialogPage extends BasePage {

	readonly page_path = "components-dialog--example";

	readonly page: Page;
	readonly openDialogButton: Locator;
	readonly dialog: Locator;
	readonly dialogTitle: Locator;

	constructor(page: Page) {
		super(page);
		this.page = page;
		this.openDialogButton = page.locator("button", { hasText: "Open Dialog" });
		this.dialog = page.locator("div[role='dialog']");
		this.dialogTitle = this.dialog.locator("div").first();
	}

	async visitPage(): Promise<void> {
		await this.visit(this.page_path, this.openDialogButton);
	}
}
