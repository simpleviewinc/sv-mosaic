import type { Locator, Page } from "@playwright/test";
import { BasePage } from "../../BasePage";
import { randomIntFromInterval } from "../../../utils/helpers/helper";

export class FormFieldCheckboxPage extends BasePage {

	readonly page_path = "formfields-formfieldcheckbox--kitchen-sink";

	readonly page: Page;
	readonly regularCheckboxButton: Locator;
	readonly disableCheckbox: Locator;
	readonly checkboxLabel: Locator;
	readonly regularCheckboxLocator: Locator;
	readonly fromDBCheckboxLocator: Locator;

	constructor(page: Page) {
		super(page);
		this.page = page;
		this.regularCheckboxButton = page.locator(".listItem").nth(0);
		this.disableCheckbox = page.locator("#disabledCheckbox");
		this.checkboxLabel = page.locator("label[data-testid='label-test-id']");
		this.regularCheckboxLocator = page.locator("#checkbox");
		this.fromDBCheckboxLocator = page.locator("#checkboxFromDB");
	}

	async selectRandomCheckboxButton(): Promise<number> {
		const optionSelected = randomIntFromInterval(1, await this.regularCheckboxButton.locator("[data-testid='label-test-id']").count()) - 1;
		await this.regularCheckboxButton.locator("[data-testid='label-test-id']").nth(optionSelected).check();
		return optionSelected;
	}

	async uncheckCheckboxOption(option: number): Promise<void> {
		await this.regularCheckboxButton.locator("[data-testid='label-test-id']").nth(option).uncheck();
	}
}
