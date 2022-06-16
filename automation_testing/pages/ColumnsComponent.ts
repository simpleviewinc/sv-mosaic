

import { Locator, Page } from "@playwright/test";

export class ColumnsComponent {
	readonly page: Page;
	readonly title: Locator;
	readonly columnsBtn: Locator;
	readonly rightItems: Locator;
	readonly leftItems: Locator;
	readonly applyBtn: Locator;
	readonly btnLocator: string;
	readonly checkboxLocator: string;

	constructor(page: Page) {
		this.page = page;
		this.title = page.locator("h1").nth(2);
		this.columnsBtn = page.locator(".size_small.variant_icon").nth(2);
		this.rightItems = page.locator(".right div.item");
		this.leftItems = page.locator(".listItem label");
		this.applyBtn = page.locator("text=Apply");
		this.btnLocator = ".buttons .iconButton.variant_icon button[type='button']";
		this.checkboxLocator = "[data-testid='checkbox-test-id'] input";
	}

	async getRightItemsText(): Promise<string[]> {
		const items = await this.rightItems.elementHandles();
		const resultItems = [];
		for (const item of items) {
			resultItems.push(await item.textContent());
		}
		return resultItems;
	}

	async getColumnsChecked(): Promise<string[]> {
		const items = await this.leftItems.elementHandles();
		const resultItems = [];
		for (const item of items) {
			if ((await (await item.$(this.checkboxLocator)).isChecked()) == true) {
				resultItems.push(await (await item.$("span:nth-child(2)")).textContent());
			}
		}
		return resultItems;
	}

	async getFirstRightItem(): Promise<Locator> {
		return this.rightItems.nth(0);
	}

	async getFirstDownArrow(): Promise<Locator> {
		return (await this.getFirstRightItem()).locator(this.btnLocator).nth(0);
	}

	async getFirstUpArrow(): Promise<Locator> {
		return (await this.getFirstRightItem()).locator(this.btnLocator).nth(1);
	}

	async getLastDownArrow(): Promise<Locator> {
		return (await this.getLastRightItem()).locator(this.btnLocator).nth(0);
	}

	async getLasttUpArrow(): Promise<Locator> {
		return (await this.getLastRightItem()).locator(this.btnLocator).nth(1);

	}

	async getLastRightItem(): Promise<Locator> {
		const itemsNumber = await this.rightItems.count();
		return this.rightItems.nth((itemsNumber - 1));

	}

	async getArrowsByItemName(itemName: string): Promise<Locator> {
		const itemsNumber = await this.rightItems.count();
		for (let i = 0; i < itemsNumber; i++) {
			const item = this.rightItems.nth(i);
			if (await item.textContent() == itemName) {
				return item.locator(this.btnLocator);
			}
		}
	}

	async getDownArrowByItemName(itemName: string): Promise<Locator> {
		const arrow = (await this.getArrowsByItemName(itemName)).nth(0);
		arrow.waitFor({ state: "visible" });
		return arrow;
	}

	async getUpArrowByItemName(itemName: string): Promise<Locator> {
		const arrow = (await this.getArrowsByItemName(itemName)).nth(1);
		arrow.waitFor({ state: "visible" });
		return arrow;
	}

	async getLeftItemByName(itemName: string): Promise<Locator> {
		const itemsNumber = await this.leftItems.count();
		for (let i = 0; i < itemsNumber; i++) {
			const item = this.leftItems.nth(i);
			if (await item.textContent() == itemName) {
				return item;

			}
		}
	}

	async checkLeftItem(item: Locator, check: boolean): Promise<void> {
		if (check) {
			await item.locator(this.checkboxLocator).check();
		} else {
			await item.locator(this.checkboxLocator).uncheck();
		}

	}

	async checkAllItems(check: boolean): Promise<void> {
		const items = await this.leftItems.elementHandles();
		for (const item of items) {
			if (check) {
				if ((await (await item.$(this.checkboxLocator)).isChecked()) == false) {
					await (await item.$(this.checkboxLocator)).check();
				}
			} else {
				if ((await (await item.$(this.checkboxLocator)).isChecked()) == true) {
					await (await item.$(this.checkboxLocator)).uncheck();
				}
			}
		}
	}
}