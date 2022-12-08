import { test, expect, Page } from "@playwright/test";
import { SideNavPage } from "../../../pages/Components/SideNav/SideNavPage";
import theme from "../../../../src/theme";

test.describe.parallel("Components - SideNav", () => {
	let page: Page;
	let sideNavPage: SideNavPage;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		sideNavPage = new SideNavPage(page);
		await sideNavPage.visitPage();
	});

	test.afterAll(async ({ browser }) => {
		browser.close;
	});

	test("Validate Side Nav displays the Accounts link content by default.", async () => {
		expect(await sideNavPage.title.textContent()).toBe("Accounts");
	});

	test("Validate Side Nav first section has almostBlack color.", async () => {
		const expectColor = theme.newColors.almostBlack["100"];
		for (let i = 0; i < await sideNavPage.sections.count() - 1; i++) {
			for (let j = 0; j < await sideNavPage.sections.nth(i).count(); j++) {
				expect(await sideNavPage.getColorFromElement(sideNavPage.sections.nth(j).locator("span").nth(i))).toBe(expectColor);
			}
		}
	});
});
