import { Locator, Page, expect } from "@playwright/test";
import { BasePage } from "../../BasePage";

export class FormFieldNumberTablePage extends BasePage {

	readonly page_path = "formfields-formfieldnumbertable--playground";

	readonly page: Page;
	readonly numberTableLocator: Locator;

	constructor(page: Page) {
		super(page);
		this.page = page;
		this.numberTableLocator = page.locator("#numberTable");
	}

	async validateTotalSumOfEachRow(): Promise<void> {
		const rowCount = await this.tableBodyRowLocator.count() - 1;
		let columnCount: number; let inputSum = 0;
		for (let i = 0; i < rowCount; i++) {
			columnCount = await this.tableBodyRowLocator.nth(i).locator("td").count();
			const inputCount = await this.tableBodyRowLocator.nth(i).locator("input").count();
			for (let j = 0; j < inputCount; j++) {
				inputSum += Number(await this.tableBodyRowLocator.nth(i).locator("input").nth(j).inputValue());
			}
			const errorMessage = "Validating sum of row number " + i;
			expect.soft(inputSum, errorMessage).toBe(Number(await this.tableBodyRowLocator.nth(i).locator("td").nth(columnCount - 1).textContent()));
			inputSum = 0;
		}
	}

	async validateTotalSumOfEachColumn(): Promise<void> {
		const rowCount = await this.tableBodyRowLocator.count();
		const columnCount = await this.tableBodyRowLocator.first().locator("td").count() - 2;
		let inputSum = 0;
		for (let i = 1; i < columnCount; i++) {
			for (let j = 0; j < rowCount - 1; j++) {
				inputSum += Number(await this.tableBodyRowLocator.nth(j).locator("input").nth(i).inputValue());
			}
			const errorMessage = "Validating sum of column number " + i;
			expect.soft(inputSum, errorMessage).toBe(Number(await this.tableBodyRowLocator.nth(rowCount - 1).locator("td").nth(i + 1).textContent()));
			inputSum = 0;
		}
	}
}
