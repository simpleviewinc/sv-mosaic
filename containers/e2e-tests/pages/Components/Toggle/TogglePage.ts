import type { Locator, Page } from "@playwright/test";
import { BasePage } from "../../BasePage";
import testIds from "@root/utils/testIds";

export class TogglePage extends BasePage {

	readonly page_path = "components-toggle--playground";

	readonly page: Page;
	readonly toggleButton: Locator;
	readonly toggleInput: Locator;
	readonly toggleTrack: Locator;

	constructor(page: Page) {
		super(page);
		this.page = page;
		this.toggleButton = page.getByTestId(testIds.TOGGLE).locator(".MuiButtonBase-root");
		this.toggleInput = page.locator(this.checkboxInputString);
		this.toggleTrack = page.locator("span.MuiSwitch-track");
	}
}
