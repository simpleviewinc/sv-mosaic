import type { Page } from "@playwright/test";
import { expect, test } from "@playwright/test";
import { ButtonPage } from "../../../pages/Components/Button/ButtonKitchenSinkPage";

test.describe("Components - Button - Kitchen Sink", () => {
	let page: Page;
	let buttonPage: ButtonPage;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		buttonPage = new ButtonPage(page);
		await buttonPage.visit(buttonPage.page_path);
	});

	test("Should fail", async () => {
		expect(1).toBe(2);
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
