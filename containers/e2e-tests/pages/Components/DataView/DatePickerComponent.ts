import { Locator, Page } from "@playwright/test";
import { getMonthNumber } from "../../../utils/helpers/dateHelper";

export class DatePickerComponent {
	readonly page: Page;

	readonly datepickerDiv: Locator;
	readonly year: Locator;
	readonly selectorYear: Locator;
	readonly leftArrow: Locator;
	readonly rightArrow: Locator;
	readonly selectorDay: Locator;
	readonly monthLabel: Locator;
	readonly okBtn: Locator;

	constructor(page: Page) {
		this.page = page;
		this.datepickerDiv = page.locator("div[role='dialog']");
		this.year = page.getByLabel('calendar view is open, switch');
		this.selectorYear = page.locator(".MuiPickersYear-root");
		this.leftArrow = page.locator("button[title='Previous month']");
		this.rightArrow = page.locator("button[title='Next month']");
		this.selectorDay = page.locator("button[role='gridcell']");
		this.monthLabel = page.locator("[role='presentation'] .PrivatePickersFadeTransitionGroup-root");
	}

	async selectYear(year: string): Promise<void> {
		await this.page.locator("button", { hasText: year } ).click();
	}

	async selectDay(day: string): Promise<void> {
		await this.selectorDay.locator(`text=${day}`).nth(0).click();
	}

	async findMonth(month: string): Promise<void> {
		let isMonth = true;
		const expectedMonthNumber = getMonthNumber(month);
		while (isMonth) {
			const currentMonth = (await this.monthLabel.textContent()).split(" ")[0];
			const currentMonthNumber = getMonthNumber(currentMonth);
			if (currentMonthNumber > expectedMonthNumber) {
				await this.leftArrow.click();
			} else if (currentMonthNumber < expectedMonthNumber) {
				await this.rightArrow.click();
			} else {
				isMonth = false;
			}
		}
	}

	async selectDate(date: string): Promise<void> {
		const values = date.split(" ");
		await this.year.click();
		await this.selectYear(values[0]);
		await this.findMonth(values[1]);
		await this.selectDay(values[2]);
	}
}
