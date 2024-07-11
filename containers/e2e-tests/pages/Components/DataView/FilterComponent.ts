import { BasePage } from "../../BasePage";
import { DataviewPage } from "../../Components/DataView/DataViewPage";
import { Page, Locator, expect } from "@playwright/test";

export class FilterComponent extends BasePage {

	readonly page: Page;
	readonly _dataviewPage: DataviewPage;

	readonly optionsLocator: Locator;
	readonly keywordFilterOption: Locator;
	readonly keywordBtn: Locator;
	readonly keywordInput: Locator;
	readonly categoryFilterOption: Locator;
	readonly categoryBtn: Locator;
	readonly categoryKeywordInput: Locator;
	readonly categoryItems: Locator;
	readonly selectedOptions: Locator;
	readonly loadMoreBtn: Locator;
	readonly moreCategoriesTooltip: Locator;
	readonly clearBtn: Locator;
	readonly filterCheckbox: Locator;
	readonly labelCheckbox: Locator;

	readonly singleSelectCategoryOption: Locator;
	readonly categoryWithComparisonOption: Locator;
	readonly titleOption: Locator;
	readonly createdOption: Locator;
	readonly updatedOption: Locator;
	readonly titleWithComparisonOption: Locator;
	readonly filtersRowLocator: Locator;

	constructor(page: Page) {
		super(page);
		this.page = page;
		this._dataviewPage = new DataviewPage(page);
		this.optionsLocator = page.locator(".options");
		this.labelCheckbox = this.optionsLocator.locator("[data-testid='label-test-id']");
		this.filterCheckbox = this.optionsLocator.locator(this.checkboxInputString);
		this.keywordFilterOption = this.labelCheckbox.locator(":scope", { hasText: "Keyword" });
		this.keywordBtn = this._dataviewPage.filterRowBtn.locator(":scope", { hasText: "Keyword" });
		this.keywordInput = page.locator(".inputRow input");
		this.categoryFilterOption = this.labelCheckbox.locator(":scope", { hasText: "Categories" });
		this.categoryBtn = this._dataviewPage.filterRowBtn.locator(":scope", { hasText: "Categories" }).first();
		this.categoryKeywordInput = page.locator(".searchBar input");

		this.singleSelectCategoryOption = this.labelCheckbox.locator(":scope", { hasText: "Single Select Category" });
		this.categoryWithComparisonOption = this.labelCheckbox.locator(":scope", { hasText: "Categories with Comparisons" });
		this.titleOption = this.labelCheckbox.locator(":scope", { hasText: "Title" });
		this.createdOption = this.labelCheckbox.locator(":scope", { hasText: "Created" });
		this.updatedOption = this.labelCheckbox.locator(":scope", { hasText: "Updated" });
		this.titleWithComparisonOption = this.labelCheckbox.locator(":scope", { hasText: "Title with Comparisons" });

		this.categoryItems = this.listItemLabelLocator;
		this.selectedOptions = page.locator(".chips div");
		this.loadMoreBtn = page.locator(".loadContainer button");
		this.moreCategoriesTooltip = page.locator("[data-testid='tooltip-test-id']");
		this.clearBtn = page.locator("div[role='presentation'] >> text=Clear");
		this.filtersRowLocator = page.locator("//*[@id='root']/div/div/div[1]/div/div[2]/div");
	}

	async validateKeywordFilterIsVisible(isVisible: boolean): Promise<void> {
		expect(await this.keywordInput.isVisible()).toBe(isVisible);
		expect(await this.applyBtn.isVisible()).toBe(isVisible);
		expect(await this.clearBtn.isVisible()).toBe(isVisible);
	}

	async getItemByName(itemName: string): Promise<Locator | undefined> {
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
			await item.locator(this.checkboxInputString).check();
		} else {
			await item.locator(this.checkboxInputString).uncheck();
		}
	}

	async getCategorySelectedOptionValues(): Promise<string[]> {
		const itemsNumber = await this.selectedOptions.count();
		const selectedOptions = [];
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
		await this.page.getByLabel(category).check();
	}

	async validateCategoryFilterIsVisible(isVisible: boolean): Promise<void> {
		expect(await this.categoryKeywordInput.isVisible()).toBe(isVisible);
		expect(await this.applyBtn.isVisible()).toBe(isVisible);
		expect(await this.clearBtn.isVisible()).toBe(isVisible);
		expect(await this.cancelBtn.isVisible()).toBe(isVisible);
	}

	async displayAllCategories(): Promise<void> {
		while (await this.loadMoreBtn.count() >= 1) {
			await this.loadMoreBtn.scrollIntoViewIfNeeded();
			await this.loadMoreBtn.click();
		}
	}

	async selectAllCategories(): Promise<void> {
		const itemsNumber = await this.categoryItems.count();
		for (let i = 0; i < itemsNumber; i++) {
			await this.checkItem(this.categoryItems.nth(i), true);
		}
	}

	async selectFilter(filter: "keyword" | "categories" | "categoriesWithComparisons" | "singleSelectCategory" | "created" | "title" | "titleWithComparisons" | "updated")
		: Promise<void> {
		await this._dataviewPage.waitForDataviewIsVisible();
		await this._dataviewPage.filtersBtn.click();
		switch (filter) {
		case "keyword":
			await this.keywordFilterOption.click();
			break;
		case "categories":
			await this.categoryFilterOption.first().click();
			break;
		case "singleSelectCategory":
			await this.singleSelectCategoryOption.click({ force: true });
			break;
		case "categoriesWithComparisons":
			await this.categoryWithComparisonOption.first().click();
			break;
		case "created":
			await this.createdOption.first().click();
			break;
		case "title":
			await this.titleOption.first().click();
			break;
		case "titleWithComparisons":
			await this.titleWithComparisonOption.first().click();
			break;
		case "updated":
			await this.updatedOption.first().click();
			break;
		}
		await this.applyBtn.click();
		await this.loading.waitFor({ state: "detached" });
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

	async selectAllFilters(): Promise<void> {
		await this._dataviewPage.filtersBtn.click();
		await this.wait();
		const numberOfFilters = await this.filterCheckbox.count();
		for (let i = 0; i < numberOfFilters; i++) {
			if (!await this.filterCheckbox.nth(i).isChecked()) {
				await this.filterCheckbox.nth(i).check();
			}
		}
		await this.applyBtn.click();
	}
}
