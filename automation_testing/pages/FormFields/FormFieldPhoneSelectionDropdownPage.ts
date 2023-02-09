import { Locator, Page } from "@playwright/test";
import { BasePage } from "../BasePage";

export class FormFieldPhoneSelectionDropdownPage extends BasePage {

	readonly page_path = "formfields-formfieldphoneselectiondropdown--kitchen-sink";

	readonly page: Page;
	readonly flagDropdown: Locator;
	readonly regularPhoneField: Locator;
	readonly regularPhoneFieldDropdown: Locator;
	readonly countryCodeProvidedPhoneField: Locator;
	readonly countryCodeProvidedPhoneFieldDropdown: Locator;
	readonly autoformatPhoneField: Locator;
	readonly autoformatPhoneFieldDropdown: Locator;

	constructor(page: Page) {
		super(page);
		this.page = page;
		this.flagDropdown = page.locator(".flag-dropdown");
		this.regularPhoneField = page.locator("input.form-control").nth(0);
		this.regularPhoneFieldDropdown = this.flagDropdown.nth(0);

		this.countryCodeProvidedPhoneField = page.locator("input.form-control").nth(1);
		this.countryCodeProvidedPhoneFieldDropdown = this.flagDropdown.nth(1);

		this.autoformatPhoneField = page.locator("input.form-control").nth(2);
		this.autoformatPhoneFieldDropdown = this.flagDropdown.nth(2);
	}
}
