import { act, fireEvent, render, screen } from "@testing-library/react";
import * as React from "react";

import NumberField from "@root/components/Field/FormFieldNumber";

describe("NumberField component", () => {
	it("should dispatch a change event a float value with a sign", async () => {
		const mockOnChange = vi.fn();

		render(
			<NumberField
				fieldDef={{
					name: "numberField",
					type: "number",
				}}
				onChange={mockOnChange}
			/>,
		);

		fireEvent.change(screen.getByRole("textbox"), { target: { value: "-123.123" } } );
		expect(mockOnChange).toBeCalledWith("-123.123");
	});

	it("should dispatch a change event a whole number with a sign", async () => {
		const mockOnChange = vi.fn();

		render(
			<NumberField
				fieldDef={{
					name: "numberField",
					type: "number",
				}}
				onChange={mockOnChange}
			/>,
		);

		fireEvent.change(screen.getByRole("textbox"), { target: { value: "-123" } } );
		expect(mockOnChange).toBeCalledWith("-123");
	});

	it("should dispatch a change event with a trailing period", async () => {
		const mockOnChange = vi.fn();

		render(
			<NumberField
				fieldDef={{
					name: "numberField",
					type: "number",
				}}
				onChange={mockOnChange}
			/>,
		);

		fireEvent.change(screen.getByRole("textbox"), { target: { value: "123." } } );
		expect(mockOnChange).toBeCalledWith("123.");
	});
});

describe("NumberField component invalid entries", () => {
	it("should not dispatch a change event if an invalid character is entered", async () => {
		const mockOnChange = vi.fn();

		render(
			<NumberField
				fieldDef={{
					name: "numberField",
					type: "number",
				}}
				onChange={mockOnChange}
			/>,
		);

		fireEvent.change(screen.getByRole("textbox"), { target: { value: "123g" } } );
		expect(mockOnChange).not.toBeCalled();
	});

	it("should not dispatch a change event if a duplicate decimal point is entered", async () => {
		const mockOnChange = vi.fn();

		render(
			<NumberField
				fieldDef={{
					name: "numberField",
					type: "number",
				}}
				onChange={mockOnChange}
			/>,
		);

		fireEvent.change(screen.getByRole("textbox"), { target: { value: "123.." } } );
		expect(mockOnChange).not.toBeCalled();
	});

	it("should not dispatch a change event if a decimal point is entered and no decimal places are allowed", async () => {
		const mockOnChange = vi.fn();

		render(
			<NumberField
				fieldDef={{
					name: "numberField",
					type: "number",
					inputSettings: {
						decimalPlaces: 0,
					},
				}}
				onChange={mockOnChange}
			/>,
		);

		fireEvent.change(screen.getByRole("textbox"), { target: { value: "123." } } );
		expect(mockOnChange).not.toBeCalled();
	});

	it("should not dispatch a change event if more decimal places are entered than is allowed", async () => {
		const mockOnChange = vi.fn();

		render(
			<NumberField
				fieldDef={{
					name: "numberField",
					type: "number",
					inputSettings: {
						decimalPlaces: 2,
					},
				}}
				onChange={mockOnChange}
			/>,
		);

		fireEvent.change(screen.getByRole("textbox"), { target: { value: "123.123" } } );
		expect(mockOnChange).not.toBeCalled();
	});

	it("should not dispatch a change event if a sign is entered that is not allowed", async () => {
		const mockOnChange = vi.fn();

		render(
			<NumberField
				fieldDef={{
					name: "numberField",
					type: "number",
					inputSettings: {
						sign: "positive",
					},
				}}
				onChange={mockOnChange}
			/>,
		);

		fireEvent.change(screen.getByRole("textbox"), { target: { value: "-123.123" } } );
		expect(mockOnChange).not.toBeCalled();
	});

});

describe("NumberField component tooltip warning", () => {

	it("should show a tooltip warning if an invalid entry is made and then hide it shortly after", async () => {
		render(
			<NumberField
				fieldDef={{
					name: "numberField",
					type: "number",
				}}
			/>,
		);

		await act(async () => {
			fireEvent.change(screen.getByRole("textbox"), { target: { value: ".." } } );
		});

		expect(screen.queryByText("Must be a numerical value.")).not.toBeNull();

		await act(async () => {
			await new Promise((r) => setTimeout(r, 3500));
		});

		expect(screen.queryByText("Must be a numerical value.")).toBeNull();

	});

	it("should show a tooltip warning if an invalid entry is made and the hide it if the field is blurred", async () => {
		render(
			<NumberField
				fieldDef={{
					name: "numberField",
					type: "number",
				}}
			/>,
		);

		await act(async () => {
			fireEvent.change(screen.getByRole("textbox"), { target: { value: ".." } } );
		});

		expect(screen.queryByText("Must be a numerical value.")).not.toBeNull();

		await act(async () => {
			fireEvent.blur(screen.getByRole("textbox"));
		});

		expect(screen.queryByText("Must be a numerical value.")).toBeNull();

	});

	it("should show a tooltip warning if an invalid entry is made and the hide it if a valid entry is made", async () => {
		render(
			<NumberField
				fieldDef={{
					name: "numberField",
					type: "number",
				}}
			/>,
		);

		await act(async () => {
			fireEvent.change(screen.getByRole("textbox"), { target: { value: "123e" } } );
		});

		expect(screen.queryByText("Must be a numerical value.")).not.toBeNull();

		await act(async () => {
			fireEvent.change(screen.getByRole("textbox"), { target: { value: "1234" } } );
		});

		expect(screen.queryByText("Must be a numerical value.")).toBeNull();

	});

	it("should show a more descriptive tooltip warning if decimal places are allowed", async () => {
		render(
			<NumberField
				fieldDef={{
					name: "numberField",
					type: "number",
					inputSettings: {
						decimalPlaces: 2,
					},
				}}
			/>,
		);

		await act(async () => {
			fireEvent.change(screen.getByRole("textbox"), { target: { value: "123e" } } );
		});

		expect(screen.queryByText("Must be a numerical value with a maximum of 2 decimal places.")).not.toBeNull();

	});

	it("should show a more descriptive tooltip warning if a specific sign must be used", async () => {
		render(
			<NumberField
				fieldDef={{
					name: "numberField",
					type: "number",
					inputSettings: {
						sign: "negative",
					},
				}}
			/>,
		);

		await act(async () => {
			fireEvent.change(screen.getByRole("textbox"), { target: { value: "123e" } } );
		});

		expect(screen.queryByText("Must be a negative numerical value.")).not.toBeNull();

	});
});
