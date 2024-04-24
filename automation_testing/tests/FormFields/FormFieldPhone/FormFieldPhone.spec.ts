import { test, expect, Page } from "@playwright/test";
import { FormFieldPhonePage } from "../../../pages/FormFields/FormFieldPhone/FormFieldPhonePage";
import { randomIntFromInterval } from "../../../utils/helpers/helper";
import theme from "../../../../src/theme";

test.describe.parallel("FormFields - FormFieldPhone - Kitchen Sink", () => {
	let page: Page;
	let ffPhonePage: FormFieldPhonePage;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		ffPhonePage = new FormFieldPhonePage(page);
		await ffPhonePage.visit(ffPhonePage.page_path);
	});

	test.beforeEach(async() => {
		await page.reload();
	});

	test.afterAll(async ({ browser }) => {
		browser.close;
	});

	test("Validate the Regular Phone field.", async () => {
		const phoneNumber = "7021234567";
		await ffPhonePage.regularPhoneField.click();
		await ffPhonePage.regularPhoneField.type(phoneNumber);
		expect(await ffPhonePage.regularPhoneField.inputValue()).toBe("+1" + phoneNumber);

		await ffPhonePage.selectOptionFromDropdown(ffPhonePage.regularPhoneFieldDropdown, "Mexico");
		expect(await ffPhonePage.regularPhoneField.inputValue()).toBe("+52" + phoneNumber);
	});

	test("Validate the Phone field with a country code provided.", async () => {
		expect(await ffPhonePage.countryCodeProvidedPhoneField.inputValue()).toBe("+54");
	});

	test("Validate the Phone field with autoformat enabled.", async () => {
		const phoneNumberUS = "7037654321";
		const phoneNumberUK = "2087599036";
		const expectedFormatNumberUS = "+1 (703) 765-4321";
		const expectedFormatNumberUK = "+44 2087 599036";

		await ffPhonePage.selectOptionFromDropdown(ffPhonePage.autoformatPhoneFieldDropdown, "United States");
		await ffPhonePage.autoformatPhoneField.fill(phoneNumberUS);
		expect(await ffPhonePage.autoformatPhoneField.inputValue()).toBe(expectedFormatNumberUS);
		await ffPhonePage.selectAndDeleteText(" (703) 765-4321".length);
		await ffPhonePage.selectOptionFromDropdown(ffPhonePage.autoformatPhoneFieldDropdown, "United Kingdom");
		await ffPhonePage.autoformatPhoneField.fill(phoneNumberUK);
		expect(await ffPhonePage.autoformatPhoneField.inputValue()).toBe(expectedFormatNumberUK);
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

		await ffPhonePage.regularPhoneField.fill("");
		await ffPhonePage.regularPhoneField.fill(rndRegularPhone);
		await ffPhonePage.countryCodeProvidedPhoneField.fill("");
		await ffPhonePage.countryCodeProvidedPhoneField.fill(rndProvidedCodePhone);
		await ffPhonePage.autoformatPhoneField.fill("");
		await ffPhonePage.autoformatPhoneField.fill(rndAutoformatedPhone);
		await ffPhonePage.saveBtn.dblclick();
	});

	test("Validate phone fields have grey1 as background color.", async () => {
		const expectedColor = theme.newColors.grey1["100"];
		expect(await ffPhonePage.getBackgroundColorFromElement(ffPhonePage.regularPhoneField)).toBe(expectedColor);
		expect(await ffPhonePage.getBackgroundColorFromElement(ffPhonePage.countryCodeProvidedPhoneField)).toBe(expectedColor);
		expect(await ffPhonePage.getBackgroundColorFromElement(ffPhonePage.autoformatPhoneField)).toBe(expectedColor);
	});

	test("Validate that the phone field doesn't returns invalid data", async () => {
		const rndRegularPhone = String(randomIntFromInterval(10000000000000, 99999999999999));
		await ffPhonePage.regularPhoneField.fill(rndRegularPhone);
		await ffPhonePage.saveBtn.dblclick();
		await ffPhonePage.setDialogValidationListener(rndRegularPhone);
		await ffPhonePage.autoformatPhoneField.fill("");
		await ffPhonePage.saveBtn.dblclick();
		await ffPhonePage.setDialogValidationListener("Form submitted with the following data: {}");
	});
});
