import { test, expect, Page } from "@playwright/test";
import { FormFieldImageVideoLinkDocumentBrowsingPage } from "../../pages/FormFields/FormFieldImageVideoLinkDocumentBrowsingPage";

test.describe.parallel("FormFields - FormFieldTable - Kitchen Sink", () => {
	let page: Page;
	let ffImageVideoLinkDocumentBrowsingPage: FormFieldImageVideoLinkDocumentBrowsingPage;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		ffImageVideoLinkDocumentBrowsingPage = new FormFieldImageVideoLinkDocumentBrowsingPage(page);
		await ffImageVideoLinkDocumentBrowsingPage.visitPage();
	});

	test.beforeEach(async() => {
		await ffImageVideoLinkDocumentBrowsingPage.removeAllVisibleCards()
	});

	test.afterAll(async ({ browser }) => {
		browser.close;
	});

	test("Validate dialog when pressing the Image without src.", async ({ page }) => {
		page.on("dialog", async dialog => {
			expect(dialog.message()).toContain("Set image is called");
			await dialog.dismiss();
		});
		await ffImageVideoLinkDocumentBrowsingPage.imageWithoutSrcButton.click();
	});

	test("Validate Image without src information", async () => {
		await ffImageVideoLinkDocumentBrowsingPage.imageWithoutSrcButton.click();
		const type = await ffImageVideoLinkDocumentBrowsingPage.getSpecificInfoFromTable("Type");
		const titles = await ffImageVideoLinkDocumentBrowsingPage.getInformationTitlesFromTable();
		await expect(ffImageVideoLinkDocumentBrowsingPage.imageOrVideoWithoutSrcCard.locator("img")).not.toBeVisible();
		expect(type).toBe("Image Video Thumbnail");
		expect(titles).toContain("Title");
		expect(titles).toContain("Type");
		expect(titles).toContain("Alt");
		expect(titles).toContain("Size");
	});

	test("Validate dialog when pressing the Video without src.", async ({ page }) => {
		page.on("dialog", async dialog => {
			expect(dialog.message()).toContain("Set video is called");
			await dialog.accept();
		});
		await ffImageVideoLinkDocumentBrowsingPage.videoWithoutSrcButton.click();
	});

	test("Validate Video without src information", async () => {
		await ffImageVideoLinkDocumentBrowsingPage.videoWithoutSrcButton.click();
		const type = await ffImageVideoLinkDocumentBrowsingPage.getSpecificInfoFromTable("Type");
		const titles = await ffImageVideoLinkDocumentBrowsingPage.getInformationTitlesFromTable();

		await expect(ffImageVideoLinkDocumentBrowsingPage.imageOrVideoWithoutSrcCard.locator("img")).not.toBeVisible();
		expect(type).toBe("Video");
		expect(titles).toContain("Title");
		expect(titles).toContain("Type");
		expect(titles).toContain("Alt");
		expect(titles).toContain("Size");
	});

	test("Validate dialog when pressing the Image with src.", async ({ page }) => {
		page.on("dialog", async dialog => {
			expect(dialog.message()).toContain("Set image is called");
			await dialog.accept();
		});
		await ffImageVideoLinkDocumentBrowsingPage.imageWithSrcButton.click();
	});

	test("Validate Image with src information", async () => {
		await ffImageVideoLinkDocumentBrowsingPage.imageWithSrcButton.click();
		const type = await ffImageVideoLinkDocumentBrowsingPage.getSpecificInfoFromTable("Type");
		const titles = await ffImageVideoLinkDocumentBrowsingPage.getInformationTitlesFromTable();

		await expect(ffImageVideoLinkDocumentBrowsingPage.browsingImageWithSrcCard.locator("img")).toBeVisible();
		expect(type).toBe("Image Video Thumbnail");
		expect(titles).toContain("Title");
		expect(titles).toContain("Type");
		expect(titles).toContain("Alt");
		expect(titles).toContain("Size");
	});

	test("Validate dialog when pressing the Video with src.", async ({ page }) => {
		page.on("dialog", async dialog => {
			expect(dialog.message()).toContain("Set video is called");
			await dialog.accept();
		});
		await ffImageVideoLinkDocumentBrowsingPage.videoWithSrcButton.click();
	});

	test("Validate Video with src information", async () => {
		await ffImageVideoLinkDocumentBrowsingPage.videoWithSrcButton.click();
		const type = await ffImageVideoLinkDocumentBrowsingPage.getSpecificInfoFromTable("Type");
		const titles = await ffImageVideoLinkDocumentBrowsingPage.getInformationTitlesFromTable();

		await expect(ffImageVideoLinkDocumentBrowsingPage.browsingVideoWithSrcCard.locator("img")).toBeVisible();
		expect(type).toBe("Video");
		expect(titles).toContain("Title");
		expect(titles).toContain("Type");
		expect(titles).toContain("Alt");
		expect(titles).toContain("Size");
	});

	test("Validate dialog when pressing the Document button.", async ({ page }) => {
		page.on("dialog", async dialog => {
			expect(dialog.message()).toContain("Set document is called");
			await dialog.accept();
		});
		await ffImageVideoLinkDocumentBrowsingPage.documentButton.click();
	});

	test("Validate Document card information.", async () => {
		await ffImageVideoLinkDocumentBrowsingPage.documentButton.click();
		const type = await ffImageVideoLinkDocumentBrowsingPage.getSpecificInfoFromTable("Type");
		const titles = await ffImageVideoLinkDocumentBrowsingPage.getInformationTitlesFromTable();

		await expect(ffImageVideoLinkDocumentBrowsingPage.documentButton.locator("img")).not.toBeVisible();
		expect(type).toBe("Document");
		expect(titles).toContain("Title");
		expect(titles).toContain("Type");
		expect(titles).toContain("Size");
		expect(titles).toContain("Size on disk");
	});

	test("Validate dialog when pressing the Link button.", async ({ page }) => {
		page.on("dialog", async dialog => {
			expect(dialog.message()).toContain("Set Link has been called");
			await dialog.accept();
		});
		await ffImageVideoLinkDocumentBrowsingPage.linkButton.click();
	});

	test("Validate Link card information", async () => {
		await ffImageVideoLinkDocumentBrowsingPage.linkButton.click();
		const type = await ffImageVideoLinkDocumentBrowsingPage.getSpecificInfoFromTable("Type");
		const titles = await ffImageVideoLinkDocumentBrowsingPage.getInformationTitlesFromTable();

		await expect(ffImageVideoLinkDocumentBrowsingPage.linkButton.locator("img")).not.toBeVisible();
		expect(type).toBe("Asset Library - Image");
		expect(titles).toContain("Title");
		expect(titles).toContain("Type");
		expect(titles).toContain("URL");
	});

	test("Validate Card without any browsing option.", async () => {
		await expect(ffImageVideoLinkDocumentBrowsingPage.browsingWithoutAnyOptionsCard).not.toContainText("Browse:");
		await expect(ffImageVideoLinkDocumentBrowsingPage.browsingWithoutAnyOptionsCard.locator("data-testid")).not.toBeVisible();
		await expect(ffImageVideoLinkDocumentBrowsingPage.browsingWithoutAnyOptionsCard).toContainText("No browsing options");
	});

	test("Validate disabled card option", async () => {
		await ffImageVideoLinkDocumentBrowsingPage.disabledButton.focus();
		expect(await ffImageVideoLinkDocumentBrowsingPage.disabledButton.getAttribute("disabled")).toBe("");
	});

	test("Validate More tooltip options in Card.", async () => {
		await ffImageVideoLinkDocumentBrowsingPage.imageWithSrcButton.click();
		await ffImageVideoLinkDocumentBrowsingPage.moreButton.hover();
		await expect(ffImageVideoLinkDocumentBrowsingPage.page.locator("[role='tooltip']")).toBeVisible();
		const titles = await ffImageVideoLinkDocumentBrowsingPage.getInformationTitlesFromTable();
		expect(titles).toContain("Focus");
		expect(titles).toContain("Locales");
	});

	test("Validate removing a selected card.", async () => {
		await ffImageVideoLinkDocumentBrowsingPage.imageWithSrcButton.click();
		await ffImageVideoLinkDocumentBrowsingPage.browsingImageWithSrcCard.locator("button", {hasText: "Remove"}).click();
		await expect(ffImageVideoLinkDocumentBrowsingPage.table).not.toBeVisible();
	});

	test("Validate the options in the three points button of a Card.", async () => {
		await ffImageVideoLinkDocumentBrowsingPage.imageWithSrcButton.click();
		const options = await ffImageVideoLinkDocumentBrowsingPage.getThreePointsOptionsText();
		expect(options).toContain("Edit");
		expect(options).toContain("Translate");
		await page.keyboard.press("Escape");
	});

	test("Validate that the empty value is saved correctly.", async () => {
		await ffImageVideoLinkDocumentBrowsingPage.imageWithSrcButton.click();
		await ffImageVideoLinkDocumentBrowsingPage.saveBtn.click();
		await ffImageVideoLinkDocumentBrowsingPage.browsingImageWithSrcCard.locator("button", { hasText: "Remove" }).click();
		await ffImageVideoLinkDocumentBrowsingPage.saveBtn.click();
		page.on("dialog", async dialog => {
			expect(dialog.message()).toContain("Form submitted with the following data: {}");
			await dialog.accept();
		});
	});
});
