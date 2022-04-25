import { FieldDef } from "@root/components/Field";
import { render } from "@testing-library/react";
import * as React from "react";
import DateField from ".";
import { DateFieldDef } from "./DateFieldTypes";
import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom";

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