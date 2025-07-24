import type { Locator, Page } from "@playwright/test";
import { BasePage } from "../../BasePage";

export class FormFieldMapCoordinatesPage extends BasePage {

	readonly page_path = "formfields-formfieldmapcoordinates--kitchen-sink";
	readonly playground_page_path = "formfields-formfieldmapcoordinates--playground";

	readonly page: Page;
	readonly map: Locator;
	readonly mapWithoutAddressAndAutocoordinatesDisabledButton: Locator;
	readonly mapDisabledDefaultLocation: Locator;
	readonly mapWithAddressDiv: Locator;
	readonly errorMessage: Locator;

	constructor(page: Page) {
		super(page);
		this.page = page;
		this.map = page.locator("[aria-label='Map']");
		this.mapWithoutAddressAndAutocoordinatesDisabledButton = page.locator("button", { hasText: "Add Coordinates" }).nth(0);
		this.mapDisabledDefaultLocation = page.locator("#mapDisabled div div div div").nth(1);
		this.mapWithAddressDiv = page.locator("#mapWithAddress div div div").nth(2);
		this.errorMessage = page.getByTestId("mos:Field:error");
	}

	async getCoordinateFromMapCard(mapCard: Locator, _isLatitute = true): Promise<string> {
		let index: number;
		const mapCoordinates = (await mapCard.innerText()).split("\n");
		if (_isLatitute == true) {
			index = mapCoordinates.indexOf("Latitude");
		} else {
			index = mapCoordinates.indexOf("Longitude");
		}
		return mapCoordinates[index + 1];
	}
}
