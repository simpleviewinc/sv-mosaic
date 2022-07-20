import { test, expect } from "@playwright/test";
import { ValidatorPage } from "../../../pages/Components/Form/ValidatorPage";
import { validatorsData as validatorData } from "../../../utils/data/form_data";

test.describe("Form - Validators", () => {
	let validatorPage: ValidatorPage;

	test.beforeEach(async ({ page }) => {
		validatorPage = new ValidatorPage(page);
		await validatorPage.visitPage();
	});

	test("Cancel", async () => {
		await validatorPage.validateSnapshot(validatorPage.cancelBtn, "cancel_btn");
		await validatorPage.setDialogValidationListener("Cancelling form");
		await validatorPage.cancelBtn.click();
	});

	test("Error when save with empty mandatory fields", async () => {
		const required = validatorPage.requiredTitle;
		expect(await required.isVisible()).toBe(true);
		expect(await required.textContent()).toBe(validatorData.require);
		await validatorPage.validateSnapshot(required, "required_field");
		await validatorPage.validateSnapshot(validatorPage.saveBtn, "save_btn");
		await validatorPage.saveBtn.click();
		const error = validatorPage.error;
		await validatorPage.validateSnapshot(error, "require_error_message");
		expect(await error.textContent()).toBe(validatorData.requireError);
		const errorIcon = validatorPage.errorIcon
		await validatorPage.validateSnapshot(errorIcon, "error_icon");
		expect(await errorIcon.isVisible()).toBe(true);
	});

	test("Valid email", async () => {
		await validatorPage.emailField.type(validatorData.validEmail);
		await validatorPage.title.click();
		expect(await validatorPage.error.isVisible()).toBe(false);
	});

	test("Invalid email error", async () => {
		await validatorPage.emailField.type(validatorData.invalidEmail);
		await validatorPage.title.click();
		const error = validatorPage.error;
		await validatorPage.validateSnapshot(error, "email_error_message");
		expect(await error.textContent()).toBe(validatorData.emailError);
		await validatorPage.validateSnapshot(await validatorPage.getParentDiv(validatorPage.emailField), "email_div_error_message");
	});

	test("Remove email error message after put a valid email", async () => {
		await validatorPage.emailField.type(validatorData.invalidEmail);
		await validatorPage.title.click();
		const error = validatorPage.error;
		expect(await error.textContent()).toBe(validatorData.emailError);
		await validatorPage.emailField.type(validatorData.validEmail);
		await validatorPage.title.click();
		expect(await validatorPage.error.isVisible()).toBe(false);
	});

	test("Valid number", async () => {
		await validatorPage.numberField.type(`${validatorData.validNumber}`);
		await validatorPage.title.click();
		expect(await validatorPage.error.isVisible()).toBe(false);
	});

	test("Invalid number error", async () => {
		await validatorPage.numberField.type(`${validatorData.invalidNumber}`);
		await validatorPage.title.click();
		const error = validatorPage.error;
		await validatorPage.validateSnapshot(error, "number_error_message");
		expect(await error.textContent()).toBe(validatorData.numberError);
		await validatorPage.validateSnapshot(await validatorPage.getParentDiv(validatorPage.numberField), "number_div_error_message");
	});

	test("Valid url", async () => {
		await validatorPage.urlField.type(validatorData.validUrl);
		await validatorPage.title.click();
		expect(await validatorPage.error.isVisible()).toBe(false);
	});

	test("Invalid url error", async () => {
		await validatorPage.urlField.type(validatorData.invalidUrl);
		await validatorPage.title.click();
		const error = validatorPage.error;
		await validatorPage.validateSnapshot(error, "url_error_message");
		expect(await error.textContent()).toBe(validatorData.urlError);
		await validatorPage.validateSnapshot(await validatorPage.getParentDiv(validatorPage.urlField), "url_div_error_message");
	});

	test("Valid start and end date", async () => {
		await validatorPage.dateValidation(validatorPage.startDate, "start");
		await validatorPage.dateValidation(validatorPage.endDate, "end");
		await validatorPage.selectDate(validatorPage.startDate, "2021", "September", "15");
		await validatorPage.title.click();
		await validatorPage.selectDate(validatorPage.endDate, "2022", "June", "14");
		expect(await validatorPage.error.isVisible()).toBe(false);
	});

	test("Invalid start date", async () => {
		await validatorPage.startDate.type(validatorData.invalidDate);
		await validatorPage.title.click();
		const error = validatorPage.inputError;
		await validatorPage.validateSnapshot(error, "start_error_message");
	});

	test("Invalid end date", async () => {
		await validatorPage.endDate.type(validatorData.invalidDate);
		await validatorPage.title.click();
		const error = validatorPage.inputError;
		await validatorPage.validateSnapshot(error, "end_error_message");
	});

	test("Error start and end date", async () => {
		await validatorPage.dateValidation(validatorPage.startDate, "start");
		await validatorPage.dateValidation(validatorPage.endDate, "end");
		await validatorPage.selectDate(validatorPage.startDate, "2022", "June", "14");
		await validatorPage.title.click();
		await validatorPage.selectDate(validatorPage.endDate, "2021", "September", "15");

		const error = validatorPage.error;
		await validatorPage.validateSnapshot(error.nth(0), "start_date_error_message");
		await validatorPage.validateSnapshot(error.nth(1), "end_date_error_message");
		expect(await error.count()).toBe(2);
		expect(await error.nth(0).textContent()).toBe(validatorData.dateError);
		expect(await error.nth(1).textContent()).toBe(validatorData.dateError);
		await validatorPage.validateSnapshot(await validatorPage.getDateParentDiv(validatorPage.startDate), "start_date_div_error_message");
		await validatorPage.validateSnapshot(await validatorPage.getDateParentDiv(validatorPage.endDate), "end_date_div_error_message");
	});

	test("Save Form with correct values", async () => {
		await validatorPage.requireField.type(validatorData.require);
		await validatorPage.emailField.type(validatorData.validEmail);
		await validatorPage.numberField.type(`${validatorData.validNumber}`);
		await validatorPage.urlField.type(validatorData.validUrl);
		await validatorPage.selectDate(validatorPage.startDate, "2021", "September", "15");
		await validatorPage.title.click();
		await validatorPage.selectDate(validatorPage.endDate, "2022", "June", "14");
		await validatorPage.setDialogValidationListener(validatorData.saveValues);
	});
});