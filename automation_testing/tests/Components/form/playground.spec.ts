import { test, expect } from "@playwright/test";
import { PlaygroundPage } from "../../../pages/Components/Form/PlaygroundPage";

test.describe("Form - Playground", () => {
	let playgroundPage: PlaygroundPage;

	test.beforeEach(async ({ page }) => {
		playgroundPage = new PlaygroundPage(page);
		await playgroundPage.visitPage();
	});

	test("Validate error messages when saving with empty required fields", async () => {
		await playgroundPage.saveBtn.click();
		await playgroundPage.wait()
		const expectedNumberOfRequiredFields = await playgroundPage.getNumberOfFieldsRequired();
		expect(expectedNumberOfRequiredFields).toBe(await playgroundPage.errorMessage.count());
		for (let i = 0; i < expectedNumberOfRequiredFields; i++) {
			expect(await playgroundPage.errorMessage.nth(i).textContent()).toBe("This field is required, please fill it");
		}
	});

	test("Validate that you can save when completing all required fields", async () => {
		await playgroundPage.fillAllRequiredFields();
		await playgroundPage.wait()
		await playgroundPage.saveBtn.click();
		expect(await playgroundPage.errorMessage.count()).toBe(0);
	});
});
