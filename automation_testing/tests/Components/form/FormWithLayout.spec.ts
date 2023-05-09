import { test, expect, Page } from "@playwright/test";
import { FormWithLayout } from "../../../pages/Components/Form/FormWithLayoutPage";
import theme from "../../../../src/theme";
import { playgroundKnobs } from "../../../utils/data/knobs";

test.describe.parallel("Components - Form - Form With Layout", () => {
	let page: Page;
	let formWithLayoutPage: FormWithLayout;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		formWithLayoutPage = new FormWithLayout(page);
		await formWithLayoutPage.visit(formWithLayoutPage.page_path);
		await page.setViewportSize({ width: 1199, height: 720 });
		await formWithLayoutPage.wait();
	});

	test.afterAll(async ({ browser }) => {
		browser.close;
	});

	test("Validate that each Section has a Title", async () => {
		const expectedNumberOfTitles = await formWithLayoutPage.getNumberOfSectionsFromTopComponent();
		const numberOfSections = await formWithLayoutPage.getNumberOfSections();
		expect(numberOfSections).toBe(expectedNumberOfTitles);
		expect(await formWithLayoutPage.getSectionsTitles()).not.toBe("");
	});

	test("Validate that each Section has a Description", async () => {
		expect(await formWithLayoutPage.getSectionsDescriptions()).not.toBe("");
	});

	test("Validate that each row in each section does not have more than 3 columns", async () => {
		const numberOfColumnsPerRow = await formWithLayoutPage.getNumberOfColumsInEachRowFromSections();
		for (let i = 0; i < numberOfColumnsPerRow.length; i++) {
			expect(numberOfColumnsPerRow[i]).toBeLessThanOrEqual(3);
		}
	});

	test("Validate that the correct Section is selected when scrolling", async () => {
		const expectColor = (theme.newColors.simplyGold["100"]).split("rgb")[1];
		const allSectionTitles = await formWithLayoutPage.getSectionsTitlesFromTopComponent();
		//Scroll to last section
		const sectionToScroll = allSectionTitles[allSectionTitles.length - 1].toString();
		await formWithLayoutPage.scrollToSection(sectionToScroll);
		await formWithLayoutPage.wait();
		const selectedSectionInTopComponent = await formWithLayoutPage.getSelectedSectionFromTopComponent();
		expect(await formWithLayoutPage.validateSectionTopComponentElementIsSelected(selectedSectionInTopComponent)).toBe(expectColor);
	});

	test("Validate Form Top Component padding depending the viewport.", async () => {
		await page.reload();
		const topComponentLocator = formWithLayoutPage.formTopComponent;
		// We start with the default viewport size.
		await topComponentLocator.waitFor();
		expect(await formWithLayoutPage.getSpecificPaddingFromElement(topComponentLocator, "top")).toBe("24px");
		expect(await formWithLayoutPage.getSpecificPaddingFromElement(topComponentLocator, "right")).toBe("24px");
		expect(await formWithLayoutPage.getSpecificPaddingFromElement(topComponentLocator, "bottom")).toBe("0px");
		expect(await formWithLayoutPage.getSpecificPaddingFromElement(topComponentLocator, "left")).toBe("24px");

		// We change the viewport to have a width higher than 1718px.
		await page.setViewportSize({ width: 1780, height: 720 });
		await formWithLayoutPage.wait();
		expect(await formWithLayoutPage.getSpecificPaddingFromElement(topComponentLocator, "top")).toBe("24px");
		expect(await formWithLayoutPage.getSpecificPaddingFromElement(topComponentLocator, "right")).toBe("24px");
		expect(await formWithLayoutPage.getSpecificPaddingFromElement(topComponentLocator, "bottom")).toBe("16px");
		expect(await formWithLayoutPage.getSpecificPaddingFromElement(topComponentLocator, "left")).toBe("24px");
	});

	test("Validate Form Layout padding is valid.", async () => {
		await formWithLayoutPage.formLayout.waitFor();
		expect(await formWithLayoutPage.getSpecificPaddingFromElement(formWithLayoutPage.formLayout)).toBe("24px");
	});

	test("Validate Top Component with section margin within description and section is valid.", async () => {
		await page.reload();
		await formWithLayoutPage.sections.waitFor();
		expect(await formWithLayoutPage.getSpecificMarginFromElement(formWithLayoutPage.sections, "top")).toBe("24px");
	});

	test("Validate that when a section is collapsed, can be opened.", async () => {
		await page.setViewportSize({ width: 1399, height: 720 });
		await formWithLayoutPage.visit(formWithLayoutPage.page_path, [playgroundKnobs.knobCollapseSections + "true"]);
		const panelCount = await formWithLayoutPage.panelContentLocator.count();
		for (let i = 0; i < panelCount; i++) {
			await expect(formWithLayoutPage.panelContentLocator.nth(i)).not.toBeVisible();
			await formWithLayoutPage.expandMoreIconLocator.nth(i).click();
			await expect(formWithLayoutPage.panelContentLocator.nth(i)).toBeVisible();
		}
	});

	test("Validate that when a requiered element is not entered, the form expands the section with the requiered field.", async () => {
		await page.setViewportSize({ width: 1399, height: 720 });
		await formWithLayoutPage.visit(formWithLayoutPage.page_path, [playgroundKnobs.knobCollapseSections + "true"]);
		await formWithLayoutPage.expandMoreIconLocator.first().click();
		await formWithLayoutPage.page.locator("input#text3").fill("Sample Text");
		await expect(formWithLayoutPage.panelContentLocator.nth(1)).not.toBeVisible();
		await formWithLayoutPage.saveBtn.click();
		await expect(formWithLayoutPage.panelContentLocator.nth(1)).toBeVisible();
		await expect(formWithLayoutPage.errorMessage.first()).toBeVisible();
	});
});
