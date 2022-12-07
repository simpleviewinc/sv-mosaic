import { test, expect, Page } from "@playwright/test";
import { PopoverPage } from "../../../pages/Components/Popover/PopoverTextAndLinksPage";
import theme from "../../../../src/theme";

test.describe.parallel("Components - PopoverPage - Text And Links", () => {
	let page: Page;
	let popoverPage: PopoverPage;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		popoverPage = new PopoverPage(page);
		await popoverPage.visitPage();
	});

	test.afterAll(async ({ browser }) => {
		await browser.close();
	});

	test("Validate Title has almostBlack color.", async () => {
		const expectColor = theme.newColors.almostBlack["100"];
		await popoverPage.openPopoverButton.click();
		expect(await popoverPage.getColorFromElement(popoverPage.clickableTitle)).toBe(expectColor);
		expect(await popoverPage.getColorFromElement(popoverPage.mail)).toBe(expectColor);
	});
});
