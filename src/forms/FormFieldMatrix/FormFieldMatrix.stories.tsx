import * as React from "react";
import { ReactElement, useMemo, useState, useCallback, useEffect } from "react";
import { boolean, text, withKnobs } from "@storybook/addon-knobs";
import { FieldDef } from "@root/components/Field";

// Components
import Form, { formActions, useForm } from "@root/components/Form";
import AddIcon from "@mui/icons-material/Add";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import Drawers from "../../components/Drawers";
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

export const FormVariant = (): ReactElement => {
	const disabled = boolean("Disabled", false);
	const required = boolean("Required", false);
	const label = text("Label", "Matrix field");
	const helperText = text("Helper text", "Helper text");
	const instructionText = text("Instruction text", "Instruction text");
	const [isEditing, setIsEditing] = useState(false);
	const [indexEdit, setIndexEdit] = useState(null);

	const { state, dispatch } = useForm();
	const [drawerState, setDrawerState] = useState({
		drawers: [],
	});

	const addDrawer = useCallback(async (drawerDef, edit?) => {
		if (!edit) {
			await dispatch(
				formActions.setFieldValue({
					name: "title",
					value: "",
					touched: true
				})
			);

			await dispatch(
				formActions.setFieldValue({
					name: "description",
					value: "",
					touched: true
				})
			);
		}

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

	const addOrEdit = async () => {
		if (!isEditing) {
			const id = "id" + Math.random().toString(16).slice(2)
			const newRow = {
				id: id,
				title: state.data.title,
				description: state.data.description
			};

			if (state.data?.formMatrix?.length > 0) {
				await dispatch(
					formActions.setFieldValue({
						name: "formMatrix",
						value: [...state.data.formMatrix, newRow],
						touched: true
					})
				);
			} else {
				await dispatch(
					formActions.setFieldValue({
						name: "formMatrix",
						value: [newRow],
						touched: true
					})
				);
			}
		} else {
			const editedRow = {
				id: state.data.formMatrix[indexEdit].id,
				title: state.data.title,
				description: state.data.description,
			};
			const currentRows = [...state.data.formMatrix];
			currentRows.splice(indexEdit, 1, editedRow);

			await dispatch(
				formActions.setFieldValue({
					name: "formMatrix",
					value: currentRows,
					touched: true
				})
			);
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
			}
		})

	const gridConfig: DataViewProps = {
		noResults: (
			<div style={{ padding: "1rem 0.5rem", alignItems: "center", justifyContent: "center", display: "flex", flexDirection: "column", gap: 10 }}>
				<div>Custom <em>no results</em> component.</div>
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
					const rowToEdit =  state.data.formMatrix.filter(row => row.id === data.id);
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
									defaultValue: rowToEdit[0].title
								},
								{
									name: "description",
									label: "Description",
									type: "text",
									defaultValue: rowToEdit[0].description
								},
							],
						},
					});
				}
			},
			{
				name: "delete",
				color: "black",
				variant: "icon",
				mIcon: DeleteIcon,
				onClick: async ({ data }) => {
					const filteredRows =  state.data.formMatrix.filter(row => row.id !== data.id);

					await dispatch(
						formActions.setFieldValue({
							name: "formMatrix",
							value: filteredRows,
							touched: true
						})
					);
				}
			}
		],
		sticky: true,
		data: state.data.formMatrix,
		limit: 25,
		onReorder: async (newRows) => {
			const rows = newRows.map(row => state.data.formMatrix.find(element => element.id === row));

			await dispatch(
				formActions.setFieldValue({
					name: "formMatrix",
					value: rows,
					touched: true
				})
			);
		},
		display: "list",
		activeColumns: ["id", "title", "description"],
		savedView: defaultView
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
								mIcon: AddIcon
							},
						]
					},
				},
			],
		[required, disabled, instructionText, helperText, label, gridConfig, isEditing, indexEdit]
	);

	const mosaicSettings = useMosaicSettings();

	return (
		<>
			<MosaicContext.Provider value={mosaicSettings}>
				<Form
					buttons={renderButtons(dispatch)}
					title={text("Title", "Form Title")}
					description={text("Description", "This is a description example")}
					state={state}
					fields={fields}
					dispatch={dispatch}
				/>
			</MosaicContext.Provider>
			<Drawers drawers={drawerState.drawers}>
				{(drawerDef) => {
					return (
						<Form
							buttons={[
								{
									label: "Cancel",
									onClick: removeDrawer,
									color: "gray",
									variant: "outlined",
								},
								{
									label: "Save",
									onClick: () => addOrEdit(),
									color: "yellow",
									variant: "contained"
								},
							]}
							title={drawerDef.config.title}
							state={state}
							fields={drawerDef.config.fields}
							dispatch={dispatch}
							onBack={removeDrawer}
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
		updated: data.updated ? new Date(data.updated) : undefined
	}
});

export const Browse = (): ReactElement => {
	const disabled = boolean("Disabled", false);
	const required = boolean("Required", false);
	const label = text("Label", "Matrix field");
	const helperText = text("Helper text", "Helper text");
	const instructionText = text("Instruction text", "Instruction text");
	const [indexEdit, setIndexEdit] = useState(null);
	const [rowsChecked, setCheckedRows] = useState<boolean[]>([]);

	const { state, dispatch } = useForm();
	const [drawerState, setDrawerState] = useState({
		drawers: [],
	});

	useEffect(() => {
		setCheckedRows(mappedData.map(val => false));
	}, [mappedData]);

	const addDrawer = useCallback(async (drawerDef) => {
		if (drawerDef.config.type === "form") {
			await dispatch(
				formActions.setFieldValue({
					name: "title",
					value: "",
					touched: true
				})
			);

			await dispatch(
				formActions.setFieldValue({
					name: "description",
					value: "",
					touched: true
				})
			);
		}

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
				}
			}
		],
		bulkActions: [
			{
				name: "download",
				color: "black",
				variant: "icon",
				mIcon: GetAppIcon,
				onClick: function ({ data }) {
					alert(`DOWNLOAD ${data.map(val => val.id)}`);
				}
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
		}
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
					const rowToEdit =  state.data.formMatrix.filter(row => row.id === data.id);
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
									defaultValue: rowToEdit[0].title
								},
								{
									name: "description",
									label: "Description",
									type: "text",
									defaultValue: rowToEdit[0].description
								},
							],
						},
					})
				}
			},
			{
				name: "delete",
				color: "black",
				variant: "icon",
				mIcon: DeleteIcon,
				onClick: async ({ data }) => {
					const filteredRows =  state.data.formMatrix.filter(row => row.id !== data.id);

					await dispatch(
						formActions.setFieldValue({
							name: "formMatrix",
							value: filteredRows,
							touched: true
						})
					);

					updateCheckedOptions(data.id);
				}
			}
		],
		sticky: true,
		data: state.data.formMatrix,
		limit: 25,
		onReorder: async (newRows) => {
			const rows = newRows.map(row => state.data.formMatrix.find(element => element.id === row));

			await dispatch(
				formActions.setFieldValue({
					name: "formMatrix",
					value: rows,
					touched: true
				})
			);
		},
		display: "list",
		activeColumns: ["id", "title", "description"],
		savedView: defaultView,
		noResults: "No records selected"
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

				await dispatch(
					formActions.setFieldValue({
						name: "formMatrix",
						value: selectedRows,
						touched: true
					})
				);
				removeDrawer()
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
											gridConfig: dataViewGridConfig
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
			indexEdit
		]
	);

	const edit = async () => {
		const editedRow = {
			id: state.data.formMatrix[indexEdit].id,
			title: state.data.title,
			description: state.data.description,
		};
		const currentRows = [...state.data.formMatrix];
		currentRows.splice(indexEdit, 1, editedRow);

		await dispatch(
			formActions.setFieldValue({
				name: "formMatrix",
				value: currentRows,
				touched: true
			})
		);

		removeDrawer();
	};

	return (
		<>
			<MosaicContext.Provider value={mosaicSettings}>
				<Form
					buttons={renderButtons(dispatch)}
					title={text("Title", "Form Title")}
					description={text("Description", "This is a description example")}
					state={state}
					fields={fields}
					dispatch={dispatch}
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
								<DataView {...dataViewGridConfig}></DataView>
							</MosaicContext.Provider>
						);
					} else {
						return (
							<Form
								buttons={[
									{
										label: "Cancel",
										onClick: removeDrawer,
										color: "gray",
										variant: "outlined",
									},
									{
										label: "Save",
										onClick: edit,
										color: "yellow",
										variant: "contained"
									},
								]}
								title={drawerDef.config.title}
								state={state}
								fields={drawerDef.config.fields}
								dispatch={dispatch}
							/>
						);
					}
				}}
			</Drawers>
		</>
	);
};
