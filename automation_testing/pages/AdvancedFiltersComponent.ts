import { Locator, Page } from "@playwright/test";
import { CommonHelper } from "../utils/helpers/common_helper";

export class AdvancedFiltersComponent {
    readonly page: Page;
    readonly commonHelper: CommonHelper;

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

    constructor(page: Page) {
        this.page = page;
        this.commonHelper = new CommonHelper();
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
        this.applyComparisonCategoriesButton = page.locator("div.sc-jnlKLf button",{ hasText: "Apply" });
        this.cancelComparisonCategoriesButton = page.locator("div.sc-jnlKLf button",{ hasText: "Cancel" });
        this.clearComparisonCategoriesButton = page.locator("div.sc-jnlKLf button",{ hasText: "Clear" });
        this.comparisonDropdown = page.locator("div.comparisonDropdown button").nth(0);
        this.dropdownOption = page.locator("div ul[role='menu'] li");
        this.helpComparisonCategoriesDialogButton = page.locator("div.comparisonDropdown button").nth(1);
        this.helpComparisonCategoriesDialog = page.locator("div.sc-htoDjs p");
        this.keywordSearchComparisonCategories = page.locator("div.options input[type='text']");

        this.titleFilterSearch = page.locator("div.inputRow input");
        this.searchTitleComparisonDropdown = page.locator("div.inputRow button");
        this.searchTitleMenuDropdownItem = page.locator("ul[role='menu']");
        this.searchTitleComparisonApplyButton = page.locator("div.HjvLs.sc-jnlKLf button",{ hasText: "Apply" });
    }

    async getNumberOfSingleSelectCategoryOptions(): Promise<number>{
        return await this.menuOptions.locator("li").count();
    }

    async getNumberOfCategoryWithComparisonOptions(): Promise<number>{
        return await this.comparisonCategoriesOptions.locator("li").count();
    }

    async getSpecificMenuItemForSingleSelectCategoryOption(menuPosition:number): Promise<String> {
        return await this.menuOptions.locator("li").nth(menuPosition).textContent();
    }

    async getAllCategoriesForSingleSelectCategoryOption(): Promise<String[]> {
        const numberOfOptions = await this.getNumberOfSingleSelectCategoryOptions();
        const options = [];
        for (let i = 0; i < numberOfOptions; i++) {
            options.push(await this.getSpecificMenuItemForSingleSelectCategoryOption(i));
        }
        return options;
    }

    async selectARandomCategoryForSingleSelectCategoryOption(): Promise<String> {
        const positionCategorySelected = await this.commonHelper.randomIntFromInterval(1, await this.getNumberOfSingleSelectCategoryOptions());
        const categorySelected = await this.getSpecificMenuItemForSingleSelectCategoryOption(positionCategorySelected);
        await this.menuOptions.locator("li").nth(positionCategorySelected).click();
        return categorySelected;
    }

    async selectAllAdvancedFilters():Promise<void> {
        await this.singleSelectCategoryOption.click();
        await this.categoryWithComparisonOption.click();
        await this.titleOption.click();
        await this.createdOption.click();
        await this.updatedOption.click();
        await this.titleWithComparisonOption.click();
    }

    async getSelectedValueForSingleSelectCategoryOption(): Promise<string> {       
        return (await this.optionalFilters.textContent()).split(":")[1];;
    }

    async getAllSelectedValuesForAdvancedFilters(): Promise<string[]> {
        const filters = await this.optionalFilters.elementHandles();
        const result = [];
        for (const filter of filters){
            result.push((await (await filter.$(this.advancedFilterLocator)).textContent()).split(":")[1]);
        }
        return result;
    }

    async selectFirstCategoriesForCategoryWithComparisonOption(): Promise<String> {
        const selectedCategory = this.comparisonCategoriesOptions.nth(0).textContent();
        await this.comparisonCategoriesOptions.nth(0).check();
        return selectedCategory;
    }

    async selectComparisonOption(option: string):Promise<void>{
        await this.comparisonDropdown.click();
        switch (option){
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
                alert('Option does not exists.')
                break;
        };
    }

    async getHelpDialogFromCategoryWithComparisonOption():Promise<String> {
        return await this.helpComparisonCategoriesDialog.textContent();
    }

    async keywordSearchForComparisonCategory(category:string):Promise<String>{
        await this.keywordSearchComparisonCategories.type(category);
        return await this.selectFirstCategoriesForCategoryWithComparisonOption();
    }

    async searchForTitleComparison(title:string):Promise<void>{
        await this.titleFilterSearch.type(title);    
    }

    async selectTitleComparisonOptionFromDropdown(option:string):Promise<void>{
        await this.searchTitleComparisonDropdown.click();
        await this.searchTitleMenuDropdownItem.locator("li", {hasText: option}).nth(0).click();
    };
    
};
