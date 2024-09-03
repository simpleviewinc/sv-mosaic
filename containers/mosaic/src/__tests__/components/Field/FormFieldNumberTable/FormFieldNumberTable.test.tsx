import * as React from "react";
import { ReactElement, useCallback, useMemo } from "react";
import "@testing-library/jest-dom";
import {
	act,
	cleanup,
	fireEvent,
	render,
	screen,
} from "@testing-library/react";
import Form, { useForm } from "@root/components/Form";
import { FieldDef } from "@root/components/Field/FieldTypes";
import { ButtonProps } from "@root/components/Button";
import {
	columns,
	isValidRowCol,
	numberTableDefaultValue,
	rows,
} from "@root/components/Field/FormFieldNumberTable/numberTableUtils";

const NumberTableExample = ({
	displaySumColumn = true,
	displaySumRow = true,
	useNumberFormatter = false,
}: {
	displaySumColumn?: boolean;
	displaySumRow?: boolean;
	useNumberFormatter?: boolean;
}): ReactElement => {
	const controller = useForm();
	const { handleSubmit } = controller;

	const onSubmit = handleSubmit((data) => alert("Form submitted with the following data: " + JSON.stringify(data, null, " ")));

	const fields = useMemo(
		(): FieldDef[] => [
			{
				name: "numberTable",
				label: "Label",
				type: "numberTable",
				inputSettings: {
					displaySumColumn: displaySumColumn,
					displaySumRow: displaySumRow,
					rowTotalLabel: "TOTAL",
					columnTotalLabel: "No. Rooms",
					topLeftLabel: "Day",
					rows: rows,
					columns: columns,
					numberFormatOptions: useNumberFormatter && { style: "currency", currency: "USD" },
				},
			},
		],
		[numberTableDefaultValue, rows, columns],
	);

	const buttons: ButtonProps[] = [
		{
			label: "Save",
			onClick: onSubmit,
			color: "yellow",
			variant: "contained",
		},
	];

	const getFormValues = useCallback(async () => ({
		numberTable: numberTableDefaultValue,
	}), []);

	return (
		<Form
			{...controller}
			buttons={buttons}
			title="Form Title"
			description="This is a description example"
			fields={fields}
			getFormValues={getFormValues}
		/>
	);
};

const mockResizeObserver = vi.fn();
mockResizeObserver.mockReturnValue({
	observe: () => null,
	unobserve: () => null,
	disconnect: () => null,
});
window.ResizeObserver = mockResizeObserver;
const scrollIntoViewMock = vi.fn();
window.HTMLElement.prototype.scrollTo = scrollIntoViewMock;

const labels = {
	rowTotal: "TOTAL",
	columnTotal: "No. Rooms",
	topLeft: "Day",
};

afterEach(cleanup);

describe("FormFieldNumberTable component", () => {
	beforeEach(async () => {
		await act(async () => {
			render(<NumberTableExample />);
		});
	});

	it("should display the totals and top left labels", () => {
		expect(screen.getByText(labels.rowTotal)).toBeInTheDocument();
		expect(screen.getByText(labels.columnTotal)).toBeInTheDocument();
		expect(screen.getByText(labels.topLeft)).toBeInTheDocument();
	});

	it("should display the columns titles", () => {
		for (const column of columns) {
			expect(screen.getByText(column.title as string)).toBeInTheDocument();
		}
	});

	it("should display the rows titles", () => {
		for (const row of rows) {
			if (row.subtitle) {
				expect(screen.getByText(row.subtitle as string)).toBeInTheDocument();
			}
			expect(screen.getByText(row.title as string)).toBeInTheDocument();
		}
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

	it("should validate if a column or row are defined", async () => {
		expect(isValidRowCol("invalidRow", rows)).toBe(false);
		expect(isValidRowCol("invalidColumn", columns)).toBe(false);
		expect(isValidRowCol("2023_02_10", rows)).toBe(true);
		expect(isValidRowCol("single", columns)).toBe(true);
	});
});

describe("FormFieldNumberTable with displaySumRow and displaySumColumn disabled", () => {
	beforeEach(async () => {
		await act(async () => {
			render(<NumberTableExample displaySumColumn={false} displaySumRow={false} />);
		});
	});

	it("should not display the totals for each row and column", () => {
		expect(screen.queryByText(labels.rowTotal)).not.toBeInTheDocument();
		expect(screen.queryByText(labels.columnTotal)).not.toBeInTheDocument();
	});
});

describe("FormFieldNumberTable with formatted values", () => {
	beforeEach(async () => {
		await act(async () => {
			render(<NumberTableExample useNumberFormatter={true} />);
		});
	});

	it("should display the totals formatted", () => {
		expect(screen.queryByText("$307.00")).toBeInTheDocument();
		expect(screen.queryByText("$61.00")).toBeInTheDocument();
		expect(screen.queryByText("$55.00")).toBeInTheDocument();
		expect(screen.queryByText("$52.00")).toBeInTheDocument();
		expect(screen.queryByText("$49.00")).toBeInTheDocument();
		expect(screen.queryByText("$46.00")).toBeInTheDocument();
	});
});
