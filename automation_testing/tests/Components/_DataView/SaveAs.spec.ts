import { test, expect, Page } from "@playwright/test";
import { dataview_data, saveAs_data } from "../../../utils/data/dataviewData";
import { DataviewPage } from "../../../pages/Components/DataView/DataViewPage";
import { SaveAsComponent } from "../../../pages/Components/DataView/SaveAsComponent";
import { PaginationComponent } from "../../../pages/Components/DataView/PaginationComponent";
import theme from "../../../../src/theme";

test.describe.parallel("Components - Data View - Save As", () => {
	let page: Page;
	let dataviewPage: DataviewPage;
	let saveAs: SaveAsComponent;
	let pagination: PaginationComponent;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		dataviewPage = new DataviewPage(page);
		saveAs = new SaveAsComponent(page);
		pagination = dataviewPage.paginationComponent;
		await dataviewPage.visit(dataviewPage.page_path);
	});

	test.afterEach(async() => {
		await saveAs.removeAllSavedViews();
	});

	test.afterAll(async ({ browser }) => {
		browser.close;
	});

	test("New View", async () => {
		await saveAs.saveAsBtn.click();
		await saveAs.selectSaveAsOption(1);
		await saveAs.saveLabel.type(saveAs_data.saveAsView);
		await saveAs.saveViewBtn.click();
		expect(await saveAs.viewBtn.textContent()).toContain(saveAs_data.saveAsView);
		await saveAs.viewBtn.click();
		expect(await (await saveAs.getViewTypeByLabel(saveAs_data.saveAsView)).textContent()).toContain(saveAs_data.viewNotSharedType);
	});

	test("New View Shared", async () => {
		await saveAs.fillNewView(saveAs_data.saveAsViewShared);
		await expect(saveAs.saveAsCheckbox).not.toBeChecked();
		await saveAs.saveAsCheckbox.check();
		await expect(saveAs.saveAsCheckbox).toBeChecked();
		await saveAs.saveViewBtn.click();
		expect(await saveAs.viewBtn.textContent()).toContain(saveAs_data.saveAsViewShared);
		await saveAs.viewBtn.click();
		expect(await (await saveAs.getViewTypeByLabel(saveAs_data.saveAsViewShared)).textContent()).toContain(saveAs_data.viewSharedType);
	});

	test("Default View", async () => {
		await saveAs.viewBtn.click();
		expect(await (await saveAs.getViewTypeByLabel(saveAs_data.defaultView)).textContent()).toContain(saveAs_data.defaultType);
	});

	test("Change View", async () => {
		await saveAs.createNewView(saveAs_data.saveAsView);
		await saveAs.viewBtn.click();
		const selectBtn = await saveAs.selectViewBtnByLabel(saveAs_data.defaultView);
		await saveAs.wait();
		await selectBtn.click();
		expect(await saveAs.viewBtn.textContent()).toContain(saveAs_data.defaultView);
	});

	test("Cancel", async () => {
		await saveAs.saveAsBtn.click();
		await saveAs.selectSaveAsOption(1);
		await saveAs.saveLabel.type(saveAs_data.saveAsView);
		await saveAs.saveAsCheckbox.check();
		await saveAs.cancelViewBtn.click();
		expect(await saveAs.viewBtn.textContent()).toContain(saveAs_data.defaultView);
		await saveAs.viewBtn.click();
		expect(await saveAs.isLabelPresent(saveAs_data.saveAsView)).toBe(false);
	});

	test("Edit a View", async () => {
		await page.reload();
		await saveAs.createNewView(saveAs_data.saveAsView);

		await saveAs.viewBtn.click();
		await saveAs.wait();
		const editBtn = await saveAs.editBtnByLabel(saveAs_data.saveAsView);
		expect(await (await saveAs.getViewTypeByLabel(saveAs_data.saveAsView)).textContent()).toContain(saveAs_data.viewNotSharedType);
		await editBtn.click();
		await saveAs.saveLabel.fill(saveAs_data.saveAsViewEdit);
		await expect(saveAs.editCheckbox).not.toBeChecked();
		await saveAs.editCheckbox.check();
		await saveAs.saveViewBtn.click();

		expect(await saveAs.viewBtn.textContent()).toContain(saveAs_data.saveAsViewEdit);

		await saveAs.closeViewBtn.first().click({ force: true });
		expect(await (await saveAs.getViewTypeByLabel(saveAs_data.saveAsViewEdit)).textContent()).toContain(saveAs_data.viewSharedType);
	});

	test("Remove a View", async () => {
		await saveAs.createNewView(saveAs_data.saveAsView);
		await saveAs.viewBtn.click();
		await (await saveAs.moreOptionsBtnByLabel(saveAs_data.saveAsView)).click();
		const removeOption = await saveAs.getRemoveOption();
		await removeOption.click();
		await saveAs.closeViewBtn.click({ force: true });
		await saveAs.viewBtn.click();
		expect(await saveAs.isLabelPresent(saveAs_data.saveAsView)).toBe(false);
	});

	test("Overwrite view", async () => {
		await pagination.selectViewType("Grid");
		await pagination.selectResultOption(50, false);
		await pagination.wait();
		await saveAs.createNewView(saveAs_data.saveAsOverwriteView);

		expect(await pagination.resultAmountGrid.textContent()).toBe(`${dataview_data.resultPerPage50}`);
		const recordRangePerPage = await pagination.calulateRecordRangePerPage(dataview_data.resultPerPage50, 1, false);
		expect(await pagination.paginationValueGrid.textContent()).toBe(recordRangePerPage);
		expect(await saveAs.viewBtn.textContent()).toContain(saveAs_data.saveAsOverwriteView);
		expect(await dataviewPage.getColumnHeadersCount()).not.toBe(saveAs_data.defaultColumnHeadersList);
		await pagination.selectResultOption(100, false);
		await pagination.wait();
		await saveAs.saveAsBtn.click();
		await saveAs.selectSaveAsOption(2);
		expect(await pagination.resultAmountGrid.textContent()).toBe(`${dataview_data.resultPerPage100}`);

		await saveAs.viewBtn.click();
		await (await saveAs.selectViewBtnByLabel(saveAs_data.defaultView)).click();
		expect(await pagination.resultAmount.textContent()).toBe(`${dataview_data.resultPerPageDefault}`);
		expect(await saveAs.viewBtn.textContent()).toContain(saveAs_data.defaultView);
		await pagination.wait();
		await saveAs.viewBtn.click();
		await (await saveAs.selectViewBtnByLabel(saveAs_data.saveAsOverwriteView)).click();
		expect(await pagination.resultAmountGrid.textContent()).toBe(`${dataview_data.resultPerPage100}`);
		expect(await saveAs.viewBtn.textContent()).toContain(saveAs_data.saveAsOverwriteView);
	});

	test("Validate Select button in the Saved view drawer has realTeal as Color.", async () => {
		await page.reload();
		const expectedColor = theme.newColors.realTeal["100"];
		await saveAs.createNewView(saveAs_data.saveAsView);
		await saveAs.viewBtn.click();
		const numberOfButtons = await saveAs.page.locator("button:has-text('Select')").count();
		for (let i = 0; i < numberOfButtons; i++) {
			expect(await saveAs.getColorFromElement(saveAs.page.locator("button:has-text('Select')").nth(i))).toBe(expectedColor);
		}
	});

	test("Validate text in the Saved view drawer has almostBlack as Color.", async () => {
		const expectedColor = theme.newColors.almostBlack["100"];
		await saveAs.createNewView(saveAs_data.saveAsView);
		await saveAs.viewBtn.click();
		const rowCount = await saveAs.page.locator("tbody").nth(1).locator("tr").count();
		for (let i = 0; i < rowCount; i++) {
			expect(await saveAs.getColorFromElement(saveAs.page.locator("tbody").nth(1).locator("tr").nth(i).locator("td:nth-child(2) >> div"))).toBe(expectedColor);
			expect(await saveAs.getColorFromElement(saveAs.page.locator("tbody").nth(1).locator("tr").nth(i).locator("td:nth-child(3) >> div"))).toBe(expectedColor);
		}
	});

	test("Validate icons in the Saved view drawer has almostBlack as Color.", async () => {
		const expectedColor = theme.newColors.almostBlack["100"];
		await saveAs.createNewView(saveAs_data.saveAsView);
		await saveAs.viewBtn.click();
		const rowCount = await saveAs.page.locator("tbody").nth(1).locator("tr").count();
		// We start from 1 because the first row (Default) does not have icons.
		for (let i = 1; i < rowCount; i++) {
			expect(await saveAs.getColorFromElement(saveAs.page.locator("tbody").nth(1).locator("tr").nth(i).locator("td:nth-child(1) >> span:nth-child(2) >> button"))).toBe(expectedColor);
			expect(await saveAs.getColorFromElement(saveAs.page.locator("tbody").nth(1).locator("tr").nth(i).locator("td:nth-child(1) >> span:nth-child(3) >> button"))).toBe(expectedColor);
		}
	});
});
