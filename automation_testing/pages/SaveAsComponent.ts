import { expect, Locator, Page } from '@playwright/test';
import { url } from '../utils/formUrls';

export class SaveAsComponent {
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
    readonly closeSaveViewBtn: Locator;
    readonly closeEditViewBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.saveAsBtn = page.locator('text=Save As');
        this.saveAsOptions = page.locator('ul.MuiList-padding');
        this.saveView = page.locator('//html/body/div[5]/div[3]/div/div');
        this.saveLabel = page.locator('#label');
        this.saveViewBtn = page.locator('div[role="presentation"] button:has-text("Save")');
        this.cancelViewBtn = page.locator('div[role="presentation"] button:has-text("Cancel")');
        this.viewBtn = page.locator('//*[@id="root"]/div/div/div[1]/div/div[2]/div/span/span[2]/button/span[1]/span');
        this.saveAsCheckbox = this.saveView.locator('input[type=checkbox]');
        this.tableViews = page.locator('.viewContainer table tbody').nth(1);
        this.editView = page.locator('//html/body/div[6]/div[3]/div/div');
        this.editCheckbox = this.editView.locator('input[type=checkbox]');
        this.closeSaveViewBtn = page.locator('//html/body/div[5]/div[3]/div/div/div[1]/div[1]/span/button');
        this.closeEditViewBtn = page.locator('//html/body/div[6]/div[3]/div/div/div[1]/div[1]/span/button');
    }

    async selectSaveAsOption(option: Number) {
        await this.saveAsOptions.locator(`li:nth-child(${option})`).click();
    }

    async createNewView(name: string) {
        await this.saveAsBtn.click();
        await this.selectSaveAsOption(1);
        await this.saveLabel.type(name);
        await this.saveViewBtn.click();
        expect(await this.viewBtn.textContent()).toContain(name);
    }

    async fillNewView(name: string) {
        await this.saveAsBtn.click();
        await this.selectSaveAsOption(1);
        await this.saveLabel.type(name);
    }

    async createNewViewShared(name: string) {
        await this.saveAsBtn.click();
        await this.selectSaveAsOption(1);
        await this.saveLabel.type(name);
        await this.saveAsCheckbox.check();
        await this.saveViewBtn.click();
        expect(this.viewBtn.textContent()).toContain(name);
    }

    async findRowByLabel(name: string) {
        return this.tableViews.locator(`tr:has-text("${name}")`);
    }

    async getViewTypeByLabel(name: string) {
        const row = await this.findRowByLabel(name);
        return row.locator('td').nth(2);
    }

    async selectViewBtnByLabel(name: string) {
        const row = await this.findRowByLabel(name);
        return await row.locator('[data-mosaic-id="action_primary_select"]');
    }

    async editBtnByLabel(name: string) {
        const row = await this.findRowByLabel(name);
        return await row.locator('[data-testid="icon-button-test"]').nth(0);
    }

    async moreOptionsBtnByLabel(name: string) {
        const row = await this.findRowByLabel(name);
        return await row.locator('[data-testid="icon-button-test"]').nth(1);
    }

    async getRemoveOption() {
        return this.saveAsOptions.locator(`li:nth-child(1)`);
    }

    async isLabelPresent(name: string) {
        return this.tableViews.locator(`tr:has-text("${name}")`).isVisible();

    }

}