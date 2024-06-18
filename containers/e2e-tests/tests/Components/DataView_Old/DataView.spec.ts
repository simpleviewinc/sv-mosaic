import { test, expect, Page } from "@playwright/test";
import { DataviewPage } from "../../../pages/Components/DataView/DataViewPage";
import { dataview_data } from "../../../utils/data/dataviewData";
import theme from "../../../../src/theme";
import { dataviewKnobs as knob, commonKnobs } from "../../../utils/data/knobs";

test.describe("Components - Data View - Playground", () => {
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

	async function getNumberOfResultVisible() {
		return Number(await dataviewPage.paginationComponent.resultAmount.textContent());
	}

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

	test("Validate that when bulk actions are deactivated, the checkboxes should remain visible.", async () => {
		await dataviewPage.visit(dataviewPage.page_path, [knob.knobBulkActions + false, knob.knobBulkAllActions + false]);
		await dataviewPage.waitForDataviewIsVisible();
		expect(await dataviewPage.checkboxRow.count()).toEqual(await getNumberOfResultVisible() + 1);
		await dataviewPage.paginationComponent.selectResultOption(50);
		expect(await dataviewPage.checkboxRow.count()).toEqual(await getNumberOfResultVisible() + 1);
	});

	test("Validate that when onBack is activated, the back icon is displayed.", async () => {
		await dataviewPage.visit(dataviewPage.page_path, [commonKnobs.knobOnBack + true]);
		await dataviewPage.waitForDataviewIsVisible();
		await expect(dataviewPage.backIconLocator).toBeVisible();
		await dataviewPage.backIconLocator.click();
		await dataviewPage.setDialogValidationListener("Cancelling, going back to previous site");
	});

	test("Validate the dataview title style.", async () => {
		await dataviewPage.validateTitleStylingOfLocator(dataviewPage.title);
	});

	test("Validate the dataview view container dimensions.", async () => {
		const tdLocator = dataviewPage.page.locator("td");
		const messageViewContainer = "Validate View Container margins.";
		const messagePadding = "Validate Dataview Padding in Row.";
		expect.soft(await dataviewPage.getSpecificMarginFromElement(dataviewPage.viewContainerLocator, "right"), messageViewContainer).toBe("24px");
		expect.soft(await dataviewPage.getSpecificMarginFromElement(dataviewPage.viewContainerLocator, "left"), messageViewContainer).toBe("24px");
		expect.soft(await dataviewPage.getSpecificPaddingFromElement(tdLocator.first(), "left"), messagePadding).toBe("16px");
		expect.soft(await dataviewPage.getSpecificPaddingFromElement(tdLocator.last(), "right"), messagePadding).toBe("16px");
		expect.soft(await dataviewPage.getSpecificPaddingFromElement(dataviewPage.dataviewRowHeaderLocator.locator("th").first(), "left"), messagePadding).toBe("16px");
		expect(await dataviewPage.getSpecificPaddingFromElement(dataviewPage.dataviewRowHeaderLocator.locator("th").last(), "right"), messagePadding).toBe("16px");
	});

	test("Validate that when no actions are active, the action column is not displayed.", async () => {
		const rowHeaderLocator = dataviewPage.dataviewRowHeaderLocator.locator("th");
		const rowHeaderCountBefore = await rowHeaderLocator.count();
		await dataviewPage.visit(dataviewPage.page_path, [knob.knobPrimaryActions + false, knob.knobAdditionalActions + false]);
		const rowHeaderCountAfter = await rowHeaderLocator.count();
		expect.soft(rowHeaderCountAfter, "Validating that there is one less column.").toBe(rowHeaderCountBefore - 1);
		for (let i = 0; i < rowHeaderCountAfter; i++) {
			expect(await rowHeaderLocator.nth(i).textContent()).not.toBe("Actions");
		}
	});

	test("Validate that the title font weight and color are valid.", async () => {
		await dataviewPage.waitForDataviewIsVisible();
		const columnIndex = await dataviewPage.getPositionOfColumn("Title", true);
		const titles = await dataviewPage.getRowLocators(columnIndex);
		for (let i = 0; i < titles.length; i++) {
			expect.soft(await dataviewPage.getFontWeightFromElement(titles[i])).toBe((theme.fontWeight.normal).toString());
			expect(await dataviewPage.getColorFromElement(titles[i])).toBe(theme.newColors.almostBlack["100"]);
		}
	});

	test("Validate that the Preload Active Filters knob shows preload filters.", async () => {
		await dataviewPage.visit(dataviewPage.page_path, [knob.knobPreloadActiveFilters + true]);
		await dataviewPage.waitForDataviewIsVisible();
		const expectedFiltersOrder = ["Updated", "Title", "Keyword"];
		const actualFilters = await dataviewPage.getAllFiltersSelected();
		for (let i = 0; i < actualFilters.length; i++) {
			expect(actualFilters[i]).toBe(expectedFiltersOrder[i]);
		}
	});
});
