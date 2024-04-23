import { Locator, Page } from "@playwright/test";
import { BasePage } from "../../BasePage";
import { randomIntFromInterval } from "../../../utils/helpers/helper";

export class FormFieldChipsPage extends BasePage {

	readonly page_path = "formfields-formfieldchipsingleselect--kitchen-sink";

	readonly page: Page;
	readonly regularChipSingleSelectDiv: Locator;
	readonly disabledChipSingleSelectDiv: Locator;
	readonly requiredChipSingleSelectDiv: Locator;
	readonly fromDBOptionsChipSingleSelectDiv: Locator;
	readonly fromDBOptionDiv: Locator;
	readonly optionButton: string;

	constructor(page: Page) {
		super(page);
		this.page = page;
		this.regularChipSingleSelectDiv = page.locator("[data-testid='field-test-id']").nth(0);
		this.disabledChipSingleSelectDiv = page.locator("#chipDisable");
		this.requiredChipSingleSelectDiv = page.locator("[data-testid='field-test-id']").nth(2);
		this.fromDBOptionsChipSingleSelectDiv = page.locator("[data-testid='field-test-id']").nth(3);
		this.optionButton = "[role='button']";
		this.fromDBOptionDiv = page.locator("//*[@id='3']/div/div/div/div/div/div[2]");
	}

	async selectRandomChipOption(chipLocator: Locator): Promise<number> {
		const numberOfOptions = await chipLocator.locator(this.optionButton).count();
		const optionSelected = randomIntFromInterval(1, numberOfOptions);
		await chipLocator.locator(this.optionButton).nth(optionSelected - 1).click();
		return optionSelected;
	}

	async selectSpecificChipOption(optionSelected: number, isRequired: boolean): Promise<void> {
		const chipLocator = isRequired == true ? this.requiredChipSingleSelectDiv : this.regularChipSingleSelectDiv;
		await chipLocator.locator(this.optionButton).nth(optionSelected - 1).click();
	}
}
