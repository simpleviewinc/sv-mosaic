import type { Page } from "@playwright/test";
import { test, expect } from "@playwright/test";
import { ChipPage } from "../../../pages/Components/Chip/ChipPage";
import theme from "@simpleview/sv-mosaic/theme";

test.describe("Components - Chip - Kitchen Sink", () => {
	let page: Page;
	let chipPage: ChipPage;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		chipPage = new ChipPage(page);
		await chipPage.visit(chipPage.page_path);
	});

	test.skip("Validate type of Cursor for Chip", async () => {
		const expectedCursorWithOnClick = "pointer";
		const expectedCursorWithoutOnClick = "default";
		expect(await chipPage.getCursorFromElement(chipPage.basicChipWithOnClickNotSelected)).toBe(expectedCursorWithOnClick);
		expect(await chipPage.getCursorFromElement(chipPage.basicChipWithOnClickSelected)).toBe(expectedCursorWithOnClick);
		expect(await chipPage.getCursorFromElement(chipPage.basicChipWithoutOnClickNotSelected)).toBe(expectedCursorWithoutOnClick);
		expect(await chipPage.getCursorFromElement(chipPage.basicChipWithoutOnClickSelected)).toBe(expectedCursorWithoutOnClick);
	});
});
