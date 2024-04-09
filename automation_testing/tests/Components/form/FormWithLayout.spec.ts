import { test, expect, Page } from "@playwright/test";
import { FormWithLayout } from "../../../pages/Components/Form/FormWithLayoutPage";
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

	test("Validate that each Section has a Title", async () => {
		const expectedNumberOfTitles = await formWithLayoutPage.getNumberOfSectionsFromSideNav();
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

	test("Validate that when a section is collapsed, can be opened.", async () => {
		test.skip();

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
		await formWithLayoutPage.saveBtn.click();
		await expect(formWithLayoutPage.errorMessage.first()).toBeVisible();
	});

	test("Validate that when a requiered element is not entered, all the sections with requiered fields are open.", async () => {
		test.skip();

		await page.setViewportSize({ width: 1399, height: 720 });
		await formWithLayoutPage.visit(formWithLayoutPage.page_path, [playgroundKnobs.knobCollapseSections + "true"]);
		await formWithLayoutPage.expandMoreIconLocator.first().click();
		await expect(formWithLayoutPage.toggleLocator).toBeVisible();
		await formWithLayoutPage.toggleLocator.click();
		await formWithLayoutPage.expandMoreIconLocator.first().click();
		await formWithLayoutPage.saveBtn.click();
		await expect(formWithLayoutPage.panelContentLocator.nth(0)).toBeVisible();
		await expect(formWithLayoutPage.panelContentLocator.nth(1)).toBeVisible();
		expect(await formWithLayoutPage.errorMessage.count()).toBe(4);
	});
});
