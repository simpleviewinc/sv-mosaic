import { test, expect, Page } from "@playwright/test";
import { SideNavPage } from "../../../pages/Components/SideNav/SideNavPage";

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

});
