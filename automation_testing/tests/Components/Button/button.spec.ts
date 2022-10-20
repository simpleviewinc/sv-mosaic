import { test, Page } from "@playwright/test";
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
			await buttonPage.validateFontWeightFromElement(buttonPage.button.nth(i), expectedFontWeight);
		}
	});

	test("Validate that the left margin of the buttons are valid.", async () => {
		const expectedMarginValue = "12px";
		const numberOfButtons = await buttonPage.leftIconButton.count();
		for (let i = 0; i < numberOfButtons; i++) {
			await buttonPage.validateMarginValueFromElement(buttonPage.leftIconButton.nth(i), expectedMarginValue, false);
		}
	});

	test("Validate that the right margin of the buttons are valid.", async () => {
		const expectedMarginValue = "12px";
		const numberOfButtons = await buttonPage.rightIconButton.count();
		for (let i = 0; i < numberOfButtons; i++) {
			await buttonPage.validateMarginValueFromElement(buttonPage.rightIconButton.nth(i), expectedMarginValue, true);
		}
	});
});
