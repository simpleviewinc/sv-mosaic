import { test, expect } from '@playwright/test';
import { dataview } from '../../utils/data/dataview_data';
import { DataviewPage } from '../../pages/DataViewPage';
import { SaveAsComponent } from '../../pages/SaveAsComponent';

test.describe('Data View', () => {

    let dataviewPage: DataviewPage;
    let saveAs: SaveAsComponent;
    test.beforeEach(async ({ page }) => {
        dataviewPage = new DataviewPage(page);
        saveAs = dataviewPage.saveAsComponent;

        await dataviewPage.visit();
    });

 test('Save As', async ({ }) => {
        await dataviewPage.validateSnatshot(await saveAs.saveAsBtn, 'save_as_btn');
        await saveAs.saveAsBtn.click();
        await dataviewPage.validateSnatshot(await saveAs.saveAsOptions, 'save_as_options');
    });

    test('Save As - New View', async ({ }) => {
        await saveAs.saveAsBtn.click();
        await saveAs.selectSaveAsOption(1);
        await dataviewPage.validateSnatshot(await saveAs.saveView, 'save_as_view');
        await dataviewPage.validateSnatshot(await saveAs.saveLabel, 'save_as_label');
        await saveAs.saveLabel.type(dataview.saveAsView);
        await saveAs.saveViewBtn.click();
        expect(await saveAs.viewBtn.textContent()).toContain(dataview.saveAsView);
        await saveAs.viewBtn.click();
        expect(await (await saveAs.getViewTypeByLabel(dataview.saveAsView)).textContent()).toContain(dataview.viewNotSharedType);
    });

    test('Save As - New View Shared', async () => {
        await saveAs.fillNewView(dataview.saveAsViewShared);
        await dataviewPage.validateSnatshot(await saveAs.saveAsCheckbox, 'save_as_checkbox');
        expect((await saveAs.saveAsCheckbox.isChecked()).valueOf()).toBe(false);
        await saveAs.saveAsCheckbox.check();
        await dataviewPage.validateSnatshot(await saveAs.saveAsCheckbox, 'save_as_checkbox_checked');
        expect((await saveAs.saveAsCheckbox.isChecked()).valueOf()).toBe(true);
        await saveAs.saveViewBtn.click();
        expect(await saveAs.viewBtn.textContent()).toContain(dataview.saveAsViewShared);
        await saveAs.viewBtn.click();
        expect(await (await saveAs.getViewTypeByLabel(dataview.saveAsViewShared)).textContent()).toContain(dataview.viewSharedType);
    });

    test('Default View', async () => {
        await saveAs.viewBtn.click();
        expect(await (await saveAs.getViewTypeByLabel(dataview.defaultView)).textContent()).toContain(dataview.defaultType);
    });

    test('Save As - Change View', async () => {
        await saveAs.createNewView(dataview.saveAsView);
        await saveAs.viewBtn.click();
        const selectBtn = await saveAs.selectViewBtnByLabel(dataview.defaultView);
        await dataviewPage.validateSnatshot(await selectBtn, 'save_as_select_btn');
        await selectBtn.click();
        expect(await saveAs.viewBtn.textContent()).toContain(dataview.defaultView);
    });

    test('Save As - Cancel', async ()=>{
        await saveAs.saveAsBtn.click();
        await saveAs.selectSaveAsOption(1);
        await saveAs.saveLabel.type(dataview.saveAsView);
        await saveAs.saveAsCheckbox.check();
        await saveAs.cancelViewBtn.click();
        expect(await saveAs.viewBtn.textContent()).toContain(dataview.defaultView);
        await saveAs.viewBtn.click();
        expect(await saveAs.isLabelPresent(dataview.saveAsView)).toBe(false);
    });    

    test('Save As - Edit a View', async () => {
        await saveAs.createNewView(dataview.saveAsView);

        await saveAs.viewBtn.click();
        const editBtn = await saveAs.editBtnByLabel(dataview.saveAsView);
        await dataviewPage.validateSnatshot(await editBtn, 'save_as_edit_view_btn');
        expect(await (await saveAs.getViewTypeByLabel(dataview.saveAsView)).textContent()).toContain(dataview.viewNotSharedType);
        await editBtn.click();
        await saveAs.saveLabel.fill(dataview.saveAsViewEdit);
        expect((await saveAs.editCheckbox.isChecked()).valueOf()).toBe(false);
        await saveAs.editCheckbox.check();
        await saveAs.saveViewBtn.click();

        expect(await saveAs.viewBtn.textContent()).toContain(dataview.saveAsViewEdit);

        await saveAs.closeEditViewBtn.click({ force: true });
        expect(await (await saveAs.getViewTypeByLabel(dataview.saveAsViewEdit)).textContent()).toContain(dataview.viewSharedType);
    });

    test('Save As - Remove a View', async () => {
        await saveAs.createNewView(dataview.saveAsView);

        await saveAs.viewBtn.click();
        await (await saveAs.moreOptionsBtnByLabel(dataview.saveAsView)).click();
        const removeOption = await saveAs.getRemoveOption();
        await dataviewPage.validateSnatshot(await removeOption, 'save_as_edit_remove_option');
        await removeOption.click();
        await saveAs.closeSaveViewBtn.click({ force: true });

        await saveAs.viewBtn.click();
        expect(await saveAs.isLabelPresent(dataview.saveAsView)).toBe(false);
    });

});