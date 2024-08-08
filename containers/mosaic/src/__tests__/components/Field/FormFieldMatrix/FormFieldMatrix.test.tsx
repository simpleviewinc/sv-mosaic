import * as React from "react";
import { ReactElement, useMemo } from "react";
import {
	act,
	cleanup,
	render,
	screen,
} from "@testing-library/react";

// Components
import Form, { useForm } from "@root/components/Form";
import AddIcon from "@mui/icons-material/Add";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";

import { FieldDef } from "@root/components/Field/FieldTypes";

// Utils
import { ButtonProps } from "@root/components/Button";
import { listColumns } from "@root/components/Field/FormFieldMatrix/matrixUtils";
import { DataViewProps } from "@root/components/DataView";
import rawData from "@root/components/DataView/example/rawData.json";

export const MatrixExample = (): ReactElement => {
	const controller = useForm();
	const { state, methods: { setFieldValue }, handleSubmit } = useForm();

	const onSubmit = handleSubmit((data) => alert("Form submitted with the following data: " + JSON.stringify(data, null, " ")));

	const gridConfig: DataViewProps = {
		columns: listColumns,
		primaryActions: [
			{
				name: "edit",
				color: "black",
				variant: "icon",
				mIcon: CreateIcon,
				onClick: function ({ data }) {
					alert(`EDIT ${data.id}`);
				},
			},
			{
				name: "delete",
				color: "black",
				variant: "icon",
				mIcon: DeleteIcon,
				onClick: function ({ data }) {
					alert(`EDIT ${data.id}`);
				},
			},
		],
		sticky: true,
		data: state.data.formMatrix,
		limit: 25,
		onReorder: async (newRows) => {
			const rows = newRows.map(row => state.data.formMatrix.find(element => element.id === row));

			setFieldValue({
				name: "formMatrix",
				value: rows,
				touched: true,
			});
		},
		display: "list",
		activeColumns: ["id", "description", "title"],
	};

	const addRow = async () => {
		const mappedData = rawData.slice(1, 4).map((data) => {
			// convert the date columns to dates, since they are ISOStrings in the file
			return {
				...data,
				created: data.created ? new Date(data.created) : undefined,
				updated: data.updated ? new Date(data.updated) : undefined,
			};
		});

		setFieldValue({
			name: "formMatrix",
			value: mappedData,
			touched: true,
		});
	};

	const fields: FieldDef[] = useMemo(
		() =>
			[
				{
					label: "Matrix",
					name: "formMatrix",
					type: "matrix",
					inputSettings: {
						dataView: gridConfig,
						buttons: [
							{
								label: "Add",
								onClick: addRow,
								color: "teal",
								variant: "text",
								mIcon: AddIcon,
							},
						] as ButtonProps[],
					},
				},
			],
		[gridConfig],
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
			{...controller}
			buttons={buttons}
			title="Form Title"
			description="This is a description example"
			fields={fields}
		/>
	);
};

const mockResizeObserver = jest.fn();
mockResizeObserver.mockReturnValue({
	observe: () => null,
	unobserve: () => null,
	disconnect: () => null,
});
window.ResizeObserver = mockResizeObserver;
const scrollIntoViewMock = jest.fn();
window.HTMLElement.prototype.scrollTo = scrollIntoViewMock;

afterEach(cleanup);

describe("FormFieldMatrix component", () => {
	beforeEach(async () => {
		await act(() => {
			render(
				<MatrixExample />,
			);
		});
	});

	it("it should display the Add button", () => {
		expect(screen.findByText("Add")).toBeDefined();
		expect(screen.findByTestId("AddIcon")).toBeDefined();
	});
});

