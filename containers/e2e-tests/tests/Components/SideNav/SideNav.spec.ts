import type { Page } from "@playwright/test";
import { test, expect } from "@playwright/test";
import { SideNavPage } from "../../../pages/Components/SideNav/SideNavPage";
import theme from "@simpleview/sv-mosaic/theme";
import { commonKnobs as knob } from "../../../utils/data/knobs";

test.describe("Components - SideNav - Example", () => {
	let page: Page;
	let sideNavPage: SideNavPage;
	const expectsimplyGoldBorderColor = theme.newColors.simplyGold["100"];

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		sideNavPage = new SideNavPage(page);
		await sideNavPage.visit(sideNavPage.page_path);
	});

	test("Validate that the selected active link is the same as the one highlighted.", async () => {
		const selectedLocator = sideNavPage.sections.locator("a").first();
		expect(await sideNavPage.getSpecificBorderFromElement(selectedLocator, "left")).toContain(expectsimplyGoldBorderColor);
	});

	test("Validate that when selecting a section, the section is highlighted.", async () => {
		const selectedLocator = sideNavPage.sections.locator("a").last();
		await selectedLocator.click();
		expect(await sideNavPage.getSpecificBorderFromElement(selectedLocator, "left")).toContain(expectsimplyGoldBorderColor);
	});

	test("Validate Side Nav first section has almostBlack color.", async () => {
		const expectedColor = theme.newColors.almostBlack["100"];
		for (let i = 0; i < await sideNavPage.sections.count() - 1; i++) {
			for (let j = 0; j < await sideNavPage.sections.nth(i).count(); j++) {
				expect(await sideNavPage.getColorFromElement(sideNavPage.sections.nth(j).locator("span").nth(i))).toBe(expectedColor);
			}
		}
	});

	test("Validate selected section has grey2 as background color.", async () => {
		const expectedColor = theme.newColors.grey2["100"];
		const selectedLocator = sideNavPage.sections.locator("a").first();
		await selectedLocator.click();
		expect(await sideNavPage.getBackgroundColorFromElement(selectedLocator)).toBe(expectedColor);
	});

	test("Validate that the nav height can be modified", async () => {
		const firstExpectedHeight = "800";
		const secondExpectedHeight = "1000";
		await sideNavPage.visit(sideNavPage.page_path, [knob.knobParentHeight + firstExpectedHeight]);
		expect(await sideNavPage.getHeightFromElement(sideNavPage.navLocator)).toBe(firstExpectedHeight + "px");
		await sideNavPage.visit(sideNavPage.page_path, [knob.knobParentHeight + secondExpectedHeight]);
		expect(await sideNavPage.getHeightFromElement(sideNavPage.navLocator)).toBe(secondExpectedHeight + "px");
	});

	test("Validate that the selected section is medium", async () => {
		await sideNavPage.sections.locator("span").last().click();
		expect(await sideNavPage.getFontWeightFromElement(sideNavPage.sections.locator("span").last())).toBe((theme.weight.medium).toString());
	});
});
