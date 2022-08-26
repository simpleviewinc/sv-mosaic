import { Locator, Page } from "@playwright/test";
import { BasePage } from "../BasePage";

export class FormFieldAddressPage extends BasePage {

	readonly page_path = "formfields-formfieldaddress--playground";

	readonly page: Page;
	readonly addAddressButton: Locator;
	readonly postalCodeField: Locator;
	
	constructor(page: Page) {
		super(page);
		this.page = page;
		this.addAddressButton = page.locator("button", { hasText: "ADD ADDRESS" });
		this.postalCodeField = page.locator("#postalCode");
	}

	async visitPage(): Promise<void> {
		await this.visit(this.page_path, this.title);
	}
}