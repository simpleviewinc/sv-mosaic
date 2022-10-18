import { Locator, Page } from "@playwright/test";
import { BasePage } from "../BasePage";

export class FormFieldTablePage extends BasePage {

	readonly page_path = "formfields-formfieldtable--kitchen-sink";

	readonly page: Page;
	readonly tableWithExtraActionsAddElementButton: Locator;
	readonly tableWithoutLabelAddElementButton: Locator;
	readonly tableDisabledAddElementButton: Locator;
	readonly table: Locator;
	readonly actionButton: Locator;
	readonly addElementInTableButton: Locator;
	
	constructor(page: Page) {
		super(page);
		this.page = page;
		this.tableWithExtraActionsAddElementButton = page.locator("button[type='button']", {hasText: "ADD ELEMENT"}).nth(0);
		this.tableWithoutLabelAddElementButton = page.locator("button[type='button']", {hasText: "ADD ELEMENT"}).nth(1);
		this.tableDisabledAddElementButton = page.locator("button[type='button']", {hasText: "ADD ELEMENT"}).nth(2);
		this.table = page.locator("table");
		this.actionButton = page.locator(".iconButton button");
		this.addElementInTableButton = page.locator(".variant_text button");
	}

	async visitPage(): Promise<void> {
		await this.visit(this.page_path, this.title);
	}

	async getNumberOfColumnsInTable(): Promise<number> {
		return await this.table.locator("th").count();
	}

	async getTableLabels(): Promise<string[]> {
		return (await this.table.locator("thead >> th").allInnerTexts()).filter(String);
	}

	async getRowValuesFromColumn(columnPosition: number): Promise<string[]> {
		const rowText = [];
		const numberOfRows = await this.table.locator("tbody >> tr").count();
		for (let i = 0; i < numberOfRows; i++) {
			rowText.push(await this.table.locator("tbody >> tr").nth(i).locator("td").nth(columnPosition).textContent());
		}
		return rowText;
	}	
}