import { BasePage } from "../../BasePage";
import { DataviewPage } from "../../Components/DataView/DataViewPage";
import { Page, Locator, expect } from "@playwright/test";

export class FilterComponent extends BasePage {

	readonly page: Page;
	readonly _dataviewPage: DataviewPage;

	readonly keywordFilterOption: Locator;
	readonly keywordBtn: Locator;
	readonly keywordInput: Locator;
	readonly categoryFilterOption: Locator;
	readonly categoryBtn: Locator;
	readonly categoryKeywordInput: Locator;
	readonly categoryItems: Locator;
	readonly checkbox: string;
	readonly selectedOptions: Locator;
	readonly loadMoreBtn: Locator;
	readonly moreCategoriesTooltip: Locator;
	readonly clearBtn: Locator;

	constructor(page: Page) {
		super(page);
		this.page = page;
		this._dataviewPage = new DataviewPage(page);
		this.keywordFilterOption = this._dataviewPage.checkboxOptions.locator(":scope", { hasText: "Keyword" });
		this.keywordBtn = page.locator(".filterRow button", { hasText: "Keyword" });
		this.keywordInput = page.locator(".inputRow input");
		this.categoryFilterOption = this._dataviewPage.checkboxOptions.locator(":scope", { hasText: "Categories" });
		this.categoryBtn = page.locator(".filterRow button", { hasText: "Categories" }).first();
		this.categoryKeywordInput = page.locator(".searchBar input");
		this.categoryItems = page.locator(".listItem label");
		this.checkbox = "input[type='checkbox']";
		this.selectedOptions = page.locator(".chips div");
		this.loadMoreBtn = page.locator(".loadContainer [type='button']");
		this.moreCategoriesTooltip = page.locator("[data-testid='tooltip-test-id']");
		this.clearBtn = page.locator("div[role='presentation'] >> text=Clear");
	}

	async getKeywordText(): Promise<string> {
		return await this.getOnlyStringWithLetters(await this.keywordBtn.locator("span").innerText());
	}

	async validateKeywordFilterIsVisible(isVisible: boolean): Promise<void> {
		expect(await this.keywordInput.isVisible()).toBe(isVisible);
		expect(await this.applyBtn.isVisible()).toBe(isVisible);
		expect(await this.clearBtn.isVisible()).toBe(isVisible);
		expect(await this.cancelBtn.isVisible()).toBe(isVisible);
	}

	async getItemByName(itemName: string): Promise<Locator> {
		const itemsNumber = await this.categoryItems.count();
		for (let i = 0; i < itemsNumber; i++) {
			const item = this.categoryItems.nth(i).locator("span").nth(1);
			if (await item.textContent() == itemName) {
				return this.categoryItems.nth(i);
			}
		}
	}

	async checkItem(item: Locator, check: boolean): Promise<void> {
		if (check) {
			await item.locator(this.checkbox).check();
		} else {
			await item.locator(this.checkbox).uncheck();
		}
	}

	async getCategoriesKeywordText(): Promise<string> {
		return await this.getOnlyStringWithLetters(await this.categoryBtn.locator("span").nth(1).innerText());
	}

	async getCategorySelectedOptionValues(): Promise<string[]> {
		const itemsNumber = await this.selectedOptions.count();
		const selectedOptions = []
		for (let i = 0; i < itemsNumber; i++) {
			selectedOptions.push(await this.selectedOptions.nth(i).locator("span").nth(0).textContent());
		}
		return selectedOptions;
	}

	async removeSelectedOptionsByName(name: string): Promise<void> {
		const itemsNumber = await this.selectedOptions.count();
		for (let i = 0; i < itemsNumber; i++) {
			if (await this.selectedOptions.nth(i).locator("span").nth(0).textContent() == name) {
				await this.selectedOptions.nth(i).locator("svg").click();
			}
		}
	}

	async selectCategory(category: string): Promise<void> {
		await super.wait();
		const item1 = await this.getItemByName(category);
		await this.checkItem(item1, true);
	}

	async validateCategoryFilterIsVisible(isVisible: boolean): Promise<void> {
		expect(await this.categoryKeywordInput.isVisible()).toBe(isVisible);
		expect(await this.applyBtn.isVisible()).toBe(isVisible);
		expect(await this.clearBtn.isVisible()).toBe(isVisible);
		expect(await this.cancelBtn.isVisible()).toBe(isVisible);
	}

	async displayAllCategories(): Promise<void> {
		while (await this.loadMoreBtn.count() >= 1) {
			await this.loadMoreBtn.click();
		}
	}

	async selectAllCategories(): Promise<void> {
		const itemsNumber = await this.categoryItems.count();
		for (let i = 0; i < itemsNumber; i++) {
			await this.checkItem(this.categoryItems.nth(i), true);
		}
	}

	async selectFilter(filter: string): Promise<void> {
		await this._dataviewPage.waitForDataviewIsVisible();
		await this._dataviewPage.filtersBtn.click();
		switch (filter.toLocaleLowerCase()) {
		case "keyword":
			await this.keywordFilterOption.click();
			await this.applyBtn.click();
			break;
		case "categories":
			await this.categoryFilterOption.first().click();
			await this.applyBtn.click();
			break;
		default:
			alert("The Filter selected (" + filter + ") does not exist or is incorrect." )
			break;
		}
	}

	async searchForTerm(typeOfFilter: string, term: string): Promise<void> {
		switch (typeOfFilter.toLocaleLowerCase()) {
		case "keyword":
			await this.selectFilter("keyword");
			await this.keywordBtn.click();
			await this.keywordInput.fill(term);
			break;
		case "categories":
			await this.selectFilter("categories");
			await this.categoryBtn.click();
			await this.categoryKeywordInput.type(term);
			await this.selectCategory(term);
			break;
		default:
			alert("The Filter selected (" + typeOfFilter + ") does not exist or is incorrect." );
			break;
		}
		await this.applyBtn.click();
		await this.loading.waitFor({ state: "detached" });
	}
}
