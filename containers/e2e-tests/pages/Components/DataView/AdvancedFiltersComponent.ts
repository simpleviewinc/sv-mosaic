import type { Locator, Page } from "@playwright/test";
import { randomIntFromInterval } from "../../../utils/helpers/helper";
import { DatePickerComponent } from "./DatePickerComponent";
import { FilterComponent } from "../../Components/DataView/FilterComponent";
import { testIds } from "@simpleview/sv-mosaic";

export class AdvancedFiltersComponent extends FilterComponent {
	readonly page: Page;
	readonly datepicker: DatePickerComponent;
	//Locators
	readonly singleSelectCategoryBtn: Locator;
	readonly categoryWithComparisonBtn: Locator;
	readonly titleBtn: Locator;
	readonly createdBtn: Locator;
	readonly updatedBtn: Locator;
	readonly titleWithComparisonBtn: Locator;

	readonly dropdownOptions: Locator;
	readonly checkboxLocator: string;
	readonly advancedFilterLocator: string;
	readonly categoriesSearchBar: Locator;
	readonly comparisonInOption: Locator;
	readonly comparisonNotInOption: Locator;
	readonly comparisonAllOption: Locator;
	readonly comparisonExistsOption: Locator;
	readonly comparisonNotExistsOption: Locator;
	readonly comparisonDropdown: Locator;
	readonly helpComparisonCategoriesDialogButton: Locator;
	readonly helpComparisonCategoriesDialog: Locator;
	readonly keywordSearchComparisonCategories: Locator;
	readonly titleFilterSearch: Locator;
	readonly searchTitleComparisonDropdown: Locator;
	readonly searchTitleMenuDropdownItem: Locator;
	readonly createdFilterDiv: Locator;
	readonly errorMessageDates: Locator;

	readonly fromCalendarButton: Locator;
	readonly toCalendarButton: Locator;
	readonly fromCalendarInput: Locator;
	readonly toCalendarInput: Locator;

	constructor(page: Page) {
		super(page);
		this.page = page;
		this.datepicker = new DatePickerComponent(page);
		this.dropdownOptions = page.locator("ul[role='menu'] li");
		this.advancedFilterLocator = "button";
		this.checkboxLocator = `[data-testid='${testIds.CHECKBOX_WRAPPER}'] input`;

		this.singleSelectCategoryBtn = this._dataviewPage.filterRowBtn.locator(":scope", { hasText: "Single Select Category" }).first();
		this.categoryWithComparisonBtn = this._dataviewPage.filterRowBtn.locator(":scope", { hasText: "Categories with Comparisons" }).first();
		this.titleBtn = this._dataviewPage.filterRowBtn.locator(":scope", { hasText: "Title" }).first();
		this.titleWithComparisonBtn = this._dataviewPage.filterRowBtn.locator(":scope", { hasText: "Title with Comparisons" }).first();
		this.createdBtn = this._dataviewPage.filterRowBtn.locator(":scope", { hasText: "Created" }).first();
		this.updatedBtn = this._dataviewPage.filterRowBtn.locator(":scope", { hasText: "Updated" }).first();

		this.categoriesSearchBar = page.locator("div.searchBar");
		this.createdFilterDiv = page.locator(".MuiPaper-elevation");
		this.comparisonInOption = this.dropdownOptions.locator(":scope", { hasText: "In" }).nth(0);
		this.comparisonNotInOption = this.dropdownOptions.locator(":scope", { hasText: "Not In" }).nth(0);
		this.comparisonAllOption = this.dropdownOptions.locator(":scope", { hasText: "All" }).nth(0);
		this.comparisonExistsOption = this.dropdownOptions.locator(":scope", { hasText: "Exists" }).nth(0);
		this.comparisonNotExistsOption = this.dropdownOptions.locator(":scope", { hasText: "Not Exists" }).nth(0);

		this.comparisonDropdown = page.getByRole("button", { name: "Comparison Selector" });
		this.helpComparisonCategoriesDialogButton = page.getByRole("button", { name: "Comparison Help" });
		this.helpComparisonCategoriesDialog = page.getByTestId(testIds.COMPARISON_HELP);
		this.keywordSearchComparisonCategories = page.locator("div.options input[type='text']");

		this.titleFilterSearch = page.locator("div.inputRow input");
		this.searchTitleComparisonDropdown = page.locator("div.inputRow button");
		this.searchTitleMenuDropdownItem = page.locator("ul[role='menu']");
		this.errorMessageDates = page.locator("#rangeStart p");

		this.fromCalendarButton = page.locator("[data-testid='date-picker-test-id'] button").nth(0);
		this.fromCalendarInput = page.locator("input[type='tel']").nth(0);
		this.toCalendarButton = page.locator("[data-testid='date-picker-test-id'] button").nth(1);
		this.toCalendarInput = page.locator("input[type='tel']").nth(1);
	}

	async getNumberOfSingleSelectCategoryOptions(): Promise<number> {
		return await this.dropdownOptions.count();
	}

	async getNumberOfCategoryWithComparisonOptions(): Promise<number> {
		return await this._dataviewPage.checkboxRow.locator("li").count();
	}

	async getSpecificMenuItemForSingleSelectCategoryOption(menuPosition: number): Promise<string> {
		return this.dropdownOptions.nth(menuPosition).textContent();
	}

	async getAllCategoriesForSingleSelectCategoryOption(): Promise<string[]> {
		const numberOfOptions = await this.getNumberOfSingleSelectCategoryOptions();
		const options = [];
		for (let i = 0; i < numberOfOptions; i++) {
			options.push(await this.getSpecificMenuItemForSingleSelectCategoryOption(i));
		}
		return options;
	}

	async selectARandomCategoryForSingleSelectCategoryOption(): Promise<string> {
		const positionCategorySelected = randomIntFromInterval(1, await this.getNumberOfSingleSelectCategoryOptions() - 1);
		const categorySelected = await this.getSpecificMenuItemForSingleSelectCategoryOption(positionCategorySelected);
		await this.dropdownOptions.nth(positionCategorySelected).click();
		return categorySelected;
	}

	async getSelectedValueForSingleSelectCategoryOption(): Promise<string> {
		await this.waitForElementLoad();
		return (await this.singleSelectCategoryBtn.textContent()).split(":")[1];
	}

	async getAllSelectedValuesForAdvancedFilters(): Promise<string[]> {
		const filters = await this._dataviewPage.filterRowBtn.count() - 1;
		const result = [];
		for (let i = 1; i < filters; i++) {
			result.push(await this._dataviewPage.getFilterText(this._dataviewPage.filterRowBtn.nth(i)));
		}
		return result;
	}

	async selectFirstCategoriesForCategoryWithComparisonOption(): Promise<string> {
		const selectedCategory = await this.labelCheckbox.first().textContent();
		await this.filterCheckbox.first().click();
		return selectedCategory;
	}

	async keywordSearchForComparisonCategory(category: string): Promise<string> {
		await this.keywordSearchComparisonCategories.fill(category);
		await this.wait();
		return await this.selectFirstCategoriesForCategoryWithComparisonOption();
	}

	async searchForTitleComparison(title: string): Promise<void> {
		await this.titleFilterSearch.type(title);
	}

	async selectTitleComparisonOptionFromDropdown(option: string): Promise<void> {
		await this.searchTitleComparisonDropdown.click();
		await this.dropdownOptions.locator(":scope", { hasText: option }).nth(0).click();
	}

	async selectFilterDates(startDate: string, endDate: string): Promise<void> {
		await this.waitForElementLoad();
		await this.fromCalendarButton.click();
		await this.datepicker.selectDate(startDate);
		await this.datepicker.datepickerDiv.waitFor({ state: "detached" });
		await this.toCalendarButton.click();
		await this.datepicker.selectDate(endDate);
	}
}
