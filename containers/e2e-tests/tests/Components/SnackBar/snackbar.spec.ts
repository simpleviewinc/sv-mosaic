import type { Page } from "@playwright/test";
import { test, expect } from "@playwright/test";
import { SnackBarPage } from "../../../pages/Components/SnackBar/SnackBarPagePage";
import theme from "@simpleview/sv-mosaic/theme";

test.describe("Components - SnackBarPage - Example", () => {
	let page: Page;
	let snackbarPage: SnackBarPage;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		snackbarPage = new SnackBarPage(page);
		await snackbarPage.visit(snackbarPage.page_path);
	});

	test("Validate SnackBar close button has simplyGrey color.", async () => {
		const expectColor = theme.newColors.simplyGrey["100"];
		await snackbarPage.openSnackbarButton.click();
		await expect(snackbarPage.snackbar).toBeVisible();
		expect(await snackbarPage.getColorFromElement(snackbarPage.closeSnackbarButton)).toBe(expectColor);
	});
});
