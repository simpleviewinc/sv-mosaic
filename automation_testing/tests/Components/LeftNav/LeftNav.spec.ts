import { test, expect, Page } from "@playwright/test";
import { LeftNavPage } from "../../../pages/Components/leftNav/LeftNavPage";
import { leftnav_data } from "../../../utils/data/leftNavData";
import theme from "../../../../src/theme";

test.describe.parallel("Components - LeftNav - Example", () => {
	let page: Page;
	let leftNavPage: LeftNavPage;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		leftNavPage = new LeftNavPage(page);
		await leftNavPage.visit(leftNavPage.page_path);
	});

	test("Validate static element", async () => {
		const lastItem = await leftNavPage.getLastItem();
		expect(await lastItem.textContent()).toBe(leftnav_data.staticItem);
		expect(await lastItem.isVisible()).toBe(true);
	});

	test("Validate full view is active", async () => {
		await leftNavPage.selectTypeOfNavDisplay(leftnav_data.full);
		const numberOfItemsVisible = await leftNavPage.topMenuItems.count();
		expect(numberOfItemsVisible).toBe(18);
	});

	test("Validate icons only view is active", async () => {
		await leftNavPage.selectTypeOfNavDisplay(leftnav_data.iconsOnly);
		const numberOfItemsVisible = await leftNavPage.topMenuItems.count();
		expect(numberOfItemsVisible).toBe(5);
	});

	test("Validate hidden view is active", async () => {
		await leftNavPage.selectTypeOfNavDisplay(leftnav_data.hidden);
		const numberOfItemsVisible = await leftNavPage.topMenuItems.count();
		expect(numberOfItemsVisible).toBe(0);
	});

	test("Validate Title", async () => {
		await leftNavPage.selectTypeOfNavDisplay(leftnav_data.full);
		const item = await leftNavPage.getSpecificMenuItem("Map Publisher");
		const title = await item.textContent();
		await item.click();
		expect(await leftNavPage.title.textContent()).toBe(title);
	});

	test("Validate menus", async () => {
		const item = await leftNavPage.getSpecificMenuItem("Collection Types");
		const titleItem = await item.textContent();
		await item.click();
		const submenu = await leftNavPage.getSubmenu(titleItem);
		const submenuElement = await leftNavPage.getSubmenuElement(submenu);
		const title = await submenuElement.textContent();
		await submenuElement.click();
		await leftNavPage.wait();
		await leftNavPage.title.waitFor({ state: "visible" });
		expect(await leftNavPage.title.textContent()).toBe(title);
	});

	test("Validate menu double", async () => {
		const item = await leftNavPage.getSpecificMenuItem("Public Relations");
		const titleItem = await item.textContent();
		await item.click();
		const submenu = await leftNavPage.getSubmenu(titleItem);
		const submenuElement = await leftNavPage.getSubmenuElement(submenu);
		const subMenuTitle = await submenuElement.textContent();
		await submenuElement.click();
		const subSubmenu = await leftNavPage.getSubmenu(subMenuTitle);
		const subSubmenuElement = await leftNavPage.getSubmenuElement(subSubmenu);
		const title = await subSubmenuElement.textContent();
		await subSubmenuElement.click();
		await leftNavPage.wait();
		expect(await leftNavPage.title.textContent()).toBe(title);
	});

	test("Validate border top of Modules and Assets sections has grey4 as border color.", async () => {
		const expectedColor = theme.newColors.grey4["100"];
		expect(await leftNavPage.getSpecificBorderFromElement(leftNavPage.sectionsLocator.first(), "top")).toContain(expectedColor);
		expect(await leftNavPage.getSpecificBorderFromElement(leftNavPage.sectionsLocator.last(), "top")).toContain(expectedColor);
	});

	test("Validate border top of Bottom sections has grey3 as border color.", async () => {
		const expectedColor = theme.newColors.grey3["100"];
		expect(await leftNavPage.getSpecificBorderFromElement(leftNavPage.divBottomLocator, "top")).toContain(expectedColor);
	});

	test("Validate nav label has grey2 as color.", async () => {
		const expectedColor = theme.newColors.grey2["100"];
		for (let i = 0; i < await leftNavPage.leftNavLabelLocator.count();i++) {
			expect(await leftNavPage.getColorFromElement(leftNavPage.leftNavLabelLocator.nth(i))).toContain(expectedColor);
		}
	});
});
