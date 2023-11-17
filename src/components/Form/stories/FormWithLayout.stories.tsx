import * as React from "react";
import { ReactElement, useEffect, useMemo} from "react";
import { withKnobs, boolean, object } from "@storybook/addon-knobs";

// Utils
import { checkboxOptions } from "@root/components/Field/FormFieldCheckbox/FormFieldCheckboxUtils"
import { useForm, formActions } from "@root/components/Form";
import { validateEmail, validateSlow } from "../validators";
import { menuOptions } from "@root/forms/MenuFormFieldCard/MenuFormFieldUtils";
import { renderButtons } from "@root/utils/storyUtils";

// Components
import Form from "../Form";

// Types
import { FieldDef } from "@root/components/Field";

import { ORIGINAL_BODY_MARGIN } from "./utils";

export default {
	title: "Components/Form",
	decorators: [withKnobs],
};

const initialSection1Fields = [
	[["text1"], ["textarea"], ["text2"]],
	[["text3"], [], ["text4"]],
	[["toggleSwitch"], ["color"]]
];

export const FormWithLayout = (props: {height?: string}): ReactElement => {
	const { state, dispatch } = useForm();

	useEffect(() => {
		document.body.style.margin = "0px";

		return () => {
			document.body.style.margin = ORIGINAL_BODY_MARGIN;
		}
	}, []);

	const showState = boolean("Show state", false);
	const collapsed = boolean("Collapse sections", false);
	const section1Fields = object("Section 1 Fields", initialSection1Fields)
	const {height = "100vh"} = props;
	const fields = useMemo(
		() : FieldDef[] =>
			[
				{
					name: "text1",
					label: "Simple Text",
					type: "text",
					instructionText: "Instruction text text1",
				},
				{
					name: "textarea",
					label: "Big Text",
					type: "text",
					instructionText: "Instruction text text1",
					inputSettings: {
						multiline: true
					}
				},
				{
					name: "text2",
					label: "TextField that validates email",
					type: "text",
					helperText: state.data.text2,
					instructionText: "Instruction text text2",
					validators: [validateEmail, validateSlow]
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
					instructionText: "Instruction text text1"
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
						options: checkboxOptions
					},
				},
				{
					name: "toggleSwitch",
					label: "Toggle field",
					type: "toggleSwitch",
					inputSettings: {
						toggleLabel: "To the side"
					}
				},
				{
					name: "imageUpload",
					label: "Image Upload example",
					type: "imageUpload",
					inputSettings: {
						options: menuOptions
					}
				},
				{
					name: "textEditor",
					label: "Text Editor field",
					type: "textEditor",
					required: true
				},
			],
		[]
	);

	const sections = useMemo(() => [
		{
			title: "Section 1",
			description: "Description for section 1",
			collapsed,
			fields: section1Fields
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
				[[], ["textEditor"]]
			]
		},
		{
			title: "Section 3",
			description: "Description for section 3",
			collapsed,
			fields: [
				// row 1
				[["imageUpload"], [], []],
			]
		},
	], [fields, collapsed, section1Fields]);

	useEffect(() => {
		dispatch(
			formActions.setFieldValue({
				name: "text4",
				value: state.data.text3
			})
		);
	}, [state.data.text3]);

	return (
		<>
			{
				showState && <pre>{JSON.stringify(state, null, "  ")}</pre>
			}
			<div style={{height: height}}>
				<Form
					buttons={renderButtons(dispatch)}
					title="Form Title"
					description="This is a description example"
					sections={sections}
					state={state}
					fields={fields}
					dispatch={dispatch}
				/>
			</div>
		</>
	);
}
