import { render } from "@testing-library/react";
import * as React from "react";
import DateField from "@root/components/Field/FormFieldDate/DateField";
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
						showTime: false,
					},
				}}
				value={{
					date: new Date("2022-01-01T00:00:00.000Z"),
					validDate: true,
					time: new Date("2022-01-01T00:00:00.000Z"),
					validTime: true,
				}}

			/>,
		);
		expect(screen.getByDisplayValue("01/01/2022")).toBeInTheDocument();

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
						showTime: true,
					},
				}}
				value={{
					date: new Date("2022-01-01T13:30:00.000Z"),
					validDate: true,
					time: new Date("2022-01-01T13:30:00.000Z"),
					validTime: true,
				}}
			/>,
		);

		expect(screen.getByDisplayValue("01/01/2022")).toBeInTheDocument();
		expect(screen.getByDisplayValue("01:30 pm")).toBeInTheDocument();
	});
});
