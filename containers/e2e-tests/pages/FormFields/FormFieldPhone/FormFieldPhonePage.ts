import type { Locator, Page } from "@playwright/test";
import { BasePage } from "../../BasePage";

export class FormFieldPhonePage extends BasePage {

	readonly page_path = "formfields-formfieldphone--kitchen-sink";
	readonly playground_page_path = "formfields-formfieldphone--playground";

	readonly page: Page;
	readonly flagDropdown: Locator;
	readonly regularPhoneField: Locator;
	readonly regularPhoneFieldDropdown: Locator;
	readonly countryCodeProvidedPhoneField: Locator;
	readonly countryCodeProvidedPhoneFieldDropdown: Locator;
	readonly autoformatPhoneField: Locator;
	readonly autoformatPhoneFieldDropdown: Locator;
	readonly phoneFieldText: Locator;

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
		this.phoneFieldText = page.locator("#phone p").first();
	}
}
