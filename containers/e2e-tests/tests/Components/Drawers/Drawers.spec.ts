import type { Page } from "@playwright/test";
import { test, expect } from "@playwright/test";
import { Drawers } from "../../../pages/Components/Drawers/DrawersPage";

test.describe("Components - Drawers - Example", () => {
	let page: Page;
	let drawersPage: Drawers;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		drawersPage = new Drawers(page);
		await drawersPage.visit(drawersPage.page_path);
	});

	test.beforeEach(async() => {
		await page.reload();
	});

	test("Validate the amount of new drawers opened.", async () => {
		const numberOfDrawers = 4;
		await drawersPage.openSpecificAmountOfNewDrawers(numberOfDrawers);
		expect(await drawersPage.formLocator.count()).toBe(numberOfDrawers);
	});

	test("Validate elements in a new drawer", async () => {
		await drawersPage.addFormButton.click();
		expect(await drawersPage.drawerTitle.textContent()).toContain("New Form");
		await expect(drawersPage.cancelBtn).toBeVisible();
		await expect(drawersPage.saveBtn).toBeVisible();
		await expect(drawersPage.openNewFormButton).toBeVisible();
		await drawersPage.openNewFormButton.click();
		await drawersPage.wait();
		expect(await drawersPage.drawerTitle.last().textContent()).toContain("Sub-Form");
	});

	test("Validate the cancel button in drawers.", async () => {
		const numberOfDrawers = 3;
		await drawersPage.openSpecificAmountOfNewDrawers(numberOfDrawers);
		await drawersPage.goBackSpecificAmountOfRegularDrawers(numberOfDrawers);
		await expect(drawersPage.formLocator).not.toBeVisible();
	});

	test("Validate Open Drawers buttons order.", async () => {
		await drawersPage.addFormButton.click();
		expect(await drawersPage.page.locator("form .normalButton button").nth(0).textContent()).toBe("Cancel");
		expect(await drawersPage.page.locator("form .normalButton button").nth(1).textContent()).toBe("Save");
	});

	test("Validate the Drawer title style.", async () => {
		await drawersPage.addFormButton.click();
		await drawersPage.validateTitleStylingOfLocator(drawersPage.drawerTitle);
	});

	test("Validate tooltip for Open New Form is visible.", async () => {
		await drawersPage.addFormButton.click();
		await drawersPage.openNewFormButton.hover();
		expect(await drawersPage.tooltip.textContent()).toBe("Clicking opens form in a new drawer");
	});
});
