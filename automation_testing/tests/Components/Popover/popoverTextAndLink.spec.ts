import { test, expect, Page } from "@playwright/test";
import { PopoverPage } from "../../../pages/Components/Popover/PopoverTextAndLinksPage";
import theme from "../../../../src/theme";

test.describe("Components - PopoverPage - Text And Links", () => {
	let page: Page;
	let popoverPage: PopoverPage;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		popoverPage = new PopoverPage(page);
		await popoverPage.visit(popoverPage.page_path);
	});

	test("Validate Title has almostBlack color.", async () => {
		const expectColor = theme.newColors.almostBlack["100"];
		await popoverPage.openPopoverButton.click();
		expect(await popoverPage.getColorFromElement(popoverPage.clickableTitle)).toBe(expectColor);
		expect(await popoverPage.getColorFromElement(popoverPage.mail)).toBe(expectColor);
	});

	test("Validate label has grey4 as color.", async () => {
		const expectColor = theme.newColors.grey4["100"];
		await popoverPage.openPopoverButton.click();
		for (let i = 0; i < await popoverPage.labelLocator.count(); i++) {
			expect(await popoverPage.getColorFromElement(popoverPage.labelLocator.nth(i))).toBe(expectColor);
		}
	});

	test("Validate Subtitle has grey3 color.", async () => {
		const expectColor = theme.newColors.grey3["100"];
		await popoverPage.openPopoverButton.click();
		expect(await popoverPage.getColorFromElement(popoverPage.subtitleLocator)).toBe(expectColor);
		expect(await popoverPage.getColorFromElement(popoverPage.linkSubtitleLocator)).toBe(expectColor);
	});
});
