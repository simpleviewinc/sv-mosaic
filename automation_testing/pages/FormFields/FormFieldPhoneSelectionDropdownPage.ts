import { Locator, Page } from "@playwright/test";
import { BasePage } from "../BasePage";

export class FormFieldPhoneSelectionDropdownPage extends BasePage {

	readonly page_path = "formfields-formfieldphoneselectiondropdown--kitchen-sink";

	readonly page: Page;
	readonly regularPhoneField: Locator;
	readonly regularPhoneFieldDropdown: Locator;
	readonly countryCodeProvidedPhoneField: Locator;
	readonly countryCodeProvidedPhoneFieldDropdown: Locator;
	readonly autoformatPhoneField: Locator;
	readonly autoformatPhoneFieldDropdown: Locator;
	readonly customPlaceholderPhoneField: Locator;
	readonly customPlaceholderPhoneFieldDropdown: Locator;

	constructor(page: Page) {
		super(page);
		this.page = page;
		this.regularPhoneField = page.locator("input.form-control").nth(0);
		this.regularPhoneFieldDropdown = page.locator(".flag-dropdown").nth(0);

		this.countryCodeProvidedPhoneField = page.locator("input.form-control").nth(1);
		this.countryCodeProvidedPhoneFieldDropdown = page.locator(".flag-dropdown").nth(1);

		this.autoformatPhoneField = page.locator("input.form-control").nth(2);
		this.autoformatPhoneFieldDropdown = page.locator(".flag-dropdown").nth(2);

		this.customPlaceholderPhoneField = page.locator("input.form-control").nth(3);
		this.customPlaceholderPhoneFieldDropdown = page.locator(".flag-dropdown").nth(3);
	}

	async visitPage(): Promise<void> {
		await this.visit(this.page_path, this.title);
	}
}
