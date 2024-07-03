import * as React from "react";
import { ReactElement, useMemo } from "react";
import { FieldDef } from "@root/components/Field";
import Form, { useForm } from "@root/components/Form";
import { renderButtons } from "@root/utils/storyUtils";

export default {
	title: "FormFields/FormFieldColor",
};

export const Playground = ({
	label,
	required,
	skeleton,
	disabled,
}: typeof Playground.args): ReactElement => {
	const controller = useForm();
	const { state, handleSubmit } = controller;

	const fields = useMemo(
		(): FieldDef[] =>
			[
				{
					name: "color",
					label,
					type: "color",
					required,
					disabled,
				},
			],
		[label, required, disabled],
	);

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<div style={{ height: "100vh" }}>
				<Form
					{...controller}
					buttons={renderButtons(handleSubmit)}
					title="Color Field"
					fields={fields}
					skeleton={skeleton}
				/>
			</div>
		</>
	);
};

Playground.args = {
	label: "Label",
	disabled: false,
	required: false,
	skeleton: false,
};

Playground.argTypes = {
	label: {
		name: "Label",
	},
	disabled: {
		name: "Disabled",
	},
	required: {
		name: "Required",
	},
	skeleton: {
		name: "Skeleton",
	},
};

export const KitchenSink = (): ReactElement => {
	const controller = useForm();
	const { state, handleSubmit } = controller;

	const fields = useMemo(
		() =>
			[
				{
					name: "color",
					label: "Regular Example",
					type: "color",
					required: false,
					disabled: false,
				},
				{
					name: "colorDisabled",
					label: "Disabled Example",
					type: "color",
					required: false,
					disabled: true,
				},
			] as FieldDef[],
		[],
	);

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<div style={{ height: "100vh" }}>
				<Form
					{...controller}
					buttons={renderButtons(handleSubmit)}
					title="Form Title"
					description="This is a description example"
					fields={fields}
				/>
			</div>
		</>
	);
};
