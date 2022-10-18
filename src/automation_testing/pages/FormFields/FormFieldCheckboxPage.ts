import { Locator, Page } from "@playwright/test";
import { BasePage } from "../BasePage";
import { randomIntFromInterval } from "../../utils/helpers/helper"

export class FormFieldCheckboxPage extends BasePage {

	readonly page_path = "formfields-formfieldcheckbox--kitchen-sink";

	readonly page: Page;
	readonly regularCheckboxButton: Locator;
	readonly disabledCheckboxButton: Locator;

	constructor(page: Page) {
		super(page);
		this.page = page;
		this.regularCheckboxButton = page.locator(".listItem").nth(0);
		this.disabledCheckboxButton = page.locator(".listItem").nth(1);
	}

	async visitPage(): Promise<void> {
		await this.visit(this.page_path, this.title);
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
