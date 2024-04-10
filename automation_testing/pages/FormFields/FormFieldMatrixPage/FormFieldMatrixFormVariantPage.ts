import { Locator, Page } from "@playwright/test";
import { BasePage } from "../../BasePage";

export class FormFieldMatrixFormVariantPage extends BasePage {

	readonly page_path = "formfields-formfieldmatrix--form-variant";

	readonly page: Page;
	readonly addMatrixButton: Locator;
	readonly drawerLocator: Locator;
	readonly titleInput: Locator;
	readonly descriptionInput: Locator;
	readonly editIconButton: Locator;
	readonly deleteIconButton: Locator;

	constructor(page: Page) {
		super(page);
		this.page = page;
		this.addMatrixButton = page.locator("#formMatrix button", { hasText: "Add" });
		this.drawerLocator = this.formLocator.nth(1);
		this.titleInput = page.locator("input#title-input");
		this.descriptionInput = page.locator("input#description-input");
		this.editIconButton = page.locator("[data-mosaic-id='action_primary_edit'] button");
		this.deleteIconButton = page.locator("[data-mosaic-id='action_primary_delete'] button");
	}

	async getRowDataFromMatrix(column: "ID" | "Title" | "Description"): Promise<string[]> {
		const rowCount = await this.table.locator("tr").count();
		const data = [];
		switch (column) {
		case "ID":
			for (let i = 1; i < rowCount; i++) {
				data.push(await this.table.locator("tr").nth(i).locator("td:nth-child(3)").textContent());
			}
			break;
		case "Title":
			for (let i = 1; i < rowCount; i++) {
				data.push(await this.table.locator("tr").nth(i).locator("td:nth-child(4)").textContent());
			}
			break;
		case "Description":
			for (let i = 1; i < rowCount; i++) {
				data.push(await this.table.locator("tr").nth(i).locator("td:nth-child(5)").textContent());
			}
			break;
		}
		return data;
	}

	async deleteAllRows(): Promise<void> {
		const rowCount = await this.deleteIconButton.count();
		for (let i = 0; i < rowCount; i++) {
			await this.deleteIconButton.nth(0).click();
		}
	}
}
