import type { Page } from "@playwright/test";
import { test, expect } from "@playwright/test";
import { ContentPage } from "../../../pages/Components/Content/ContentPage";
import { contentKnobs, pageHeaderKnobs } from "../../../utils/data/knobs";
import { createAxeBuilder } from "../../../utils/helpers/axeBuilder";

test.describe("Components - Content - Accessibility", () => {
	let page: Page;
	let contentPage: ContentPage;

	test.beforeEach(async ({ page: testPage }) => {
		page = testPage;
		contentPage = new ContentPage(page);
	});

	test("Content should not have any accessibility issues in default state", async () => {
		await contentPage.visit(contentPage.page_path);

		const accessibilityScanResults = await createAxeBuilder({ page }).analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});

	test("Content should not have any accessibility issues with buttons hidden", async () => {
		await contentPage.visit(contentPage.page_path, [pageHeaderKnobs.knobButtons + 0]);

		const accessibilityScanResults = await createAxeBuilder({ page }).analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});

	test("Content should not have any accessibility issues with single column layout", async () => {
		await contentPage.visit(contentPage.page_path, contentKnobs.knobSingleField);

		const accessibilityScanResults = await createAxeBuilder({ page }).analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});

	test("Content should not have any accessibility issues with two columns layout", async () => {
		await contentPage.visit(contentPage.page_path, contentKnobs.knobTwoColumns);

		const accessibilityScanResults = await createAxeBuilder({ page }).analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});

	test("Content should not have any accessibility issues with large breakpoint columns", async () => {
		await contentPage.visit(contentPage.page_path, [contentKnobs.knobProvideColumnsLarge, ...contentKnobs.knobTwoColumns]);

		const accessibilityScanResults = await createAxeBuilder({ page }).analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});

	test("Content should not have any accessibility issues with custom breakpoint rules", async () => {
		await contentPage.visit(contentPage.page_path, [contentKnobs.knobProvideColumnsCustom, ...contentKnobs.knobFourColumns]);

		const accessibilityScanResults = await createAxeBuilder({ page }).analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});

	test("Content should not have any accessibility issues with four columns layout", async () => {
		await contentPage.visit(contentPage.page_path, contentKnobs.knobFourColumns);

		const accessibilityScanResults = await createAxeBuilder({ page }).analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});
});
