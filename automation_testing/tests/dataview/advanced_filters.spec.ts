import { test, expect } from "@playwright/test";
import { DataviewPage } from "../../pages/DataViewPage";
import { AdvancedFiltersComponent } from "../../pages/AdvancedFiltersComponent";
import { dataview } from "../../utils/data/dataview_data";

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

    test("Validate Categories with Comparisons - In", async() => {
        await advancedFilters.moreBtn.click();
        await advancedFilters.categoryWithComparisonOption.click();
        await dataviewPage.title.click({force: true});
        await advancedFilters.optionalFilters.click();
        const selectedCategory = await advancedFilters.selectFirstCategoriesForCategoryWithComparisonOption();
        await advancedFilters.selectComparisonOption("In");
        await advancedFilters.applyComparisonCategoriesButton.click();
        const allCategoriesOfRows = await dataviewPage.getCategoriesFromRow();
        for(let i=0;i<allCategoriesOfRows.length; i++){
            expect(allCategoriesOfRows.toString()).toContain(selectedCategory);
        }
    });

    // Test fails because Not In is not working properly.
    test("Validate Categories with Comparisons - Not In", async() => {
        await advancedFilters.moreBtn.click();
        await advancedFilters.categoryWithComparisonOption.click();
        await dataviewPage.title.click({force: true});
        await advancedFilters.optionalFilters.click();
        const selectedCategory = await advancedFilters.selectFirstCategoriesForCategoryWithComparisonOption();
        console.log(selectedCategory);
        await advancedFilters.selectComparisonOption("Not In");
        await advancedFilters.applyComparisonCategoriesButton.click();
        const allCategoriesOfRows = await dataviewPage.getCategoriesFromRow();
        for(let i=0;i<allCategoriesOfRows.length; i++){
            expect(allCategoriesOfRows.toString()).not.toContain(selectedCategory);
        }
    });

    // Test fails because All is not working properly.
    test("Validate Categories with Comparisons - All", async() => {
        await advancedFilters.moreBtn.click();
        await advancedFilters.categoryWithComparisonOption.click();
        await dataviewPage.title.click({force: true});
        await advancedFilters.optionalFilters.click();
        const selectedCategory = await advancedFilters.selectFirstCategoriesForCategoryWithComparisonOption();
        await advancedFilters.selectComparisonOption("All");
        await advancedFilters.applyComparisonCategoriesButton.click();
        const allCategoriesOfRows = await dataviewPage.getCategoriesFromRow();
        for(let i=0;i<allCategoriesOfRows.length; i++){
            expect(allCategoriesOfRows.toString()).toBe(selectedCategory);
        }
    });

    test("Validate Categories with Comparisons - Exists", async() => {
        await advancedFilters.moreBtn.click();
        await advancedFilters.categoryWithComparisonOption.click();
        await dataviewPage.title.click({force: true});
        await advancedFilters.optionalFilters.click();
        await advancedFilters.selectComparisonOption("Exists");
        await advancedFilters.applyComparisonCategoriesButton.click();
        const allCategoriesOfRows = await dataviewPage.getCategoriesFromRow();
        for(let i=0;i<allCategoriesOfRows.length; i++){
            expect(allCategoriesOfRows.toString()).not.toBe("");
        }
    });

    test("Validate Categories with Comparisons - Not Exists", async() => {
        await advancedFilters.moreBtn.click();
        await advancedFilters.categoryWithComparisonOption.click();
        await dataviewPage.title.click({force: true});
        await advancedFilters.optionalFilters.click();
        await advancedFilters.selectComparisonOption("Not Exists");
        await advancedFilters.applyComparisonCategoriesButton.click();
        const allCategoriesOfRows = await dataviewPage.getCategoriesFromRow();
        for(let i=0;i<allCategoriesOfRows.length; i++){
            expect(allCategoriesOfRows.toString()).toContain("");
        }
    });

    test("Validate Categories with Comparisons - Help Dialog", async() => {
        await advancedFilters.moreBtn.click();
        await advancedFilters.categoryWithComparisonOption.click();
        await dataviewPage.title.click({force: true});
        await advancedFilters.optionalFilters.click();
        await advancedFilters.helpComparisonCategoriesDialogButton.click();
        const helpDialog = await advancedFilters.getHelpDialogFromCategoryWithComparisonOption();
        expect(helpDialog.toString()).toBe(dataview.categoryComparisonHelpDialog);
    });

    test("Validate Categories with Comparisons - Keyword search", async() => {
        await advancedFilters.moreBtn.click();
        await advancedFilters.categoryWithComparisonOption.click();
        await dataviewPage.title.click({force: true});
        await advancedFilters.optionalFilters.click();
        const searchedCategory = "Accessibility";
        const selectedCategory = await advancedFilters.keywordSearchForComparisonCategory(searchedCategory);
        await advancedFilters.selectComparisonOption("In");
        await advancedFilters.applyComparisonCategoriesButton.click();
        const allCategoriesOfRows = await dataviewPage.getCategoriesFromRow();
        for(let i=0;i<allCategoriesOfRows.length; i++){
            expect(allCategoriesOfRows.toString()).toContain(selectedCategory);
        }
    });

    test("Validate Title with Comparisons - Contains Title", async() => {
        await advancedFilters.moreBtn.click();
        await advancedFilters.titleWithComparisonOption.click();
        await dataviewPage.title.click({force: true});
        await advancedFilters.optionalFilters.click();
        const searchedTitle = "Ada";
        await advancedFilters.searchForTitleComparison(searchedTitle);
        await advancedFilters.selectTitleComparisonOptionFromDropdown("Contains");
        await advancedFilters.searchTitleComparisonApplyButton.click();
        const allTitlesOfRows = await dataviewPage.getRowTitles();
        for(let i=0;i<allTitlesOfRows.length; i++){
            expect(allTitlesOfRows.toString()).toContain(searchedTitle.toLowerCase());
        }
    });

	test("Validate Title with Comparisons - Not Contains Title", async() => {
        await advancedFilters.moreBtn.click();
        await advancedFilters.titleWithComparisonOption.click();
        await dataviewPage.title.click({force: true});
        await advancedFilters.optionalFilters.click();
        const searchedTitle = "Ada Village";
        await advancedFilters.searchForTitleComparison(searchedTitle);
        await advancedFilters.selectTitleComparisonOptionFromDropdown("Not Contains");
        await advancedFilters.searchTitleComparisonApplyButton.click();
        const allTitlesOfRows = await dataviewPage.getRowTitles();
        for(let i=0;i<allTitlesOfRows.length; i++){
            expect(allTitlesOfRows.toString()).not.toContain(searchedTitle.toLowerCase());
        }
    });

	test("Validate Title with Comparisons - Equal Title", async() => {
        await advancedFilters.moreBtn.click();
        await advancedFilters.titleWithComparisonOption.click();
        await dataviewPage.title.click({force: true});
        await advancedFilters.optionalFilters.click();
        const searchedTitle = "Ada Village";
        await advancedFilters.searchForTitleComparison(searchedTitle);
        await advancedFilters.selectTitleComparisonOptionFromDropdown("Equals");
        await advancedFilters.searchTitleComparisonApplyButton.click();
        const allTitlesOfRows = await dataviewPage.getRowTitles();
        for(let i=0;i<allTitlesOfRows.length; i++){
            expect(allTitlesOfRows.toString()).toContain(searchedTitle.toLowerCase());
        }
    });

	test("Validate Title with Comparisons - Not Equal Title", async() => {
        await advancedFilters.moreBtn.click();
        await advancedFilters.titleWithComparisonOption.click();
        await dataviewPage.title.click({force: true});
        await advancedFilters.optionalFilters.click();
        const searchedTitle = "Ada Village";
        await advancedFilters.searchForTitleComparison(searchedTitle);
        await advancedFilters.selectTitleComparisonOptionFromDropdown("Not Equal");
        await advancedFilters.searchTitleComparisonApplyButton.click();
        const allTitlesOfRows = await dataviewPage.getRowTitles();
        for(let i=0;i<allTitlesOfRows.length; i++){
            expect(allTitlesOfRows.toString()).not.toContain(searchedTitle.toLowerCase());
        }
    });

	test("Validate Title with Comparisons - Exists Title", async() => {
        await advancedFilters.moreBtn.click();
        await advancedFilters.titleWithComparisonOption.click();
        await dataviewPage.title.click({force: true});
        await advancedFilters.optionalFilters.click();
        await advancedFilters.selectTitleComparisonOptionFromDropdown("Exists");
        await advancedFilters.searchTitleComparisonApplyButton.click();
        const allTitlesOfRows = await dataviewPage.getRowTitles();
        for(let i=0;i<allTitlesOfRows.length; i++){
            expect(allTitlesOfRows.toString()).not.toBe("");
        }
    });

	// Test fails because Not Exists is not working properly.
	test("Validate Title with Comparisons - Not Exists Title", async() => {
		await advancedFilters.moreBtn.click();
        await advancedFilters.titleWithComparisonOption.click();
        await dataviewPage.title.click({force: true});
        await advancedFilters.optionalFilters.click();
        await advancedFilters.selectTitleComparisonOptionFromDropdown("Not Exists");
        await advancedFilters.searchTitleComparisonApplyButton.click();
        const allTitlesOfRows = await dataviewPage.getRowTitles();
        for(let i=0;i<allTitlesOfRows.length; i++){
            expect(allTitlesOfRows.toString()).toContainEqual("");
        }
    });

});
