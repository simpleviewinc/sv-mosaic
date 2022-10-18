import { test, Page } from "@playwright/test";
import { CheckboxPage } from "../../../pages/Components/Checkbox/CheckboxPage";

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
});
