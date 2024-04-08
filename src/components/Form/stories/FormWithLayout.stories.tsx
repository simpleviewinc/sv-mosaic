import * as React from "react";
import { ReactElement, useEffect, useMemo } from "react";
import { withKnobs, boolean, object, select } from "@storybook/addon-knobs";

// Utils
import { checkboxOptions } from "@root/components/Field/FormFieldCheckbox/FormFieldCheckboxUtils";
import { useForm } from "@root/components/Form";
import { validateEmail, validateSlow } from "../validators";
import { menuOptions } from "@root/forms/MenuFormFieldCard/MenuFormFieldUtils";
import { renderButtons } from "@root/utils/storyUtils";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

// Components
import Form from "../Form";

// Types
import { FieldDef } from "@root/components/Field";

import { ORIGINAL_BODY_MARGIN } from "./utils";
import { DataViewProps } from "@root/components/DataView";

export default {
	title: "Components/Form",
	decorators: [withKnobs],
};

const initialSection1Fields = [
	[["text1"], ["textarea"], ["text2"]],
	[["text3"], [], ["text4"]],
	[["toggleSwitch"], ["color"], ["formMatrix"]],
];

function randomNumber(min: number, max: number) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

const showMap = {
	"Undefined": undefined,
	"True": true,
	"False": false,
	"Function that returns true": () => true,
	"Function that returns false": () => false,
	"Array of true values": [true, true, true],
	"Array with one falsy value": [true, false, true],
	"Array of functions that return true": [() => true, () => true],
	"Array of functions, one returns false": [() => false, () => true],
};

const showOptions = Object.keys(showMap) as (keyof typeof showMap)[];

export const FormWithLayout = (props: { height?: string }): ReactElement => {
	const showState = boolean("Show state", false);
	const collapsed = boolean("Collapse sections", false);
	const section1Fields = object("Section 1 Fields", initialSection1Fields);

	const showSimpleText = select("Show Simple Text", showOptions, "Undefined");
	const showBigText = select("Show Big Text", showOptions, "Undefined");
	const showTextFieldValidatesEmail = select("Show TextField that validates email", showOptions, "Undefined");

	const controller = useForm();
	const { state, methods: { setFieldValue }, handleSubmit } = controller;

	useEffect(() => {
		document.body.style.margin = "0px";

		return () => {
			document.body.style.margin = ORIGINAL_BODY_MARGIN;
		};
	}, []);

	const gridConfig: DataViewProps = useMemo(() => ({
		columns: [{ name: "id", label: "ID" }, { name: "title", label: "Title" }, { name: "description", label: "Description" }],
		primaryActions: [
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
		data: state.data.formMatrix,
		limit: 25,
		display: "list",
		activeColumns: ["id", "title", "description"],
	}), [setFieldValue, state.data.formMatrix]);

	const { height = "100vh" } = props;
	const fields = useMemo(
		() : FieldDef[] =>
			[
				{
					name: "text1",
					label: "Simple Text",
					type: "text",
					instructionText: "Instruction text text1",
					show: showMap[showSimpleText],
				},
				{
					name: "textarea",
					label: "Big Text",
					type: "text",
					instructionText: "Instruction text text1",
					inputSettings: {
						multiline: true,
					},
					show: showMap[showBigText],
				},
				{
					name: "text2",
					label: "TextField that validates email",
					type: "text",
					helperText: state.data.text2,
					instructionText: "Instruction text text2",
					validators: [validateEmail, validateSlow],
					show: showMap[showTextFieldValidatesEmail],
				},
				{
					name: "text3",
					label: "Text that copies to the next input",
					type: "text",
					required: true,
					instructionText: "Instruction text text3",
				},
				{
					name: "text4",
					label: "Text that receives copy",
					type: "text",
					instructionText: "Instruction text text1",
				},
				{
					name: "color",
					label: "Color selector example",
					type: "color",
				},
				{
					name: "check",
					label: "Checkbox",
					type: "checkbox",
					required: true,
					inputSettings: {
						options: checkboxOptions,
					},
				},
				{
					name: "toggleSwitch",
					label: "Toggle field",
					type: "toggleSwitch",
					inputSettings: {
						toggleLabel: "To the side",
					},
				},
				{
					name: "imageUpload",
					label: "Image Upload example",
					type: "imageUpload",
					inputSettings: {
						options: menuOptions,
					},
				},
				{
					name: "textEditor",
					label: "Text Editor field",
					type: "textEditor",
					required: true,
				},
				{
					name: "formMatrix",
					label: "Matrix field",
					type: "matrix",
					required: true,
					inputSettings: {
						dataView: gridConfig,
						buttons: [
							{
								label: "Add",
								onClick: () => {
									const id = randomNumber(1, 1000);

									setFieldValue({
										name: "formMatrix",
										value: [...(state.data.formMatrix || []), { id, title: `Title ${id}`, description: `Description ${id}` }],
										touched: true,
									});
								},
								color: "teal",
								variant: "text",
								mIcon: AddIcon,
							},
						],
					},
				},
			],
		[
			showSimpleText,
			showBigText,
			state.data.text2,
			state.data.formMatrix,
			showTextFieldValidatesEmail,
			gridConfig,
			setFieldValue,
		],
	);

	const sections = useMemo(() => [
		{
			title: "Section 1",
			description: "Description for section 1",
			collapsed,
			fields: section1Fields,
		},
		{
			title: "Section 2",
			description: "Description for section 2",
			collapsed,
			fields: [
				// row 1
				[["check"], [], []],
				// row 2
				[[], [], []],
				// row 3
				[[]],
				// row 4
				[[], ["textEditor"]],
			],
			show: ({ data }) => data?.toggleSwitch === true,
		},
		{
			title: "Section 3",
			description: "Description for section 3",
			collapsed,
			fields: [
				// row 1
				[["imageUpload"], [], []],
			],
			show: ({ data }) => data?.toggleSwitch === true,
		},
		{
			title: "Section 4",
			description: "Description for section 4",
			collapsed,
			fields: [
				// row 1
				[["imageUpload"], [], []],
			],
		},
		{
			title: "Section 5",
			description: "Description for section 5",
			collapsed,
			fields: [
				// row 1
				[["imageUpload"], [], []],
			],
		},
	], [collapsed, section1Fields]);

	useEffect(() => {
		setFieldValue({
			name: "text4",
			value: state.data.text3,
		});
	}, [setFieldValue, state.data.text3]);

	return (
		<>
			{
				showState && <pre>{JSON.stringify(state, null, "  ")}</pre>
			}
			<div style={{ height: height }}>
				<Form
					{...controller}
					buttons={renderButtons(handleSubmit)}
					title="Form Title"
					description="This is a description example"
					sections={sections}
					fields={fields}
				/>
			</div>
		</>
	);
};
