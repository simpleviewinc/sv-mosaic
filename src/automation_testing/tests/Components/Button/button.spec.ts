import { test, expect, Page } from "@playwright/test";
import { ButtonPage } from "../../../pages/Components/Button/ButtonPage";

test.describe("Components - Button - Kitchen Sink", () => {
	let page: Page;
	let buttonPage: ButtonPage;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		buttonPage = new ButtonPage(page);
		await buttonPage.visitPage();
	});

	test.afterAll(async ({ browser }) => {
		await browser.close();
	});

	test("Validate that each button has the expected font weight", async () => {
		const expectedFontWeight = "700";
		const numberOfButtons = await buttonPage.button.count();
		for (let i = 0; i < numberOfButtons; i++) {
			const fontWeight = (await ((buttonPage.button.nth(i)).evaluate(el => getComputedStyle(el).fontWeight)));
			expect(fontWeight).toBe(expectedFontWeight);
		}
	});
});
