import { test, expect, Page } from "@playwright/test";
import { ToggleSwitchPage } from "../../../pages/Components/ToggleSwitch/ToggleSwitchPage";
import theme from "../../../../src/theme";

test.describe("Components - ToggleSwitch - Example", () => {
	let page: Page;
	let togglePage: ToggleSwitchPage;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		togglePage = new ToggleSwitchPage(page);
		await togglePage.visitPage();
	});

	test.afterAll(async ({ browser }) => {
		await browser.close();
	});

	test("Validate Toggle has simplyGold color.", async () => {
		const expectColor = (theme.newColors.simplyGold["100"]);
		await togglePage.toggleInput.click();
		expect(await togglePage.getColorFromElement(togglePage.toggleSpan)).toBe(expectColor);
	});
});
