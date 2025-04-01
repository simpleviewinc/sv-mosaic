import * as React from "react";
import type { ReactElement } from "react";
import { useMemo, useState, useCallback } from "react";
import type { FieldDef } from "@root/components/Field";

// Components
import type { FormState } from "@root/components/Form";
import Form, { useForm } from "@root/components/Form";
import AddIcon from "@mui/icons-material/Add";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import Drawers from "@root/components/Drawers";

// Utils
import { commonFieldControls, renderButtons } from "../../../../utils";
import type { DataViewProps } from "@root/components/DataView";
import { listColumns } from "@root/components/Field/FormFieldMatrix/matrixUtils";
import MosaicContext from "@root/components/MosaicContext";
import useMosaicSettings from "@root/utils/hooks/useMosaicSettings";
import Button from "@root/components/Button/Button";

export default {
	title: "FormFields/FormFieldMatrix",
};

const DrawerEditForm = ({
	onClose,
	onSave,
	title,
	fields,
	data,
}: {
	onClose: () => void;
	onSave: (data: any) => void;
	title: string;
	fields: FieldDef[];
	data: FormState["data"];
}): ReactElement => {
	const controller = useForm({ data: data || {} });
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

export const Playground = ({
	label,
	required,
	prepop,
	prepopData,
	disabled,
	instructionText,
	helperText,
}: typeof Playground.args): ReactElement => {
	const [isEditing, setIsEditing] = useState(false);
	const [indexEdit, setIndexEdit] = useState(null);

	const controller = useForm({ data: prepop ? prepopData : {} });
	const { state, methods: { setFieldValue }, handleSubmit } = controller;

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
				setFieldValue({
					name: "formMatrix",
					value: [...state.data.formMatrix, newRow],
					touched: true,
				});
			} else {
				setFieldValue({
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

			setFieldValue({
				name: "formMatrix",
				value: currentRows,
				touched: true,
			});
		}

		removeDrawer();
	};

	const onAddClick = useCallback(() =>
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
		}), [addDrawer]);

	const gridConfig = useMemo<DataViewProps>(() => ({
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
								},
								{
									name: "description",
									label: "Description",
									type: "text",
								},
							],
							data: {
								title: rowToEdit[0].title,
								description: rowToEdit[0].description,
							},
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

					setFieldValue({
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

			setFieldValue({
				name: "formMatrix",
				value: rows,
				touched: true,
			});
		},
		display: "list",
		activeColumns: ["id", "title", "description"],
	}), [addDrawer, onAddClick, setFieldValue, state.data.formMatrix]);

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
		[label, required, disabled, helperText, instructionText, gridConfig, onAddClick],
	);

	const mosaicSettings = useMosaicSettings();

	return (
		<>
			<MosaicContext.Provider value={mosaicSettings}>
				<Form
					{...controller}
					buttons={renderButtons(handleSubmit)}
					title="Matrix Field"
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
							data={drawerDef.config.data}
						/>
					);
				}}
			</Drawers>
		</>
	);
};

Playground.args = {
	...commonFieldControls.args({
		prepopData: {
			formMatrix: [{
				id:"ide6c8d48be717c8",
				title:"Dog",
				description:"A four legged animal with a tail that comes in a number of different breeds.",
			}],
		},
	}),
	optionsOrigin: "Local",
	size: "sm",
	placeholder: "Choose a movie..",
};

Playground.argTypes = {
	...commonFieldControls.argTypes,
	optionsOrigin: {
		name: "Options Origin",
	},
	size: {
		name: "Size",
		control: { type: "select" },
		options: ["xs", "sm", "md", "lg"],
	},
	placeholder: {
		name: "Placeholder",
	},
};
