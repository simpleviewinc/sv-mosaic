import { test, expect, Page } from "@playwright/test";
import { FormFieldImageVideoLinkDocumentBrowsingPage } from "../../../pages/FormFields/FormFieldImageVideoLinkDocumentBrowsing/FormFieldImageVideoLinkDocumentBrowsingPage";
import theme from "../../../../src/theme";

test.describe.parallel("FormFields - FormFieldImageVideoLinkDocumentBrowsing - Kitchen Sink", () => {
	let page: Page;
	let ffImageVideoLinkDocumentBrowsingPage: FormFieldImageVideoLinkDocumentBrowsingPage;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		ffImageVideoLinkDocumentBrowsingPage = new FormFieldImageVideoLinkDocumentBrowsingPage(page);
		await ffImageVideoLinkDocumentBrowsingPage.visit(ffImageVideoLinkDocumentBrowsingPage.page_path);
	});

	test.beforeEach(async() => {
		await ffImageVideoLinkDocumentBrowsingPage.removeAllVisibleCards();
	});

	test.afterAll(async ({ browser }) => {
		browser.close;
	});

	async function validateCardInformation(type: string, expectedType: string, titles: string[], expectedTitles: string[]) {
		expect(type).toBe(expectedType);
		expect(titles).toHaveLength(expectedTitles.length);
		for (let i = 0; i < titles.length; i++) {
			expect(titles[i]).toContain(expectedTitles[i]);
		}
	}

	test("Validate dialog when pressing the Image with src.", async () => {
		await ffImageVideoLinkDocumentBrowsingPage.browseAllImageWithSrcButton.click();
		await ffImageVideoLinkDocumentBrowsingPage.setDialogValidationListener("Set image is called");
	});

	test("Validate Image with src information", async () => {
		await ffImageVideoLinkDocumentBrowsingPage.browseAllImageWithSrcButton.click();
		const type = await ffImageVideoLinkDocumentBrowsingPage.getSpecificInfoFromTable("Type");
		const titles = await ffImageVideoLinkDocumentBrowsingPage.getInformationTitlesFromTable();
		const expectedTitles = ["Title", "Type", "Alt", "Size"];
		await expect(ffImageVideoLinkDocumentBrowsingPage.browseAllOptionsCardLocator.locator("img")).toBeVisible();
		await validateCardInformation(type, "Image Video Thumbnail", titles, expectedTitles);
	});

	test("Validate dialog when pressing the Video with src.", async () => {
		await ffImageVideoLinkDocumentBrowsingPage.browseAllVideoWithSrcButton.click();
		await ffImageVideoLinkDocumentBrowsingPage.setDialogValidationListener("Set video is called");
	});

	test("Validate Video with src information", async () => {
		await ffImageVideoLinkDocumentBrowsingPage.browseAllVideoWithSrcButton.click();
		const type = await ffImageVideoLinkDocumentBrowsingPage.getSpecificInfoFromTable("Type");
		const titles = await ffImageVideoLinkDocumentBrowsingPage.getInformationTitlesFromTable();
		const expectedTitles = ["Title", "Type", "Alt", "Size"];
		await expect(ffImageVideoLinkDocumentBrowsingPage.browseAllOptionsCardLocator.locator("img")).toBeVisible();
		await validateCardInformation(type, "Video", titles, expectedTitles);
	});

	test("Validate dialog when pressing the Document button.", async () => {
		await ffImageVideoLinkDocumentBrowsingPage.browseAllDocumentWithSrcButton.click();
		await ffImageVideoLinkDocumentBrowsingPage.setDialogValidationListener("Set document is called");
	});

	test("Validate Document card information.", async () => {
		await ffImageVideoLinkDocumentBrowsingPage.browseAllDocumentWithSrcButton.click();
		const type = await ffImageVideoLinkDocumentBrowsingPage.getSpecificInfoFromTable("Type");
		const titles = await ffImageVideoLinkDocumentBrowsingPage.getInformationTitlesFromTable();
		const expectedTitles = ["Title", "Type", "Size", "Size on disk"];
		await expect(ffImageVideoLinkDocumentBrowsingPage.browseAllOptionsCardLocator.locator("img")).not.toBeVisible();
		await validateCardInformation(type, "Document", titles, expectedTitles);
	});

	test("Validate dialog when pressing the Link button.", async () => {
		await ffImageVideoLinkDocumentBrowsingPage.browseAllLinkWithSrcButton.click();
		await ffImageVideoLinkDocumentBrowsingPage.setDialogValidationListener("Set Link has been called");
	});

	test("Validate Link card information", async () => {
		await ffImageVideoLinkDocumentBrowsingPage.browseAllLinkWithSrcButton.click();
		const type = await ffImageVideoLinkDocumentBrowsingPage.getSpecificInfoFromTable("Type");
		const titles = await ffImageVideoLinkDocumentBrowsingPage.getInformationTitlesFromTable();
		const expectedTitles = ["Title", "Type", "URL"];
		await expect(ffImageVideoLinkDocumentBrowsingPage.browseAllOptionsCardLocator.locator("img")).not.toBeVisible();
		await validateCardInformation(type, "Asset Library - Image", titles, expectedTitles);
	});

	test("Validate dialog when pressing the Image without src.", async () => {
		await ffImageVideoLinkDocumentBrowsingPage.imageWithoutSrcButton.click();
		await ffImageVideoLinkDocumentBrowsingPage.setDialogValidationListener("Set image is called");
	});

	test("Validate Image without src information", async () => {
		await ffImageVideoLinkDocumentBrowsingPage.imageWithoutSrcButton.click();
		const type = await ffImageVideoLinkDocumentBrowsingPage.getSpecificInfoFromTable("Type");
		const titles = await ffImageVideoLinkDocumentBrowsingPage.getInformationTitlesFromTable();
		const expectedTitles = ["Title", "Type", "Alt", "Size"];
		await expect(ffImageVideoLinkDocumentBrowsingPage.imageOrVideoWithoutSrcCardLocator.locator("img")).not.toBeVisible();
		await validateCardInformation(type, "Image Video Thumbnail", titles, expectedTitles);
	});

	test("Validate dialog when pressing the Video without src.", async () => {
		await ffImageVideoLinkDocumentBrowsingPage.videoWithoutSrcButton.click();
		await ffImageVideoLinkDocumentBrowsingPage.setDialogValidationListener("Set video is called");
	});

	test("Validate Video without src information", async () => {
		await ffImageVideoLinkDocumentBrowsingPage.videoWithoutSrcButton.click();
		const type = await ffImageVideoLinkDocumentBrowsingPage.getSpecificInfoFromTable("Type");
		const titles = await ffImageVideoLinkDocumentBrowsingPage.getInformationTitlesFromTable();
		const expectedTitles = ["Title", "Type", "Alt", "Size"];
		await expect(ffImageVideoLinkDocumentBrowsingPage.imageOrVideoWithoutSrcCardLocator.locator("img")).not.toBeVisible();
		await validateCardInformation(type, "Video", titles, expectedTitles);
	});

	test("Validate Card without any browsing option.", async () => {
		await expect(ffImageVideoLinkDocumentBrowsingPage.browsingWithoutAnyOptionsCard).not.toContainText("Browse:");
		await expect(ffImageVideoLinkDocumentBrowsingPage.browsingWithoutAnyOptionsCard.locator("data-testid")).not.toBeVisible();
		await expect(ffImageVideoLinkDocumentBrowsingPage.browsingWithoutAnyOptionsCard).toContainText("No browsing options");
		expect(await (ffImageVideoLinkDocumentBrowsingPage.browsingWithoutAnyOptionsCard).evaluate(el => getComputedStyle(el).alignItems)).toBe("center");
	});

	test("Validate More tooltip options in Card.", async () => {
		await ffImageVideoLinkDocumentBrowsingPage.browseAllImageWithSrcButton.click();
		await ffImageVideoLinkDocumentBrowsingPage.moreButton.click();
		await expect(ffImageVideoLinkDocumentBrowsingPage.page.locator("[role='tooltip']")).toBeVisible();
		const titles = await ffImageVideoLinkDocumentBrowsingPage.getInformationTitlesFromTable();
		expect(titles).toContain("Focus");
		expect(titles).toContain("Locales");
		await ffImageVideoLinkDocumentBrowsingPage.formHeading.click();
	});

	test("Validate removing a selected card.", async () => {
		await ffImageVideoLinkDocumentBrowsingPage.browseAllImageWithSrcButton.click();
		await ffImageVideoLinkDocumentBrowsingPage.browseAllOptionsCardLocator.locator("button", { hasText: "Remove" }).click();
		await expect(ffImageVideoLinkDocumentBrowsingPage.table).not.toBeVisible();
	});

	test("Validate the options in the three points button of a Card.", async () => {
		await ffImageVideoLinkDocumentBrowsingPage.browseAllImageWithSrcButton.click();
		const options = await ffImageVideoLinkDocumentBrowsingPage.getThreePointsOptionsText();
		expect(options).toContain("Edit");
		expect(options).toContain("Translate");
		await ffImageVideoLinkDocumentBrowsingPage.pressSpecificKeyInKeyboard("Escape");
	});

	test("Validate that the empty value is saved correctly.", async () => {
		await ffImageVideoLinkDocumentBrowsingPage.browseAllImageWithSrcButton.click();
		await ffImageVideoLinkDocumentBrowsingPage.saveBtn.click();
		await ffImageVideoLinkDocumentBrowsingPage.browseAllOptionsCardLocator.locator("button", { hasText: "Remove" }).click();
		await ffImageVideoLinkDocumentBrowsingPage.saveBtn.click();
		await ffImageVideoLinkDocumentBrowsingPage.setDialogValidationListener("Form submitted with the following data: {}");
	});

	test("Validate Background Color in Browse Image buttons", async () => {
		const expectBgColor = theme.newColors.realTeal["100"];
		const browseImageElement = ffImageVideoLinkDocumentBrowsingPage.page.locator(ffImageVideoLinkDocumentBrowsingPage.browseImageLocator);
		const numberOfButtons = await browseImageElement.count();
		for (let i = 0; i < numberOfButtons - 1; i++) {
			expect(await ffImageVideoLinkDocumentBrowsingPage.getBackgroundColorFromElement(browseImageElement.nth(i))).toBe(expectBgColor);
		}
	});

	test("Validate Background Color in Browse Video buttons", async () => {
		const expectBgColor = theme.newColors.realTeal["100"];
		const browseVideoElement = ffImageVideoLinkDocumentBrowsingPage.page.locator(ffImageVideoLinkDocumentBrowsingPage.browseVideoLocator);
		const numberOfButtons = await browseVideoElement.count();
		for (let i = 0; i < numberOfButtons - 1; i++) {
			expect(await ffImageVideoLinkDocumentBrowsingPage.getBackgroundColorFromElement(browseVideoElement.nth(i))).toBe(expectBgColor);
		}
	});

	test("Validate Background Color in Browse Document buttons", async () => {
		const expectBgColor = theme.newColors.realTeal["100"];
		const browseDocumentElement = ffImageVideoLinkDocumentBrowsingPage.page.locator(ffImageVideoLinkDocumentBrowsingPage.browseDocumentLocator);
		const numberOfButtons = await browseDocumentElement.count();
		for (let i = 0; i < numberOfButtons - 1; i++) {
			expect(await ffImageVideoLinkDocumentBrowsingPage.getBackgroundColorFromElement(browseDocumentElement.nth(i))).toBe(expectBgColor);
		}
	});

	test("Validate Background Color in Browse Link buttons", async () => {
		const expectBgColor = theme.newColors.realTeal["100"];
		const browseLinkElement = ffImageVideoLinkDocumentBrowsingPage.page.locator(ffImageVideoLinkDocumentBrowsingPage.browseLinkLocator);
		const numberOfButtons = await browseLinkElement.count();
		for (let i = 0; i < numberOfButtons - 1; i++) {
			expect(await ffImageVideoLinkDocumentBrowsingPage.getBackgroundColorFromElement(browseLinkElement.nth(i))).toBe(expectBgColor);
		}
	});
});
