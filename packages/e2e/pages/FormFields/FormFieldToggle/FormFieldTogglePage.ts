import type { Locator, Page } from "@playwright/test";
import { BasePage } from "../../BasePage";

export class FormFieldTogglePage extends BasePage {

	readonly page_path = "formfields-formfieldtoggle--kitchen-sink";

	readonly page: Page;
	readonly regularToggleWithLabel: Locator;
	readonly regularLabel: Locator;
	readonly disabledToggle: Locator;
	readonly regularToggleWithoutLabel: Locator;

	constructor(page: Page) {
		super(page);
		this.page = page;
		this.regularToggleWithLabel = page.locator("#toggleDefault input");
		this.regularToggleWithoutLabel = page.locator("#toggleWithoutLabel input");
		this.regularLabel = page.locator("#toggleDefault [data-testid='mos:Toggle:root'] > span:last-child").nth(0);
	}
}
