import { FieldDef } from "@root/components/Field";
import { render } from "@testing-library/react";
import * as React from "react";
import DateField from ".";
import { DateFieldDef } from "./DateFieldTypes";
import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom";
import { validateDateRange } from "@root/forms/Form/validators";

describe("DateField component", () => {
	it("Should display the date value", () => {
		render(
			<DateField
				fieldDef={{
					name: "date",
					type: "date",
					label: "Date Input",
					required: false,
					disabled: false,
					inputSettings: {
						showTime: false
					}
				} as FieldDef<DateFieldDef>}
				value="2022-01-01T00:00:00.000Z"

			/>
		);
		expect(screen.getByDisplayValue("01/01/2022")).toBeInTheDocument();

	});

	it("Should display the placeholder when date is disabled and no value is provided", () => {
		const { getByText } = render(
			<DateField
				fieldDef={{
					name: "disableDate",
					type: "date",
					label: "Disable Date Input",
					required: false,
					disabled: true,
					inputSettings: {
						showTime: false
					}
				} as FieldDef<DateFieldDef>}
				value={null}
			/>
		);
		expect(getByText("MM / DD / YYYY")).toBeTruthy();
	});

	it("Should display the date time values", () => {
		render(
			<DateField
				fieldDef={{
					name: "dateTime",
					type: "date",
					label: "Date Time Input",
					required: false,
					disabled: false,
					inputSettings: {
						showTime: true
					}
				} as FieldDef<DateFieldDef>}
				value="2022-01-01T13:30:00.000Z"
			/>
		);
		expect(screen.getByDisplayValue("01/01/2022")).toBeInTheDocument();
		expect(screen.getByDisplayValue("01:30 PM")).toBeInTheDocument();
	});

	it("Should display the placeholders when date time is disabled and no value is provided", () => {
		const { getByText } = render(
			<DateField
				fieldDef={{
					name: "disableDateTime",
					type: "date",
					label: "Disable Date Time Input",
					required: false,
					disabled: true,
					inputSettings: {
						showTime: true
					}
				} as FieldDef<DateFieldDef>}
				value={null}

			/>
		);
		expect(getByText("MM / DD / YYYY")).toBeTruthy();
		expect(getByText("00:00 AM/PM")).toBeTruthy();
	});
});

describe("Date range validator", () => {
	it("should return an error message since the start date is happening after the end date", async() => {
		const startDate = "2022-03-03T18:49:00.000Z";
		const data = {
			endDate: "2020-03-04T18:38:00.000Z"
		}
		const options = { endDateName: "endDate" };
		const result = {
			type: "validateDateRange",
			errorMessage: "Start date should happen before the end date"
		}

		expect(validateDateRange(startDate, data, options)).toEqual(result);
	});

	it("should not return an error message since the stat date is happening before the end date", async() => {
		const startDate = "2020-03-03T18:49:00.000Z";
		const data = {
			endDate: "2022-03-04T18:38:00.000Z"
		}
		const options = { endDateName: "endDate" };
		const result = {
			type: "validateDateRange",
			errorMessage: undefined
		}

		expect(validateDateRange(startDate, data, options)).toEqual(result);
	});

	it("should not return an error message since the stat date is happening before the end date", async() => {
		expect(validateDateRange(null, null, null)).toEqual(undefined);
	});
});
