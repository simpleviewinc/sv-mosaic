import { Locator, Page } from "@playwright/test";
import { BasePage } from "../../BasePage";
import { DatePickerComponent } from "../DataView/DatePickerComponent";

export class ValidatorPage extends BasePage {

	readonly page_path = "components-form--validators";

	readonly page: Page;
	readonly datepicker: DatePickerComponent;

	readonly title: Locator;
	readonly error: Locator;
	readonly errorIcon: Locator;
	readonly requiredTitle: Locator;
	readonly requireField: Locator;
	readonly emailField: Locator;
	readonly slowField: Locator;
	readonly numberField: Locator;
	readonly urlField: Locator;
	readonly startDateInput: Locator;
	readonly startDateButton: Locator;
	readonly endDateInput: Locator;
	readonly endDateButton: Locator;
	readonly inputError: Locator;
	readonly calendarPicker: Locator;
	readonly rightArrowCalendar: Locator;
	readonly leftArrowCalendar: Locator;
	readonly yearArrowCalendar: Locator;
	readonly monthCalendar: Locator;

	constructor(page: Page) {
		super(page);
		this.page = page;
		this.datepicker = new DatePickerComponent(page);
		this.title = page.locator("text=Validators story");
		this.error = page.locator(".Mui-error.MuiFormHelperText-root");
		this.errorIcon = page.locator("[data-testid='error-icon-test-id']");
		this.requiredTitle = page.locator("[for='required']");
		this.requireField = page.locator("#required");
		this.emailField = page.locator("#email");
		this.slowField = page.locator("#slow");
		this.numberField = page.locator("#number");
		this.urlField = page.locator("#url");
		this.startDateInput = page.locator("[data-testid='date-picker-test-id'] input").nth(0);
		this.startDateButton = page.locator("[data-testid='date-picker-test-id'] button").nth(0);
		this.endDateInput = page.locator("[data-testid='date-picker-test-id'] input").nth(1);
		this.endDateButton = page.locator("[data-testid='date-picker-test-id'] button").nth(1);


		this.inputError = page.locator(".Mui-error");
		this.calendarPicker = page.locator(".MuiCalendarPicker-root");
		this.rightArrowCalendar = page.locator("[data-testid='ArrowRightIcon']");
		this.leftArrowCalendar = page.locator("[data-testid='ArrowLeftIcon']");
		this.yearArrowCalendar = page.locator("[role='presentation'] .MuiIconButton-root.MuiIconButton-sizeSmall");
		this.monthCalendar = page.locator("[role='presentation'] .PrivatePickersFadeTransitionGroup-root").nth(0);
	}

	async visitPage(): Promise<void> {
		await this.visit(this.page_path, this.title);
	}

	async getDateIcon(field: Locator): Promise<Locator> {
		return field.locator("xpath=..").locator("button.MuiIconButton-sizeMedium");
	}

	async getParentDiv(element: Locator): Promise<Locator> {
		return element.locator("xpath=.. >> xpath=.. >> xpath=..");
	}

	async getDateParentDiv(element: Locator): Promise<Locator> {
		return element.locator("xpath=.. >> xpath=.. >> xpath=.. >> xpath=.. >> xpath=.. >> xpath=..");
	}

	// async selectDate(element: Locator, year: string, month: string, day: string,): Promise<void> {
	// 	await this.waitForElementLoad();
	// 	await (await this.getDateIcon(element)).click();
	// 	await this.yearArrowCalendar.nth(0).click();
	// 	await this.page.locator(`.PrivatePickersYear-yearButton:has-text('${year}')`).click();
	// 	await this.findMonth(month);
	// 	await this.page.locator(`text=${day}`).nth(0).click();
	// }

	// async findMonth(month: string): Promise<void> {
	// 	let calendar = "";
	// 	let isMonth = true;
	// 	while (isMonth) {
	// 		calendar = await this.monthCalendar.textContent();
	// 		if (calendar.toLowerCase() != month.toLowerCase()) {
	// 			await this.rightArrowCalendar.click();
	// 		} else {
	// 			isMonth = false;
	// 		}
	// 	}
	// }
}
