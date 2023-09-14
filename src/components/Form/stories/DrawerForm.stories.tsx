import * as React from "react";
import { ReactElement, useState, useEffect, useMemo} from "react";
import { withKnobs, boolean } from "@storybook/addon-knobs";

import { checkboxOptions } from "@root/forms/FormFieldCheckbox/FormFieldCheckboxUtils"

// Utils
import { useForm, formActions } from "@root/components/Form";
import { validateEmail, required } from "../validators";

// Components
import Form from "../Form";
import { ButtonProps } from "@root/components/Button";
import Drawer from "@root/components/Drawer/Drawer";

// Types
import { FieldDef } from "@root/components/Field";

import { ORIGINAL_BODY_MARGIN } from "./utils";

export default {
	title: "Components/Form",
	decorators: [withKnobs],
};

export const DrawerForm = (): ReactElement => {
	const { state, dispatch } = useForm();

	useEffect(() => {
		document.body.style.margin = "0px";

		return () => {
			document.body.style.margin = ORIGINAL_BODY_MARGIN;
		}
	}, []);

	const showState = boolean("Show state", false);

	const [open, setOpen] = useState(false);

	const fields = useMemo(
		() : FieldDef[] =>
			[
				{
					name: "text1",
					label: "Email",
					type: "text",
					instructionText: "testing",
					validators: [required, validateEmail],
				},
				{
					name: "text2",
					label: "Age",
					type: "text",
					validators: [required],
				},
				{
					name: "check1",
					label: "Text that copies to the next input",
					type: "checkbox",
					inputSettings: {
						options: checkboxOptions,
					},
					validators: [required]
				},
			],
		[]
	);

	const onCancel = () => {
		setOpen(false);
		alert("Cancelling form, going back to previous site");
	};

	const onDrawerSubmit = async () => {
		const { data, valid } = await dispatch(formActions.submitForm());
		if (!valid) return;

		setOpen(false);
		alert("Form submitted with the following data: " + JSON.stringify(data, null, " "));
	};

	const buttons: ButtonProps[] = [
		{
			label: "Save",
			onClick: onDrawerSubmit,
			color: "yellow",
			variant: "contained",
		},
	];

	return (
		<>
			{
				showState && <pre>{JSON.stringify(state, null, "  ")}</pre>
			}
			<Drawer
				open={open}
				onClose={onCancel}
			>
				<Form
					buttons={buttons}
					title='Drawer form example'
					state={state}
					dispatch={dispatch}
					fields={fields}
					onBack={onCancel}
				/>
			</Drawer>
			<button onClick={() => setOpen(true)}>Open drawer</button>
		</>
	);
};
