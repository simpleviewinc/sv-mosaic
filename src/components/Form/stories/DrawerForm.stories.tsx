import * as React from "react";
import { ReactElement, useState, useEffect} from "react";
import { withKnobs, boolean, select } from "@storybook/addon-knobs";

import { checkboxOptions } from "@root/forms/FormFieldCheckbox/FormFieldCheckboxUtils"

// Utils
import { useForm, formActions, SectionDef } from "@root/components/Form";
import { validateEmail, required } from "../validators";

// Components
import Form from "../Form";
import { ButtonProps } from "@root/components/Button";
import Drawer from "@root/components/Drawer/Drawer";

// Types
import { FieldDef } from "@root/components/Field";

import { ORIGINAL_BODY_MARGIN } from "./utils";
import { BREAKPOINTS } from "@root/theme/theme";

export default {
	title: "Components/Form",
	decorators: [withKnobs],
};

const sections: SectionDef[] = [
	{
		title: "Section 1",
		fields: [[["text1"]]]
	},
	{
		title: "Section 2",
		fields: [[["text2"]]]
	},
	{
		title: "Section 3",
		fields: [[["check1"]]]
	},
]

const fields: FieldDef[] = [
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
];

const tooltipInfo = "Tooltip Info";
const description = "This is a description";

const options = {
	default: `${parseInt(BREAKPOINTS.sm, 10) - 160}px`,
	sm: BREAKPOINTS.sm,
	md: BREAKPOINTS.md,
	lg: BREAKPOINTS.lg,
	xl: BREAKPOINTS.xl,
	"2xl": BREAKPOINTS["2xl"],
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
	const showSections = boolean("Show sections", false);
	const drawWidth = select("Draw Width", options, options.default);
	const showDescription = boolean("Show description", false);
	const showTooltipInfo = boolean("Show Tooltip info", false);
	const showActive = boolean("Show active", false);

	const [open, setOpen] = useState(false);

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
				PaperProps={{
					sx: { width: "90%" },
				}}
			>
				<div style={{width: drawWidth}}>
					<Form
						buttons={buttons}
						title='Drawer form example'
						state={state}
						dispatch={dispatch}
						fields={fields}
						onBack={onCancel}
						sections={showSections ? sections : undefined}
						tooltipInfo={showTooltipInfo && tooltipInfo}
						showActive={showActive}
						description={showDescription ? description : undefined}
					/>
				</div>
			</Drawer>
			<button onClick={() => setOpen(true)}>Open drawer</button>
		</>
	);
};
