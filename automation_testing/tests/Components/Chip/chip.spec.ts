import { test, expect, Page } from "@playwright/test";
import { ChipPage } from "../../../pages/Components/Chip/ChipPage";
import theme from "../../../../src/theme";

test.describe.parallel("Components - Chip - Kitchen Sink", () => {
	let page: Page;
	let chipPage: ChipPage;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		chipPage = new ChipPage(page);
		await chipPage.visit(chipPage.page_path);
	});

	test.afterAll(async ({ browser }) => {
		await browser.close();
	});

	test("Validate Chip has simplyGold background.", async () => {
		const expectedColor = theme.newColors.simplyGold["100"];
		const expectedDisabledBgColor = theme.newColors.simplyGold["60"];
		expect(await chipPage.getBackgroundColorFromElement(chipPage.basicChipWithOnClickSelected)).toBe(expectedColor);
		expect(await chipPage.getBackgroundColorFromElement(chipPage.basicChipWithoutOnClickSelected)).toBe(expectedColor);
		expect(await chipPage.getBackgroundColorFromElement(chipPage.disabledChipSelected)).toBe(expectedDisabledBgColor);
		expect(await chipPage.getBackgroundColorFromElement(chipPage.deletableChip)).toBe(expectedColor);
	});

	test("Validate Chip has almostBlack color as text.", async () => {
		const expectedColor = theme.newColors.almostBlack["100"];
		for (let i = 0; i < await chipPage.chipTestIDLocator.count(); i++) {
			expect(await chipPage.getColorFromElement(chipPage.chipTestIDLocator.nth(i))).toBe(expectedColor);
		}
		expect(await chipPage.getColorFromElement(chipPage.deletableChip)).toBe(expectedColor);
	});

	test("Validate Chip has grey2 background.", async () => {
		const expectedColor = theme.newColors.grey2["100"];
		expect(await chipPage.getBackgroundColorFromElement(chipPage.basicChipWithOnClickNotSelected)).toBe(expectedColor);
		expect(await chipPage.getBackgroundColorFromElement(chipPage.basicChipWithoutOnClickNotSelected)).toBe(expectedColor);
	});

	test("Validate type of Cursor for Chip", async () => {
		const expectedCursorWithOnClick = "pointer";
		const expectedCursorWithoutOnClick = "default";
		expect(await chipPage.getCursorFromElement(chipPage.basicChipWithOnClickNotSelected)).toBe(expectedCursorWithOnClick);
		expect(await chipPage.getCursorFromElement(chipPage.basicChipWithOnClickSelected)).toBe(expectedCursorWithOnClick);
		expect(await chipPage.getCursorFromElement(chipPage.basicChipWithoutOnClickNotSelected)).toBe(expectedCursorWithoutOnClick);
		expect(await chipPage.getCursorFromElement(chipPage.basicChipWithoutOnClickSelected)).toBe(expectedCursorWithoutOnClick);
	});
});
