import { test, expect, Page } from "@playwright/test";
import { ChipPage } from "../../../pages/Components/Chip/ChipPage";
import theme from "../../../../src/theme";

test.describe("Components - Chip - Kitchen Sink", () => {
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
		const expectedColor = (theme.newColors.simplyGold["100"]);
		const expectedDisabledBgColor = (theme.newColors.simplyGold["60"]);
		expect(await chipPage.getBackgroundColorFromElement(chipPage.chipTestIDLocator.nth(1))).toBe(expectedColor);
		expect(await chipPage.getBackgroundColorFromElement(chipPage.chipTestIDLocator.nth(3))).toBe(expectedDisabledBgColor);
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
		expect(await chipPage.getBackgroundColorFromElement(chipPage.chipTestIDLocator.nth(0))).toBe(expectedColor);
		expect(await chipPage.getBackgroundColorFromElement(chipPage.chipTestIDLocator.nth(2))).toBe(expectedColor);
	});
});
