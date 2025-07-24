import type { Page } from "@playwright/test";
import { test, expect } from "@playwright/test";
import { FormFieldDateFieldPage } from "../../../pages/FormFields/FormFieldDateField/FormFieldDateFieldPage";

test.describe("FormFields - FormFieldDateField - Kitchen Sink", () => {
	let page: Page;
	let formFieldDateFieldPage: FormFieldDateFieldPage;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		formFieldDateFieldPage = new FormFieldDateFieldPage(page);
		await formFieldDateFieldPage.visit(formFieldDateFieldPage.page_path);
	});

	test("Validate Single Date Calendar by writing a date", async () => {
		await formFieldDateFieldPage.singleDateCalendarInput.type(await formFieldDateFieldPage.getTodayDate());
		await formFieldDateFieldPage.formTestIDLocator.click();
		expect(await formFieldDateFieldPage.singleDateCalendarInput.inputValue()).toBe(await formFieldDateFieldPage.getTodayDate());
	});

	test("Validate Single Date Calendar by selecting a date", async () => {
		const todayDay = new Date().getDate();
		await formFieldDateFieldPage.singleDateCalendarButton.click();
		await formFieldDateFieldPage.selectDayFromDatePicker(todayDay);
		expect(await formFieldDateFieldPage.singleDateCalendarInput.inputValue()).toBe(await formFieldDateFieldPage.getTodayDate());
	});

	test("Validate the Calendar Date and Time Input by writing the date and time.", async () => {
		const todayDate = await formFieldDateFieldPage.getTodayDate();
		const timeHour = "07:30 Am";
		await formFieldDateFieldPage.dateTimeInput.type(todayDate);
		await formFieldDateFieldPage.dateHourInput.type(timeHour);
		await formFieldDateFieldPage.formTestIDLocator.click();
		expect(await formFieldDateFieldPage.dateTimeInput.inputValue()).toBe(todayDate);
		expect(await formFieldDateFieldPage.dateHourInput.inputValue()).toBe(timeHour);
	});

	test("Validate the Calendar Date and Time Input by selecting the date and time.", async () => {
		const todayDay = new Date().getDate();
		await formFieldDateFieldPage.dateTimeInputCalendarButton.click();
		await formFieldDateFieldPage.selectDayFromDatePicker(todayDay);
		await formFieldDateFieldPage.dateHourInputCalendarButton.click();
		const selectedHourAndMinute = await formFieldDateFieldPage.selectHourAndMinutesInHourPicker("pm");
		expect(await formFieldDateFieldPage.dateTimeInput.inputValue()).toBe(await formFieldDateFieldPage.getTodayDate());
		expect(await formFieldDateFieldPage.dateHourInput.inputValue()).toBe(selectedHourAndMinute);
	});

	test("Validate error when trying to save with Requiered Calendar Date and Time empty.", async () => {
		await formFieldDateFieldPage.saveBtn.click();
		await expect(formFieldDateFieldPage.page.getByText("This field is required, please fill it").first()).toBeVisible();
	});

	test("Validate the Requiered Calendar Date and Time Input by writing the date and time.", async () => {
		const todayDate = await formFieldDateFieldPage.getTodayDate();
		const timeHour = "07:30 Am";
		await formFieldDateFieldPage.requiredDateTimeInput.type(todayDate);
		await formFieldDateFieldPage.requiredDateHourInput.type(timeHour);
		await formFieldDateFieldPage.formTestIDLocator.click();
		expect(await formFieldDateFieldPage.requiredDateTimeInput.inputValue()).toBe(todayDate);
		expect(await formFieldDateFieldPage.requiredDateHourInput.inputValue()).toBe(timeHour);
	});

	test("Validate the Requiered Calendar Date and Time Input by selecting the date and time.", async () => {
		const todayDay = new Date().getDate();
		await formFieldDateFieldPage.requiredDateTimeInputCalendarButton.click();
		await formFieldDateFieldPage.selectDayFromDatePicker(todayDay);
		await formFieldDateFieldPage.requiredDateHourInputCalendarButton.click();
		const selectedHourAndMinute = await formFieldDateFieldPage.selectHourAndMinutesInHourPicker("pm");
		expect(await formFieldDateFieldPage.requiredDateTimeInput.inputValue()).toBe(await formFieldDateFieldPage.getTodayDate());
		expect(await formFieldDateFieldPage.requiredDateHourInput.inputValue()).toBe(selectedHourAndMinute);
	});
});
