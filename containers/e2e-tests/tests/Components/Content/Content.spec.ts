import type { Page } from "@playwright/test";
import { test, expect } from "@playwright/test";
import { ContentPage } from "../../../pages/Components/Content/ContentPage";
import theme from "@simpleview/sv-mosaic/theme";
import { cardKnobs as knob, pageHeaderKnobs } from "../../../utils/data/knobs";
import { ensureRgbCss } from "utils/helpers/color";

test.describe("Components - Content - Playground", () => {
	let page: Page;
	let contentPage: ContentPage;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		contentPage = new ContentPage(page);
		await contentPage.visit(contentPage.page_path);
	});

	test("Validate Content title has almostBlack color.", async () => {
		const expectedColor = ensureRgbCss(theme.color.black);
		expect(await contentPage.getColorFromElement(contentPage.mainContentTitle)).toBe(expectedColor);
	});

	test("Validate font weight of the Content Title.", async () => {
		expect(await contentPage.getFontWeightFromElement(contentPage.mainContentTitle)).toBe((theme.weight.medium).toString());
	});

	test("Validate the show capability to content buttons.", async () => {
		await contentPage.visit(contentPage.page_path, [pageHeaderKnobs.knobButtons + 0]);
		await expect(contentPage.editButton).not.toBeVisible();
	});

	test("Validate that when the buttons knob is undefined, the additional buttons are not displayed.", async () => {
		await contentPage.visit(contentPage.page_path, [pageHeaderKnobs.knobButtons + "undefined"]);
		await expect(contentPage.editButton).not.toBeVisible();
	});
});
