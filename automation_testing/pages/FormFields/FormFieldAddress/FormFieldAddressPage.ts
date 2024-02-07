import { Locator, Page } from "@playwright/test";
import { BasePage } from "../../BasePage";
import { us_address } from "../../../utils/data/addressInformationData";

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
	readonly statesLabel: Locator;
	readonly statesDropdownInput: Locator;
	readonly statesDropdownButton: Locator;
	readonly postalCodeField: Locator;
	readonly physicalCheckboxOption: Locator;
	readonly billingCheckboxOption: Locator;
	readonly shippingCheckboxOption: Locator;
	readonly addressCard: Locator;
	readonly titleAddAddressDrawerWrapper: Locator;

	constructor(page: Page) {
		super(page);
		this.page = page;
		this.addAddressButton = page.locator("button", { hasText: "ADD ADDRESS" });
		this.addressFormLayout = page.locator("[data-testid='form-layout-test-id']").nth(1);
		this.countryDropdownInput = page.locator("#country input");
		this.countryDropdownButton = page.locator("#country button");
		this.firstAddressField = page.locator("#address1 input");
		this.secondAddressField = page.locator("input#address2");
		this.thirdAddressField = page.locator("input#address3");
		this.cityField = page.locator("input#city");
		this.statesLabel = page.locator("#state label");
		this.statesDropdownInput = page.locator("#state input");
		this.statesDropdownButton = page.locator("#state button[title='Open']");
		this.postalCodeField = page.locator("input#postalCode");
		this.physicalCheckboxOption = page.locator("#types [data-testid='label-test-id']", { hasText: "Physical" }).locator("input");
		this.billingCheckboxOption = page.locator("#types [data-testid='label-test-id']", { hasText: "Billing" }).locator("input");
		this.shippingCheckboxOption = page.locator("#types [data-testid='label-test-id']", { hasText: "Shipping" }).locator("input");
		this.addressCard = page.locator("[data-testid='address-card-test']");
		this.titleAddAddressDrawerWrapper = this.formTestIDLocator.nth(1).locator("form div").first();
	}

	async fillAddresInformation(type:"physical" | "billing" | "shipping" | "all"): Promise<void> {
		await this.wait(1000);
		await this.firstAddressField.fill(us_address.address);
		await this.selectOptionFromDropdown(this.countryDropdownButton, us_address.country);
		await this.cityField.fill(us_address.city);
		await this.selectOptionFromDropdown(this.statesDropdownButton, us_address.state);
		await this.postalCodeField.fill(us_address.postalCode);
		await this.selectTypeOfAddress(type);
		await this.saveBtn.last().click();
	}

	async selectTypeOfAddress(type:"physical" | "billing" | "shipping" | "all"): Promise<void> {
		switch (type) {
		case "physical":
			await this.physicalCheckboxOption.click();
			break;
		case "billing":
			await this.billingCheckboxOption.click();
			break;
		case "shipping":
			await this.shippingCheckboxOption.click();
			break;
		case "all":
			await this.physicalCheckboxOption.click();
			await this.billingCheckboxOption.click();
			await this.shippingCheckboxOption.click();
			break;
		}
	}
}
