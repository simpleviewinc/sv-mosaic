import type { Page } from "@playwright/test";
import { test, expect } from "@playwright/test";
import { FormFieldAdvancedSelectionPage } from "../../../pages/FormFields/FormFieldAdvancedSelectionPage/AdvancedSelectionPlaygroundPage";
import theme from "@root/theme";
import { commonKnobs as knob } from "../../../utils/data/knobs";

test.describe("FormFields - FormFieldAdvancedSelection - Playground", () => {
	let page: Page;
	let ffAdvancedSelectionPage: FormFieldAdvancedSelectionPage;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		ffAdvancedSelectionPage = new FormFieldAdvancedSelectionPage(page);
	});

	test.beforeEach(async() => {
		await ffAdvancedSelectionPage.visit(ffAdvancedSelectionPage.page_path);
	});

	test("Validate placeholder text has grey3 as Color.", async () => {
		const expectedColor = theme.newColors.grey3["100"];
		expect(await ffAdvancedSelectionPage.getSpecificBorderFromElement(ffAdvancedSelectionPage.placeholderText)).toContain(expectedColor);
	});

	test("Validate drawer title location is fixed.", async () => {
		await page.setViewportSize({ width: 1280, height: 400 });
		await ffAdvancedSelectionPage.advancedSelectionButton.click();
		await expect(ffAdvancedSelectionPage.formTestIDLocator.last()).toBeVisible();
		await ffAdvancedSelectionPage.page.locator("input").last().scrollIntoViewIfNeeded();
		await expect(ffAdvancedSelectionPage.formTestIDLocator.last().locator("form div").first()).toBeVisible();
	});

	test("Validate the Disabled Advanced Selection.", async () => {
		await ffAdvancedSelectionPage.visit(ffAdvancedSelectionPage.page_path, [knob.knobDisabled + true]);
		await ffAdvancedSelectionPage.advancedSelectionButton.waitFor({ state: "visible" });
		await expect(ffAdvancedSelectionPage.advancedSelectionButton).toBeDisabled();
	});
});
