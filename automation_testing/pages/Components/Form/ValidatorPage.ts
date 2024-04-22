import { Locator, Page } from "@playwright/test";
import { BasePage } from "../../BasePage";
import { DatePickerComponent } from "../DataView/DatePickerComponent";

export class ValidatorPage extends BasePage {

	readonly page_path = "components-form--validators";

	readonly page: Page;
	readonly datepicker: DatePickerComponent;

	readonly title: Locator;
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
		this.requiredTitle = page.locator("#required label[for='required-input']");
		this.requireField = page.locator("input#required-input");
		this.emailField = page.locator("input#email-input");
		this.slowField = page.locator("input#slow-input");
		this.numberField = page.locator("input#number-input");
		this.urlField = page.locator("input#url-input");
		this.startDateInput = page.locator("#startDate input");
		this.startDateButton = page.locator("#startDate button");
		this.endDateInput = page.locator("#endDate input");
		this.endDateButton = page.locator("#endDate button");
		this.inputError = page.locator(".Mui-error");
		this.calendarPicker = page.locator(".MuiCalendarPicker-root");
		this.rightArrowCalendar = page.locator("[data-testid='ArrowRightIcon']");
		this.leftArrowCalendar = page.locator("[data-testid='ArrowLeftIcon']");
		this.yearArrowCalendar = page.locator("[role='presentation'] .MuiIconButton-root.MuiIconButton-sizeSmall");
		this.monthCalendar = page.locator("[role='presentation'] .PrivatePickersFadeTransitionGroup-root").nth(0);
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
}
