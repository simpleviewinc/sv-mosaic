import { Locator, Page } from "@playwright/test";
import { BasePage } from "../BasePage";

export class FormFieldUploadPage extends BasePage {

	readonly page_path = "formfields-formfieldupload--playground";

	readonly page: Page;
	readonly uploadFilesInput: Locator;
	readonly uploadFilesButton: Locator;
	readonly uploadFilesSpan: Locator;
	readonly fileCardContainerLocator: Locator;
	readonly fileDeleteButton: Locator;
	readonly fileImageLocator: Locator;

	constructor(page: Page) {
		super(page);
		this.page = page;
		this.uploadFilesInput = page.locator("#uploadField input");
		this.uploadFilesButton = page.locator("#uploadField button").first();
		this.uploadFilesSpan = page.locator("#uploadField span.button");
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
