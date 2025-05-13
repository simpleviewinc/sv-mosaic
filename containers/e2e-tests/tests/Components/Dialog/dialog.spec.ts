import type { Page } from "@playwright/test";
import { test, expect } from "@playwright/test";
import { DialogPage } from "../../../pages/Components/Dialog/DialogPage";
import theme from "@simpleview/sv-mosaic/theme";;

test.describe("Components - Dialog - Example", () => {
	let page: Page;
	let dialogPage: DialogPage;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		dialogPage = new DialogPage(page);
		await dialogPage.visit(dialogPage.page_path);
	});

	test("Validate Dialog title has almostBlack color.", async () => {
		const expectedColor = theme.newColors.almostBlack["100"];
		if (!await dialogPage.dialog.isVisible()) {
			await dialogPage.openDialogButton.click();
		}
		expect(await dialogPage.getColorFromElement(dialogPage.dialogTitle)).toBe(expectedColor);
	});

	test("Validate Dialog text has grey2 in border bottom.", async () => {
		const expectedColor = theme.newColors.grey2["100"];
		if (!await dialogPage.dialog.isVisible()) {
			await dialogPage.openDialogButton.click();
		}
		expect(await dialogPage.getSpecificBorderFromElement(dialogPage.dialogText, "bottom")).toContain(expectedColor);
	});
});
