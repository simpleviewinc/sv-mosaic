import { test, expect } from "@playwright/test";
import { LeftNavPage } from "../../pages/leftNav/LeftNavPage";
import { leftnav_data } from "../../utils/data/left_nav_data";


test.describe("LeftNav", () => {
	let leftNavPage: LeftNavPage;

	test.beforeEach(async ({ page }) => {
		leftNavPage = new LeftNavPage(page);
		await leftNavPage.visitPage();
	});

	test("Validate left nav basic", async () => {
		await leftNavPage.validateSnapshot(await leftNavPage.leftNavDiv, "left_nav");
	});

	test("Validate static element", async () => {
		const lastItem = await leftNavPage.getLastItem();
		expect(await lastItem.textContent()).toBe(leftnav_data.staticItem);
		expect(await lastItem.isVisible()).toBe(true);
	});

	test("Validate static element menu", async () => {
		await (await leftNavPage.getLastItem()).click();
		await leftNavPage.validateSnapshot(await leftNavPage.navDisplayMenu, "nav_display_menu")
	});

	test("Validate full view is active", async () => {
		await (await leftNavPage.getLastItem()).click();
		const navDisplaySubmenu = await leftNavPage.getSubmenu(leftnav_data.staticItem);
		let fullItem = await leftNavPage.getSubmenuElement(navDisplaySubmenu, 1);
		expect(await fullItem.textContent()).toContain(leftnav_data.full);
		await fullItem.click();
		await leftNavPage.validateSnapshot(await leftNavPage.leftNavDiv, "left_nav");
		await (await leftNavPage.getLastItem()).click();
		fullItem = await leftNavPage.getSubmenuElement(navDisplaySubmenu, 1);
		expect(await fullItem.textContent()).toContain(leftnav_data.active);
	});

	test("Validate icons only view is active", async () => {
		await (await leftNavPage.getLastItem()).click();
		const navDisplaySubmenu = await leftNavPage.getSubmenu(leftnav_data.staticItem);
		let iconsOnlyItem = await leftNavPage.getSubmenuElement(navDisplaySubmenu, 2);
		expect(await iconsOnlyItem.textContent()).toContain(leftnav_data.iconsOnly);
		await iconsOnlyItem.click();
		await leftNavPage.validateSnapshot(await leftNavPage.leftNavDiv, "left_nav_icons_only");
		await (await leftNavPage.getLastItem()).click();
		iconsOnlyItem = await leftNavPage.getSubmenuElement(navDisplaySubmenu, 2);
		expect(await iconsOnlyItem.textContent()).toContain(leftnav_data.active);
	});

	test("Validate hidden view is active", async () => {
		await (await leftNavPage.getLastItem()).click();
		const navDisplaySubmenu = await leftNavPage.getSubmenu(leftnav_data.staticItem);
		let hiddenItem = await leftNavPage.getSubmenuElement(navDisplaySubmenu, 3);
		expect(await hiddenItem.textContent()).toContain(leftnav_data.hidden);
		await hiddenItem.click();
		expect(await leftNavPage.getItemsCount()).toBe(0);
		expect(await leftNavPage.leftNavDiv.isVisible()).toBe(false);
		await leftNavPage.menu.click();
		await leftNavPage.wait();
		await (await leftNavPage.getLastItem()).click();
		hiddenItem = await leftNavPage.getSubmenuElement(navDisplaySubmenu, 3);
		expect(await hiddenItem.textContent()).toContain(leftnav_data.active);
	});

	test("Validate Title", async () => {
		const item = await leftNavPage.getRandomItems(false);
		const title = await item.textContent();
		await item.click();
		expect(await leftNavPage.title.textContent()).toBe(title);
	});

	test("Validate menus", async () => {
		const item = await leftNavPage.getOptionWithSubmenu(false);
		const titleItem = await item.textContent();
		await item.click();
		const submenu = await leftNavPage.getSubmenu(titleItem);
		expect(await submenu.isVisible()).toBe(true);
		const submenuElement = await leftNavPage.getSubmenuElement(submenu, 1);
		const title = await submenuElement.textContent();
		await submenuElement.click();
		await leftNavPage.wait();
		expect(await leftNavPage.title.textContent()).toBe(title);
	});

	test("Validate menu double", async () => {
		const item = await leftNavPage.getOptionWithSubmenu(true);
		const titleItem = await item.textContent();
		console.log(await titleItem)
		await item.click();
		const submenu = await leftNavPage.getSubmenu(titleItem);
		const submenuElement = await leftNavPage.getSubmenuElement(submenu, 1);
		const subMenuTitle = await submenuElement.textContent();
		await submenuElement.click();
		const subSubmenu = await leftNavPage.getSubmenu(subMenuTitle);
		const subSubmenuElement = await leftNavPage.getSubmenuElement(subSubmenu, 1);
		const title = await subSubmenuElement.textContent();
		await subSubmenuElement.click();
		await leftNavPage.wait();
		expect(await leftNavPage.title.textContent()).toBe(title);
	});
});
