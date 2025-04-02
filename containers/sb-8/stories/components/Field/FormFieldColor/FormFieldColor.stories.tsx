import * as React from "react";
import type { ReactElement } from "react";
import { useMemo } from "react";
import type { FieldDef } from "@root/components/Field";
import Form, { useForm } from "@root/components/Form";
import { commonFieldControls, renderButtons } from "../../../../utils";

export default {
	title: "FormFields/FormFieldColor",
};

export const Playground = ({
	label,
	required,
	disabled,
	prepop,
	prepopData,
}: typeof Playground.args): ReactElement => {
	const controller = useForm({ data: prepop ? prepopData : {} });
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
				/>
			</div>
		</>
	);
};

Playground.args = {
	...commonFieldControls.args({
		prepopData: {
			color: "#ff0000",
		},
	}),
};

Playground.argTypes = {
	...commonFieldControls.argTypes,
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
