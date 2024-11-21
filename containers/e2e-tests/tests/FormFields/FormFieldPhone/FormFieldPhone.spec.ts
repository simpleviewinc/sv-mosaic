import type { Page } from "@playwright/test";
import { test, expect } from "@playwright/test";
import { FormFieldPhonePage } from "../../../pages/FormFields/FormFieldPhone/FormFieldPhonePage";
import { randomIntFromInterval } from "../../../utils/helpers/helper";
import theme from "@root/theme";

test.describe("FormFields - FormFieldPhone - Kitchen Sink", () => {
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

	test.skip("Validate that the phone field doesn't returns invalid data", async () => {
		const rndRegularPhone = String(randomIntFromInterval(10000000000000, 99999999999999));
		await ffPhonePage.regularPhoneField.fill(rndRegularPhone);
		await ffPhonePage.saveBtn.dblclick();
		await ffPhonePage.setDialogValidationListener(rndRegularPhone);
		await ffPhonePage.autoformatPhoneField.fill("");
		await ffPhonePage.saveBtn.dblclick();
		await ffPhonePage.setDialogValidationListener("Form submitted with the following data: {}");
	});
});
