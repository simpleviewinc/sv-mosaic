import { Locator, Page } from "@playwright/test";
import { date } from "@storybook/addon-knobs";
import { getMonthFromString } from "../utils/helpers/helper";

export class DatePickerComponent {
	readonly page: Page;

	readonly datepickerDiv: Locator;
	readonly year: Locator;
	readonly selectorYear: Locator;
	readonly leftArrow: Locator;
	readonly rightArrow: Locator;
	readonly selectorDay: Locator;
	readonly monthLabel: Locator;
	readonly clearBtn: Locator;
	readonly cancelBtn: Locator;
	readonly okBtn: Locator;

	constructor(page: Page) {
		this.page = page;

		this.datepickerDiv = page.locator("div.MuiDialog-paper");
		this.year = page.locator("h6");
		this.selectorYear = page.locator(".MuiPickersYear-root");
		this.leftArrow = page.locator(".MuiPickersCalendarHeader-iconButton").nth(0);
		this.rightArrow = page.locator(".MuiPickersCalendarHeader-iconButton").nth(1);
		this.selectorDay = page.locator(".MuiPickersDay-day");
		this.monthLabel = page.locator(".MuiPickersCalendarHeader-transitionContainer.MuiPickersSlideTransition-transitionContainer");
		this.clearBtn = this.datepickerDiv.locator("text=Clear");
		this.cancelBtn = this.datepickerDiv.locator("text=Cancel");
		this.okBtn = this.datepickerDiv.locator("text=OK");
	}

	async selectYear(year: string): Promise<void> {
		await this.selectorYear.locator(`text=${year}`).click();
	}

	async selectDay(day: string): Promise<void> {
		await this.selectorDay.locator(`text=${day}`).nth(0).click();
	}

	async findMonth(month: string): Promise<void> {
		let isMonth = true;
		while (isMonth) {
			const calendar = (await this.monthLabel.textContent()).split(" ")[0];
			const currentMonth = await getMonthFromString(calendar);
			const expectedMonth = await getMonthFromString(month);
			if (currentMonth > expectedMonth) {
				await this.leftArrow.click();
			} else if (currentMonth < expectedMonth) {
				await this.rightArrow.click();
			} else {
				isMonth = false;
			}
		}
	}

	async selectDate(date: string): Promise<void> {
		const values = date.split(" ")
		await this.year.click();
		await this.selectYear(values[0]);
		await this.findMonth(values[1]);
		await this.selectDay(values[2]);
	}
}