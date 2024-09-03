import { act, render, fireEvent } from "@testing-library/react";
import * as React from "react";
import TimeField, { TimeData } from "@root/components/Field/FormFieldTime/TimeField";
import { screen } from "@testing-library/dom";

function setup({ value }: { value?: TimeData } = {}) {
	const onChange = vi.fn();

	render(
		<TimeField
			fieldDef={{
				name: "time",
				type: "time",
				label: "Time Input",
				required: false,
				disabled: false,
			}}
			onChange={onChange}
			value={value}
		/>,
	);

	const input = screen.getByRole("textbox");
	expect(input).toBeInTheDocument();

	return { onChange, input };
}

describe("TimeField component", () => {
	it("Should display the time value", () => {
		setup({
			value: {
				time: new Date("2022-01-01T18:30:00.000Z"),
				validTime: true,
			},
		});
		expect(screen.getByDisplayValue("06:30 pm")).toBeInTheDocument();
	});
	it("Should emit the correct date object with a valid input", () => {
		const { input, onChange } = setup();

		act(() => {
			fireEvent.change(input, { target: { value: "06:30 am" } } );
		});

		expect(onChange).toBeCalledWith(
			expect.objectContaining({
				validTime: true,
			}),
		);
	});
	it("Should emit the correct date object with an invalid input", () => {
		const { input, onChange } = setup();

		act(() => {
			fireEvent.change(input, { target: { value: "25:95" } } );
		});

		expect(onChange).toBeCalledWith(
			expect.objectContaining({
				validTime: false,
			}),
		);
	});
	it("Should emit the correct date object with an empty input", () => {
		const { input, onChange } = setup();

		act(() => {
			fireEvent.change(input, { target: { value: "06:30 am" } } );
			fireEvent.change(input, { target: { value: "" } } );
		});

		expect(onChange).toBeCalledWith(
			expect.objectContaining({
				validTime: false,
			}),
		);
	});
});
