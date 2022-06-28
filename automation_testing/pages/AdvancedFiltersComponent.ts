import { Locator, Page } from "@playwright/test";
import { randomIntFromInterval } from "../utils/helpers/helper";
import { DatePickerComponent } from "./DatePickerComponent";
import { Pages } from "./Pages";

export class AdvancedFiltersComponent extends Pages {
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
	readonly menuOptions: Locator;
	readonly checkboxLocator: string;
	readonly advancedFilterLocator: string;
	readonly categoriesSearchBar: Locator;
	readonly comparisonCategoriesOptions: Locator;
	readonly applyComparisonCategoriesButton: Locator;
	readonly cancelComparisonCategoriesButton: Locator;
	readonly clearComparisonCategoriesButton: Locator;
	readonly comparisonDropdown: Locator;
	readonly dropdownOption: Locator;
	readonly helpComparisonCategoriesDialogButton: Locator;
	readonly helpComparisonCategoriesDialog: Locator;
	readonly keywordSearchComparisonCategories: Locator;
	readonly titleFilterSearch: Locator;
	readonly searchTitleComparisonDropdown: Locator;
	readonly searchTitleMenuDropdownItem: Locator;
	readonly searchTitleComparisonApplyButton: Locator;
	readonly createdFilterDiv: Locator;
	readonly applyBtn: Locator;
	readonly errorMessageDates: Locator;

	constructor(page: Page) {
		super(page);
		this.page = page;
		this.datepicker = new DatePickerComponent(page);
		this.moreBtn = page.locator("#root .filterRow button").nth(2);
		this.checkboxOptions = page.locator("div.kFkbdN.sc-htoDjs input");
		this.singleSelectCategoryOption = page.locator("div.kFkbdN.sc-htoDjs input").nth(0);
		this.categoryWithComparisonOption = page.locator("div.kFkbdN.sc-htoDjs input").nth(1);
		this.titleOption = page.locator("div.kFkbdN.sc-htoDjs input").nth(2);
		this.createdOption = page.locator("div.kFkbdN.sc-htoDjs input").nth(3);
		this.updatedOption = page.locator("div.kFkbdN.sc-htoDjs input").nth(4);
		this.titleWithComparisonOption = page.locator("div.kFkbdN.sc-htoDjs input").nth(5);
		this.optionalFilters = page.locator("div.optionalFilters");
		this.menuOptions = page.locator("div.MuiMenu-paper ul[role='menu']");
		this.advancedFilterLocator = "button";
		this.checkboxLocator = "[data-testid='checkbox-test-id'] input";

		this.categoriesSearchBar = page.locator("div.searchBar");
		this.comparisonCategoriesOptions = page.locator("div.options input[type='checkbox']");
		this.createdFilterDiv = page.locator(".MuiPaper-elevation");
		this.applyBtn = page.locator("text=Apply");

		this.applyComparisonCategoriesButton = page.locator("div.sc-jnlKLf button", { hasText: "Apply" });
		this.cancelComparisonCategoriesButton = page.locator("div.sc-jnlKLf button", { hasText: "Cancel" });
		this.clearComparisonCategoriesButton = page.locator("div.sc-jnlKLf button", { hasText: "Clear" });
		this.comparisonDropdown = page.locator("div.comparisonDropdown button").nth(0);
		this.dropdownOption = page.locator("div ul[role='menu'] li");
		this.helpComparisonCategoriesDialogButton = page.locator("div.comparisonDropdown button").nth(1);
		this.helpComparisonCategoriesDialog = page.locator("div.sc-htoDjs p");
		this.keywordSearchComparisonCategories = page.locator("div.options input[type='text']");

		this.titleFilterSearch = page.locator("div.inputRow input");
		this.searchTitleComparisonDropdown = page.locator("div.inputRow button");
		this.searchTitleMenuDropdownItem = page.locator("ul[role='menu']");
		this.searchTitleComparisonApplyButton = page.locator("div.HjvLs.sc-jnlKLf button", { hasText: "Apply" });
		this.errorMessageDates = page.locator(".errorMessage h5");
	}

	async getNumberOfSingleSelectCategoryOptions(): Promise<number> {
		return await this.menuOptions.locator("li").count();
	}

	async getNumberOfCategoryWithComparisonOptions(): Promise<number> {
		return await this.comparisonCategoriesOptions.locator("li").count();
	}


	async getSpecificMenuItemForSingleSelectCategoryOption(menuPosition: number): Promise<string> {
		return this.menuOptions.locator("li").nth(menuPosition).textContent();
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
		await this.menuOptions.locator("li").nth(positionCategorySelected).click();
		return categorySelected;
	}

	/*async selectAllAdvancedFilters(): Promise<void> {
		await this.singleSelectCategoryOption.click();
		await this.categoryWithComparisonOption.click();
		await this.titleOption.click();
		await this.createdOption.click();
		await this.updatedOption.click();
		await this.titleWithComparisonOption.click();
	}*/

	async selectAllAdvancedFilters(): Promise<void> {
		const filters = await this.checkboxOptions.elementHandles();
		for (const filter of filters) {
			if ((await (await filter.$(this.checkboxLocator)).isChecked()) == false) {
				await (await filter.$(this.checkboxLocator)).check();
			}
		}
	}

	async getSelectedValueForSingleSelectCategoryOption(): Promise<string> {
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
		const selectedCategory = this.comparisonCategoriesOptions.nth(0).textContent();
		await this.comparisonCategoriesOptions.nth(0).check();
		return selectedCategory;
	}

	async selectComparisonOption(option: string): Promise<void> {
		await this.comparisonDropdown.click();
		switch (option) {
			case "In":
				await this.dropdownOption.nth(0).click();
				break;
			case "Not In":
				await this.dropdownOption.nth(1).click();
				break;
			case "All":
				await this.dropdownOption.nth(2).click();
				break;
			case "Exists":
				await this.dropdownOption.nth(3).click();
				break;
			case "Not Exists":
				await this.dropdownOption.nth(4).click();
				break;
			default:
				alert("Option does not exists.");
				break;
		}
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
		await this.searchTitleMenuDropdownItem.locator("li", { hasText: option }).nth(0).click();
	}
}
