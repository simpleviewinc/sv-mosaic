import { BasePage } from "../../BasePage";
import { expect, Locator, Page } from "@playwright/test";
import { ColumnsComponent } from "./ColumnsComponent";
import { PaginationComponent } from "./PaginationComponent";
import { SaveAsComponent } from "./SaveAsComponent";

export class DataviewPage extends BasePage {

	readonly page_path = "components-dataview--playground";

	readonly page: Page;
	readonly saveAsComponent: SaveAsComponent;
	readonly paginationComponent: PaginationComponent;
	readonly columnsComponent: ColumnsComponent;
	readonly createNewBtn: Locator;
	readonly dialog: Page;
	readonly editIcon: Locator;
	readonly moreOptions: Locator;
	readonly viewChildren: Locator;
	readonly history: Locator;
	readonly title: Locator;
	readonly checkboxRow: Locator;
	readonly downloadBtn: Locator;
	readonly deleteBtn: Locator;
	readonly allSelectedLabel: Locator;
	readonly dataviewTable: Locator;
	readonly columnHeaders: Locator;
	readonly noResults: Locator;
	readonly removeFilterIcon: Locator;
	readonly filterRowBtn: Locator;
	readonly filtersBtn: Locator;
	readonly clearFiltersBtn: Locator;
	readonly selectedChips: Locator;
	readonly headerActionsLocator: Locator;
	readonly dataviewTopComponent: Locator;
	readonly dataviewTableHeadLocator: Locator;
	readonly dataviewRowHeaderLocator: Locator;

	constructor(page: Page) {
		super(page);
		this.page = page;
		this.paginationComponent = new PaginationComponent(page);
		this.columnsComponent = new ColumnsComponent(page);
		this.createNewBtn = page.locator("[data-mosaic-id='button_create'] button");
		this.editIcon = page.locator("[data-mosaic-id=action_primary_edit] button");
		this.moreOptions = page.locator("[data-mosaic-id='additional_actions_dropdown'] button");
		this.viewChildren = page.locator("[data-mosaic-id=action_additional_view_children]");
		this.history = page.locator("[data-mosaic-id=action_additional_history]");
		this.title = page.locator(".headerRow.title .left h1");
		this.checkboxRow = page.locator(this.checkboxInputString);
		this.downloadBtn = page.locator("[data-mosaic-id='action_bulk_download'] button");
		this.deleteBtn = page.locator("[data-mosaic-id='action_bulk_delete'] button");
		this.allSelectedLabel = page.locator(".bulkText");
		this.dataviewTable = page.locator("table tbody");
		this.columnHeaders = page.locator(".columnHeader");
		this.noResults = page.locator("div.noResults");
		this.selectedChips = page.locator(".chips .chip");
		this.removeFilterIcon = page.locator(".chips svg[data-testid='CancelIcon']");
		this.filterRowBtn = page.locator(".filterRow button");
		this.filtersBtn = this.filterRowBtn.locator(":scope", { hasText: "Filters" }).first();
		this.clearFiltersBtn = this.filterRowBtn.locator(":scope", { hasText: "Clear filters" });
		this.headerActionsLocator = page.locator(".headerActions");
		this.dataviewTopComponent = page.locator("//*[@id='root']/div/div/div[1]/div");
		this.dataviewTableHeadLocator = page.locator("thead th");
		this.backIconLocator = page.locator(".headerRow button svg[data-testid='icon-button-test']");
		this.dataviewRowHeaderLocator = page.locator(".row-header");
	}

	async validateRecordsNumberInDialogMessage(number: number): Promise<void> {
		this.page.once("dialog", async dialog => {
			expect(dialog.message().toString().split(",").length).toBe(number);
			dialog.accept();
		});
	}

	async getFirstRowEditIcon(): Promise<Locator> {
		return this.editIcon.first();
	}

	async getFirstRowMoreOptions(): Promise<Locator> {
		await this.waitForElementLoad();
		return this.moreOptions.first();
	}

	async getFirstRowCheckbox(): Promise<Locator> {
		return this.checkboxRow.nth(1);
	}

	async getAllRowCheckbox(): Promise<Locator> {
		return this.checkboxRow.nth(0);
	}

	async waitForDataviewIsVisible(): Promise<void> {
		await this.dataviewTable.waitFor({ state: "visible" });
		await this.loading.waitFor({ state: "detached" });
	}

	async getTableRows(): Promise<Locator> {
		await this.waitForDataviewIsVisible();
		return this.dataviewTable.locator("tr");
	}

	async getColumnHeadersCount(): Promise<number> {
		return this.columnHeaders.count();
	}

	async getRowTitles(): Promise<string[]> {
		await this.waitForDataviewIsVisible();
		await this.wait();
		const rows = await (await this.getTableRows()).elementHandles();
		const titles = [];
		for (const row of rows) {
			titles.push(((await (await row.$("td:nth-child(5)")).textContent()).toLowerCase()));
		}
		return titles;
	}

	async getRowCreated(): Promise<string[]> {
		const rows = await (await this.getTableRows()).elementHandles();
		const createdDates = [];
		for (const row of rows) {
			createdDates.push((await (await row.$("td:nth-child(7)")).textContent()).toLowerCase());
		}
		return createdDates;
	}

	async getSpecificColumn(column: string): Promise<Locator> {
		const index = await this.getPositionOfColumn(column);
		return this.columnHeaders.nth(index);
	}

	async getPositionOfColumn(column: string): Promise<number> {
		const numberOfHeaders = await this.getColumnHeadersCount();
		const columns = [];
		for (let i = 0; i < numberOfHeaders; i++) {
			columns.push(await this.columnHeaders.nth(i).textContent());
		}
		return columns.indexOf(column);
	}

	async getAllRowData(resultsPerPage: number, dataName: string): Promise<string[]> {
		const pages = await this.paginationComponent.calculatePages(resultsPerPage);
		const data = [];
		for (let i = 0; i < pages; i++) {
			switch (dataName.toLocaleLowerCase()) {
			case "title":
				data.push(...(await this.getRowTitles()));
				break;
			case "created":
				data.push(...(await this.getRowCreated()));
				break;
			case "updated":
				data.push(...(await this.getUpdatedCreated()));
				break;
			}
			if (!await this.paginationComponent.forwardArrow.isDisabled()) {
				await this.paginationComponent.forwardArrow.click();
			}
		}
		return data;
	}

	async validateContainsKeyword(titles: string[], keyword: string): Promise<void> {
		for (const title of titles) {
			expect(title.toLowerCase()).toContain(keyword.toLowerCase());
		}
	}

	async validateContainsMoreThanOneKeyword(titles: string[], keywords: string[]): Promise<void> {
		for (const title of titles) {
			let isContaining: boolean;
			for (const keyword of keywords) {
				isContaining = false;
				if (title.toLowerCase().includes(keyword.toLowerCase())) {
					isContaining = true;
					break;
				}
			}
			expect(isContaining, `Expected contains: '${keywords.toString()}' but was '${title}'`).toBe(true);
		}
	}

	async getRowCategories(): Promise<string[]> {
		const rows = await (await this.getTableRows()).elementHandles();
		const titles = [];
		for (const row of rows) {
			titles.push((await (await row.$("td:nth-child(6)")).textContent()));
		}
		return titles;
	}

	async getAllRowCategories(resultsPerPage: number): Promise<string[]> {
		const pages = await this.paginationComponent.calculatePages(resultsPerPage);
		const titles = [];
		for (let i = 0; i < pages; i++) {
			titles.push(...(await this.getRowCategories()));
			if (!await this.paginationComponent.forwardArrow.isDisabled()) {
				await this.paginationComponent.forwardArrow.click();
				await this.loading.waitFor({ state: "detached" });
			}
		}
		return titles;
	}

	async getCategoriesFromRow(): Promise<string[]> {
		await this.waitForDataviewIsVisible();
		const rows = await this.dataviewTable.locator("tr").elementHandles();
		const categoriesPerRow = [];
		for (const row of rows) {
			categoriesPerRow.push(await (await row.$("td:nth-child(6)")).textContent());
		}
		return categoriesPerRow;
	}

	async getUpdatedCreated(): Promise<string[]> {
		const rows = await (await this.getTableRows()).elementHandles();
		const createdDates = [];
		for (const row of rows) {
			createdDates.push((await (await row.$("td:nth-child(8)")).textContent()).toLowerCase());
		}
		return createdDates;
	}

	async getFilterText(locator: Locator): Promise<string> {
		return await this.getOnlyStringWithLetters(await locator.locator(".filter-value p").innerText());
	}

	async removeAllSelectedFilters(): Promise<void> {
		if (await this.filterRowBtn.count() > 1) {
			await this.pressSpecificKeyInKeyboard("Escape");
			await this.filtersBtn.click();
			for (let i = 0; i < await this.deleteIconSelectedOptionChip.count(); i++) {
				this.deleteIconSelectedOptionChip.first().click();
			}
			await this.applyBtn.click();
			await this.loading.waitFor({ state: "detached" });
		}
	}

	async getRowTitlesLocators(): Promise<Locator[]> {
		await this.waitForDataviewIsVisible();
		await this.wait();
		const rows = await (await this.getTableRows()).elementHandles();
		const titleLocators = [];
		for (const row of rows) {
			titleLocators.push(await row.$("td:nth-child(5) div"));
		}
		return titleLocators;
	}
}
