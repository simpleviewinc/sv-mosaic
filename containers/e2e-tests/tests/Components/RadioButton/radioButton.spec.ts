import type { Page } from "@playwright/test";
import { test } from "@playwright/test";
import { RadioButtonPage } from "../../../pages/Components/RadioButton/RadioButtonPage";

test.describe("Components - RadioButton - Group", () => {
	let page: Page;
	let radioButtonPage: RadioButtonPage;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		radioButtonPage = new RadioButtonPage(page);
		await radioButtonPage.visit(radioButtonPage.page_path);
	});
});
