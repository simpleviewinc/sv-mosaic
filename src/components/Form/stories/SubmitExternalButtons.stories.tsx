import * as React from "react";
import { ReactElement, useEffect, useMemo } from "react";
import { withKnobs, boolean } from "@storybook/addon-knobs";

// Utils
import { useForm, formActions } from "@root/components/Form";
import { validateEmail, required } from "../validators";

// Components
import Form from "../Form";

// Types
import { FieldDef } from "@root/components/Field";

import { ORIGINAL_BODY_MARGIN } from "./utils";

export default {
	title: "Components/Form",
	decorators: [withKnobs],
};

export const SubmitExternalButtons = (): ReactElement => {
	const { state, dispatch } = useForm();

	useEffect(() => {
		document.body.style.margin = "0px";

		return () => {
			document.body.style.margin = ORIGINAL_BODY_MARGIN;
		};
	}, []);

	const showState = boolean("Show state", false);

	const fields = useMemo(
		() : FieldDef[] =>
			[
				{
					name: "text1",
					label: "Full Name",
					type: "text",
					instructionText: "testing",
				},
				{
					name: "text2",
					label: "Email",
					type: "text",
					validators: [required, validateEmail],
				},
				{
					name: "text3",
					label: "Age",
					type: "text",
				},
				{
					name: "text4",
					label: "City",
					type: "text",
				},
			],
		[],
	);

	const clickHandler = async () => {
		const { data } = await dispatch(formActions.submitForm());

		alert("Form submitted with the following data: " + JSON.stringify(data, null, " "));
	};

	return (
		<>
			{
				showState && <pre>{JSON.stringify(state, null, "  ")}</pre>
			}
			<p>Here is the form</p>
			<div style={{ height: "100vh" }}>
				<Form
					state={state}
					fields={fields}
					dispatch={dispatch}
				/>
			</div>
			<button onClick={clickHandler}>Submit</button>
		</>
	);
};
