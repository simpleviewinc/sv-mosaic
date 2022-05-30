import { expect, Locator, Page } from "@playwright/test";
import { url } from "../utils/formUrls";
import { SaveAsComponent } from "./SaveAsComponent";

export class DataviewPage {

	readonly page: Page;
	readonly saveAsComponent: SaveAsComponent;
	readonly createNewBtn: Locator;
	readonly dialog: Page;
	readonly editIcon: Locator;
	readonly moreOptions: Locator;
	readonly viewChildren: Locator;
	readonly history: Locator;
	readonly title: Locator;
	readonly checkboxRow: Locator;
	readonly columnsBtn: Locator;
	readonly downloadBtn: Locator;
	readonly deleteBtn: Locator;
	readonly allSelectedLabel: Locator;


	constructor(page: Page) {
		this.page = page;
		this.saveAsComponent = new SaveAsComponent(page);
		this.createNewBtn = page.locator("[data-mosaic-id=button_create]");
		this.editIcon = page.locator("[data-mosaic-id=action_primary_edit] button");
		this.moreOptions = page.locator("[data-mosaic-id='additional_actions_dropdown'] button");
		this.viewChildren = page.locator("[data-mosaic-id=action_additional_view_children]");
		this.history = page.locator("[data-mosaic-id=action_additional_history]");
		this.title = page.locator("text=Your Uploads");
		this.checkboxRow = page.locator("input[data-indeterminate='false']");
		this.columnsBtn = page.locator("button:has-text('Columns')");
		this.downloadBtn = page.locator("[data-mosaic-id='action_bulk_download'] button");
		this.deleteBtn = page.locator("//*[@id='root']/div/div/div[3]/table/thead/tr[1]/th[2]/span/span[2]/button");
		this.allSelectedLabel = page.locator(".bulkText");

	}

	async visit(): Promise<void> {
		await this.page.goto(url("dataview"), { timeout: 900000 });
		await this.title.waitFor();
	}

	async validateSnapshot(component: Locator, name: string): Promise<void> {
		await component.waitFor();
		expect(await component.screenshot()).toMatchSnapshot("dataview-" + name + ".png")
	}

	async validateDialogMessage(message: string): Promise<void> {
		await this.page.on("dialog", async dialog => {
			expect(await dialog.message()).toContain(message);
			dialog.accept();
		});
	}

	async validateRecordsNumberInDialogMessage(number: number): Promise<void> {
		await this.page.on("dialog", async dialog => {
			expect(await dialog.message().toString().split(",").length).toBe(number);
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
}