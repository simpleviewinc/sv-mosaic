import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React, { act } from "react";

import type { DateData, DateFieldInputSettings, MosaicFieldProps } from "@root/components";

import DateField from "@root/components/Field/FormFieldDate/DateField";
import { screen } from "@testing-library/dom";

async function setup({ onChange: providedOnChange, ...props }: MosaicFieldProps<"date", DateFieldInputSettings, DateData>) {
	const onChangeMock = vi.fn();
	const renderResult = await act(() => render(
		<DateField
			onChange={providedOnChange || onChangeMock}
			{...props}
		/>,
	));

	return {
		...renderResult,
		onChangeMock,
		user: userEvent.setup(),
	};
}

describe("DateField component", () => {
	it("Should display the date value", () => {
		setup({
			fieldDef: {
				name: "date",
				type: "date",
				label: "Date Input",
				required: false,
				disabled: false,
				inputSettings: {
					showTime: false,
				},
			},
			value: {
				date: new Date("2022-01-01T00:00:00.000Z"),
				validDate: true,
				time: new Date("2022-01-01T00:00:00.000Z"),
				validTime: true,
			},
		});

		expect(screen.getByDisplayValue("01/01/2022")).toBeInTheDocument();

	});

	it("Should display the date time values", () => {
		setup({
			fieldDef: {
				name: "dateTime",
				type: "date",
				label: "Date Time Input",
				required: false,
				disabled: false,
				inputSettings: {
					showTime: true,
				},
			},
			value: {
				date: new Date("2022-01-01T13:30:00.000Z"),
				validDate: true,
				time: new Date("2022-01-01T13:30:00.000Z"),
				validTime: true,
			},
		});

		expect(screen.getByDisplayValue("01/01/2022")).toBeInTheDocument();
		expect(screen.getByDisplayValue("01:30 pm")).toBeInTheDocument();
	});

	it("should trigger a time change if a default time is provided but there is no value", async () => {
		const onChangeMock = vi.fn(async (value) => {
			if (typeof value === "function") {
				return;
			}

			expect(value).toBeDefined();
			expect(value.time).toBeInstanceOf(Date);
			expect(value.time?.getHours()).toBe(23);
			expect(value.time?.getMinutes()).toBe(59);
		});

		await setup({
			fieldDef: {
				name: "dateTime",
				type: "date",
				label: "Date Time Input",
				inputSettings: {
					showTime: true,
					defaultTime: "23:59",
				},
			},
			onChange: onChangeMock,
		});
	});

	it("should not trigger a change if a default time is provided but there is a value", async () => {
		const { onChangeMock } = await setup({
			fieldDef: {
				name: "dateTime",
				type: "date",
				label: "Date Time Input",
				inputSettings: {
					showTime: true,
					defaultTime: "23:59",
				},
			},
			value: {
				date: new Date(25, 12, 24, 11, 30),
				validDate: true,
				time: new Date(25, 12, 24, 11, 30),
				validTime: true,
			},
		});

		expect(onChangeMock).not.toBeCalled();
	});
});
