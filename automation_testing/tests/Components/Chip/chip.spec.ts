import { test, expect, Page } from "@playwright/test";
import { ChipPage } from "../../../pages/Components/Chip/ChipPage";
import theme from "../../../../src/theme";

test.describe("Components - Chip - Kitchen Sink", () => {
	let page: Page;
	let chipPage: ChipPage;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		chipPage = new ChipPage(page);
		await chipPage.visitPage();
	});

	test.afterAll(async ({ browser }) => {
		await browser.close();
	});

	test("Validate Chip has simplyGold background.", async () => {
		const expectBgColor = (theme.newColors.simplyGold["100"]);
		const expectDisabledBgColor = (theme.newColors.simplyGold["60"]);
		expect(await chipPage.getBackgroundColorFromElement(chipPage.chip.nth(1))).toBe(expectBgColor);
		expect(await chipPage.getBackgroundColorFromElement(chipPage.chip.nth(3))).toBe(expectDisabledBgColor);
		expect(await chipPage.getBackgroundColorFromElement(chipPage.deletableChip)).toBe(expectBgColor);
	});

	test("Validate Chip has almostBlack color as text.", async () => {
		const expectColor = theme.newColors.almostBlack["100"];
		for (let i = 0; i < await chipPage.chip.count(); i++) {
			expect(await chipPage.getColorFromElement(chipPage.chip.nth(i))).toBe(expectColor);
		}
		expect(await chipPage.getColorFromElement(chipPage.deletableChip)).toBe(expectColor);
	});
});
