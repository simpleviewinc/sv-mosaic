import { test, expect } from "@playwright/test";
import { DataviewPage } from "../../pages/DataViewPage";
import { AdvancedFiltersComponent } from "../../pages/AdvancedFiltersComponent";

test.describe("DataView - Advanced Filters", () => {
	let dataviewPage: DataviewPage;
	let advancedFilters: AdvancedFiltersComponent;
	

	test.beforeEach(async ({ page }) => {
		dataviewPage = new DataviewPage(page);
		advancedFilters = dataviewPage.advancedFilterComponent;

		await dataviewPage.visit();
	});

	test("Validate that all advanced filters have default value equal to Any", async() => {
		await advancedFilters.moreBtn.click();
		await advancedFilters.selectAllAdvancedFilters();
		const allSelectedFilters = await advancedFilters.getAllSelectedValuesForAdvancedFilters();
		console.log(allSelectedFilters);
		for(let i=0;i<allSelectedFilters.length; i++){
			expect(allSelectedFilters.toString()).toBe("Any");
		}
	});

    test("Validate Single select category", async() => { 
		await advancedFilters.moreBtn.click();
		await advancedFilters.singleSelectCategoryOption.click();
		//This clicks the title of the page so the More menu closes.
		await dataviewPage.title.click({force: true});
		await advancedFilters.optionalFilters.click();
		const categorySelected = (await advancedFilters.selectARandomCategoryForSingleSelectCategoryOption());
		expect((await advancedFilters.getSelectedValueForSingleSelectCategoryOption())).toBe(categorySelected);
		const allCategoriesOfRows = await dataviewPage.getCategoriesFromRow();
		for(let i=0;i<allCategoriesOfRows.length; i++){
			expect(allCategoriesOfRows.toString()).toContain(categorySelected);
		}
	});



});