import type { Page } from "@playwright/test";
import { test, expect } from "fixtures";
import { ContentPage } from "../../../pages/Components/Content/ContentPage";
import theme from "@simpleview/sv-mosaic/theme";
import { contentKnobs, pageHeaderKnobs } from "../../../utils/data/knobs";
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

	test("should display fields in a single column at all container sizes", async () => {
		await contentPage.visit(contentPage.page_path, contentKnobs.knobSingleField);
		await page.setViewportSize({ width: 380, height: 800 });
		const row = page.getByTestId("mos:Content:row");
		await expect(row).toBeVisible();
		await expect(row).toHaveGridColumns(1);
		await page.setViewportSize({ width: 900, height: 800 });
		await expect(row).toHaveGridColumns(1);
	});

	test("should display fields as columns at the default (medium) breakpoint", async () => {
		await contentPage.visit(contentPage.page_path, contentKnobs.knobTwoColumns);

		const container = page.getByTestId("mos:Content:fieldList");
		const viewportGutter = await contentPage.getElementViewportGutter(container, 380);

		const row = page.getByTestId("mos:Content:row");
		await expect(row).toBeVisible();
		await expect(row).toHaveGridColumns(1);
		await page.setViewportSize({ width: 767 + viewportGutter, height: 800 });
		await expect(row).toHaveGridColumns(1);
		await page.setViewportSize({ width: 768 + viewportGutter, height: 800 });
		await expect(row).toHaveGridColumns(2);
	});

	test("should display fields as columns at a custom (large) breakpoint", async () => {
		await contentPage.visit(contentPage.page_path, [contentKnobs.knobProvideColumnsLarge, ...contentKnobs.knobTwoColumns]);

		const container = page.getByTestId("mos:Content:fieldList");
		const viewportGutter = await contentPage.getElementViewportGutter(container, 380);

		const row = page.getByTestId("mos:Content:row");
		await expect(row).toBeVisible();
		await expect(row).toHaveGridColumns(1);
		await page.setViewportSize({ width: 1023 + viewportGutter, height: 800 });
		await expect(row).toHaveGridColumns(1);
		await page.setViewportSize({ width: 1024 + viewportGutter, height: 800 });
		await expect(row).toHaveGridColumns(2);
	});

	test.only("should display fields as columns with custom breakpoint rules", async () => {
		await contentPage.visit(contentPage.page_path, [contentKnobs.knobProvideColumnsCustom, ...contentKnobs.knobFourColumns]);

		const container = page.getByTestId("mos:Content:fieldList");
		const viewportGutter = await contentPage.getElementViewportGutter(container, 380);

		const row = page.getByTestId("mos:Content:row");
		await expect(row).toBeVisible();
		await expect(row).toHaveGridColumns(1);
		await page.setViewportSize({ width: 767 + viewportGutter, height: 800 });
		await expect(row).toHaveGridColumns(1);
		await page.setViewportSize({ width: 768 + viewportGutter, height: 800 });
		await expect(row).toHaveGridColumns(2);
		await page.setViewportSize({ width: 1023 + viewportGutter, height: 800 });
		await expect(row).toHaveGridColumns(2);
		await page.setViewportSize({ width: 1024 + viewportGutter, height: 800 });
		await expect(row).toHaveGridColumns(4);
	});

	test("should display individual row fields as columns with custom breakpoint rules", async () => {
		await contentPage.visit(contentPage.page_path, [contentKnobs.knobProvideColumnsCustom, ...contentKnobs.knobFourColumns]);

		const container = page.getByTestId("mos:Content:fieldList");
		const viewportGutter = await contentPage.getElementViewportGutter(container, 380);

		const row = page.getByTestId("mos:Content:row");
		await expect(row).toBeVisible();
		await expect(row).toHaveGridColumns(1);
		await page.setViewportSize({ width: 767 + viewportGutter, height: 800 });
		await expect(row).toHaveGridColumns(1);
		await page.setViewportSize({ width: 768 + viewportGutter, height: 800 });
		await expect(row).toHaveGridColumns(2);
		await page.setViewportSize({ width: 1023 + viewportGutter, height: 800 });
		await expect(row).toHaveGridColumns(2);
		await page.setViewportSize({ width: 1024 + viewportGutter, height: 800 });
		await expect(row).toHaveGridColumns(4);
	});
});
