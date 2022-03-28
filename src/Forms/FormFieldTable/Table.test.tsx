import * as React from "react";
import { useState } from "react";
import { render, cleanup, fireEvent, screen } from "@testing-library/react";

// Components
import Table from "./FormFieldTable";
import TranslateIcon from "@material-ui/icons/Translate";

afterEach(cleanup);

const addElementCallback = jest.fn();
const translateAction = jest.fn();
const editCallback = jest.fn();
const deleteCallback = jest.fn();

const headers = ["Label 1", "Label 2", "Label 3", "Label 4"];
const actions = [
	{
		label: "Translate",
		actionFnc: translateAction,
		icon: TranslateIcon,
	},
];

const { getByText, queryAllByRole, queryAllByTestId } = screen;

const TableExample = () => {
	const [tableData, setTableData] = useState([]);

	const addElement = () => {
		setTableData([
			{
				id: "1",
				items: ["John", "john@email.com", "01/01/2021", "3231-962-7516"],
			},
			{
				id: "2",
				items: ["Sally", "sally@email.com", "12/24/2020", "011-962-111"],
			},
			{
				id: "3",
				items: ["Maria", "maria@email.com", "12/01/2020", "788-962-7516"],
			},
		]);
		addElementCallback();
	};

	const onChange = async (rowData) => {
		setTableData(rowData);
	};

	return (
		<Table
			fieldDef={{
				name: "table",
				label: "",
				inputSettings: {
					extraActions: actions,
					handleAddElement: addElement,
					handleEdit: editCallback,
					handleDelete: deleteCallback,
					headers
				}
			}}
			onChange={onChange}
			value={tableData}
		/>
	);
};

const TableWithNoExtraActions = () => {
	const [tableData, setTableData] = useState([]);

	const addElement = () => {
		setTableData([
			{
				id: "1",
				items: ["John", "john@email.com", "01/01/2021", "3231-962-7516"],
			},
			{
				id: "2",
				items: ["Sally", "sally@email.com", "12/24/2020", "011-962-111"],
			},
			{
				id: "3",
				items: ["Maria", "maria@email.com", "12/01/2020", "788-962-7516"],
			},
		]);
		addElementCallback();
	};

	const onChange = async (rowData) => {
		setTableData(rowData);
	};

	return (
		<Table
			fieldDef={{
				name: "table",
				label: "",
				inputSettings: {
					handleAddElement: addElement,
					handleEdit: editCallback,
					handleDelete: deleteCallback,
					headers
				}
			}}
			onChange={onChange}
			value={tableData}
		/>
	);
};

describe("Table component", () => {
	it("should show default ADD ELEMENT button", () => {
		render(<TableExample />);

		expect(getByText("ADD ELEMENT")).toBeTruthy();
	});
});

describe("Table content", () => {
	beforeEach(() => {
		render(<TableExample />);

		fireEvent.click(getByText("ADD ELEMENT"));
	});

	it("should show the table headers", () => {
		expect(getByText("Label 1")).toBeTruthy();
		expect(getByText("Label 2")).toBeTruthy();
		expect(getByText("Label 3")).toBeTruthy();
		expect(getByText("Label 4")).toBeTruthy();
		expect(queryAllByRole("columnheader").length).toBe(6);
	});

	it("should validate the cells displayed", () => {
		expect(queryAllByRole("cell").length).toBe(15);
	});

	it("should display three actions for each row", () => {
		expect(queryAllByTestId("icon-button-test").length).toBe(9);
	});
});

describe("Table callbacks and actions", () => {
	beforeEach(() => {
		render(<TableExample />);

		fireEvent.click(getByText("ADD ELEMENT"));
	});

	it("should trigger the Add Element callback", () => {
		fireEvent.click(getByText("Add Element"));

		expect(addElementCallback).toHaveBeenCalled();
	});

	it("should remove a row", () => {
		const deleteIconFirstRow = queryAllByTestId("icon-button-test")[1];

		expect(queryAllByRole("cell").length).toBe(15);

		fireEvent.click(deleteIconFirstRow);

		expect(queryAllByRole("cell").length).toBe(10);
		expect(deleteCallback).toHaveBeenCalled();
	});

	it("should trigger the edit action callback", () => {
		const editIconFirstRow = queryAllByTestId("icon-button-test")[0];

		fireEvent.click(editIconFirstRow);

		expect(editCallback).toHaveBeenCalled();
	});

	it("should trigger the extra (translate) action callback", () => {
		const translateIconFirstRow = queryAllByTestId("icon-button-test")[2];

		fireEvent.click(translateIconFirstRow);

		expect(translateAction).toHaveBeenCalled();
	});
});

describe("Table when no extra actions are passed", () => {
	it("should only display the two default actions (edit and remove) for each row", () => {
		render(<TableWithNoExtraActions />)
		fireEvent.click(getByText("ADD ELEMENT"));

		expect(queryAllByTestId("icon-button-test").length).toBe(6);
	})
})
