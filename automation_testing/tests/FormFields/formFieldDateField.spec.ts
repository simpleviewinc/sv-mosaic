import { test, expect, Page } from "@playwright/test";
import { FormFieldDateFieldPage } from "../../pages/FormFields/FormFieldDateFieldPage";
import { commonKnobs as knob } from "../../utils/data/knobs";
import theme from "../../../src/theme";

test.describe.parallel("FormFields - FormFieldDateField - Kitchen Sink", () => {
	let page: Page;
	let formFieldDateFieldPage: FormFieldDateFieldPage;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		formFieldDateFieldPage = new FormFieldDateFieldPage(page);
		await formFieldDateFieldPage.visit(formFieldDateFieldPage.page_path);
	});

	test.afterAll(async ({ browser }) => {
		browser.close;
	});

	test("Validate Single Date Calendar by writing a date", async () => {
		await formFieldDateFieldPage.singleDateCalendarInput.type(await formFieldDateFieldPage.getTodayDate());
		await formFieldDateFieldPage.formTestID.click();
		expect(await formFieldDateFieldPage.singleDateCalendarInput.inputValue()).toBe(await formFieldDateFieldPage.getTodayDate());
	});

	test("Validate Single Date Calendar by selecting a date", async () => {
		const todayDay = new Date().getDate();
		await formFieldDateFieldPage.singleDateCalendarButton.click();
		await formFieldDateFieldPage.selectDayFromDatePicker(todayDay);
		expect(await formFieldDateFieldPage.singleDateCalendarInput.inputValue()).toBe(await formFieldDateFieldPage.getTodayDate());
	});

	test("Validate Disable Single Date Calendar", async () => {
		expect(await formFieldDateFieldPage.disabledSingleDateCalendarText.textContent()).toBe("MM / DD / YYYY");
	});

	test("Validate the Calendar Date and Time Input by writing the date and time.", async () => {
		const todayDate = await formFieldDateFieldPage.getTodayDate();
		const timeHour = "07:30 Am";
		await formFieldDateFieldPage.dateTimeInput.type(todayDate);
		await formFieldDateFieldPage.dateHourInput.type(timeHour)
		await formFieldDateFieldPage.formTestID.click();
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

	test("Validate Disable Date Time Calendar", async () => {
		expect(await formFieldDateFieldPage.disableDateAndTimeCalendarText.first().textContent()).toBe("MM / DD / YYYY");
		expect(await formFieldDateFieldPage.disableDateAndTimeCalendarText.nth(1).textContent()).toBe("00:00 AM/PM");
	});

	test("Validate error when trying to save with Requiered Calendar Date and Time empty.", async () => {
		await formFieldDateFieldPage.saveBtn.click();
		await expect(formFieldDateFieldPage.page.locator("p", {hasText: "This field is required, please fill it"})).toBeVisible();
	});

	test("Validate the Requiered Calendar Date and Time Input by writing the date and time.", async () => {
		const todayDate = await formFieldDateFieldPage.getTodayDate();
		const timeHour = "07:30 Am";
		await formFieldDateFieldPage.requiredDateTimeInput.type(todayDate);
		await formFieldDateFieldPage.requiredDateHourInput.type(timeHour)
		await formFieldDateFieldPage.formTestID.click();
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

	test("Validate that the disabled text is almost black", async () => {
		await formFieldDateFieldPage.visit(formFieldDateFieldPage.playground_page_path, [knob.knobDisabled + true]);
		expect(await formFieldDateFieldPage.getColorFromElement(formFieldDateFieldPage.dateFieldText)).toBe(theme.newColors.almostBlack["100"]);
		await formFieldDateFieldPage.visit(formFieldDateFieldPage.playground_page_path, [knob.knobDisabled + true, knob.knobShowTime + true]);
		expect(await formFieldDateFieldPage.getColorFromElement(formFieldDateFieldPage.dateFieldText)).toBe(theme.newColors.almostBlack["100"]);
	});
});
