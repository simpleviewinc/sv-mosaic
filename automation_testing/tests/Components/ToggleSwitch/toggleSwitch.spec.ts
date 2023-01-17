import { test, expect, Page } from "@playwright/test";
import { ToggleSwitchPage } from "../../../pages/Components/ToggleSwitch/ToggleSwitchPage";
import theme from "../../../../src/theme";
import { knobs } from "../../../utils/data/knobs";

test.describe.parallel("Components - ToggleSwitch - Example", () => {
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

	test("Validate Toggle switch track has simplyGrey as background color.", async () => {
		await page.reload();
		const expectColor = theme.newColors.simplyGrey["100"];
		expect(await togglePage.getBackgroundColorFromElement(togglePage.toggleSwitchTrack)).toBe(expectColor);
	});

	test("Validate Toggle switch track has simplyGrey as background color when disabled.", async () => {
		const expectColor = theme.newColors.simplyGrey["100"];
		await togglePage.visitPage([knobs.knobDisabled + "true"]);
		expect(await togglePage.getBackgroundColorFromElement(togglePage.toggleSwitchTrack)).toBe(expectColor);
	});
});
