import type { Locator, Page } from "@playwright/test";
import { BasePage } from "../../BasePage";
import { randomIntFromInterval } from "../../../utils/helpers/helper";

export class FormFieldRadioPage extends BasePage {

	readonly page_path = "formfields-formfieldradio--kitchen-sink";

	readonly page: Page;
	readonly regularRadioButton: Locator;
	readonly disabledRadioButton: Locator;

	constructor(page: Page) {
		super(page);
		this.page = page;
		this.regularRadioButton = page.locator("[role='radiogroup']").nth(0);
		this.disabledRadioButton = page.locator("#radio-disabled");
	}

	async selectRandomRadioButtonOption(): Promise<([number, string])> {
		const randomOptionNumber = randomIntFromInterval(1, await this.regularRadioButton.locator("input").count()) - 1;
		const optionSelected = await this.regularRadioButton.locator("input").nth(randomOptionNumber).inputValue();
		await this.regularRadioButton.locator("input").nth(randomOptionNumber).check();
		return [randomOptionNumber, optionSelected];
	}
}
