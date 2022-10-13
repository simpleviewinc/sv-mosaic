import { Locator, Page } from "@playwright/test";
import { BasePage } from "../BasePage";
import { us_address } from "../../utils/data/address_information_data";

export class FormFieldAddressPage extends BasePage {

	readonly page_path = "formfields-formfieldaddress--playground";

	readonly page: Page;
	readonly addAddressButton: Locator;
	readonly addressFormLayout: Locator;
	readonly countryDropdownInput: Locator;
	readonly countryDropdownButton: Locator;
	readonly firstAddressField: Locator;
	readonly secondAddressField: Locator;
	readonly thirdAddressField: Locator;
	readonly cityField: Locator;
	readonly statesDropdownInput: Locator;
	readonly statesDropdownButton: Locator;
	readonly postalCodeField: Locator;
	readonly physicalCheckboxOption: Locator;
	readonly billingCheckboxOption: Locator;
	readonly shippingCheckboxOption: Locator;
	readonly addressCard: Locator;

	constructor(page: Page) {
		super(page);
		this.page = page;
		this.addAddressButton = page.locator("button", { hasText: "ADD ADDRESS" });
		this.addressFormLayout = page.locator("[data-testid='form-layout-test-id']").nth(1);
		this.countryDropdownInput = page.locator("input[role='combobox']").nth(0);
		this.countryDropdownButton = page.locator("[data-testid='dropdown-single-selection-test-id'] button[title='Open']").nth(0);
		this.firstAddressField = page.locator("#address1");
		this.secondAddressField = page.locator("#address2");
		this.thirdAddressField = page.locator("#address3");
		this.cityField = page.locator("#city");
		this.statesDropdownInput = page.locator("input[role='combobox']").nth(1);
		this.statesDropdownButton = page.locator("[data-testid='dropdown-single-selection-test-id'] button[title='Open']").nth(1);
		this.postalCodeField = page.locator("#postalCode");
		this.physicalCheckboxOption = page.locator("[data-testid='label-test-id']", { hasText: "Physical" });
		this.billingCheckboxOption = page.locator("[data-testid='label-test-id']", { hasText: "Billing" });
		this.shippingCheckboxOption = page.locator("[data-testid='label-test-id']", { hasText: "Shipping" });
		this.addressCard = page.locator("[data-testid='address-card-test']");
	}

	async visitPage(): Promise<void> {
		await this.visit(this.page_path, this.addAddressButton);
	}

	async fillAddresInformation(type:string): Promise<void> {
		await this.wait();
		await this.selectOptionFromDropdown(this.countryDropdownButton, us_address.country);
		await this.firstAddressField.fill(us_address.address);
		await this.cityField.fill(us_address.city);
		await this.selectOptionFromDropdown(this.statesDropdownButton, us_address.state);
		await this.postalCodeField.fill(us_address.postalCode);
		await this.selectTypeOfAddress(type);
		await this.drawerSaveButton.click();
	}

	async selectTypeOfAddress(type:string): Promise<void> {
		switch (type.toLocaleLowerCase()) {
		case "physical":
			await this.physicalCheckboxOption.locator("input").click();
			break;
		case "billing":
			await this.billingCheckboxOption.locator("input").click();
			break;
		case "shipping":
			await this.shippingCheckboxOption.locator("input").click();
			break;
		case "all":
			await this.physicalCheckboxOption.locator("input").click();
			await this.billingCheckboxOption.locator("input").click();
			await this.shippingCheckboxOption.locator("input").click();
			break;
		}
	}
}
