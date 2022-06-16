import { expect, Locator, Page } from "@playwright/test";
import { url } from "../utils/formUrls";
import { ColumnsComponent } from "./ColumnsComponent";
import { PaginationComponent } from "./PaginationComponent";
import { SaveAsComponent } from "./SaveAsComponent";

export class DataviewPage {

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
	readonly loading: Locator;
	readonly columnHeaders: Locator;

	constructor(page: Page) {
		this.page = page;
		this.saveAsComponent = new SaveAsComponent(page);
		this.paginationComponent = new PaginationComponent(page);
		this.columnsComponent = new ColumnsComponent(page);
		this.createNewBtn = page.locator("[data-mosaic-id=button_create]");
		this.editIcon = page.locator("[data-mosaic-id=action_primary_edit] button");
		this.moreOptions = page.locator("[data-mosaic-id='additional_actions_dropdown'] button");
		this.viewChildren = page.locator("[data-mosaic-id=action_additional_view_children]");
		this.history = page.locator("[data-mosaic-id=action_additional_history]");
		this.title = page.locator("text=Your Uploads");
		this.checkboxRow = page.locator("input[data-indeterminate='false']");
		this.downloadBtn = page.locator("[data-mosaic-id='action_bulk_download'] button");
		this.deleteBtn = page.locator("//*[@id='root']/div/div/div[3]/table/thead/tr[1]/th[2]/span/span[2]/button");
		this.allSelectedLabel = page.locator(".bulkText");
		this.dataviewTable = page.locator("table tbody");
		this.loading = page.locator("div.loading");
		this.columnHeaders = page.locator(".columnHeader");
	}

	async visit(): Promise<void> {
		await this.page.goto(url("dataview"), { timeout: 900000 });
		await this.title.waitFor();
	}

	async validateSnapshot(component: Locator, name: string): Promise<void> {
		await component.waitFor({ state: "visible" });
		await component.waitFor({ state: "attached" });
		await this.loading.waitFor({ state: "detached" });
		expect(await component.screenshot()).toMatchSnapshot("dataview-" + name + ".png", { threshold: 0.3, maxDiffPixelRatio: 0.3 })
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
		return this.dataviewTable.locator("tr");
	}

	async getColumnHeadersCount(): Promise<number> {
		return this.columnHeaders.count();
	}

	async getRowTitles(): Promise<string[]> {
		const rows = await (await this.getTableRows()).elementHandles();
		const titles = [];
		for (const row of rows) {
			titles.push((await (await row.$("td:nth-child(4)")).textContent()).toLowerCase());
		}
		return titles;
	}

	async getRowCreated(): Promise<string[]> {
		const rows = await (await this.getTableRows()).elementHandles();
		const createdDates = [];
		for (const row of rows) {
			createdDates.push((await (await row.$("td:nth-child(6)")).textContent()).toLowerCase());
		}
		return createdDates;
	}

	async getTitleColumn(): Promise<Locator> {
		return this.columnHeaders.nth(1);
	}

	async getCreatedColumn(): Promise<Locator> {
		return this.columnHeaders.nth(3);
	}

	async getAllRowTitles(resultsPerPage: number): Promise<string[]> {
		const pages = await this.paginationComponent.calculatePages(resultsPerPage);
		const titles = [];
		for (let i = 0; i < pages; i++) {
			titles.push(...(await this.getRowTitles()));
			await this.paginationComponent.forwardArrow.click();
			await this.loading.waitFor({ state: "detached" });
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
}