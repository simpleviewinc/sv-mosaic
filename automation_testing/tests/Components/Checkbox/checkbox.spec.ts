import { test, Page } from "@playwright/test";
import { CheckboxPage } from "../../../pages/Components/Checkbox/CheckboxPage";
import theme from "../../../../src/theme";

test.describe("Components - Checkbox - Kitchen Sink", () => {
	let page: Page;
	let checkboxPage: CheckboxPage;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		checkboxPage = new CheckboxPage(page);
		await checkboxPage.visitPage();
	});

	test.afterAll(async ({ browser }) => {
		await browser.close();
	});

	test("Validate the color in the checkbox label.", async () => {
		const numberOfLabels = await checkboxPage.checkboxLabel.count();
		for (let i = 0; i < numberOfLabels; i++) {
			await checkboxPage.validateFontColorFromElement(checkboxPage.checkboxLabel.nth(i), "#3B424E", true);
		}
	});

	test("Validate Checkbox has simplyGold background.", async () => {
		const expectBgColor = (theme.newColors.simplyGold["100"]).split("rgb")[1];
		const numberOfCheckboxs = await checkboxPage.checkboxInput.count();
		for (let i = 0; i < numberOfCheckboxs; i++) {
			await checkboxPage.checkboxInput.nth(i).check();
			await checkboxPage.validateFontColorFromElement(checkboxPage.checkboxIcon.nth(i), expectBgColor, false);
		}
	});
});
