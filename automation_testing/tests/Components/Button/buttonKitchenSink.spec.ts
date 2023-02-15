import { test, expect, Page } from "@playwright/test";
import { ButtonPage } from "../../../pages/Components/Button/ButtonKitchenSinkPage";

test.describe.parallel("Components - Button - Kitchen Sink", () => {
	let page: Page;
	let buttonPage: ButtonPage;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		buttonPage = new ButtonPage(page);
		await buttonPage.visit(buttonPage.page_path);
	});

	test.afterAll(async ({ browser }) => {
		await browser.close();
	});

	test("Validate that each button has the expected font weight", async () => {
		const expectedFontWeight = "700";
		const numberOfButtons = await buttonPage.button.count();
		for (let i = 0; i < numberOfButtons; i++) {
			const buttonFontWeight = await buttonPage.getFontWeightFromElement(buttonPage.button.nth(i));
			expect(buttonFontWeight).toBe(expectedFontWeight);
		}
	});

	test("Validate that the left margin of the buttons are valid.", async () => {
		const expectedMarginValue = "12px";
		await buttonPage.validateMarginOfButton("left", expectedMarginValue);
	});

	test("Validate that the right margin of the buttons are valid.", async () => {
		const expectedMarginValue = "12px";
		await buttonPage.validateMarginOfButton("right", expectedMarginValue);
	});
});
