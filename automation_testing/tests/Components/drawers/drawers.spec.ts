import { test, expect, Page } from "@playwright/test";
import { Drawers } from "../../../pages/Components/Drawers/DrawersPage";

test.describe.parallel("Components - Drawers - Example", () => {
	let page: Page;
	let drawersPage: Drawers;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		drawersPage = new Drawers(page);
		await drawersPage.visit(drawersPage.page_path);
	});

	// test.beforeEach(async() => {
	// 	await page.reload();
	// });

	test.afterAll(async ({ browser }) => {
		browser.close;
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
		await drawersPage.wait();
		await drawersPage.openNewFormButton.click({ force: true });
		expect(await drawersPage.drawerTitle.last().textContent()).toContain("Sub-Form");
	});

	test("Validate the cancel button in drawers.", async () => {
		const numberOfDrawers = 3;
		await drawersPage.openSpecificAmountOfNewDrawers(numberOfDrawers);
		await drawersPage.goBackSpecificAmountOfRegularDrawers(numberOfDrawers);
		await expect(drawersPage.formLocator).not.toBeVisible();
	});

	// test.fixme("Validate form drawer saves value to previous form drawer", async () => {
	// 	const numberOfIncrement = 5;
	// 	await drawersPage.openFormDrawerButton.click();
	// 	await drawersPage.simpleTextField.fill(numberOfIncrement.toString());
	// 	await drawersPage.saveBtn.click();
	// 	expect(Number(await drawersPage.counterLabel.textContent())).toBe(numberOfIncrement);
	// });

	// test.fixme("Validate when canceling a form, the value is not updated. ", async () => {
	// 	await drawersPage.openFormDrawerButton.click();
	// 	await drawersPage.simpleTextField.nth(0).fill("5");
	// 	await drawersPage.openNewDrawerFromButton.click();
	// 	const numberOfDrawers = await drawersPage.drawerDiv.count();
	// 	await drawersPage.simpleTextField.nth(numberOfDrawers - 1).fill("3");
	// 	await drawersPage.cancelBtn.nth(numberOfDrawers - 1).click();
	// 	expect(Number(await drawersPage.simpleTextField.nth(0).inputValue())).toBe(5);
	// });

	// test.fixme("Validate Open Drawers buttons order.", async () => {
	// 	await drawersPage.openFormDrawerButton.click();
	// 	expect(await drawersPage.page.locator("[type='DRAWER'] .normalButton button").nth(0).textContent()).toBe("Cancel");
	// 	expect(await drawersPage.page.locator("[type='DRAWER'] .normalButton button").nth(1).textContent()).toBe("Save");
	// });
});



function delay(time) {
	return new Promise(function (resolve) {
		setTimeout(resolve, time)
	})
}
