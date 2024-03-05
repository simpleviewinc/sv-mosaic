import * as React from "react";
import { ReactElement, useEffect, useMemo } from "react";
import { withKnobs, boolean } from "@storybook/addon-knobs";

// Utils
import { useForm } from "@root/components/Form";
import { validateEmail, validateSlow } from "../validators";
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

export const RuntimeBehaviours = (): ReactElement => {
	const controller = useForm();
	const { state, methods: { setFieldValue }, handleSubmit } = controller;

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
					label: "Simple Text",
					type: "text",
					instructionText: "testing",
					validators: [validateEmail, validateSlow],
				},
				{
					name: "text2",
					label: "Text with validators and dynamic help",
					type: "text",
					helperText: state.data.text2,
					validators: [validateEmail, validateSlow],
				},
				{
					name: "text3",
					label: "Text that copies to the next input",
					type: "text",
				},
				{
					name: "text4",
					label: "Text that receives copy",
					type: "text",
				},
				{
					name: "text5",
					label: "Text that enables another field",
					type: "text",
				},
				{
					name: "text6",
					label: "Text that is initially disabled",
					type: "text",
					instructionText: "Type \"ENABLE\" into the previous field to enable this field",
					disabled: [
						({ data }) => data?.text5 !== "ENABLE",
						true,
						() => true,
					],
					required: true,
				},
			],
		[state.data.text2],
	);

	useEffect(() => {
		setFieldValue({
			name: "text4",
			value: state.data.text3,
		});
	}, [setFieldValue, state.data.text3]);

	const setText1Value = function () {
		setFieldValue({
			name: "text1",
			value: "test@test.com",
		});
	};

	const setText2Value = function () {
		setFieldValue({
			name: "text2",
			value: "notanemail",
			validate: true,
		});
	};

	return (
		<>
			{
				showState && <pre>{JSON.stringify(state, null, "  ")}</pre>
			}
			<div style={{ height: "100vh" }}>
				<Form
					{...controller}
					buttons={renderButtons(handleSubmit)}
					title="Runtime behaviors"
					fields={fields}
				/>
			</div>
			<div>
				<p>
					Here are some buttons that are not part of the form, but can change
					values in the form proving communication between in/out of the form.
					Notice that settext2 runs the validation after setting the value.
				</p>
				<button onClick={setText1Value}>Set Text1 Value</button>
				<button onClick={setText2Value}>Set Text2 Value</button>
			</div>
		</>
	);
};
