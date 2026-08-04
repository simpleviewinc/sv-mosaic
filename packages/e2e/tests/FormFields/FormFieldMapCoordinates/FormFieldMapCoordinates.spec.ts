import type { Page } from "@playwright/test";
import { test, expect } from "@playwright/test";
import { FormFieldMapCoordinatesPage } from "../../../pages/FormFields/FormFieldMapCoordinates/FormFieldMapCoordinatesPage";
import { commonKnobs as knob } from "../../../utils/data/knobs";

test.describe("FormFields - FormFieldMapCoordinates - Kitchen Sink", () => {
	let page: Page;
	let ffMapCoordinatesPage: FormFieldMapCoordinatesPage;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		ffMapCoordinatesPage = new FormFieldMapCoordinatesPage(page);
	});

	test.beforeEach(async() => {
		await ffMapCoordinatesPage.visit(ffMapCoordinatesPage.page_path);
		await page.reload();
	});

	test("Validate that the map without address fields are empty.", async () => {
		await ffMapCoordinatesPage.mapWithoutAddressAndAutocoordinatesDisabledButton.click();
		expect(await ffMapCoordinatesPage.latitude.inputValue()).toBe("");
		expect(await ffMapCoordinatesPage.longitude.inputValue()).toBe("");
	});

	test("Validate that an error message appears for invalid Latitude values.", async () => {
		await ffMapCoordinatesPage.mapWithoutAddressAndAutocoordinatesDisabledButton.click();
		await ffMapCoordinatesPage.longitude.type("10");
		await ffMapCoordinatesPage.latitude.type("91");
		await ffMapCoordinatesPage.latitude.evaluate(e => e.blur());

		expect(await ffMapCoordinatesPage.errorMessage.textContent()).toBe("Latitude should be between -90 and 90");

		await ffMapCoordinatesPage.latitude.type("");
		await ffMapCoordinatesPage.latitude.type("-91");
		await ffMapCoordinatesPage.latitude.evaluate(e => e.blur());
		expect(await ffMapCoordinatesPage.errorMessage.textContent()).toBe("Latitude should be between -90 and 90");
	});

	test("Validate that an error message appears for invalid Longitude values.", async () => {
		await ffMapCoordinatesPage.mapWithoutAddressAndAutocoordinatesDisabledButton.click();
		await ffMapCoordinatesPage.latitude.type("10");
		await ffMapCoordinatesPage.longitude.type("181");
		await ffMapCoordinatesPage.longitude.evaluate(e => e.blur());

		expect(await ffMapCoordinatesPage.errorMessage.textContent()).toBe("Longitude should be between -180 and 180");

		await ffMapCoordinatesPage.longitude.type("");
		await ffMapCoordinatesPage.longitude.type("-181");
		await ffMapCoordinatesPage.longitude.evaluate(e => e.blur());
		expect(await ffMapCoordinatesPage.errorMessage.textContent()).toBe("Longitude should be between -180 and 180");
	});

	test("Validate drawer title location is fixed.", async () => {
		await page.setViewportSize({ width: 1280, height: 400 });
		await ffMapCoordinatesPage.mapWithoutAddressAndAutocoordinatesDisabledButton.click();
		await expect(ffMapCoordinatesPage.formTestIDLocator.last()).toBeVisible();
		await ffMapCoordinatesPage.longitude.scrollIntoViewIfNeeded();
		await expect(ffMapCoordinatesPage.formTestIDLocator.last().locator("form div").first()).toBeVisible();
	});

	test("Validate that button is disabled.", async () => {
		await ffMapCoordinatesPage.visit(ffMapCoordinatesPage.playground_page_path, [knob.knobDisabled + true]);
		await ffMapCoordinatesPage.mapWithoutAddressAndAutocoordinatesDisabledButton.waitFor({ state: "visible" });
		await expect(ffMapCoordinatesPage.mapWithoutAddressAndAutocoordinatesDisabledButton).toBeDisabled();
	});
});
