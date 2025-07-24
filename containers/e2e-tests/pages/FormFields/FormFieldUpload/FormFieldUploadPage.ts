import type { Locator, Page } from "@playwright/test";
import { BasePage } from "../../BasePage";

export class FormFieldUploadPage extends BasePage {

	readonly page_path = "formfields-formfieldupload--playground";

	readonly page: Page;
	readonly uploadFilesLocator: Locator;
	readonly uploadFilesInput: Locator;
	readonly uploadFilesButton: Locator;
	readonly uploadFilesSpan: Locator;
	readonly fileCardContainerLocator: Locator;
	readonly fileDeleteButton: Locator;
	readonly fileImageLocator: Locator;

	constructor(page: Page) {
		super(page);
		this.page = page;
		this.uploadFilesLocator = page.locator("#uploadField");
		this.uploadFilesInput = this.uploadFilesLocator.locator("input");
		this.uploadFilesButton = this.uploadFilesLocator.getByText("Add Files");
		this.uploadFilesSpan = this.uploadFilesLocator.locator("span.button");
		this.fileCardContainerLocator = page.locator("[data-testid='file-card-container']");
		this.fileDeleteButton = page.locator(".file-delete-btn button");
		this.fileImageLocator = page.locator(".file-img");
	}

	async removeAllUploadedFiles(): Promise<void> {
		const deleteButtonCount = await this.fileDeleteButton.count();
		for (let i = 0; i < deleteButtonCount; i++) {
			await this.fileDeleteButton.first().click();
		}
	}
}
