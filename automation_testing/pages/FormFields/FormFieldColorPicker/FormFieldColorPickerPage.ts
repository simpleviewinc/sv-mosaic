import { Locator, Page } from "@playwright/test";
import { BasePage } from "../../BasePage";
import { randomIntFromInterval } from "../../../utils/helpers/helper";

export class FormFieldColorPickerPage extends BasePage {

	readonly page_path = "formfields-formfieldcolorpicker--kitchen-sink";

	readonly page: Page;
	readonly regularColorPicker: Locator;
	readonly disabledColorPicker: Locator;
	readonly disabledColorPickerLabel: Locator;
	readonly hexColorInput: Locator;
	readonly colorSketchPicker: Locator;

	constructor(page: Page) {
		super(page);
		this.page = page;
		this.regularColorPicker = page.locator("[data-testid='colordiv-test']").nth(0);
		this.disabledColorPicker = page.locator("[data-testid='colordiv-test']").nth(1);
		this.disabledColorPickerLabel = page.locator("label[for='colorDisabled']");
		this.hexColorInput = page.locator(".flexbox-fix input").nth(0);
		this.colorSketchPicker = page.locator(".saturation-black");
	}

	async clickRandomColorInSketchPicker(): Promise<void> {
		const rndXPosition  = randomIntFromInterval(0, (await this.colorSketchPicker.boundingBox()).width);
		const rndYPosition = randomIntFromInterval(0, (await this.colorSketchPicker.boundingBox()).height);
		await this.colorSketchPicker.click({
			position: {
				x: rndXPosition,
				y: rndYPosition,
			},
		});
	}
}
