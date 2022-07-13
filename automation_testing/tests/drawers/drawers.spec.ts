import { test, expect } from "@playwright/test";
import { Drawers } from "../../pages/Drawers/DrawersPage";

test.describe("Drawers", () => {
	let drawersPage: Drawers;

	test.beforeEach(async ({ page }) => {
		drawersPage = new Drawers(page);
		await drawersPage.visitPage();
	});

	test("Validate increment and reset button", async () => {
		const numberOfClicks = 5;
		await drawersPage.incrementButton.click({clickCount: numberOfClicks.valueOf()});
		expect(Number(await drawersPage.counterLabel.textContent())).toBe(numberOfClicks);
		await drawersPage.resetButton.click();
		expect(Number(await drawersPage.counterLabel.textContent())).toBe(0);
	});

	test("Validate elements in a new drawer", async () => {
		await drawersPage.openRegularDrawerButton.click();
		expect(await drawersPage.page.locator("#root button").count()).toBe(5);

		expect(await drawersPage.page.locator("#root button").nth(0).textContent()).toBe("Reset");
		expect(await drawersPage.page.locator("#root button").nth(1).textContent()).toBe("Increment");
		expect(await drawersPage.page.locator("#root button").nth(2).textContent()).toBe("Open Regular Drawer");
		expect(await drawersPage.page.locator("#root button").nth(3).textContent()).toBe("Open Form Drawer");
		expect(await drawersPage.page.locator("#root button").nth(4).textContent()).toBe("Go Back");
	});

	test("Validate form drawer", async () => {
		const numberOfIncrement = 5;
		await drawersPage.openFormDrawerButton.click();
		await drawersPage.simpleTextField.fill(numberOfIncrement.toString());
		await drawersPage.saveBtn.click();
		expect(Number(await drawersPage.counterLabel.textContent())).toBe(numberOfIncrement);
	});

	test("Validate form drawer carries the saved number", async () => {
		const numberOfIncrement = 5;
		await drawersPage.openFormDrawerButton.click();
		await drawersPage.openNewDrawerFromButton.click();
		const numberOfDrawers = await drawersPage.drawerDiv.count();
		await drawersPage.simpleTextField.nth(numberOfDrawers - 1).fill(numberOfIncrement.toString());
		await drawersPage.saveBtn.nth(numberOfDrawers - 1).click();
		expect(Number(await drawersPage.simpleTextField.nth(0).inputValue())).toBe(numberOfIncrement);
		await drawersPage.saveBtn.nth(0).click();
		expect(Number(await drawersPage.counterLabel.textContent())).toBe(numberOfIncrement);
	});

	test("Validate amount of regular drawers open", async () => {
		const numberOfDrawers = 3;
		await drawersPage.openSpecificAmountOfRegularDrawers(numberOfDrawers);		
		expect(await drawersPage.drawerDiv.count()).toBe(numberOfDrawers);
	});

	test("Validate go back button", async () => {
		const numberOfDrawers = 3;
		await drawersPage.openSpecificAmountOfRegularDrawers(numberOfDrawers);		
		await drawersPage.goBackSpecificAmountOfRegularDrawers(numberOfDrawers);
		const numberOfTitles = await drawersPage.page.locator("h1").count();
		expect(await drawersPage.page.locator("h1").nth(numberOfTitles - 1).textContent()).toBe(await drawersPage.mainGridTitle.textContent());
	});
	
	test("Validate when canceling a form, the value is not updated. ", async () => {
		await drawersPage.openFormDrawerButton.click();
		await drawersPage.simpleTextField.nth(0).fill("5");
		await drawersPage.openNewDrawerFromButton.click();
		const numberOfDrawers = await drawersPage.drawerDiv.count();
		await drawersPage.simpleTextField.nth(numberOfDrawers - 1).fill("3");
		await drawersPage.cancelBtn.nth(numberOfDrawers - 1).click();
		expect(Number(await drawersPage.simpleTextField.nth(0).inputValue())).toBe(5);
	});
});