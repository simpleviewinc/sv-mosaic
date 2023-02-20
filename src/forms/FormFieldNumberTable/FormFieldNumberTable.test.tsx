import * as React from "react";
import { ReactElement, useMemo } from "react";
import "@testing-library/jest-dom";
import {
	act,
	cleanup,
	fireEvent,
	render,
	screen,
} from "@testing-library/react";
import Form, { useForm, formActions } from "@root/components/Form";
import { FieldDef } from "@root/components/Field/FieldTypes";
import { ButtonProps } from "@root/components/Button";
import { columns, numberTableDefaultValue, rows } from "./numberTableUtils";

const NumberTableExample = (): ReactElement => {
	const { state, dispatch } = useForm();

	const onSubmit = async () => {
		const { valid, data } = await dispatch(formActions.submitForm());
		if (!valid) return;

		alert("Form submitted with the following data: " + JSON.stringify(data, null, " "));
	};

	const fields = useMemo(
		(): FieldDef[] => [
			{
				name: "numberTable",
				label: "Label",
				type: "numberTable",
				defaultValue: numberTableDefaultValue,
				inputSettings: {
					rowTotalLabel: "TOTAL",
					columnTotalLabel: "No. Rooms",
					topLeftLabel: "Day",
					rows: rows,
					columns: columns
				},
			},
		],
		[
			numberTableDefaultValue,
			rows,
			columns
		]
	);

	const buttons: ButtonProps[] = [
		{
			label: "Save",
			onClick: onSubmit,
			color: "yellow",
			variant: "contained",
		},
	];

	return (
		<Form
			buttons={buttons}
			title="Form Title"
			description="This is a description example"
			state={state}
			fields={fields}
			dispatch={dispatch}
		/>
	);
};


const mockResizeObserver = jest.fn();
mockResizeObserver.mockReturnValue({
	observe: () => null,
	unobserve: () => null,
	disconnect: () => null
});
window.ResizeObserver = mockResizeObserver;
const scrollIntoViewMock = jest.fn();
window.HTMLElement.prototype.scrollTo = scrollIntoViewMock;


afterEach(cleanup);

describe("FormFieldMatrix component", () => {
	beforeEach(async () => {
		await act(() => {
			render(
				<NumberTableExample/>
			)
		});
	});

	it("should display the totals and top left labels", () => {
		expect(screen.getByText("TOTAL")).toBeInTheDocument();
		expect(screen.getByText("No. Rooms")).toBeInTheDocument();
		expect(screen.getByText("TOTAL")).toBeInTheDocument();
		expect(screen.getByText("Day")).toBeInTheDocument();
	});

	it("should display the columns titles", () => {
		expect(screen.getByText("Single")).toBeInTheDocument();
		expect(screen.getByText("Double")).toBeInTheDocument();
		expect(screen.getByText("Queen")).toBeInTheDocument();
		expect(screen.getByText("King")).toBeInTheDocument();
		expect(screen.getByText("Suite")).toBeInTheDocument();
		expect(screen.getByText("Any")).toBeInTheDocument();
	});

	it("should display the columns titles", () => {
		expect(screen.getByText("Single")).toBeInTheDocument();
		expect(screen.getByText("Double")).toBeInTheDocument();
		expect(screen.getByText("Queen")).toBeInTheDocument();
		expect(screen.getByText("King")).toBeInTheDocument();
		expect(screen.getByText("Suite")).toBeInTheDocument();
		expect(screen.getByText("Any")).toBeInTheDocument();
	});

	it("should display 24 fields since the table size is 6x4", () => {
		const inputs = screen.getAllByPlaceholderText("0");

		expect(inputs.length).toBe(24);
	});

	it("should update the total of the 'Day 3' row and column 'Single' when an input changes", async () => {
		const input = screen.getByTestId("2023_02_13-single");

		expect(screen.getByText("43")).toBeInTheDocument(); // Current total column
		expect(screen.getByText("6")).toBeInTheDocument(); // Current total row

		await act(async () => {
			fireEvent.change(input, { target: { value: "2" } });
		});

		expect(screen.getByText("44")).toBeInTheDocument(); // Total column updated
		expect(screen.getByText("7")).toBeInTheDocument(); // Total row updated
	});
});
