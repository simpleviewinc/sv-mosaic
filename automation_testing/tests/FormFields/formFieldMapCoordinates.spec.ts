import { test, expect } from "@playwright/test";
import { FormFieldMapCoordinatesPage } from "../../pages/FormFields/FormFieldMapCoordinatesPage";

test.describe("FormFields - FormFieldMapCoordinates - Kitchen Sink", () => {
	let ffMapCoordinatesPage: FormFieldMapCoordinatesPage;

	test.beforeEach(async ({ page }) => {
		ffMapCoordinatesPage = new FormFieldMapCoordinatesPage(page);
		await ffMapCoordinatesPage.visitPage();
	});

	test("Validate that the map without address fields are empty.", async () => {
		await ffMapCoordinatesPage.mapWithoutAddressAndAutocoordinatesDisabledButton.click();
		expect(await ffMapCoordinatesPage.latitude.inputValue()).toBe("");
		expect(await ffMapCoordinatesPage.longitude.inputValue()).toBe("");
	});

	test("Validate that the location in the Disabled Map is 0,0.", async () => {
		await ffMapCoordinatesPage.mapDisabledDefaultLocation.waitFor({ state: "visible" });
		const latitude = await ffMapCoordinatesPage.getCoordinateFromMapCard(ffMapCoordinatesPage.mapDisabledDefaultLocation);
		const longitude = await ffMapCoordinatesPage.getCoordinateFromMapCard(ffMapCoordinatesPage.mapDisabledDefaultLocation, false);
		expect(latitude).toBe("0");
		expect(longitude).toBe("0");
	});

	test("Validate that the map map size.", async () => {
		await ffMapCoordinatesPage.mapWithoutAddressAndAutocoordinatesDisabledButton.click();
		await ffMapCoordinatesPage.map.click();
		const latitude = await ffMapCoordinatesPage.getCoordinateFromMapCard(ffMapCoordinatesPage.mapDisabledDefaultLocation);
		const longitude = await ffMapCoordinatesPage.getCoordinateFromMapCard(ffMapCoordinatesPage.mapDisabledDefaultLocation, false);

		expect(latitude).not.toBeNull();
		expect(longitude).not.toBeNull();
	});

	test("Validate that an error message appears for invalid Latitude values.", async () => {
		await ffMapCoordinatesPage.mapWithoutAddressAndAutocoordinatesDisabledButton.click();
		await ffMapCoordinatesPage.longitude.type("10");
		await ffMapCoordinatesPage.latitude.type("91");

		expect(await ffMapCoordinatesPage.errorMessage.textContent()).toBe("Latitude should be between -90 and 90");
		await expect(ffMapCoordinatesPage.saveCoordinatesButton).toBeDisabled();

		await ffMapCoordinatesPage.latitude.type("");
		await ffMapCoordinatesPage.latitude.type("-91");
		expect(await ffMapCoordinatesPage.errorMessage.textContent()).toBe("Latitude should be between -90 and 90");
		await expect(ffMapCoordinatesPage.saveCoordinatesButton).toBeDisabled();
	});

	test("Validate that an error message appears for invalid Longitude values.", async () => {
		await ffMapCoordinatesPage.mapWithoutAddressAndAutocoordinatesDisabledButton.click();
		await ffMapCoordinatesPage.latitude.type("10");
		await ffMapCoordinatesPage.longitude.type("181");

		expect(await ffMapCoordinatesPage.errorMessage.textContent()).toBe("Longitude should be between -180 and 180");
		await expect(ffMapCoordinatesPage.saveCoordinatesButton).toBeDisabled();

		await ffMapCoordinatesPage.longitude.type("");
		await ffMapCoordinatesPage.longitude.type("-181");
		expect(await ffMapCoordinatesPage.errorMessage.textContent()).toBe("Longitude should be between -180 and 180");
		await expect(ffMapCoordinatesPage.saveCoordinatesButton).toBeDisabled();
	});

	test("Validate that the cursor changes when it is positioned over a map.", async () => {
		await ffMapCoordinatesPage.mapWithoutAddressAndAutocoordinatesDisabledButton.click();
		await ffMapCoordinatesPage.map
	});
});
