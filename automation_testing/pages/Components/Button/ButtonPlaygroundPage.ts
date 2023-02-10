import { Locator, Page } from "@playwright/test";
import { BasePage } from "../../BasePage";
import { buttonKnobs as knob } from "../../../utils/data/knobs";

export class ButtonPage extends BasePage {

	readonly page_path = "components-button--playground";

	readonly page: Page;
	readonly button: Locator;

	constructor(page: Page) {
		super(page);
		this.page = page;
		this.button = page.locator("button");
	}

	async getKbobForVariant(variant: "text"|"contained"|"outlined"|"icon"): Promise<string> {
		return (knob.knobVariant + variant).toString();
	}

	async getKbobForColor(color: "black"|"blue"|"lightBlue"|"red"|"yellow"|"teal"|"gray"|"white"): Promise<string> {
		return (knob.knobColor + color).toString();
	}

	async getKbobForPopoverEvent(event: "onClick"|"onHover"): Promise<string> {
		return (knob.knobPopoverEvent + event).toString();
	}

	async getKbobForSize(size: "medium"|"small"): Promise<string> {
		return (knob.knobPopoverEvent + size).toString();
	}
}
