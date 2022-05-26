import { test, expect } from '@playwright/test';
import { DataviewPage } from '../../pages/DataViewPage';


test.describe('Data View', () => {
    let dataviewPage: DataviewPage;

    test.beforeEach(async ({ page }) => {
        dataviewPage = new DataviewPage(page);
        await dataviewPage.visit();
    });

    test('Create new', async ({ }) => {
        await dataviewPage.validateSnatshot(await dataviewPage.createNewBtn, 'create_new_btn');
        await dataviewPage.createNewBtn.click();
        await dataviewPage.validateDialogMessage('CREATE NEW');
    });

    test('Edit Icon', async ({ }) => {
        await dataviewPage.validateSnatshot(await dataviewPage.editIcon, 'edit_icon');
        await dataviewPage.editIcon.click();
        await dataviewPage.validateDialogMessage('EDIT');
    });

    test('View Children', async ({ }) => {
        await dataviewPage.validateSnatshot(await dataviewPage.moreOptions, 'more_options');
        await dataviewPage.moreOptions.click();

        await dataviewPage.validateSnatshot(await dataviewPage.viewChildren, 'view_children');
        await dataviewPage.viewChildren.click();

        await dataviewPage.validateDialogMessage('View Children');
    });

    test('History', async ({ }) => {
        await dataviewPage.moreOptions.click();
        await dataviewPage.validateSnatshot(await dataviewPage.history, 'history');
        await dataviewPage.history.click();
        await dataviewPage.validateDialogMessage('History');
    });
});

