import { test, expect, Page } from "@playwright/test";
import { DialogPage } from "../../../pages/Components/Dialog/DialogPage";
import theme from "../../../../src/theme";

test.describe("Components - Dialog - Example", () => {
	let page: Page;
	let dialogPage: DialogPage;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		dialogPage = new DialogPage(page);
		await dialogPage.visitPage();
	});

	test.afterAll(async ({ browser }) => {
		await browser.close();
	});

	test("Validate Dialog title has almostBlack color.", async () => {
		const expectColor = theme.newColors.almostBlack["100"];
		await dialogPage.openDialogButton.click();
		expect(await dialogPage.getColorFromElement(dialogPage.dialogTitle)).toBe(expectColor);
	});
});
