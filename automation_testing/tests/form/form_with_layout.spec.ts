import { test, expect } from "@playwright/test";
import { FormWithLayout } from "../../pages/Form/FormWithLayoutPage";

test.describe("Form - Form With Layout", () => {
	let formWithLayoutPage: FormWithLayout;

	test.beforeEach(async ({ page }) => {
		formWithLayoutPage = new FormWithLayout(page);
		await formWithLayoutPage.visitPage();
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
		const allSectionTitles = await formWithLayoutPage.getSectionsTitlesFromTopComponent();
		//Scroll to last section
		const sectionToScroll = allSectionTitles[allSectionTitles.length - 1].toString();
		await formWithLayoutPage.scrollToSection(sectionToScroll);
		const selectedSectionInTopComponent = await formWithLayoutPage.getSelectedSectionFromTopComponent();
		expect(await formWithLayoutPage.validateSectionTopComponentElementIsSelected(selectedSectionInTopComponent)).toBe("(252, 183, 49)")
	});

});