import { test, expect, Page } from "@playwright/test";
import { FormFieldPhoneSelectionDropdownPage } from "../../../pages/FormFields/FormFieldPhoneSelectionDropdown/FormFieldPhoneSelectionDropdownPage";
import { randomIntFromInterval } from "../../../utils/helpers/helper";
import theme from "../../../../src/theme";

test.describe.parallel("FormFields - FormFieldPhoneSelectionDropdown - Kitchen Sink", () => {
	let page: Page;
	let ffPhoneSelectionDropdownPage: FormFieldPhoneSelectionDropdownPage;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		ffPhoneSelectionDropdownPage = new FormFieldPhoneSelectionDropdownPage(page);
		await ffPhoneSelectionDropdownPage.visit(ffPhoneSelectionDropdownPage.page_path);
	});

	test.beforeEach(async() => {
		await page.reload();
	});

	test.afterAll(async ({ browser }) => {
		browser.close;
	});

	test("Validate the Regular Phone field.", async () => {
		const phoneNumber = "7021234567";
		await ffPhoneSelectionDropdownPage.regularPhoneField.click();
		await ffPhoneSelectionDropdownPage.regularPhoneField.type(phoneNumber);
		expect(await ffPhoneSelectionDropdownPage.regularPhoneField.inputValue()).toBe("+1" + phoneNumber);

		await ffPhoneSelectionDropdownPage.selectOptionFromDropdown(ffPhoneSelectionDropdownPage.regularPhoneFieldDropdown, "Mexico");
		expect(await ffPhoneSelectionDropdownPage.regularPhoneField.inputValue()).toBe("+52" + phoneNumber);
	});

	test("Validate the Phone field with a country code provided.", async () => {
		expect(await ffPhoneSelectionDropdownPage.countryCodeProvidedPhoneField.inputValue()).toBe("+54");
	});

	test("Validate the Phone field with autoformat enabled.", async () => {
		const phoneNumberUS = "7037654321";
		const phoneNumberUK = "2087599036";
		const expectedFormatNumberUS = "+1 (703) 765-4321";
		const expectedFormatNumberUK = "+44 2087 599036";

		await ffPhoneSelectionDropdownPage.selectOptionFromDropdown(ffPhoneSelectionDropdownPage.autoformatPhoneFieldDropdown, "United States");
		await ffPhoneSelectionDropdownPage.autoformatPhoneField.fill(phoneNumberUS);
		expect(await ffPhoneSelectionDropdownPage.autoformatPhoneField.inputValue()).toBe(expectedFormatNumberUS);
		await ffPhoneSelectionDropdownPage.selectAndDeleteText(" (703) 765-4321".length);
		await ffPhoneSelectionDropdownPage.selectOptionFromDropdown(ffPhoneSelectionDropdownPage.autoformatPhoneFieldDropdown, "United Kingdom");
		await ffPhoneSelectionDropdownPage.autoformatPhoneField.fill(phoneNumberUK);
		expect(await ffPhoneSelectionDropdownPage.autoformatPhoneField.inputValue()).toBe(expectedFormatNumberUK);
	});

	test("Validate that the provided number is saved when submitted.", async ({ page }) => {
		page.once("dialog", async dialog => {
			expect(dialog.message()).toContain('"phone": "' + rndRegularPhone + '"');
			expect(dialog.message()).toContain('"countryCode": "' + rndProvidedCodePhone + '"');
			expect(dialog.message()).toContain('"autoformatEnabled": "' + rndAutoformatedPhone + '"');
			await dialog.accept();
		});
		const rndRegularPhone = String(randomIntFromInterval(100000000000000, 999999999999999));
		const rndProvidedCodePhone = String(randomIntFromInterval(100000000000000, 999999999999999));
		const rndAutoformatedPhone = String(randomIntFromInterval(1000000000, 9999999999));

		await ffPhoneSelectionDropdownPage.regularPhoneField.fill("");
		await ffPhoneSelectionDropdownPage.regularPhoneField.fill(rndRegularPhone);
		await ffPhoneSelectionDropdownPage.countryCodeProvidedPhoneField.fill("");
		await ffPhoneSelectionDropdownPage.countryCodeProvidedPhoneField.fill(rndProvidedCodePhone);
		await ffPhoneSelectionDropdownPage.autoformatPhoneField.fill("");
		await ffPhoneSelectionDropdownPage.autoformatPhoneField.fill(rndAutoformatedPhone);
		await ffPhoneSelectionDropdownPage.saveBtn.dblclick();
	});

	test("Validate phone fields have grey1 as background color.", async () => {
		const expectedColor = theme.newColors.grey1["100"];
		expect(await ffPhoneSelectionDropdownPage.getBackgroundColorFromElement(ffPhoneSelectionDropdownPage.regularPhoneField)).toBe(expectedColor);
		expect(await ffPhoneSelectionDropdownPage.getBackgroundColorFromElement(ffPhoneSelectionDropdownPage.countryCodeProvidedPhoneField)).toBe(expectedColor);
		expect(await ffPhoneSelectionDropdownPage.getBackgroundColorFromElement(ffPhoneSelectionDropdownPage.autoformatPhoneField)).toBe(expectedColor);
	});

	test("Validate that the phone field doesn't returns invalid data", async () => {
		const rndRegularPhone = String(randomIntFromInterval(10000000000000, 99999999999999));
		await ffPhoneSelectionDropdownPage.regularPhoneField.fill(rndRegularPhone);
		await ffPhoneSelectionDropdownPage.saveBtn.dblclick();
		await ffPhoneSelectionDropdownPage.setDialogValidationListener(rndRegularPhone);
		await ffPhoneSelectionDropdownPage.autoformatPhoneField.fill("");
		await ffPhoneSelectionDropdownPage.saveBtn.dblclick();
		await ffPhoneSelectionDropdownPage.setDialogValidationListener("Form submitted with the following data: {}");
	});
});
