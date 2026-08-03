import type { Page } from "@playwright/test";
import { test, expect } from "@playwright/test";
import { DialogPage } from "../../../pages/Components/Dialog/DialogPage";
import theme from "@simpleview/sv-mosaic/theme";
import { ensureRgbCss } from "../../../utils/helpers/color";

test.describe("Components - Dialog - Example", () => {
	let page: Page;
	let dialogPage: DialogPage;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		dialogPage = new DialogPage(page);
		await dialogPage.visit(dialogPage.page_path);
	});

	test("Validate Dialog title has almostBlack color.", async () => {
		const expectedColor = ensureRgbCss(theme.color.black);
		const dialogTitle = dialogPage.page.getByRole("heading", { name: "Dialog title" });
		if (!await dialogPage.dialog.isVisible()) {
			await dialogPage.openDialogButton.click();
		}
		await expect(dialogTitle).toBeVisible();
		expect(await dialogPage.getColorFromElement(dialogPage.dialogTitle)).toBe(expectedColor);
	});
});
