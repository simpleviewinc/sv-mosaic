import type { Locator, Page } from "@playwright/test";
import { BasePage } from "../../BasePage";
import { randomIntFromInterval } from "../../../utils/helpers/helper";

export class FormFieldDateFieldPage extends BasePage {

	readonly page_path = "formfields-formfielddatefield--kitchen-sink";
	readonly playground_page_path = "formfields-formfielddatefield--playground";

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
	readonly requiredDateTimeInput: Locator;
	readonly requiredDateHourInput: Locator;
	readonly requiredDateTimeInputCalendarButton: Locator;
	readonly requiredDateHourInputCalendarButton: Locator;
	readonly dateFieldText: Locator;

	constructor(page: Page) {
		super(page);
		this.page = page;
		// In the accessible field DOM structure, date/time pickers render a hidden <input>
		// (aria-hidden, tabindex=-1) that holds the formatted value. That hidden input is
		// not directly typeable, so use fillDatePicker() to enter values via section paste.
		this.singleDateCalendarInput = page.locator("[data-testid='date-picker-test-id']").nth(0).locator("input");
		this.singleDateCalendarButton = page.locator("[data-testid='date-picker-test-id'] button").nth(0);
		this.calendarCell = page.locator("[role='row'] button");
		this.disabledSingleDateCalendarText = page.locator("#disableSingleDate");

		this.dateTimeInput = page.locator("[data-testid='date-picker-test-id']").nth(1).locator("input");
		this.dateHourInput = page.locator("[data-testid='field-test-id']").nth(0).locator("input");
		this.dateTimeInputCalendarButton = page.locator("[data-testid='date-picker-test-id'] button").nth(1);
		this.dateHourInputCalendarButton = page.locator("[data-testid='field-test-id'] button").nth(2);
		this.hourMinutesOption = this.roleOptionLocator;
		this.hourAMButton = page.locator("[role='dialog'] .MuiTimeClock-root button").nth(0);
		this.hourPMButton = page.locator("[role='dialog'] .MuiTimeClock-root button").nth(1);

		this.requiredDateTimeInput = page.locator("[data-testid='date-picker-test-id']").nth(3).locator("input");
		this.requiredDateHourInput = page.locator("[data-testid='field-test-id']").nth(3).locator("input");
		this.requiredDateTimeInputCalendarButton = page.locator("[data-testid='date-picker-test-id'] button").nth(3);
		this.requiredDateHourInputCalendarButton = page.locator("[data-testid='field-test-id'] button").nth(6);
		this.dateFieldText = page.locator("#date p").first();
	}

	/**
	 * Enter a date or time value into an accessible picker field by dispatching a paste
	 * event directly on the first spinbutton section. MUI X's section paste handler
	 * recognises full date/time strings (those containing "/" or ":") and delegates to
	 * `updateValueFromValueStr` which parses and populates all sections at once.
	 */
	async fillDatePicker(container: Locator, value: string): Promise<void> {
		const spinbutton = container.getByRole("spinbutton").first();
		await spinbutton.click();
		await spinbutton.evaluate((el, text) => {
			const dataTransfer = new DataTransfer();
			dataTransfer.setData("text/plain", text);
			el.dispatchEvent(new ClipboardEvent("paste", { clipboardData: dataTransfer, bubbles: true }));
		}, value);
	}

	async selectDayFromDatePicker(day:number): Promise<void> {
		await this.calendarCell.nth(day - 1).click();
	}

	async selectHourAndMinutesInHourPicker(timeOfDay:string): Promise<string> {
		if (timeOfDay.toLocaleLowerCase() == "am") {
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

		return hourString + ":" + minuteString + " " + timeOfDay;
	}
}
