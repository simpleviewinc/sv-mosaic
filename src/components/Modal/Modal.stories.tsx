import * as React from "react";
import { ReactElement, useState, useMemo } from "react";
import { text, withKnobs } from "@storybook/addon-knobs";

// Components
import Modal from "./Modal";
import Button from "@root/components/Button";
import { FieldDef } from "../Field";
import { useForm } from "../../forms/Form/formUtils";
import { TextFieldDef } from "@root/forms/FormFieldText";

export default {
	title: "Components/Modal",
	decorators: [withKnobs],
};

export const Example = (): ReactElement => {
	const { state, dispatch, registerFields, registerOnSubmit } = useForm();

	const dialogTitle = text("Dialog title", "Dialog title");
	const primaryBtnLabel = text("Primary button label", "Apply");
	const secondaryBtnLabel = text("Secondary button label", "Cancel");

	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const primaryAction = () => {
		alert("The primary button was clicked");
		setOpen(false);
	};

	useMemo(() => {
		registerOnSubmit(primaryAction);
	}, [primaryAction, registerOnSubmit]);

	const fields = useMemo(
		() =>
			[
				{
					name: "text1",
					label: "Simple Text",
					type: "text",
					inputSettings: {
						maxCharacters: 20,
					},
					instructionText: "testing",
				} as FieldDef<TextFieldDef>,
				{
					name: "text2",
					label: "Text with validators and dynamic help",
					type: "textArea",
				} as FieldDef<TextFieldDef>,
				{
					name: "check1",
					label: "Text that copies to the next input",
					type: "checkbox",
					inputSettings: {
						options: [
							{
								label: "Label 1",
								value: "label_1",
							},
							{
								label: "Label 2",
								value: "label_2",
							},
							{
								label: "Label 3",
								value: "label_3",
							},
						],
					},
				},
				{
					name: "text4",
					label: "Text that receives copy",
					type: "text",
				} as FieldDef<TextFieldDef>,
			] as FieldDef[],
		[]
	);

	useMemo(() => {
		registerFields(fields);
	}, [fields, registerFields]);

	const submitButtonAttrs = {
		label: primaryBtnLabel,
	};

	const cancelButtonAttrs = {
		label: secondaryBtnLabel,
	};

	return (
		<>
			<Button
				color="yellow"
				variant="contained"
				onClick={handleClickOpen}
				label="Open Modal"
				muiAttrs={{disableRipple: true}}
			></Button>
			<Modal
				state={state}
				dispatch={dispatch}
				fields={fields}
				title={dialogTitle}
				open={open}
				onCancel={handleClose}
				onSubmit={primaryAction}
				submitButtonAttrs={submitButtonAttrs}
				cancelButtonAttrs={cancelButtonAttrs}
			/>
		</>
	);
};
