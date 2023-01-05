import { test, expect, Page } from "@playwright/test";
import { SnackBarPage } from "../../../pages/Components/SnackBar/SnackBarPagePage";
import theme from "../../../../src/theme";

test.describe.parallel("Components - SnackBarPage - Example", () => {
	let page: Page;
	let snackbarPage: SnackBarPage;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		snackbarPage = new SnackBarPage(page);
		await snackbarPage.visitPage();
	});

	test.afterAll(async ({ browser }) => {
		await browser.close();
	});

	test("Validate SnackBar button has almostBlack text color.", async () => {
		const expectColor = theme.newColors.almostBlack["100"];
		expect(await snackbarPage.getColorFromElement(snackbarPage.openSnackbarButton)).toBe(expectColor);
	});

	test("Validate SnackBar close button has simplyGrey color.", async () => {
		const expectColor = theme.newColors.simplyGrey["100"];
		await snackbarPage.openSnackbarButton.click();
		await expect(snackbarPage.snackbar).toBeVisible();
		expect(await snackbarPage.getColorFromElement(snackbarPage.closeSnackbarButton)).toBe(expectColor);
	});
});
