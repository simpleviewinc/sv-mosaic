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
	}

    async getNumberOfSingleSelectCategoryOptions(): Promise<number>{
        return await this.menuOptions.locator("li").count();
    }

    async getNumberOfCategoryWithComparisonOptions(): Promise<number>{
        return await this.comparisonCategoriesOptions.locator("li").count();
    }

    async getSpecificMenuItemForSingleSelectCategoryOption(menuPosition:number): Promise<String> {
		return this.menuOptions.locator("li").nth(menuPosition).textContent();
	}

    async getAllCategoriesForSingleSelectCategoryOption(): Promise<String[]> {
        const numberOfOptions = await this.getNumberOfSingleSelectCategoryOptions();
        const options = [];
        for (let i = 0; i < numberOfOptions; i++) {
			options.push(await this.getSpecificMenuItemForSingleSelectCategoryOption(i));
		}
		return options;
	}

    async getAllSelectedValuesForSingleSelectCategoryOption(): Promise<string[]> {
        const filters = await this.optionalFilters.elementHandles();
        const result = [];
        for (const filter of filters){
            result.push((await filter.textContent()).split(":")[1]);
        }
        return result;
	}

    async selectARandomCategoryForSingleSelectCategoryOption(): Promise<String> {
		const positionCategorySelected = await this.commonHelper.randomIntFromInterval(1, await this.getNumberOfSingleSelectCategoryOptions());
		const categorySelected = await this.getSpecificMenuItemForSingleSelectCategoryOption(positionCategorySelected);
		await this.menuOptions.locator("li").nth(positionCategorySelected).click();
        return categorySelected;
    }

    async selectAllAdvancedFilters():Promise<void> {
        const filters = await this.checkboxOptions.elementHandles();
		for (const filter of filters) {            
            if ((await (await filter.$(this.checkboxLocator)).isChecked()) == false) {
                await (await filter.$(this.checkboxLocator)).check();
            }
		}
    }

    async getAllSelectedValuesForAdvancedFilters(): Promise<string[]> {
        const filters = await this.optionalFilters.elementHandles();
        const result = [];
        for (const filter of filters){
            result.push((await (await filter.$(this.advancedFilterLocator)).textContent()).split(":")[1]);
        }
        return result;
	}

    async selectFIrstCategoriesForCategoryWithComparisonOption(): Promise<void> {
        await this.comparisonCategoriesOptions.nth(0).check();
	}



}