import { Locator, Page } from "@playwright/test";
import { url } from "../utils/formUrls";
import { BasePage } from "./BasePage";

export class ValidatorPage extends BasePage {

	readonly page: Page;
	readonly fields: string;
	readonly title: Locator;
	readonly saveBtn: Locator;
	readonly cancelBtn: Locator;
	readonly error: Locator;
	readonly errorIcon: Locator;
	readonly requiredTitle: Locator;
	readonly requireField: Locator;
	readonly emailField: Locator;
	readonly numberField: Locator;
	readonly urlField: Locator;
	readonly startDate: Locator;
	readonly endDate: Locator;
	readonly inputError: Locator;
	readonly calendarPicker: Locator;
	readonly rightArrowCalendar: Locator;
	readonly leftArrowCalendar: Locator;
	readonly yearArrowCalendar: Locator;
	readonly monthCalendar: Locator;

	constructor(page: Page) {
		super(page);
		this.page = page;
		this.fields = ".MuiInputBase-colorPrimary";
		this.title = page.locator("text=Validators story");
		this.saveBtn = page.locator("text=Save");
		this.cancelBtn = page.locator("text=Cancel");
		this.error = page.locator(".Mui-error.MuiFormHelperText-root");
		this.errorIcon = page.locator("[data-testid='error-icon-test-id']");
		this.requiredTitle = page.locator("[for='required']");
		this.requireField = page.locator(this.fields).nth(0).locator("input");
		this.emailField = page.locator(this.fields).nth(1).locator("input");
		this.numberField = page.locator(this.fields).nth(3).locator("input");
		this.urlField = page.locator(this.fields).nth(4).locator("input");
		this.startDate = page.locator(this.fields).nth(5).locator("input");
		this.endDate = page.locator(this.fields).nth(6).locator("input");
		this.inputError = page.locator(".Mui-error");
		this.calendarPicker = page.locator(".MuiCalendarPicker-root");
		this.rightArrowCalendar = page.locator("[data-testid='ArrowRightIcon']");
		this.leftArrowCalendar = page.locator("[data-testid='ArrowLeftIcon']");
		this.yearArrowCalendar = page.locator("[role='presentation'] .MuiIconButton-root.MuiIconButton-sizeSmall");
		this.monthCalendar = page.locator("[role='presentation'] .PrivatePickersFadeTransitionGroup-root").nth(0);
	}

	async visit(): Promise<void> {
		await this.page.goto(url("validator"), { timeout: 900000 });
		await this.title.waitFor();
	}

	async getDateIcon(field: Locator): Promise<Locator> {
		return await field.locator("xpath=..").locator("button.MuiIconButton-sizeMedium");
	}

	async dateValidation(element: Locator, date: string): Promise<void> {
		const dateType = (date == "start") ? this.startDate : this.endDate;
		await this.validateSnapshot(await this.getDateIcon(await dateType), `${date}_date_icon`);
	}

	async getParentDiv(element: Locator): Promise<Locator> {
		return element.locator("xpath=.. >> xpath=.. >> xpath=..");
	}

	async getDateParentDiv(element: Locator): Promise<Locator> {
		return element.locator("xpath=.. >> xpath=.. >> xpath=.. >> xpath=.. >> xpath=.. >> xpath=..");
	}

	async selectDate(element: Locator, year: string, month: string, day: string,): Promise<void> {
		await (await this.getDateIcon(await element)).click();
		await this.yearArrowCalendar.click();
		await this.page.locator(`.PrivatePickersYear-yearButton:has-text('${year}')`).click();
		await this.findMonth(month);
		await this.page.locator(`text=${day}`).nth(0).click();

	}

	async findMonth(month: string): Promise<void> {
		let calendar = "";
		let isMonth = true;
		while (isMonth) {
			calendar = await this.monthCalendar.textContent();
			if (calendar.toLowerCase() != month.toLowerCase()) {
				await this.rightArrowCalendar.click();
			} else {
				isMonth = false;
			}
		}
	}
}