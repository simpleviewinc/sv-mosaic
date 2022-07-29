import { Locator, Page } from "@playwright/test";
import { BasePage } from "../BasePage";
import { randomIntFromInterval } from "../../utils/helpers/helper";

export class FormFieldDateFieldPage extends BasePage {

	readonly page_path = "formfields-formfielddatefield--kitchen-sink";

	readonly page: Page;
	readonly singleDateCalendarInput: Locator;
	readonly singleDateCalendarButton: Locator;
	readonly calendarCell: Locator;
	readonly disabledSingleDateCalendarText: Locator;
	readonly dateTimeInput: Locator;
	readonly dateHourInput: Locator;
	readonly dateTimeInputCalendarButton: Locator;
	readonly dateHourInputCalendarButton: Locator;
	readonly hourMinutesOption: Locator;
	readonly hourAMButton: Locator;
	readonly hourPMButton: Locator;
	readonly disableDateAndTimeCalendarText: Locator;
	readonly requiredDateTimeInput: Locator;
	readonly requiredDateHourInput: Locator;
	readonly requiredDateTimeInputCalendarButton: Locator;
	readonly requiredDateHourInputCalendarButton: Locator;
	readonly requiredFieldErrorMessage: Locator;

	
	constructor(page: Page) {
		super(page);
		this.page = page;
		this.singleDateCalendarInput = page.locator("#mui-11");
		this.singleDateCalendarButton = page.locator("//*[@id='root']/div/form/div[2]/div[1]/div/div/div/div/div[1]/div[2]/div/div/div/div/div/button");
		this.calendarCell = page.locator("[role='cell'] button");
		this.disabledSingleDateCalendarText = page.locator("//*[@id='root']/div/form/div[2]/div[2]/div/div/div/div/div[1]/div[2]/span");

		this.dateTimeInput = page.locator("#mui-12");
		this.dateHourInput = page.locator("#mui-13");
		this.dateTimeInputCalendarButton = page.locator("//*[@id='root']/div/form/div[2]/div[3]/div/div/div/div/div[1]/div[2]/div[1]/div/div/div/div/button");
		this.dateHourInputCalendarButton = page.locator("//*[@id='root']/div/form/div[2]/div[3]/div/div/div/div/div[1]/div[2]/div[2]/div/div/div/div/button");
		this.hourMinutesOption = page.locator("[role='option']")
		this.hourAMButton = page.locator("[role='dialog'] .MuiClockPicker-root button").nth(2);
		this.hourPMButton = page.locator("[role='dialog'] .MuiClockPicker-root button").nth(3);
		this.disableDateAndTimeCalendarText = page.locator("//*[@id='root']/div/form/div[2]/div[4]/div/div/div/div/div[1]/div[2]");

		this.requiredDateTimeInput = page.locator("#mui-14");
		this.requiredDateHourInput = page.locator("#mui-15");
		this.requiredDateTimeInputCalendarButton = page.locator("//*[@id='root']/div/form/div[2]/div[5]/div/div/div/div/div[1]/div[2]/div[1]/div/div/div/div/button");
		this.requiredDateHourInputCalendarButton = page.locator("//*[@id='root']/div/form/div[2]/div[5]/div/div/div/div/div[1]/div[2]/div[2]/div/div/div/div/button");
		this.requiredFieldErrorMessage = page.locator("p.Mui-error");
	}

	async visitPage(): Promise<void> {
		await this.visit(this.page_path, this.title);
	}

	async selectDayFromDatePicker(day:number): Promise<void> {
		await this.calendarCell.nth(day - 1).click();
	}

	async selectHourAndMinutesInHourPicker(timeOfDay:string): Promise<string> {
		if (timeOfDay.toLocaleUpperCase() == "AM") {
			await this.hourAMButton.click();
		} else {
			await this.hourPMButton.click();
		}
		// Selecting a random hour
		const hours = await this.hourMinutesOption.count();
		const selectedHour = randomIntFromInterval(1, hours);
		const hourString = ((await this.hourMinutesOption.nth(selectedHour - 1).getAttribute("aria-label")).split(" ")[0]).padStart(2, "0");
		await this.hourMinutesOption.nth(selectedHour - 1).click({ force: true });

		// Selecting a random minute
		const minutes = await this.hourMinutesOption.count();
		const selectedMinutes = randomIntFromInterval(1, minutes);
		const minuteString = (await this.hourMinutesOption.nth(selectedMinutes - 1).getAttribute("aria-label")).split(" ")[0];
		await this.hourMinutesOption.nth(selectedMinutes - 1).click({ force: true });
		
		return hourString + ":" + minuteString + " " + timeOfDay.toLocaleUpperCase();
	}
	
	
}