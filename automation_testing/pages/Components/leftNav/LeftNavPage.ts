import { Page, Locator } from "playwright-core";
import { BasePage } from "../../BasePage";
import { randomNumber } from "../../../utils/helpers/helper";
import { leftnav_data } from "../../../utils/data/left_nav_data";

export class LeftNavPage extends BasePage {

	readonly page_path = "components-leftnav--example";

	readonly page: Page;
	readonly title: Locator;
	readonly subtitle: Locator;
	readonly leftNavDiv: Locator;
	readonly leftItems: Locator;
	readonly navDisplayMenu: Locator;
	readonly menu: Locator;

	constructor(page: Page) {
		super(page);
		this.page = page;
		this.title = page.locator(".content h1");
		this.subtitle = page.locator(".content h2");
		this.leftNavDiv = page.locator("div.left");
		this.leftItems = page.locator("a .left");
		this.navDisplayMenu = page.locator("h3[title='Nav Display'] >> xpath=..");
		this.menu = page.locator("span.menuButton");
	}

	async visitPage(): Promise<void> {
		await this.visit(this.page_path, this.title);
	}

	async getItemParent(item: Locator): Promise<Locator> {
		return item.locator("xpath=..");
	}

	async getLastItem(): Promise<Locator> {
		const items = this.leftItems;
		return items.nth(await items.count() - 1);
	}

	async getItemsCount(): Promise<number> {
		return await this.leftItems.count();
	}

	async getSubmenuElement(submenu: Locator, num: number): Promise<Locator> {
		return submenu.locator("a").nth(num - 1);
	}

	async getRandomItems(isArrowVisible: boolean): Promise<Locator> {
		const itemsCount = await this.getItemsCount();
		const items = [];
		for (let i = 0; i < itemsCount; i++) {
			const item = this.leftItems.nth(i);
			const arrow = (await this.getItemParent(item)).locator(".right svg[data-testid='ChevronRightIcon']");
			if (isArrowVisible) {
				if (await arrow.isVisible()) {
					items.push(item);
				}
			} else {
				if (!await arrow.isVisible()) {
					items.push(item);
				}
			}
		}
		if (items.length > 0) {
			return items[randomNumber(items.length)];
		}
	}

	async getSubmenu(title: string): Promise<Locator> {
		return this.page.locator(`h3[title='${title}'] >> xpath=..`);
	}

	async getOptionWithSubmenu(isWithSubmenu: boolean): Promise<Locator> {
		await this.waitForElementLoad();
		let isValidItem = true;
		let item;
		while (isValidItem) {
			item = await this.getRandomItems(true);
			if (isWithSubmenu) {
				if ((await item.textContent() == leftnav_data.publicRelations) || (await item.textContent() == leftnav_data.sitemap) && (await item.textContent() != leftnav_data.staticItem)) {
					isValidItem = false;
				}
			} else {
				if ((await item.textContent() != leftnav_data.publicRelations) || (await item.textContent() != leftnav_data.sitemap) || (await item.textContent() != leftnav_data.staticItem)) {
					isValidItem = false;
				}
			}
		}
		return item;
	}
}
