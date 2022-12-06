import { test, expect, Page } from "@playwright/test";
import { FormWithLayout } from "../../../pages/Components/Form/FormWithLayoutPage";
import theme from "../../../../src/theme";

test.describe.parallel("Components - Form - Form With Layout", () => {
	let page: Page;
	let formWithLayoutPage: FormWithLayout;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		formWithLayoutPage = new FormWithLayout(page);
		await formWithLayoutPage.visitPage();
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
});
