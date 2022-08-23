import { Locator, Page } from "@playwright/test";
import { randomIntFromInterval } from "../../../utils/helpers/helper";
import { DatePickerComponent } from "./DatePickerComponent";
import { BasePage } from "../../BasePage";

export class AdvancedFiltersComponent extends BasePage {
	readonly page: Page;
	readonly datepicker: DatePickerComponent;
	//Locators
	readonly moreBtn: Locator;
	readonly checkboxOptions: Locator;
	readonly singleSelectCategoryOption: Locator;
	readonly categoryWithComparisonOption: Locator;
	readonly titleOption: Locator;
	readonly createdOption: Locator;
	readonly updatedOption: Locator;
	readonly titleWithComparisonOption: Locator;
	readonly optionalFilters: Locator;
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

	constructor(page: Page) {
		super(page);
		this.page = page;
		this.datepicker = new DatePickerComponent(page);
		this.moreBtn = page.locator("#root .filterRow button", { hasText: "More" });
		this.checkboxOptions = page.locator("div.listItem label");
		this.singleSelectCategoryOption = this.checkboxOptions.locator(":scope", { hasText: "Single Select Category" });
		this.categoryWithComparisonOption = this.checkboxOptions.locator(":scope", { hasText: "Categories with Comparisons" });
		this.titleOption = this.checkboxOptions.locator(":scope", { hasText: "Title" });
		this.createdOption = this.checkboxOptions.locator(":scope", { hasText: "Created" });
		this.updatedOption = this.checkboxOptions.locator(":scope", { hasText: "Updated" });
		this.titleWithComparisonOption = this.checkboxOptions.locator(":scope", { hasText: "Title with Comparisons" });
		this.optionalFilters = page.locator("div.optionalFilters");
		this.dropdownOptions = page.locator("ul[role='menu'] li");
		this.advancedFilterLocator = "button";
		this.checkboxLocator = "[data-testid='checkbox-test-id'] input";

		this.categoriesSearchBar = page.locator("div.searchBar");
		this.createdFilterDiv = page.locator(".MuiPaper-elevation");
		this.comparisonInOption = this.dropdownOptions.locator(":scope", { hasText: "In" }).nth(0);
		this.comparisonNotInOption = this.dropdownOptions.locator(":scope", { hasText: "Not In" }).nth(0);
		this.comparisonAllOption = this.dropdownOptions.locator(":scope", { hasText: "All" }).nth(0);
		this.comparisonExistsOption = this.dropdownOptions.locator(":scope", { hasText: "Exists" }).nth(0);
		this.comparisonNotExistsOption = this.dropdownOptions.locator(":scope", { hasText: "Not Exists" }).nth(0);

		this.comparisonDropdown = page.locator("div.comparisonDropdown button").nth(0);
		this.helpComparisonCategoriesDialogButton = page.locator("div.comparisonDropdown button").nth(1);
		this.helpComparisonCategoriesDialog = page.locator("[role='presentation'] p");
		this.keywordSearchComparisonCategories = page.locator("div.options input[type='text']");

		this.titleFilterSearch = page.locator("div.inputRow input");
		this.searchTitleComparisonDropdown = page.locator("div.inputRow button");
		this.searchTitleMenuDropdownItem = page.locator("ul[role='menu']");
		this.errorMessageDates = page.locator(".errorMessage h5");
	}

	async getNumberOfSingleSelectCategoryOptions(): Promise<number> {
		return await this.dropdownOptions.count();
	}

	async getNumberOfCategoryWithComparisonOptions(): Promise<number> {
		return await this.checkboxOptions.locator("li").count();
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
		const positionCategorySelected = await randomIntFromInterval(1, await this.getNumberOfSingleSelectCategoryOptions());
		const categorySelected = await this.getSpecificMenuItemForSingleSelectCategoryOption(positionCategorySelected);
		await this.dropdownOptions.nth(positionCategorySelected).click();
		return categorySelected;
	}

	async selectAllAdvancedFilters(): Promise<void> {
		const filters = await this.checkboxOptions.elementHandles();
		for (const filter of filters) {
			if ((await (await filter.$(this.checkboxLocator)).isChecked()) == false) {
				await (await filter.$(this.checkboxLocator)).check();
			}
		}
	}

	async getSelectedValueForSingleSelectCategoryOption(): Promise<string> {
		await this.waitForElementLoad();
		return (await this.optionalFilters.textContent()).split(":")[1];
	}

	async getAllSelectedValuesForAdvancedFilters(): Promise<string[]> {
		const filters = await this.optionalFilters.elementHandles();
		const result = [];
		for (const filter of filters) {
			result.push((await (await filter.$(this.advancedFilterLocator)).textContent()).split(":")[1]);
		}
		return result;
	}

	async selectFirstCategoriesForCategoryWithComparisonOption(): Promise<string> {
		const selectedCategory = this.checkboxOptions.nth(0).textContent();
		await this.checkboxOptions.nth(0).check();
		return selectedCategory;
	}

	async getAdvanceFilterTitles(): Promise<string[]> {
		const filters = await this.optionalFilters.elementHandles();
		const result = [];
		for (const filter of filters) {
			result.push((await (await filter.$(this.advancedFilterLocator)).textContent()).split(":")[0]);
		}
		return result;
	}

	async getFieldDate(type: string): Promise<Locator> {
		if (type == "from") {
			return this.createdFilterDiv.locator("input").nth(0);
		} else {
			return this.createdFilterDiv.locator("input").nth(1);
		}
	}

	async getHelpDialogFromCategoryWithComparisonOption(): Promise<string> {
		return await this.helpComparisonCategoriesDialog.textContent();
	}

	async keywordSearchForComparisonCategory(category: string): Promise<string> {
		await this.keywordSearchComparisonCategories.type(category);
		return await this.selectFirstCategoriesForCategoryWithComparisonOption();
	}

	async searchForTitleComparison(title: string): Promise<void> {
		await this.titleFilterSearch.type(title);
	}

	async selectTitleComparisonOptionFromDropdown(option: string): Promise<void> {
		await this.searchTitleComparisonDropdown.click();
		await this.dropdownOptions.locator(":scope", { hasText: option }).nth(0).click();
	}

	async selectDataViewFilterDates(startDate: string, endDate: string): Promise<void> {
		await this.optionalFilters.nth(0).locator("button").click();
		await this.waitForElementLoad();
		await (await this.getFieldDate("from")).click();
		await this.datepicker.selectDate(startDate);
		await this.datepicker.okBtn.click();
		await (await this.getFieldDate("To")).click();
		await this.datepicker.selectDate(endDate);
		await this.datepicker.okBtn.click();
		await super.wait();
	}

	async getCloseBtn(btn: Locator): Promise<Locator> {
		return btn.locator("svg").nth(0);
	}
}
