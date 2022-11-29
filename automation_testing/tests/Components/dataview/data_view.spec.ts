import { test, expect, Page } from "@playwright/test";
import { DataviewPage } from "../../../pages/Components/DataView/DataViewPage";
import { dataview_data } from "../../../utils/data/dataview_data";

test.describe.parallel("Components - Data View", () => {
	let page: Page;
	let dataviewPage: DataviewPage;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		dataviewPage = new DataviewPage(page);
		await dataviewPage.visitPage();
	});

	test.beforeEach(async() => {
		await page.reload();
	});

	test.afterAll(async ({ browser }) => {
		browser.close;
	});

	test("Create New", async () => {
		page.on("dialog", async dialog => {
			expect(dialog.message()).toContain("CREATE NEW");
			dialog.accept();
		});
		await dataviewPage.createNewBtn.click();
	});

	test("Edit Icon", async () => {
		page.on("dialog", async dialog => {
			expect(dialog.message()).toContain("EDIT");
			dialog.accept();
		});
		await dataviewPage.wait();
		await (await dataviewPage.getFirstRowEditIcon()).click();
	});

	test("View Children", async () => {
		page.on("dialog", async dialog => {
			expect(dialog.message()).toContain("View Children");
			dialog.accept();
		});
		await dataviewPage.wait();
		await (await dataviewPage.getFirstRowMoreOptions()).click();
		await dataviewPage.viewChildren.click();
	});


	test("History", async () => {
		page.on("dialog", async dialog => {
			expect(dialog.message()).toContain("History");
			dialog.accept();
		});
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

	test("Delete A Record", async () => {
		page.on("dialog", async dialog => {
			expect(dialog.message()).toContain("DELETE");
			dialog.accept();
		});
		await (await dataviewPage.getFirstRowCheckbox()).click();
		await dataviewPage.deleteBtn.click();
	});

	test("Download A Record", async () => {
		page.on("dialog", async dialog => {
			expect(dialog.message()).toContain("DOWNLOAD");
			dialog.accept();
		});
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

	test("Download all records", async () => {
		page.on("dialog", async dialog => {
			expect(dialog.message().toString().split(",").length).toBe(25);
			dialog.accept();
		});
		await (await dataviewPage.getAllRowCheckbox()).click();
		expect(await dataviewPage.allSelectedLabel.textContent()).toContain(dataview_data.allSelectedLabelMsg);
		await dataviewPage.downloadBtn.click();
	});

	test("Validate dataview title font.", async () => {
		const titleFonts = await dataviewPage.getFontFamilyFromElement(dataviewPage.title);
		expect(titleFonts).toContain("Museo-Sans");
	});
});
