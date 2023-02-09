import { test, expect, Page } from "@playwright/test";
import { DataviewPage } from "../../../pages/Components/DataView/DataViewPage";
import { dataview_data } from "../../../utils/data/dataview_data";
import theme from "../../../../src/theme";

test.describe.parallel("Components - Data View - Playground", () => {
	let page: Page;
	let dataviewPage: DataviewPage;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		dataviewPage = new DataviewPage(page);
		await dataviewPage.visit(dataviewPage.page_path);
	});

	test.beforeEach(async() => {
		await page.reload();
	});

	test.afterAll(async ({ browser }) => {
		browser.close;
	});

	test("Validate Create New alert message.", async () => {
		dataviewPage.setDialogValidationListener("CREATE NEW");
		await dataviewPage.createNewBtn.click();
	});

	test("Validate Edit Icon alert message.", async () => {
		await dataviewPage.setDialogValidationListener("EDIT");
		await dataviewPage.wait();
		await (await dataviewPage.getFirstRowEditIcon()).click();
	});

	test("Validate View Children alert message.", async () => {
		await dataviewPage.setDialogValidationListener("View Children");
		await dataviewPage.wait();
		await (await dataviewPage.getFirstRowMoreOptions()).click();
		await dataviewPage.viewChildren.click();
	});

	test("Validate History alert message.", async () => {
		await dataviewPage.setDialogValidationListener("History");
		await (await dataviewPage.getFirstRowMoreOptions()).click();
		await dataviewPage.wait();
		await dataviewPage.history.click();
	});

	test("Select A Record", async () => {
		await dataviewPage.wait();
		await (await dataviewPage.getFirstRowCheckbox()).click();
		expect(await dataviewPage.downloadBtn.isVisible()).toBe(true);
		expect(await dataviewPage.deleteBtn.isVisible()).toBe(true);
	});

	test("Validate Delete A Record alert message.", async () => {
		await dataviewPage.setDialogValidationListener("DELETE");
		await (await dataviewPage.getFirstRowCheckbox()).click();
		await dataviewPage.deleteBtn.click();
	});

	test("Validate Download A Record alert message.", async () => {
		await dataviewPage.setDialogValidationListener("DOWNLOAD");
		await (await dataviewPage.getFirstRowCheckbox()).click();
		await dataviewPage.downloadBtn.click();

	});

	test("Select all records", async () => {
		await (await dataviewPage.getAllRowCheckbox()).click();
		const checkboxs = await dataviewPage.checkboxRow.elementHandles();
		for (const checkbox of checkboxs) {
			expect(await checkbox.isChecked()).toBe(true);
		}
		expect(await dataviewPage.allSelectedLabel.textContent()).toContain(dataview_data.allSelectedLabelMsg);
	});

	test("Delete all records", async () => {
		await (await dataviewPage.getAllRowCheckbox()).click();
		const checkboxs = await dataviewPage.checkboxRow.elementHandles();
		for (const checkbox of checkboxs) {
			expect(await checkbox.isChecked()).toBe(true);
		}
		expect(await dataviewPage.allSelectedLabel.textContent()).toContain(dataview_data.allSelectedLabelMsg);
		await dataviewPage.validateRecordsNumberInDialogMessage(25);
		await dataviewPage.deleteBtn.click();
	});

	test("Validate Download All Records alert message.", async () => {
		await dataviewPage.validateRecordsNumberInDialogMessage(25);
		await (await dataviewPage.getAllRowCheckbox()).click();
		expect(await dataviewPage.allSelectedLabel.textContent()).toContain(dataview_data.allSelectedLabelMsg);
		await dataviewPage.downloadBtn.click();
	});

	test("Validate dataview title font.", async () => {
		const titleFonts = await dataviewPage.getFontFamilyFromElement(dataviewPage.title);
		expect(titleFonts).toContain("Museo-Sans");
	});

	test("Validate Dataview Page Top Component padding is valid.", async () => {
		const locator = dataviewPage.dataviewTopComponent;
		await locator.waitFor();
		expect(await dataviewPage.getSpecificPaddingFromElement(locator, "top")).toBe("24px");
		expect(await dataviewPage.getSpecificPaddingFromElement(locator, "right")).toBe("24px");
		expect(await dataviewPage.getSpecificPaddingFromElement(locator, "bottom")).toBe("16px");
		expect(await dataviewPage.getSpecificPaddingFromElement(locator, "left")).toBe("24px");
	});

	test("Validate Dataview header actions padding is valid.", async () => {
		await dataviewPage.headerActionsLocator.waitFor();
		expect(await dataviewPage.getSpecificPaddingFromElement(dataviewPage.headerActionsLocator)).toBe("8px 24px");
	});

	test("Validate More actions tooltip is not visible when clicking the button.", async () => {
		await dataviewPage.waitForDataviewIsVisible();
		await dataviewPage.moreOptions.first().hover();
		await expect(dataviewPage.tooltip.first()).toBeVisible();
		expect(await dataviewPage.tooltip.first().textContent()).toBe("More actions");
		await dataviewPage.moreOptions.first().click();
		await expect(dataviewPage.tooltip.first()).not.toBeVisible();
	});

	test("Validate Dataview table header has grey2 as background color.", async () => {
		const expectedColor = theme.newColors.grey2["100"];
		await dataviewPage.headerActionsLocator.waitFor();
		for (let i = 0; i < await dataviewPage.dataviewTableHeadLocator.count(); i++) {
			expect(await dataviewPage.getBackgroundColorFromElement(dataviewPage.dataviewTableHeadLocator.nth(i))).toBe(expectedColor);
		}
	});
});
