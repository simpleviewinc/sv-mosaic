import { test, expect, Page } from "@playwright/test";
import { PlaygroundPage } from "../../../pages/Components/Form/PlaygroundPage";

test.describe.parallel("Components - Form - Playground", () => {
	let page: Page;
	let playgroundPage: PlaygroundPage;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		playgroundPage = new PlaygroundPage(page);
		await playgroundPage.visitPage();
	});

	test.afterAll(async ({ browser }) => {
		browser.close;
	});

	test("Validate error messages when saving with empty required fields", async () => {
		await playgroundPage.saveBtn.click();
		await playgroundPage.wait();
		const expectedNumberOfRequiredFields = await playgroundPage.getNumberOfFieldsRequired();
		for (let i = 0; i < expectedNumberOfRequiredFields; i++) {
			expect(await playgroundPage.errorMessage.nth(i).textContent()).toBe("This field is required, please fill it");
		}
	});

	//Skipping tests until better approach
	test.skip("Validate that you can save when completing all required fields", async () => {
		await page.reload();
		await playgroundPage.fillAllRequiredFields();
		await playgroundPage.wait()
		await playgroundPage.saveBtn.click();
		expect(await playgroundPage.errorMessage.count()).toBe(0);
	});

	test("Validate that Toggle field doesn't show error.", async () => {
		await page.reload();
		await playgroundPage.toggleField.click();
		await playgroundPage.toggleField.click();
		expect(await playgroundPage.errorMessage.count()).toBe(0);
	});

	test("Validate the font weight of the Title in Top Component.", async () => {
		const titleFontWeight = await playgroundPage.getFontWeightFromElement(playgroundPage.title);
		expect(titleFontWeight).toBe("250");
	});

	test("Validate the font weight of the Description in Top Component.", async () => {
		const descriptionFontWeight = await playgroundPage.getFontWeightFromElement(playgroundPage.description);
		expect(descriptionFontWeight).toBe("250");
	});
});
