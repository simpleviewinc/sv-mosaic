

import { Locator, Page } from "@playwright/test";

export class ColumnsComponent {
	readonly page: Page;
	readonly title: Locator;
	readonly columnsBtn: Locator;
	readonly rightItems: Locator;
	readonly leftItems: Locator;
	readonly applyBtn: Locator;

	constructor(page: Page) {
		this.page = page;
		this.title = page.locator("h1").nth(2);
		this.columnsBtn = page.locator(".size_small.variant_icon").nth(2);
		this.rightItems = page.locator(".right div.item");
		this.leftItems = page.locator(".listItem label");
		this.applyBtn = page.locator("text=Apply");
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
			if ((await (await item.$("[data-testid='checkbox-test-id'] input")).isChecked()) == true) {
				resultItems.push(await (await item.$("span:nth-child(2)")).textContent());
			}
		}
		return resultItems;
	}

	async getFirstRightItem(): Promise<Locator> {
		return this.rightItems.nth(0);
	}

	async getFirstDownArrow(): Promise<Locator> {
		return (await this.getFirstRightItem()).locator(".buttons .iconButton.variant_icon button[type='button']").nth(0);
	}

	async getFirstUpArrow(): Promise<Locator> {
		return (await this.getFirstRightItem()).locator(".buttons .iconButton.variant_icon button[type='button']").nth(1);
	}

	async getLastDownArrow(): Promise<Locator> {
		return (await this.getLastRightItem()).locator(".buttons .iconButton.variant_icon button[type='button']").nth(0);
	}

	async getLasttUpArrow(): Promise<Locator> {
		return (await this.getLastRightItem()).locator(".buttons .iconButton.variant_icon button[type='button']").nth(1);

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
				return item.locator(".buttons .iconButton.variant_icon button[type='button']");
			}
		}
	}

	async getDownArrowByIemName(itemName: string): Promise<Locator> {
		const arrow = (await this.getArrowsByItemName(itemName)).nth(0);
		arrow.waitFor({ state: "visible" });
		return arrow;
	}

	async getUpArrowByIemName(itemName: string): Promise<Locator> {
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

	async checkLeftItem(item: Locator): Promise<void> {
		await item.locator("[data-testid='checkbox-test-id'] input").check();
	}

	async uncheckLeftItem(item: Locator): Promise<void> {
		await item.locator("[data-testid='checkbox-test-id'] input").uncheck();
	}

	async uncheckAllItems(): Promise<void> {
		const items = await this.leftItems.elementHandles();
		for (const item of items) {
			if ((await (await item.$("[data-testid='checkbox-test-id'] input")).isChecked()) == true) {
				await (await item.$("[data-testid='checkbox-test-id'] input")).uncheck();
			}
		}
	}

	async checkAllItems(): Promise<void> {
		const items = await this.leftItems.elementHandles();
		for (const item of items) {
			if ((await (await item.$("[data-testid='checkbox-test-id'] input")).isChecked()) == false) {
				await (await item.$("[data-testid='checkbox-test-id'] input")).check();
			}
		}
	}
}