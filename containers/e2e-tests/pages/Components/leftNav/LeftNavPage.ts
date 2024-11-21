import type { Page, Locator } from "playwright-core";
import { BasePage } from "../../BasePage";
import { randomNumber } from "../../../utils/helpers/helper";
import { leftnav_data } from "../../../utils/data/leftNavData";

export class LeftNavPage extends BasePage {

	readonly page_path = "components-leftnav--playground";

	readonly page: Page;
	readonly title: Locator;
	readonly subtitle: Locator;
	readonly leftNavDiv: Locator;
	readonly allLeftItems: Locator;
	readonly topLeftItems: Locator;
	readonly navDisplayMenu: Locator;
	readonly menu: Locator;
	readonly topMenuItems: Locator;
	readonly sectionsLocator: Locator;
	readonly divBottomLocator: Locator;
	readonly leftNavLabelLocator: Locator;
	readonly openNavigationButton: Locator;

	constructor(page: Page) {
		super(page);
		this.page = page;
		this.title = page.locator(".content h1");
		this.subtitle = page.locator(".content h2");
		this.leftNavDiv = page.locator("div.left");
		this.allLeftItems = page.locator("a .left");
		this.topLeftItems = page.locator(".top a .left");
		this.navDisplayMenu = page.locator("h3[title='Nav Display'] >> xpath=..");
		this.menu = page.locator("span.menuButton");
		this.topMenuItems = page.locator(".top a");
		this.sectionsLocator = page.locator(".top div");
		this.divBottomLocator = page.locator("div.bottom");
		this.leftNavLabelLocator = page.locator(".left .navLabel");
		this.openNavigationButton = page.locator(".menuButton[title='Open Navigation']");
	}

	async getItemParent(item: Locator): Promise<Locator> {
		return item.locator("xpath=..");
	}

	async getLastItem(): Promise<Locator> {
		const items = this.allLeftItems;
		return items.nth(await items.count() - 1);
	}

	async getItemsCount(): Promise<number> {
		return await this.topLeftItems.count();
	}

	async getSubmenuElement(submenu: Locator): Promise<Locator> {
		const numberOfSubMenu = await submenu.locator("a").count();
		if (numberOfSubMenu > 0) {
			return submenu.locator("a").nth(numberOfSubMenu - 1);
		} else {
			return submenu.locator("a").nth(numberOfSubMenu);
		}
	}

	async getRandomItems(isArrowVisible: boolean): Promise<Locator> {
		const itemsCount = await this.getItemsCount();
		const items = [];
		for (let i = 0; i < itemsCount; i++) {
			const item = this.topLeftItems.nth(i);
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
		let item, itemText;
		while (isValidItem) {
			item = await this.getRandomItems(true);
			itemText = await item.textContent();
			if (isWithSubmenu) {
				if ((itemText == leftnav_data.publicRelations) || (itemText == leftnav_data.sitemap)) {
					isValidItem = false;
				}
			} else {
				if ((itemText != leftnav_data.publicRelations) || (itemText != leftnav_data.sitemap)) {
					isValidItem = false;
				}
			}
		}
		return item;
	}

	async selectTypeOfNavDisplay(type: string): Promise<void> {
		if (!await (await this.getLastItem()).isVisible()) {
			await this.openNavigationButton.click();
		}
		await (await this.getLastItem()).click();
		await this.page.locator("text=" + type).click();
	}

	async getSpecificMenuItem(menuTitle: string): Promise<Locator> {
		return this.page.locator(`a[title='${menuTitle}']`);
	}
}
