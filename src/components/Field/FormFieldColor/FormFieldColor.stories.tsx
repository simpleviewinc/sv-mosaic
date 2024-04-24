import * as React from "react";
import { ReactElement, useMemo } from "react";
import { boolean, text, withKnobs } from "@storybook/addon-knobs";
import { FieldDef } from "@root/components/Field";
import Form, { useForm } from "@root/components/Form";
import { renderButtons } from "@root/utils/storyUtils";

export default {
	title: "FormFields/FormFieldColor",
	decorators: [withKnobs],
};

export const Playground = (): ReactElement => {
	const controller = useForm();
	const { state, handleSubmit } = controller;

	const label = text("Label", "Label");
	const disabled = boolean("Disabled", false);
	const required = boolean("Required", false);
	const skeleton = boolean("Skeleton", false);

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
					title={text("Title", "Form Title")}
					description={text("Description", "This is a description example")}
					fields={fields}
					skeleton={skeleton}
				/>
			</div>
		</>
	);
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
