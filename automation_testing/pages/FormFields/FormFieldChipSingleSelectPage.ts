import { Locator, Page } from "@playwright/test";
import { BasePage } from "../BasePage";
import { randomIntFromInterval } from "../../utils/helpers/helper";

export class FormFieldChipSingleSelectPage extends BasePage {

	readonly page_path = "formfields-formfieldchipsingleselect--kitchen-sink";

	readonly page: Page;
	readonly regularChipSingleSelectDiv: Locator;
	readonly disabledChipSingleSelectDiv: Locator;
	readonly requiredChipSingleSelectDiv: Locator;
	readonly optionButton: string;



	constructor(page: Page) {
		super(page);
		this.page = page;
		this.regularChipSingleSelectDiv = page.locator(".section").nth(0);
		this.disabledChipSingleSelectDiv = page.locator(".section").nth(1);
		this.requiredChipSingleSelectDiv = page.locator(".section").nth(2);
		this.optionButton = "[role='button']";

	}

	async visitPage(): Promise<void> {
		await this.visit(this.page_path, this.title);
	}

	async selectRandomChipOption(chipLocator: Locator): Promise<number> {
		const numberOfOptions = await chipLocator.locator(this.optionButton).count();
		const optionSelected = randomIntFromInterval(1, numberOfOptions);
		// const optionLabel = await chipLocator.locator(this.optionButton).nth(optionSelected - 1).textContent();
		await chipLocator.locator(this.optionButton).nth(optionSelected - 1).click();
		return optionSelected;
	}

	async getBackgroundColorFromOption(optionSelected: number, isRequired: boolean): Promise<string> {
		const chipLocator = isRequired == true ? this.requiredChipSingleSelectDiv : this.regularChipSingleSelectDiv;
		return (await chipLocator.locator(this.optionButton).nth(optionSelected - 1).evaluate(el => getComputedStyle(el).backgroundColor));
	}
}