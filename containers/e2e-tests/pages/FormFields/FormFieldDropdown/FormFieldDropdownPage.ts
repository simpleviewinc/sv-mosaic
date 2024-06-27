import { Locator, Page } from "@playwright/test";
import { BasePage } from "../../BasePage";

export class FormFieldDropdownPage extends BasePage {

	readonly page_path = "formfields-formfielddropdown--kitchen-sink";

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
		this.regularDropdownDiv = page.locator("#dropdown [data-testid='textfield-test-id']");
		this.regularDropdownInput = page.locator("#dropdown input");
		this.regularDropdownButton = page.locator("#dropdown button[title='Open']");
		this.regularClearDropdownButton = page.locator("#dropdown button[title='Clear']");
		this.disabledField = page.locator("#disabledExample");
		this.xsSizeDropdownDiv = page.locator("#xsSize [data-testid='dropdown-single-selection-test-id']");
		this.smSizeDropdownDiv = page.locator("#smSize [data-testid='dropdown-single-selection-test-id']");
		this.mdSizeDropdownDiv = page.locator("#mdSize [data-testid='dropdown-single-selection-test-id']");
		this.lgSizeDropdownDiv = page.locator("#lgSize [data-testid='dropdown-single-selection-test-id']");
		this.xsSizeDropdownInput = this.xsSizeDropdownDiv.locator("input");
		this.smSizeDropdownInput = this.smSizeDropdownDiv.locator("input");
		this.mdSizeDropdownInput = this.mdSizeDropdownDiv.locator("input");
		this.lgSizeDropdownInput = this.lgSizeDropdownDiv.locator("input");
	}
}
