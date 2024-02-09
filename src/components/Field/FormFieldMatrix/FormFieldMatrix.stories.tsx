import * as React from "react";
import { ReactElement, useMemo, useState, useCallback, useEffect } from "react";
import { boolean, text, withKnobs } from "@storybook/addon-knobs";
import { FieldDef } from "@root/components/Field";

// Components
import Form, { useForm } from "@root/components/Form";
import AddIcon from "@mui/icons-material/Add";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import Drawers from "../../Drawers";
import GetAppIcon from "@mui/icons-material/GetApp";
import DataView from "@root/components/DataView";

// Utils
import { renderButtons } from "@root/utils/storyUtils";
import { DataViewProps } from "@root/components/DataView";
import { defaultView, listColumns } from "./matrixUtils";
import MosaicContext from "@root/components/MosaicContext";
import useMosaicSettings from "@root/utils/useMosaicSettings";
import rawData from "@root/components/DataView/example/rawData.json";
import PageHeader from "@root/components/PageHeader";
import { ButtonProps } from "@root/components/Button";
import Button from "@root/components/Button/Button";

export default {
	title: "FormFields/FormFieldMatrix",
	decorators: [withKnobs],
};

const DrawerEditForm = ({
	onClose,
	onSave,
	title,
	fields,
}: {
	onClose: () => void;
	onSave: (data: any) => void;
	title: string;
	fields: FieldDef[];
}): ReactElement => {
	const controller = useForm();
	const { state } = controller;

	const onSaveClick = () => onSave(state.data);

	return (
		<Form
			{...controller}
			buttons={[
				{
					label: "Cancel",
					onClick: onClose,
					color: "gray",
					variant: "outlined",
				},
				{
					label: "Save",
					onClick: onSaveClick,
					color: "yellow",
					variant: "contained",
				},
			]}
			title={title}
			fields={fields}
			onBack={onClose}
		/>
	);
};

export const FormVariant = (): ReactElement => {
	const disabled = boolean("Disabled", false);
	const required = boolean("Required", false);
	const label = text("Label", "Matrix field");
	const helperText = text("Helper text", "Helper text");
	const instructionText = text("Instruction text", "Instruction text");
	const [isEditing, setIsEditing] = useState(false);
	const [indexEdit, setIndexEdit] = useState(null);

	const controller = useForm();
	const { state, methods, handleSubmit } = controller;

	const [drawerState, setDrawerState] = useState({
		drawers: [],
	});

	const addDrawer = useCallback(async (drawerDef) => {
		setDrawerState((state) => ({
			...state,
			drawers: [...state.drawers, drawerDef],
		}));
	}, []);

	const removeDrawer = useCallback(() => {
		setIsEditing(false);
		setDrawerState((state) => ({
			...state,
			drawers: [...state.drawers.slice(0, -1)],
		}));
	}, []);

	const addOrEdit = async (data) => {
		if (!isEditing) {
			const id = "id" + Math.random().toString(16).slice(2);
			const newRow = {
				id: id,
				title: data.title,
				description: data.description,
			};

			if (state.data?.formMatrix?.length > 0) {
				methods.setFieldValue({
					name: "formMatrix",
					value: [...state.data.formMatrix, newRow],
					touched: true,
				});
			} else {
				methods.setFieldValue({
					name: "formMatrix",
					value: [newRow],
					touched: true,
				});
			}
		} else {
			const editedRow = {
				id: state.data.formMatrix[indexEdit].id,
				title: data.title,
				description: data.description,
			};
			const currentRows = [...state.data.formMatrix];
			currentRows.splice(indexEdit, 1, editedRow);

			methods.setFieldValue({
				name: "formMatrix",
				value: currentRows,
				touched: true,
			});
		}

		removeDrawer();
	};

	const onAddClick = () =>
		addDrawer({
			config: {
				type: "form",
				title: "Drawer Form",
				fields: [
					{
						name: "title",
						label: "Title",
						type: "text",
					},
					{
						name: "description",
						label: "Description",
						type: "text",
					},
				],
			},
		});

	const gridConfig: DataViewProps = {
		noResults: (
			<div style={{ padding: "1rem 0.5rem", alignItems: "center", justifyContent: "center", display: "flex", flexDirection: "column", gap: 10 }}>
				<div>
					Custom
					{" "}
					<em>no results</em>
					{" "}
					component.
				</div>
				<Button variant="outlined" color="gray" label="Create one" onClick={onAddClick} />
			</div>
		),
		columns: listColumns,
		primaryActions: [
			{
				name: "edit",
				color: "black",
				variant: "icon",
				mIcon: CreateIcon,
				onClick: async ({ data }) => {
					const rowToEdit = state.data.formMatrix.filter(row => row.id === data.id);
					const pos = state.data.formMatrix.map(e => e.id).indexOf(data.id);
					setIndexEdit(pos);
					setIsEditing(true);
					addDrawer({
						config: {
							type: "form",
							title: "Drawer Form",
							fields: [
								{
									name: "title",
									label: "Title",
									type: "text",
									defaultValue: rowToEdit[0].title,
								},
								{
									name: "description",
									label: "Description",
									type: "text",
									defaultValue: rowToEdit[0].description,
								},
							],
						},
					});
				},
			},
			{
				name: "delete",
				color: "black",
				variant: "icon",
				mIcon: DeleteIcon,
				onClick: async ({ data }) => {
					const filteredRows = state.data.formMatrix.filter(row => row.id !== data.id);

					methods.setFieldValue({
						name: "formMatrix",
						value: filteredRows,
						touched: true,
					});
				},
			},
		],
		sticky: true,
		data: state.data.formMatrix,
		limit: 25,
		onReorder: async (newRows) => {
			const rows = newRows.map(row => state.data.formMatrix.find(element => element.id === row));

			methods.setFieldValue({
				name: "formMatrix",
				value: rows,
				touched: true,
			});
		},
		display: "list",
		activeColumns: ["id", "title", "description"],
		savedView: defaultView,
	};

	const fields: FieldDef[] = useMemo(
		() =>
			[
				{
					name: "formMatrix",
					label,
					type: "matrix",
					required,
					disabled,
					helperText,
					instructionText,
					inputSettings: {
						dataView: gridConfig,
						buttons: [
							{
								label: "Add",
								onClick: onAddClick,
								color: "teal",
								variant: "text",
								mIcon: AddIcon,
							},
						],
					},
				},
			],
		[required, disabled, instructionText, helperText, label, gridConfig, isEditing, indexEdit],
	);

	const mosaicSettings = useMosaicSettings();

	return (
		<>
			<MosaicContext.Provider value={mosaicSettings}>
				<Form
					{...controller}
					buttons={renderButtons(handleSubmit)}
					title={text("Title", "Form Title")}
					description={text("Description", "This is a description example")}
					fields={fields}
				/>
			</MosaicContext.Provider>
			<Drawers drawers={drawerState.drawers}>
				{(drawerDef) => {
					return (
						<DrawerEditForm
							fields={drawerDef.config.fields}
							onClose={removeDrawer}
							onSave={addOrEdit}
							title={drawerDef.config.title}
						/>
					);
				}}
			</Drawers>
		</>
	);
};

const mappedData = rawData.slice(1, 25).map((data) => {
	// convert the date columns to dates, since they are ISOStrings in the file
	return {
		...data,
		created: data.created ? new Date(data.created) : undefined,
		updated: data.updated ? new Date(data.updated) : undefined,
	};
});

export const Browse = (): ReactElement => {
	const disabled = boolean("Disabled", false);
	const required = boolean("Required", false);
	const label = text("Label", "Matrix field");
	const helperText = text("Helper text", "Helper text");
	const instructionText = text("Instruction text", "Instruction text");
	const [indexEdit, setIndexEdit] = useState(null);
	const [rowsChecked, setCheckedRows] = useState<boolean[]>([]);

	const controller = useForm();
	const { state, methods, handleSubmit } = controller;

	const [drawerState, setDrawerState] = useState({
		drawers: [],
	});

	useEffect(() => {
		setCheckedRows(mappedData.map(() => false));
	}, [mappedData]);

	const addDrawer = useCallback(async (drawerDef) => {
		setDrawerState((state) => ({
			...state,
			drawers: [...state.drawers, drawerDef],
		}));
	}, []);

	const removeDrawer = useCallback(() => {
		setDrawerState((state) => ({
			...state,
			drawers: [...state.drawers.slice(0, -1)],
		}));
	}, []);

	const updateCheckedOptions = (rowId) => {
		const newCheckedRows = [...rowsChecked];

		const pos = mappedData.map(row => row.id).indexOf(rowId);
		newCheckedRows[pos] = false;

		setCheckedRows(newCheckedRows);
	};

	const dataViewGridConfig: DataViewProps = {
		columns: listColumns,
		primaryActions: [
			{
				name: "delete",
				color: "black",
				variant: "icon",
				mIcon: DeleteIcon,
				onClick: async ({ data }) => {
					alert("Clicked: " + data.id);
				},
			},
		],
		bulkActions: [
			{
				name: "download",
				color: "black",
				variant: "icon",
				mIcon: GetAppIcon,
				onClick: function ({ data }) {
					alert(`DOWNLOAD ${data.map(val => val.id)}`);
				},
			},
		],
		sticky: true,
		data: mappedData,
		limit: 25,
		display: "list",
		activeColumns: ["id", "title", "description"],
		savedView: defaultView,
		checked: rowsChecked,
		onCheckChange: (checked) => {
			setCheckedRows(checked);
		},
	};

	const matrixGridConfig: DataViewProps = {
		columns: listColumns,
		primaryActions: [
			{
				name: "edit",
				color: "black",
				variant: "icon",
				mIcon: CreateIcon,
				onClick: async ({ data }) => {
					const rowToEdit = state.data.formMatrix.filter(row => row.id === data.id);
					const pos = state.data.formMatrix.map(e => e.id).indexOf(data.id);
					setIndexEdit(pos);
					addDrawer({
						config: {
							type: "form",
							title: "Drawer Form",
							fields: [
								{
									name: "title",
									label: "Title",
									type: "text",
									defaultValue: rowToEdit[0].title,
								},
								{
									name: "description",
									label: "Description",
									type: "text",
									defaultValue: rowToEdit[0].description,
								},
							],
						},
					});
				},
			},
			{
				name: "delete",
				color: "black",
				variant: "icon",
				mIcon: DeleteIcon,
				onClick: async ({ data }) => {
					const filteredRows = state.data.formMatrix.filter(row => row.id !== data.id);

					methods.setFieldValue({
						name: "formMatrix",
						value: filteredRows,
						touched: true,
					});

					updateCheckedOptions(data.id);
				},
			},
		],
		sticky: true,
		data: state.data.formMatrix,
		limit: 25,
		onReorder: async (newRows) => {
			const rows = newRows.map(row => state.data.formMatrix.find(element => element.id === row));

			methods.setFieldValue({
				name: "formMatrix",
				value: rows,
				touched: true,
			});
		},
		display: "list",
		activeColumns: ["id", "title", "description"],
		savedView: defaultView,
		noResults: "No records selected",
	};

	const mosaicSettings = useMosaicSettings();

	const drawerButtons = [
		{
			label: "Cancel",
			onClick: () => removeDrawer(),
			color: "gray",
			variant: "outlined",
		},
		{
			label: "Save",
			onClick: async () => {
				const selectedRows = mappedData.filter((_, idx) => rowsChecked[idx]);

				methods.setFieldValue({
					name: "formMatrix",
					value: selectedRows,
					touched: true,
				});
				removeDrawer();
			},
			color: "yellow",
			variant: "contained",
		},
	] as ButtonProps[];

	const fields: FieldDef[] = useMemo(
		() =>
			[
				{
					name: "formMatrix",
					label,
					type: "matrix",
					required,
					disabled,
					helperText,
					instructionText,
					inputSettings: {
						dataView: matrixGridConfig, // DV shown by the matrix component.
						buttons: [
							{
								label: "Add",
								onClick: () =>
									addDrawer({
										config: {
											type: "dataView",
											gridConfig: dataViewGridConfig,
										},
									}),
								color: "teal",
								variant: "outlined",
								mIcon: AddIcon,
							},
						],
					},
				},
			],
		[
			required,
			disabled,
			instructionText,
			helperText,
			label,
			matrixGridConfig,
			rowsChecked,
			indexEdit,
		],
	);

	const edit = async (data) => {
		const editedRow = {
			id: state.data.formMatrix[indexEdit].id,
			title: data.title,
			description: data.description,
		};
		const currentRows = [...state.data.formMatrix];
		currentRows.splice(indexEdit, 1, editedRow);

		methods.setFieldValue({
			name: "formMatrix",
			value: currentRows,
			touched: true,
		});

		removeDrawer();
	};

	return (
		<>
			<MosaicContext.Provider value={mosaicSettings}>
				<Form
					{...controller}
					buttons={renderButtons(handleSubmit)}
					title={text("Title", "Form Title")}
					description={text("Description", "This is a description example")}
					fields={fields}
				/>
			</MosaicContext.Provider>
			<Drawers drawers={drawerState.drawers}>
				{(drawerDef) => {
					if (drawerDef.config.type === "dataView") {
						return (
							<MosaicContext.Provider value={mosaicSettings}>
								<PageHeader
									title="Browse"
									buttons={drawerButtons}
									onBack={removeDrawer}
								/>
								<DataView {...dataViewGridConfig} />
							</MosaicContext.Provider>
						);
					} else {
						return (
							<DrawerEditForm
								onClose={removeDrawer}
								onSave={edit}
								fields={drawerDef.config.fields}
								title={drawerDef.config.title}
							/>
						);
					}
				}}
			</Drawers>
		</>
	);
};


export const MatrixExample = (): ReactElement => {
	const controller = useForm();
	const { state, methods: { setFieldValue, submitForm } } = useForm();

	const onSubmit = async () => {
		const { valid, data } = await submitForm();
		if (!valid) return;

		alert("Form submitted with the following data: " + JSON.stringify(data, null, " "));
	};

	const gridConfig: DataViewProps = useMemo(() => ({
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
		savedView: defaultView,
	}), [setFieldValue, state.data.formMatrix]);

	const addRow = useCallback(async () => {
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
	}, [setFieldValue]);

	const fields: FieldDef[] = useMemo(
		() =>
			[
				{
					label: "Test",
					name: "test",
					type: "text",
				},
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
		[gridConfig, addRow],
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
