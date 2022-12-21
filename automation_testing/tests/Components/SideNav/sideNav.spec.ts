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

	test("Validate that the selected active link is the same as the one highlighted.", async () => {
		const expectBorderColor = theme.newColors.simplyGold["100"];
		const titleSectionSelected = await sideNavPage.title.textContent();
		const selectedLocator = await sideNavPage.getLocatorOfSelectedSection(titleSectionSelected);
		expect(await sideNavPage.getSpecificBorderFromElement(selectedLocator, "left")).toContain(expectBorderColor);
	});

	test("Validate that when selecting a section, the section is highlighted.", async () => {
		const sectionToSelect = "Accounts";
		const expectBorderColor = theme.newColors.simplyGold["100"];
		await sideNavPage.selectSpecificSection(sectionToSelect);
		const selectedLocator = await sideNavPage.getLocatorOfSelectedSection(sectionToSelect);
		expect(await sideNavPage.getSpecificBorderFromElement(selectedLocator, "left")).toContain(expectBorderColor);
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
