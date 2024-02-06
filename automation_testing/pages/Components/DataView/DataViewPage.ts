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
	readonly ariaLabelRowTitleLocator: Locator;
	readonly ariaLabelRowCategoryLocator: Locator;
	readonly ariaLabelRowCreatedLocator: Locator;
	readonly ariaLabelRowUpdatedLocator: Locator;

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
		this.ariaLabelRowTitleLocator = page.locator("[aria-label='Title'] div");
		this.ariaLabelRowCategoryLocator = page.locator("[aria-label='Categories'] div");
		this.ariaLabelRowCreatedLocator = page.locator("[aria-label='Created'] div");
		this.ariaLabelRowUpdatedLocator = page.locator("[aria-label='Updated'] div");
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

	async getSpecificColumn(column: string): Promise<Locator> {
		const index = await this.getPositionOfColumn(column, false);
		return this.columnHeaders.nth(index);
	}

	async getPositionOfColumn(column: string, fullPosition: boolean): Promise<number> {
		const numberOfHeaders = await this.getColumnHeadersCount();
		const columns = [];
		for (let i = 0; i < numberOfHeaders; i++) {
			columns.push(await this.columnHeaders.nth(i).textContent());
		}
		// We add a 3 to the Index because it's not counting the drag and drop column and the checkbox column.
		// Also, the method that returns the index starts from 0.
		const position = fullPosition === true ? columns.indexOf(column) + 3 : columns.indexOf(column);
		return position;
	}

	async getAllRowData(dataName: "Title" | "Category" | "Created" | "Updated", resultsPerPage = 25): Promise<string[]> {
		await this.waitForDataviewIsVisible();
		await this.wait();
		const pages = await this.paginationComponent.calculatePages(resultsPerPage);
		const data = [];
		let locator: Locator;

		switch (dataName) {
		case "Title":
			locator = this.ariaLabelRowTitleLocator;
			break;
		case "Category":
			locator = this.ariaLabelRowCategoryLocator;
			break;
		case "Created":
			locator = this.ariaLabelRowCreatedLocator;
			break;
		case "Updated":
			locator = this.ariaLabelRowUpdatedLocator;
			break;
		}
		let locatorCount = await locator.count();
		for (let i = 0; i < pages; i++) {
			for (let j = 0; j < locatorCount; j++) {
				data.push((await locator.nth(j).textContent()).toLowerCase());
			}
			if (!await this.paginationComponent.forwardArrow.isDisabled()) {
				await this.paginationComponent.forwardArrow.click();
				await this.wait();
				locatorCount = await locator.count();
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

	async getRowLocators(index: number): Promise<Locator[]> {
		await this.waitForDataviewIsVisible();
		await this.wait();
		const rows = await (await this.getTableRows()).elementHandles();
		const titleLocators = [];
		for (const row of rows) {
			titleLocators.push(await row.$("td:nth-child(" + index + ") div"));
		}
		return titleLocators;
	}

	async getAllFiltersSelected(): Promise<string[]> {
		const filters = [];
		for (let i = 1; i < await this.filterRowBtn.count() - 1; i++) {
			this.filterRowBtn.nth(i).textContent();
			filters.push(await this.getOnlyStringWithLetters(await this.filterRowBtn.nth(i).textContent()));
		}
		return filters;
	}
}
