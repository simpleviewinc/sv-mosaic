import { Locator, Page } from "@playwright/test";
import { BasePage } from "../BasePage";

export class FormFieldDropdownSingleSelectionPage extends BasePage {

	readonly page_path = "formfields-formfielddropdownsingleselection--kitchen-sink";

	readonly page: Page;
	readonly regularDropdownDiv: Locator;
	readonly regularDropdownInput: Locator;
	readonly regularDropdownButton: Locator;
	readonly regularClearDropdownButton: Locator;
	readonly disabledField: Locator;
	readonly xsSizeDropdownDiv: Locator;
	readonly smSizeDropdownDiv: Locator;
	readonly mdSizeDropdownDiv: Locator;
	readonly lgSizeDropdownDiv: Locator;
	readonly xsSizeDropdownInput: Locator;
	readonly smSizeDropdownInput: Locator;
	readonly mdSizeDropdownInput: Locator;
	readonly lgSizeDropdownInput: Locator;
	readonly xsSizeDropdownOpenButton: Locator;
	readonly smSizeDropdownOpenButton: Locator;
	readonly mdSizeDropdownOpenButton: Locator;
	readonly lgSizeDropdownOpenButton: Locator;


	constructor(page: Page) {
		super(page);
		this.page = page;
		this.regularDropdownDiv = page.locator("[data-testid='textfield-test-id']").nth(0);
		this.regularDropdownInput = page.locator("input").nth(0);
		this.regularDropdownButton = page.locator("//*[@id='root']/div/form/div[2]/div[1]/div/div/div/div/div[1]/div[2]/div/div/div/div/div/button[2]");
		this.regularClearDropdownButton = page.locator("//*[@id='root']/div/form/div[2]/div[1]/div/div/div/div/div[1]/div[2]/div/div/div/div/div/button[1]");
		this.disabledField = page.locator("p[data-testid='disabled-text-test-id']");
		this.xsSizeDropdownDiv = page.locator("[data-testid='textfield-test-id']").nth(1);
		this.smSizeDropdownDiv = page.locator("[data-testid='textfield-test-id']").nth(2);
		this.mdSizeDropdownDiv = page.locator("[data-testid='textfield-test-id']").nth(3);
		this.lgSizeDropdownDiv = page.locator("[data-testid='textfield-test-id']").nth(4);
		this.xsSizeDropdownInput = page.locator("input").nth(1);
		this.smSizeDropdownInput = page.locator("input").nth(2);
		this.mdSizeDropdownInput = page.locator("input").nth(3);
		this.lgSizeDropdownInput = page.locator("input").nth(4);
		this.xsSizeDropdownOpenButton = page.locator("[data-testid='dropdown-single-selection-test-id'] button[aria-label='Open']").nth(1);
		this.smSizeDropdownOpenButton = page.locator("[data-testid='dropdown-single-selection-test-id'] button[aria-label='Open']").nth(2);
		this.mdSizeDropdownOpenButton = page.locator("[data-testid='dropdown-single-selection-test-id'] button[aria-label='Open']").nth(3);
		this.lgSizeDropdownOpenButton = page.locator("[data-testid='dropdown-single-selection-test-id'] button[aria-label='Open']").nth(4);
	}

	async visitPage(): Promise<void> {
		await this.visit(this.page_path, this.title);
	}
}
