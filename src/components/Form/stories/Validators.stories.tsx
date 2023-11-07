import * as React from "react";
import { ReactElement, useEffect, useMemo } from "react";
import { boolean, withKnobs } from "@storybook/addon-knobs";

// Utils
import { useForm } from "@root/components/Form";
import { validateEmail, validateSlow, validateNumber, validateURL } from "../validators";
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

export const Validators = (): ReactElement => {
	const { state, dispatch } = useForm();

	useEffect(() => {
		document.body.style.margin = "0px";

		return () => {
			document.body.style.margin = ORIGINAL_BODY_MARGIN;
		}
	}, []);

	const showState = boolean("Show state", false);

	const fields = useMemo(
		(): FieldDef[] =>
			[
				{
					name: "required",
					label: "Required",
					type: "text",
					required: true,
				},
				{
					name: "email",
					label: "Email",
					type: "text",
					validators: [validateEmail]
				},
				{
					name: "slow",
					label: "Slow",
					type: "text",
					validators: [validateSlow]
				},
				{
					name: "number",
					label: "Number",
					type: "text",
					validators: [validateNumber]
				},
				{
					name: "url",
					label: "URL",
					type: "text",
					validators: [validateURL]
				},
				{
					name: "startDate",
					type: "date",
					label: "Start date",
					required: false,
					disabled: false,
					helperText: "Helper text",
					instructionText: "Instruction text",
					validators: [{ fn: "validateDateRange", options: { endDateName: "endDate" } }],
					inputSettings: {
						showTime: false,
					},
				},
				{
					name: "endDate",
					type: "date",
					label: "End date",
					required: false,
					disabled: false,
					helperText: "Helper text",
					instructionText: "Instruction text",
					validators: [{ fn: "validateDateRange", options: { startDateName: "startDate" } }],
					inputSettings: {
						showTime: false,
					},
				},
			],
		[]
	);

	return (
		<>
			{
				showState && <pre>{JSON.stringify(state, null, "  ")}</pre>
			}
			<div style={{height: "100vh"}}>
				<Form
					buttons={renderButtons(dispatch)}
					title='Validators story'
					state={state}
					fields={fields}
					dispatch={dispatch}
				/>
			</div>
		</>
	);
};
