import type { Page } from "@playwright/test";
import { test, expect } from "@playwright/test";
import { FormFieldAddressPage } from "../../../pages/FormFields/FormFieldAddress/FormFieldAddressPage";
import { randomIntFromInterval } from "../../../utils/helpers/helper";
import { us_address, us_address_2 } from "../../../utils/data/addressInformationData";
import theme from "@simpleview/sv-mosaic/theme";;
import { commonKnobs as knob } from "../../../utils/data/knobs";

test.describe("FormFields - FormFieldAddress - Playground", () => {
	let page: Page;
	let ffAddressPage: FormFieldAddressPage;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		ffAddressPage = new FormFieldAddressPage(page);
		await ffAddressPage.visit(ffAddressPage.page_path);
	});

	test.beforeEach(async() => {
		await page.reload();
	});

	test("Validate that Postal Code type is equal to String.", async () => {
		await ffAddressPage.addAddressButton.click();
		expect(await ffAddressPage.postalCodeField.getAttribute("type")).toBe("string");
	});

	test("Validate the Postal Code field.", async () => {
		await ffAddressPage.addAddressButton.click();
		const randomNumber = randomIntFromInterval(0, 99999999);
		const randomString = await ffAddressPage.getAutogeneratedText(20);
		await ffAddressPage.postalCodeField.type(randomNumber.toString());
		expect(Number(await ffAddressPage.postalCodeField.inputValue())).toBe(randomNumber);
		await ffAddressPage.clearAllValuesFromField(ffAddressPage.postalCodeField);
		await ffAddressPage.postalCodeField.fill(randomString);
		expect(await ffAddressPage.postalCodeField.inputValue()).toBe(randomString);
	});

	test("Validate that the user only can add one Physical Address.", async () => {
		await ffAddressPage.addAddressButton.click({ force: true });
		await ffAddressPage.fillAddresInformation("physical");
		await expect(ffAddressPage.addressCard).toBeVisible();
		expect(await ffAddressPage.addressCard.textContent()).toContain("Physical Address");
		await ffAddressPage.addAddressButton.click();
		await expect(ffAddressPage.physicalCheckboxOption).not.toBeVisible();
	});

	test("Validate that the user only can add one Billing Address.", async () => {
		await ffAddressPage.addAddressButton.click({ force: true });
		await ffAddressPage.fillAddresInformation("billing");
		await expect(ffAddressPage.addressCard).toBeVisible();
		expect(await ffAddressPage.addressCard.textContent()).toContain("Billing Address");
		await ffAddressPage.addAddressButton.click();
		await expect(ffAddressPage.billingCheckboxOption).not.toBeVisible();
	});

	test("Validate that the user only can add one Shipping Address.", async () => {
		await ffAddressPage.addAddressButton.click({ force: true });
		await ffAddressPage.fillAddresInformation("shipping");
		await expect(ffAddressPage.addressCard).toBeVisible();
		expect(await ffAddressPage.addressCard.textContent()).toContain("Shipping Address");
		await ffAddressPage.addAddressButton.click();
		await expect(ffAddressPage.shippingCheckboxOption).not.toBeVisible();
	});

	test("Validate that no more than three type of Address can be added.", async () => {
		await ffAddressPage.addAddressButton.click({ force: true });
		await ffAddressPage.fillAddresInformation("all");
		await expect(ffAddressPage.addAddressButton).not.toBeVisible();
	});

	test("Validate that you can add an Address after removing a type of address in the edit.", async () => {
		await ffAddressPage.addAddressButton.click({ force: true });
		await ffAddressPage.fillAddresInformation("all");
		await ffAddressPage.page.locator("text=Edit").click();
		await ffAddressPage.selectTypeOfAddress("shipping");
		await ffAddressPage.saveBtn.last().click();
		await expect(ffAddressPage.addAddressButton).toBeEnabled();
		expect(await ffAddressPage.addressCard.textContent()).not.toContain("Shipping");
	});

	test("Validate that background color of the address card is gray1.", async () => {
		const expectedColor = theme.newColors.grey1["100"];
		await ffAddressPage.addAddressButton.click({ force: true });
		await ffAddressPage.fillAddresInformation("physical");
		await expect(ffAddressPage.addressCard).toBeVisible();
		expect(await ffAddressPage.getBackgroundColorFromElement(ffAddressPage.addressCard)).toBe(expectedColor);
	});

	test("Validate drawer title location is fixed.", async () => {
		await page.setViewportSize({ width: 1280, height: 400 });
		await ffAddressPage.addAddressButton.click();
		await expect(ffAddressPage.formTestIDLocator.last()).toBeVisible();
		await ffAddressPage.shippingCheckboxOption.scrollIntoViewIfNeeded();
		await expect(ffAddressPage.formTestIDLocator.last().locator("form div").first()).toBeVisible();
	});

	test("Validate that when a user select one of the options shown, the fields are filled out.", async () => {
		test.skip();
		await ffAddressPage.addAddressButton.click();
		await ffAddressPage.firstAddressField.fill(us_address_2.address);
		await ffAddressPage.pressSpecificKeyInKeyboard("Enter");
		await ffAddressPage.wait();

		expect(await ffAddressPage.countryDropdownInput.inputValue()).toBe(us_address_2.country);
		expect(await ffAddressPage.cityField.inputValue()).toBe(us_address_2.city);
		expect(await ffAddressPage.statesDropdownInput.inputValue()).toBe(us_address_2.state);
		expect(await ffAddressPage.postalCodeField.inputValue()).toBe(us_address_2.postalCode);
	});

	test("Validate that when a user select one of the options shown and saves, the address card has the selected address.", async () => {
		test.skip();
		await ffAddressPage.addAddressButton.click();
		await ffAddressPage.firstAddressField.fill(us_address_2.address);
		await ffAddressPage.pressSpecificKeyInKeyboard("Enter");
		await ffAddressPage.wait();
		await ffAddressPage.selectTypeOfAddress("physical");
		await ffAddressPage.saveBtn.nth(1).click();

		expect(await ffAddressPage.addressCard.locator("span").nth(2).textContent()).toBe(us_address_2.city + ", " + us_address_2.state + " " + us_address_2.postalCode);
		expect(await ffAddressPage.addressCard.locator("span").nth(3).textContent()).toBe(us_address_2.country);
	});

	test("Validate State field label.", async () => {
		await ffAddressPage.addAddressButton.click({ force: true });
		expect(await ffAddressPage.statesLabel.textContent()).toBe("State");
	});

	test("Validate that the Address with number is displayed correctly.", async () => {
		test.skip();
		const expectedAddress = us_address.address;
		await ffAddressPage.addAddressButton.click({ force: true });
		await ffAddressPage.firstAddressField.fill(expectedAddress);
		await ffAddressPage.pressSpecificKeyInKeyboard("Enter");
		expect(await ffAddressPage.firstAddressField.inputValue()).toBe(expectedAddress);
	});

	test("Validate that button is disabled.", async () => {
		await ffAddressPage.visit(ffAddressPage.page_path, [knob.knobDisabled + true]);
		await ffAddressPage.addAddressButton.waitFor({ state: "visible" });
		await expect(ffAddressPage.addAddressButton).toBeDisabled();
	});
});
