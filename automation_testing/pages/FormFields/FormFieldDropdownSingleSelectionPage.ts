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

	
	constructor(page: Page) {
		super(page);
		this.page = page;
		this.regularDropdownDiv = page.locator("[data-testid='textfield-test-id']").nth(0);
		this.regularDropdownInput = page.locator("#mui-2");
		this.regularDropdownButton = page.locator("//*[@id='root']/div/form/div[2]/div[1]/div/div/div/div/div[1]/div[2]/div/div/div/div/div/button[2]");
		this.regularClearDropdownButton = page.locator("//*[@id='root']/div/form/div[2]/div[1]/div/div/div/div/div[1]/div[2]/div/div/div/div/div/button[1]");
		this.disabledField = page.locator("p[data-testid='disabled-text-test-id']");
		this.xsSizeDropdownDiv = page.locator("[data-testid='textfield-test-id']").nth(1);
		this.smSizeDropdownDiv = page.locator("[data-testid='textfield-test-id']").nth(2);
		this.mdSizeDropdownDiv = page.locator("[data-testid='textfield-test-id']").nth(3);
		this.lgSizeDropdownDiv = page.locator("[data-testid='textfield-test-id']").nth(4);
		this.xsSizeDropdownInput = page.locator("#mui-4");
		this.smSizeDropdownInput = page.locator("#mui-6");
		this.mdSizeDropdownInput = page.locator("#mui-8");
		this.lgSizeDropdownInput = page.locator("#mui-10");
	}

	async visitPage(): Promise<void> {
		await this.visit(this.page_path, this.title);
	}

	async writeOptionInDropdown(dropdown: Locator, option:string): Promise<void> {
		await dropdown.click({force: true});
		await dropdown.fill(option);
		await this.page.locator("text=" + option).nth(0).click();
	}

	
}