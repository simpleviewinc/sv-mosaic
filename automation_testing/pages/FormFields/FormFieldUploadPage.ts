import { Locator, Page } from "@playwright/test";
import { BasePage } from "../BasePage";

export class FormFieldUploadPage extends BasePage {

	readonly page_path = "formfields-formfieldupload--playground";

	readonly page: Page;
	readonly uploadFilesInput: Locator;
	readonly uploadFilesButton: Locator;
	readonly fileCardContainerLocator: Locator;
	readonly fileDeleteButton: Locator;
	readonly fileImageLocator: Locator;

	constructor(page: Page) {
		super(page);
		this.page = page;
		this.uploadFilesInput = page.locator("#uploadField input");
		this.uploadFilesButton = page.locator("#uploadField button").first();
		this.fileCardContainerLocator = page.locator("[data-testid='file-card-container']");
		this.fileDeleteButton = page.locator(".file-delete-btn button");
		this.fileImageLocator = page.locator(".file-img");
	}

	async visitPage(knobs?: string[]): Promise<void> {
		if (knobs) {
			await this.visit(this.page_path, this.title, knobs);
		} else {
			await this.visit(this.page_path, this.title);
		}
	}

	async removeAllUploadedFiles(): Promise<void> {
		const deleteButtonCount = await this.fileDeleteButton.count();
		while (deleteButtonCount > 0) {
			await this.fileDeleteButton.first().click();
		}
	}
}
