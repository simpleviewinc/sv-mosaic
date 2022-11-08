import { test, expect, Page } from "@playwright/test";
import { PopoverPage } from "../../../pages/Components/Popover/PopoverPage";
import theme from "../../../../src/theme";

test.describe("Components - PopoverPage - Example", () => {
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

	test("Validate Add button in popver has realTeal color.", async () => {
		const expectColor = (theme.newColors.realTeal["100"]);
		popoverPage.openPopoverButton.click();
		expect(await popoverPage.getColorFromElement(popoverPage.popoverAddButton)).toBe(expectColor);
	});
});
