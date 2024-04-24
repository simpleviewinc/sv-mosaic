import { test, expect, Page } from "@playwright/test";
import { TogglePage } from "../../../pages/Components/Toggle/TogglePage";
import theme from "../../../../src/theme";
import { commonKnobs } from "../../../utils/data/knobs";

test.describe.parallel("Components - Toggle - Example", () => {
	let page: Page;
	let togglePage: TogglePage;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		togglePage = new TogglePage(page);
		await togglePage.visit(togglePage.page_path);
	});

	test("Validate Toggle has simplyGold color.", async () => {
		const expectColor = (theme.newColors.simplyGold["100"]);
		await togglePage.toggleInput.click();
		expect(await togglePage.getColorFromElement(togglePage.toggleSpan)).toBe(expectColor);
	});

	test("Validate Toggle switch track has simplyGrey as background color.", async () => {
		await page.reload();
		const expectColor = theme.newColors.simplyGrey["100"];
		expect(await togglePage.getBackgroundColorFromElement(togglePage.toggleTrack)).toBe(expectColor);
	});

	test("Validate Toggle switch track has simplyGrey as background color when disabled.", async () => {
		const expectColor = theme.newColors.simplyGrey["100"];
		await togglePage.visit(togglePage.page_path, [commonKnobs.knobDisabled + "true"]);
		expect(await togglePage.getBackgroundColorFromElement(togglePage.toggleTrack)).toBe(expectColor);
	});
});
