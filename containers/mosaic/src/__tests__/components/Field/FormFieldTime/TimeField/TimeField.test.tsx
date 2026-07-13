import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as React from "react";
import type { TimeData } from "@root/components/Field/FormFieldTime/TimeField";
import TimeField from "@root/components/Field/FormFieldTime/TimeField";

function setup({ value }: { value?: TimeData } = {}) {
	const onChange = vi.fn();
	const user = userEvent.setup();

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

	const hoursSection = screen.getByRole("spinbutton", { name: "Hours" });
	expect(hoursSection).toBeInTheDocument();

	return { onChange, hoursSection, user };
}

describe("TimeField component", () => {
	it("Should display the time value", () => {
		setup({
			value: {
				time: new Date("2022-01-01T18:30:00.000Z"),
			},
		});

		expect(screen.getByRole("spinbutton", { name: "Hours" })).toHaveTextContent("06");
		expect(screen.getByRole("spinbutton", { name: "Minutes" })).toHaveTextContent("30");
		expect(screen.getByRole("spinbutton", { name: "Meridiem" })).toHaveTextContent("pm");
	});

	it("Should emit the correct date object with a valid input", async () => {
		const { hoursSection, onChange, user } = setup();

		await user.click(hoursSection);
		await user.paste("06:30 am");

		expect(onChange).toHaveBeenCalledWith({
			time: new Date(new Date().setHours(6, 30, 0, 0)),
			keyboardInputValue: "06:30 am",
			usingDefaultTime: false,
		});
	});

	it("Should not emit a valid time for an invalid input", async () => {
		const { hoursSection, onChange, user } = setup();

		await user.click(hoursSection);
		await user.paste("25:95");

		const calledWithValidTime = onChange.mock.calls.some(
			([arg]) => arg?.time instanceof Date && !isNaN(arg.time.getTime()) && arg.usingDefaultTime === false,
		);
		expect(calledWithValidTime).toBe(false);
	});

	it("Should emit the correct date object with an empty input", async () => {
		const { hoursSection, onChange, user } = setup({
			value: {
				time: new Date("2022-01-01T06:30:00.000Z"),
			},
		});

		await user.click(hoursSection);
		await user.clear(hoursSection);
		await user.clear(screen.getByRole("spinbutton", { name: "Minutes" }));
		await user.clear(screen.getByRole("spinbutton", { name: "Meridiem" }));

		expect(onChange).toHaveBeenCalledWith({
			time: null,
			keyboardInputValue: undefined,
			usingDefaultTime: true,
		});
	});
});
