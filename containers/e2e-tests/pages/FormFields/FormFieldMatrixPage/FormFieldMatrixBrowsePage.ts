import { Locator, Page } from "@playwright/test";
import { FormFieldMatrixFormVariantPage } from "./FormFieldMatrixFormVariantPage";

export class FormFieldMatrixBrowsePage extends FormFieldMatrixFormVariantPage {

	readonly _page_path = "formfields-formfieldmatrix--browse";

	readonly page: Page;
	readonly browseTable: Locator;

	constructor(page: Page) {
		super(page);
		this.page = page;
		this.browseTable = page.locator("[role='presentation'] table");
	}

	async getRowDataFromDrawer(column: "ID" | "Title" | "Description", numberOfOptions: number): Promise<string[]> {
		const data = [];
		switch (column) {
		case "ID":
			for (let i = 1; i <= numberOfOptions; i++) {
				data.push(await this.browseTable.locator("tr").nth(i).locator("td:nth-child(3)").textContent());
			}
			break;
		case "Title":
			for (let i = 1; i <= numberOfOptions; i++) {
				data.push(await this.browseTable.locator("tr").nth(i).locator("td:nth-child(4)").textContent());
			}
			break;
		case "Description":
			for (let i = 1; i <= numberOfOptions; i++) {
				data.push(await this.browseTable.locator("tr").nth(i).locator("td:nth-child(5)").textContent());
			}
			break;
		}
		return data;
	}

	async selectOptionsFromDrawer(amountOfOptions: number): Promise<string[]> {
		for (let i = 1; i <= amountOfOptions; i++) {
			await this.browseTable.locator("input").nth(i).click();
		}
		return await this.getRowDataFromDrawer("Title", amountOfOptions);
	}
}
