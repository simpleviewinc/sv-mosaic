import { test, expect, Page } from "@playwright/test";
import { ValidatorPage } from "../../../pages/Components/Form/ValidatorPage";
import { DatePickerComponent } from "../../../pages/Components/DataView/DatePickerComponent";
import { validatorsData as validatorData } from "../../../utils/data/formData";

test.describe("Components - Form - Validators", () => {
	let page: Page;
	let validatorPage: ValidatorPage;
	let datepicker: DatePickerComponent;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		validatorPage = new ValidatorPage(page);
		datepicker = new DatePickerComponent(page);
		await validatorPage.visit(validatorPage.page_path);
	});

	test.beforeEach(async() => {
		await page.reload();
	});

	test("Validate Error when saving with empty mandatory fields.", async () => {
		const required = validatorPage.requiredTitle;
		expect(await required.isVisible()).toBe(true);
		expect(await required.textContent()).toBe(validatorData.requireAsterisk);
		await validatorPage.saveBtn.click();
		const error = validatorPage.error;
		expect(await error.textContent()).toBe(validatorData.requireError);
		const errorIcon = validatorPage.errorIcon;
		expect(await errorIcon.isVisible()).toBe(true);
	});

	test("Validate that no error is showing when a Valid email is entered.", async () => {
		await validatorPage.emailField.type(validatorData.validEmail);
		await validatorPage.title.click();
		expect(await validatorPage.error.isVisible()).toBe(false);
	});

	test("Validate that an error is showing when a invalid email is entered.", async () => {
		await validatorPage.emailField.type(validatorData.invalidEmail);
		await validatorPage.title.click();
		const error = validatorPage.error;
		expect(await error.textContent()).toBe(validatorData.emailError);
	});

	test("Remove email error message after put a valid email", async () => {
		await validatorPage.emailField.type(validatorData.invalidEmail);
		await validatorPage.title.click();
		const error = validatorPage.error;
		expect(await error.textContent()).toBe(validatorData.emailError);
		await validatorPage.clearAllValuesFromField(validatorPage.emailField);
		await validatorPage.emailField.type(validatorData.validEmail);
		await validatorPage.title.click();
		await validatorPage.wait();
		expect(await validatorPage.error.isVisible()).toBe(false);
	});

	test("Validate that no error is showing when a Valid number is entered.", async () => {
		await validatorPage.numberField.type(`${validatorData.validNumber}`);
		await validatorPage.title.click();
		expect(await validatorPage.error.isVisible()).toBe(false);
	});

	test("Validate that an error is showing when a invalid number is entered.", async () => {
		await validatorPage.numberField.type(`${validatorData.invalidNumber}`);
		await validatorPage.title.click();
		const error = validatorPage.error;
		expect(await error.textContent()).toBe(validatorData.numberError);
	});

	test("Validate that no error is showing when a Valid url is entered.", async () => {
		await validatorPage.urlField.type(validatorData.validUrl);
		await validatorPage.title.click();
		expect(await validatorPage.error.isVisible()).toBe(false);
	});

	test("Validate that an error is showing when a invalid url is entered.", async () => {
		await validatorPage.urlField.type(validatorData.invalidUrl);
		await validatorPage.title.click();
		const error = validatorPage.error;
		expect(await error.textContent()).toBe(validatorData.urlError);
	});

	test("Validate Save Form with correct values", async () => {
		test.skip();
		const startDate = "2021 September 15";
		const endDate = "2022 June 14";
		await validatorPage.requireField.type(validatorData.require);
		await validatorPage.emailField.type(validatorData.validEmail);
		await validatorPage.numberField.type(`${validatorData.validNumber}`);
		await validatorPage.urlField.type(validatorData.validUrl);
		await validatorPage.startDateButton.click();
		await datepicker.selectDate(startDate);
		await validatorPage.title.click();
		await validatorPage.pressSpecificKeyInKeyboard("Escape");
		await validatorPage.wait();
		await validatorPage.endDateButton.click({ force: true });
		await datepicker.selectDate(endDate);
	});
});
