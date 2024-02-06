import { Locator, Page, expect } from "@playwright/test";
import { BasePage } from "../../BasePage";
import { formFieldNumberTableKnobs as knob } from "../../../utils/data/knobs";

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
		await this.wait(1000);
		const rowCount = await this.tableBodyRowLocator.count() - 1; // Ignoring the Total row.
		let columnCount: number; let inputSum = 0;
		for (let i = 0; i < rowCount; i++) {
			columnCount = await this.tableBodyRowLocator.nth(i).locator("td").count();
			const inputCount = await this.tableBodyRowLocator.nth(i).locator("input").count();
			for (let j = 0; j < inputCount; j++) {
				inputSum += Number(await this.tableBodyRowLocator.nth(i).locator("input").nth(j).inputValue());
			}
			const errorMessage = "Validating sum of row number " + i;
			expect.soft(inputSum, errorMessage).toBe(Number((await this.tableBodyRowLocator.nth(i).locator("td").nth(columnCount - 1).textContent()).replace(",","")));
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
			expect.soft(inputSum, errorMessage).toBe(Number((await this.tableBodyRowLocator.nth(rowCount - 1).locator("td").nth(i + 1).textContent()).replace(",","")));
			inputSum = 0;
		}
	}
	/**
	 * This method visits the FormFieldNumberTable with a specific currency.
	 * * Types of Currency: `USD` - `EUR`, `JPY`- `GBP`, `No-format`
	 * @param format: Type of currency.
	 */
	async visitPageWithNumberFormat(format: "USD" | "EUR" | "JPY" | "GBP" | "No-format" | string): Promise<void> {
		const option = format === "No-format" ? "{}" : `{"style":"currency","currency":"${format}"}`;
		// const encodedOption = decodeURI(option);
		await this.visit(this.page_path, [knob.knobNumberFormatOptions + option]);
	}

	/**
	 * This method returns the expected symbol for a specific currency.
	 * * Types of Currency: `USD` - `EUR`, `JPY`- `GBP`, `No-format`
	 * @param currency: Type of currency.
	 */
	async getExpectedFormatNumber(currency: "USD" | "EUR" | "JPY" | "GBP" | "No-format" | string): Promise<string> {
		switch (currency) {
		case "USD":
			return "$";
		case "EUR":
			return "€";
		case "JPY":
			return "¥";
		case "GBP":
			return "£";
		default:
			return "$";
		}
	}

	async validateTotalColumnHasValidNumberFormat(format: string): Promise<void> {
		const expectedFormat = await this.getExpectedFormatNumber(format);
		const rowCount = await this.tableBodyRowLocator.count();
		let columnCount: number;
		for (let i = 0; i < rowCount - 1; i++) {
			columnCount = await this.tableBodyRowLocator.nth(i).locator("td").count();
			expect.soft(await this.tableBodyRowLocator.nth(i).locator("td").nth(columnCount - 1).textContent()).toContain(expectedFormat);
		}
	}

	async validateTotalRowHasValidNumberFormat(format: string): Promise<void> {
		const expectedFormat = await this.getExpectedFormatNumber(format);
		const rowCount = await this.tableBodyRowLocator.count();
		const columnCount = await this.tableBodyRowLocator.nth(rowCount - 1).locator("td").count();
		for (let i = 1; i < columnCount; i++) {
			expect.soft(await this.tableBodyRowLocator.nth(rowCount - 1).locator("td").nth(i).textContent()).toContain(expectedFormat);
		}
	}

	async getTotalFromRow(rowPosition: number): Promise<string> {
		const rowCount = await this.tableBodyRowLocator.count();
		if (rowPosition > rowCount) {
			throw new Error(`The row position ('${rowPosition}') is greater that the total number of rows ('${rowCount}') that exist in the table.`);
		}
		const columnCount = await this.tableBodyRowLocator.nth(rowPosition - 1).locator("td").count();
		return await this.tableBodyRowLocator.nth(rowPosition - 1).locator("td").nth(columnCount - 1).textContent();
	}

	async getTotalFromColumn(columnPosition: number): Promise<string> {
		const rowCount = await this.tableBodyRowLocator.count();
		const columnCount = await this.tableBodyRowLocator.first().locator("td").count() - 2;
		if (columnPosition > columnCount) {
			throw new Error(`The column position ('${columnPosition}') is greater that the total number of columns with totals ('${columnCount}') that exist in the table.`);
		}
		return await this.tableBodyRowLocator.nth(rowCount - 1).locator("td").nth(columnPosition).textContent();
	}

}
