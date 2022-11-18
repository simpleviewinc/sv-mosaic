import { BasePage } from "../../BasePage";
import { expect, Locator, Page } from "@playwright/test";
import { AdvancedFiltersComponent } from "./AdvancedFiltersComponent";
import { ColumnsComponent } from "./ColumnsComponent";
import { FilterComponent } from "./FilterComponent";
import { PaginationComponent } from "./PaginationComponent";
import { SaveAsComponent } from "./SaveAsComponent";

export class DataviewPage extends BasePage {

	readonly page_path = "components-dataview--example";

	readonly page: Page;
	readonly saveAsComponent: SaveAsComponent;
	readonly paginationComponent: PaginationComponent;
	readonly columnsComponent: ColumnsComponent;
	readonly filterComponent: FilterComponent;
	readonly advancedFilterComponent: AdvancedFiltersComponent;
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

	constructor(page: Page) {
		super(page);
		this.page = page;
		this.saveAsComponent = new SaveAsComponent(page);
		this.paginationComponent = new PaginationComponent(page);
		this.columnsComponent = new ColumnsComponent(page);
		this.filterComponent = new FilterComponent(page);
		this.advancedFilterComponent = new AdvancedFiltersComponent(page);
		this.createNewBtn = page.locator("[data-mosaic-id='button_create'] button");
		this.editIcon = page.locator("[data-mosaic-id=action_primary_edit] button");
		this.moreOptions = page.locator("[data-mosaic-id='additional_actions_dropdown'] button");
		this.viewChildren = page.locator("[data-mosaic-id=action_additional_view_children]");
		this.history = page.locator("[data-mosaic-id=action_additional_history]");
		this.title = page.locator(".headerRow.title .left h1");
		this.checkboxRow = page.locator("input[type='checkbox']");
		this.downloadBtn = page.locator("[data-mosaic-id='action_bulk_download'] button");
		this.deleteBtn = page.locator("[data-mosaic-id='action_bulk_delete'] button");
		this.allSelectedLabel = page.locator(".bulkText");
		this.dataviewTable = page.locator("table tbody");
		this.columnHeaders = page.locator(".columnHeader");
		this.noResults = page.locator("div.noResults");
		this.removeFilterIcon = page.locator(".removeIcon");
	}

	async visitPage(): Promise<void> {
		await this.visit(this.page_path, this.title);
	}

	async setDialogValidationListener(message: string): Promise<void> {
		this.page.on("dialog", async dialog => {
			expect(dialog.message()).toContain(message);
			dialog.accept();
		});
	}

	async validateRecordsNumberInDialogMessage(number: number): Promise<void> {
		this.page.on("dialog", async dialog => {
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

	async getTableRows(): Promise<Locator> {
		await this.dataviewTable.waitFor({ state: "visible" });
		await this.loading.waitFor({ state: "detached" });
		return this.dataviewTable.locator("tr");
	}

	async getColumnHeadersCount(): Promise<number> {
		return this.columnHeaders.count();
	}

	async getRowTitles(): Promise<string[]> {
		await this.dataviewTable.waitFor({ state: "visible" });
		await this.loading.waitFor({ state: "detached" });
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

	async getAllRowTitles(resultsPerPage: number): Promise<string[]> {
		const pages = await this.paginationComponent.calculatePages(resultsPerPage);
		const titles = [];
		for (let i = 0; i < pages; i++) {
			titles.push(...(await this.getRowTitles()));
			await this.paginationComponent.forwardArrow.click();
		}
		return titles;
	}

	async getAllRowCreated(resultsPerPage: number): Promise<string[]> {
		const pages = await this.paginationComponent.calculatePages(resultsPerPage);
		const createdDates = [];
		for (let i = 0; i < pages; i++) {
			createdDates.push(...(await this.getRowCreated()));
			await this.paginationComponent.forwardArrow.click();
			await this.loading.waitFor({ state: "detached" });
		}
		return createdDates;
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
			await this.paginationComponent.forwardArrow.click();
			await this.loading.waitFor({ state: "detached" });
		}
		return titles;
	}

	async getCategoriesFromRow(): Promise<string[]> {
		await this.dataviewTable.waitFor({ state: "visible" });
		await this.loading.waitFor({ state: "detached" });
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

	async getAllRowUpdated(resultsPerPage: number): Promise<string[]> {
		const pages = await this.paginationComponent.calculatePages(resultsPerPage);
		const updatedDates = [];
		for (let i = 0; i < pages; i++) {
			updatedDates.push(...(await this.getUpdatedCreated()));
			await this.paginationComponent.forwardArrow.click();
			await this.loading.waitFor({ state: "detached" });
		}
		return updatedDates;
	}

	async clearAllAppliedFilters(): Promise<void> {
		const numberOfFiltersApplied = await this.removeFilterIcon.count()
		if (numberOfFiltersApplied > 0) {
			for (let i = 0; i < numberOfFiltersApplied; i++) {
				await this.removeFilterIcon.nth(i).click({force: true});
			}
		}
	}
}
