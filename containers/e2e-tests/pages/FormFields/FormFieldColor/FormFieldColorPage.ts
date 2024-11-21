import type { Locator, Page } from "@playwright/test";
import { BasePage } from "../../BasePage";
import { randomIntFromInterval } from "../../../utils/helpers/helper";

export class FormFieldColorPage extends BasePage {

	readonly page_path = "formfields-formfieldcolor--kitchen-sink";

	readonly page: Page;
	readonly regularColor: Locator;
	readonly disabledColor: Locator;
	readonly disabledColorLabel: Locator;
	readonly hexColorInput: Locator;
	readonly colorSketchPicker: Locator;

	constructor(page: Page) {
		super(page);
		this.page = page;
		this.regularColor = page.locator("[data-testid='colordiv-test']").nth(0);
		this.disabledColor = page.locator("[data-testid='colordiv-test']").nth(1);
		this.disabledColorLabel = page.locator("label[for='colorDisabled']");
		this.hexColorInput = page.locator(".flexbox-fix input").nth(0);
		this.colorSketchPicker = page.locator(".saturation-black");
	}

	async clickRandomColorInSketchPicker(): Promise<void> {
		const rndXPosition = randomIntFromInterval(0, (await this.colorSketchPicker.boundingBox()).width);
		const rndYPosition = randomIntFromInterval(0, (await this.colorSketchPicker.boundingBox()).height);
		await this.colorSketchPicker.click({
			position: {
				x: rndXPosition,
				y: rndYPosition,
			},
		});
	}
}
