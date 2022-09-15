import { BasePage } from "../../BasePage";
import { expect, Locator, Page } from "@playwright/test";

export class SaveAsComponent extends BasePage {
	readonly page: Page;
	readonly saveAsBtn: Locator;
	readonly saveAsOptions: Locator;
	readonly saveView: Locator;
	readonly saveLabel: Locator;
	readonly saveViewBtn: Locator;
	readonly cancelViewBtn: Locator;
	readonly viewBtn: Locator;
	readonly saveAsCheckbox: Locator;
	readonly tableViews: Locator;
	readonly editView: Locator;
	readonly editCheckbox: Locator;
	readonly closeViewBtn: Locator;
	readonly overwriteBtn: Locator;

	constructor(page: Page) {
		super(page);
		this.page = page;
		this.saveAsBtn = page.locator("text=Save As");
		this.saveAsOptions = page.locator("ul.MuiList-padding");
		this.saveView = page.locator("//html/body/div[5]/div[3]/div/div");
		this.saveLabel = page.locator("#label");
		this.saveViewBtn = page.locator("div[role='presentation'] button:has-text('Save')");
		this.cancelViewBtn = page.locator("div[role='presentation'] button:has-text('Cancel')");
		this.viewBtn = page.locator(".MuiButton-contained[type='button']").nth(0);
		this.saveAsCheckbox = this.saveView.locator("input[type=checkbox]");
		this.tableViews = page.locator(".viewContainer table tbody");
		this.editView = page.locator("//html/body/div[6]/div[3]/div/div");
		this.editCheckbox = this.editView.locator("input[type=checkbox]");
		this.closeViewBtn = page.locator(".left .iconButton button");
	}

	async selectSaveAsOption(option: number): Promise<void> {
		await this.saveAsOptions.locator(`li:nth-child(${option})`).click();
	}

	async createNewView(name: string): Promise<void> {
		await this.saveAsBtn.click();
		await this.selectSaveAsOption(1);
		await this.saveLabel.type(name);
		await this.saveViewBtn.click();
		expect(await this.viewBtn.textContent()).toContain(name);
	}

	async fillNewView(name: string): Promise<void> {
		await this.saveAsBtn.click();
		await this.selectSaveAsOption(1);
		await this.saveLabel.type(name);
	}

	async createNewViewShared(name: string): Promise<void> {
		await this.saveAsBtn.click();
		await this.selectSaveAsOption(1);
		await this.saveLabel.type(name);
		await this.saveAsCheckbox.check();
		await this.saveViewBtn.click();
		expect(this.viewBtn.textContent()).toContain(name);
	}

	async findRowByLabel(name: string): Promise<Locator> {
		if (await this.tableViews.nth(1).isHidden()) {
			return this.tableViews.locator(`tr:has-text("${name}")`);
		} else {
			return this.tableViews.nth(1).locator(`tr:has-text("${name}")`);
		}
	}

	async getViewTypeByLabel(name: string): Promise<Locator> {
		const row = await this.findRowByLabel(name);
		return row.locator("td").nth(2);
	}

	async selectViewBtnByLabel(name: string): Promise<Locator> {
		const row = await this.findRowByLabel(name);
		return row.locator("[data-mosaic-id='action_primary_select']");
	}

	async editBtnByLabel(name: string): Promise<Locator> {
		const row = await this.findRowByLabel(name);
		return row.locator("[data-testid='icon-button-test']").nth(0);
	}

	async moreOptionsBtnByLabel(name: string): Promise<Locator> {
		const row = await this.findRowByLabel(name);
		return row.locator("[data-testid='icon-button-test']").nth(1);
	}

	async getRemoveOption(): Promise<Locator> {
		return this.saveAsOptions.locator("li:nth-child(1)");
	}

	async isLabelPresent(name: string): Promise<boolean> {
		return this.tableViews.locator(`tr:has-text("${name}")`).isVisible();
	}
}
