import type { Page } from "@playwright/test";
import { test, expect } from "@playwright/test";
import { FormFieldAdvancedSelectionPage } from "../../../pages/FormFields/FormFieldAdvancedSelectionPage/AdvancedSelectionKitchenSinkPage";
import theme from "@simpleview/sv-mosaic/theme";
import { DataViewFilterMultiselectComponent } from "../../../pages/Components/DataView/DataViewFilterMultiselect";

test.describe("FormFields - FormFieldAdvancedSelection - Kitchen Sink", () => {
	let page: Page;
	let ffAdvancedSelectionPage: FormFieldAdvancedSelectionPage;
	let multiSelect: DataViewFilterMultiselectComponent;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		ffAdvancedSelectionPage = new FormFieldAdvancedSelectionPage(page);
		multiSelect = new DataViewFilterMultiselectComponent(page);
		await ffAdvancedSelectionPage.visit(ffAdvancedSelectionPage.page_path);
	});

	test.beforeEach(async() => {
		await page.reload();
	});

	test("Validate all the Advanced Selection buttons have the valid text.", async () => {
		const numberOfButtons = await ffAdvancedSelectionPage.advancedSelectionButton.count();
		for (let i = 0; i < numberOfButtons; i++) {
			expect(await ffAdvancedSelectionPage.advancedSelectionButton.nth(i).textContent()).toBe("ADD");
		}
	});

	test("Validate options are disabled once the maximum amount of options is selected.", async () => {
		await ffAdvancedSelectionPage.advancedSelectionWithSelectLimitButton.click();
		const numberOfOptions = await ffAdvancedSelectionPage.checkboxTestIdLocator.count();
		await ffAdvancedSelectionPage.checkboxTestIdLocator.first().check();
		await ffAdvancedSelectionPage.checkboxTestIdLocator.last().check();
		for (let i = 0; i < numberOfOptions; i++) {
			await expect(ffAdvancedSelectionPage.checkboxTestIdLocator.nth(i)).toBeDisabled();
		}

		await ffAdvancedSelectionPage.deleteIconSelectedOptionChip.first().click();
		for (let i = 0; i < numberOfOptions; i++) {
			await expect(ffAdvancedSelectionPage.checkboxTestIdLocator.nth(i)).toBeEnabled();
		}
	});

	test("Validate chip option doesn't disappear when filtering for other options.", async () => {
		const expectedSelections = [];
		const actualChipText = [];
		await ffAdvancedSelectionPage.advancedSelectionWithOptionsPropButton.click();
		await ffAdvancedSelectionPage.checkboxTestIdLocator.first().check();
		expectedSelections.push(await ffAdvancedSelectionPage.checkboxLabel.first().textContent());
		await ffAdvancedSelectionPage.searchOptionInput.type("Cat");
		await ffAdvancedSelectionPage.wait();
		await ffAdvancedSelectionPage.checkboxTestIdLocator.first().check();
		expectedSelections.push(await ffAdvancedSelectionPage.checkboxLabel.first().textContent());
		await ffAdvancedSelectionPage.clearAllValuesFromField(ffAdvancedSelectionPage.searchOptionInput);

		for (let i = 0; i < await multiSelect.selectedChips.count(); i++) {
			actualChipText.push(await multiSelect.selectedChips.nth(i).textContent());
		}
		expect(actualChipText.toString()).toBe(expectedSelections.toString());
	});

	test("Validate all the Advanced Selection buttons have simplyGrey in the border.", async () => {
		const expectColor = theme.newColors.simplyGrey["100"];
		const numberOfButtons = await ffAdvancedSelectionPage.advancedSelectionButton.count();
		for (let i = 0; i < numberOfButtons; i++) {
			expect(await ffAdvancedSelectionPage.getSpecificBorderFromElement(ffAdvancedSelectionPage.advancedSelectionButton.nth(i))).toContain(expectColor);
		}
	});

	test("Validate that the valid sections are displayed in Advanced selection with options prop", async () => {
		await ffAdvancedSelectionPage.advancedSelectionWithOptionsPropButton.click();
		await ffAdvancedSelectionPage.validateMultiselectSectionsAreVisible();
	});

	test("Validate that the valid sections are displayed in Advanced selection with getOptions prop", async () => {
		await ffAdvancedSelectionPage.advancedSelectionWithGetOptionsPropButton.click();
		await ffAdvancedSelectionPage.validateMultiselectSectionsAreVisible();
	});

	test("Validate that the valid sections are displayed in Advanced selection with createNewOption prop", async () => {
		await ffAdvancedSelectionPage.advancedSelectionWithCreateNewOptionPropButton.click();
		await ffAdvancedSelectionPage.validateMultiselectSectionsAreVisible();
	});

	test("Validate that the valid sections are displayed in Advanced selection with selectLimit prop (Max 2 options)", async () => {
		await ffAdvancedSelectionPage.advancedSelectionWithSelectLimitButton.click();
		await ffAdvancedSelectionPage.validateMultiselectSectionsAreVisible();
	});
});
