import type { Page } from "@playwright/test";
import { test, expect } from "@playwright/test";
import { PopoverPage } from "../../../pages/Components/Popover/PopoverExamplePage";
import theme from "@simpleview/sv-mosaic/theme";;

test.describe("Components - PopoverPage - Example", () => {
	let page: Page;
	let popoverPage: PopoverPage;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		popoverPage = new PopoverPage(page);
		await popoverPage.visit(popoverPage.page_path);
	});

	test("Validate Add button in popover has realTeal color.", async () => {
		const expectedColor = (theme.newColors.realTeal["100"]);
		if (!await popoverPage.popoverTooltip.isVisible()) {
			await popoverPage.openPopoverButton.click();
		}
		expect(await popoverPage.getColorFromElement(popoverPage.popoverAddButton)).toBe(expectedColor);
	});

	test("Validate split in popover has grey2 in border.", async () => {
		const expectedColor = theme.newColors.grey2["100"];
		if (!await popoverPage.popoverTooltip.isVisible()) {
			await popoverPage.openPopoverButton.click();
		}
		expect(await popoverPage.getSpecificBorderFromElement(popoverPage.popoverContentSplit, "top")).toContain(expectedColor);
	});
});
