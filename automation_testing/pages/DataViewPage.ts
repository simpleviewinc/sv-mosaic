import { expect, Locator, Page } from '@playwright/test';
import { url } from '../utils/formUrls';
import { SaveAsComponent } from './SaveAsComponent';

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
    

    constructor(page: Page) {
        this.page = page;
        this.saveAsComponent = new SaveAsComponent(page);
        this.createNewBtn = page.locator('[data-mosaic-id=button_create]');
        this.editIcon = page.locator('[data-mosaic-id=action_primary_edit]').first();
        this.moreOptions = page.locator('[data-mosaic-id="additional_actions_dropdown"]').first();
        this.viewChildren = page.locator('[data-mosaic-id=action_additional_view_children]').first();
        this.history = page.locator('[data-mosaic-id=action_additional_history]').first();;
        this.title = page.locator('text=Your Uploads');
    }

    async visit() {
        await this.page.goto(url('dataview'), { timeout: 900000 });
        await this.title.waitFor();
    }

    async validateSnatshot(component: Locator, name: string) {
        await component.waitFor();
        expect(await component.screenshot()).toMatchSnapshot("dataview-" + name + ".png")
    }

    async validateDialogMessage(message: string) {
        await this.page.on('dialog', async dialog => {
            await expect(dialog.message()).toContain(message);
            dialog.accept();
        });
    }
}