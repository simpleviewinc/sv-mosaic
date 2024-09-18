import * as React from "react";
import { ReactElement, useMemo } from "react";
import { FieldDef } from "@root/components/Field";
import { renderButtons } from "../../../../utils";

// Components
import Form, { useForm } from "@root/components/Form";
import { getOptions } from "@root/mock";

export default {
	title: "FormFields/FormFieldDropdown",
};

const options = [
	{ label: "The Shawshank Redemption", value: "tt0111161" },
	{ label: "The Godfather", value: "tt0068646" },
	{ label: "The Godfather: Part II", value: "tt0071562" },
	{ label: "The Dark Knight", value: "tt0468569" },
	{ label: "12 Angry Men", value: "tt0050083" },
	{ label: "Schindler's List", value: "tt0108052" },
	{ label: "Pulp Fiction", value: "tt0110912" },
	{ label: "The Lord of the Rings: The Return of the King", value: "tt0167260" },
	{ label: "The Good, the Bad and the Ugly", value: "tt0060196" },
	{ label: "Fight Club", value: "tt0137523" },
	{ label: "The Lord of the Rings: The Fellowship of the Ring", value: "tt0120737" },
	{ label: "Star Wars: Episode V - The Empire Strikes Back", value: "tt0080684" },
	{ label: "Forrest Gump", value: "tt0109830" },
	{ label: "Inception", value: "tt1375666" },
	{ label: "The Lord of the Rings: The Two Towers", value: "tt0167261" },
	{ label: "One Flew Over the Cuckoo's Nest", value: "tt0073486" },
	{ label: "Goodfellas", value: "tt0099685" },
	{ label: "The Matrix", value: "tt0133093" },
	{ label: "Seven Samurai", value: "tt0047478" },
	{ label: "Star Wars: Episode IV - A New Hope", value: "tt0076759" },
	{ label: "City of God", value: "tt0317248" },
	{ label: "Aftermath", value: "tt1564368" },
	{ label: "Aftermath", value: "tt4581576" },
];

export const Playground = ({
	label,
	required,
	skeleton,
	disabled,
	instructionText,
	helperText,
	optionsOrigin,
	placeholder,
	size,
}: typeof Playground.args): ReactElement => {
	const controller = useForm();
	const { state, handleSubmit } = controller;

	const fields = useMemo(
		(): FieldDef[] =>
			[
				{
					name: "dropdown",
					label,
					type: "dropdown",
					required,
					disabled,
					size,
					inputSettings: {
						options: optionsOrigin === "Local" ? options : undefined,
						getOptions: optionsOrigin === "DB" ? getOptions : undefined,
						placeholder,
					},
					helperText,
					instructionText,
				},
			] as FieldDef[],
		[
			required,
			disabled,
			size,
			placeholder,
			options,
			helperText,
			instructionText,
			label,
			optionsOrigin,
		],
	);

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				{...controller}
				buttons={renderButtons(handleSubmit)}
				title="Dropdown Field"
				fields={fields}
				skeleton={skeleton}
			/>
		</>
	);
};

Playground.args = {
	label: "Label",
	disabled: false,
	required: false,
	skeleton: false,
	instructionText: "Instruction text",
	helperText: "Helper text",
	optionsOrigin: "Local",
	size: "sm",
	placeholder: "Choose a movie..",
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
	instructionText: {
		name: "Instruction Text",
	},
	helperText: {
		name: "Helper Text",
	},
	optionsOrigin: {
		name: "Options Origin",
	},
	size: {
		name: "Size",
		control: { type: "select" },
		options: ["xs", "sm", "md", "lg"],
	},
	placeholder: {
		name: "Placeholder",
	},
};

const kitchenSinkFields: FieldDef[] = [
	{
		name: "dropdown",
		label: "Regular example",
		type: "dropdown",
		size: "md",
		inputSettings: {
			options,
			placeholder: "placeholder",
		},
		helperText: "Helper text",
		instructionText: "Instruction text",
	},
	{
		name: "dropdownDB",
		label: "From data base example",
		type: "dropdown",
		size: "md",
		inputSettings: {
			getOptions,
			placeholder: "placeholder",
		},
		helperText: "Helper text",
		instructionText: "Instruction text",
	},
	{
		name: "disabledExample",
		label: "Disabled",
		type: "dropdown",
		disabled: true,
		size: "md",
		inputSettings: {
			options,
			placeholder: "placeholder",
		},
		helperText: "Helper text",
		instructionText: "Instruction text",
	},
	{
		name: "xsSize",
		label: "Size xs",
		type: "dropdown",
		size: "xs",
		inputSettings: {
			options,
		},
		helperText: "Helper text",
		instructionText: "Instruction text",
	},
	{
		name: "smSize",
		label: "Size sm",
		type: "dropdown",
		size: "sm",
		inputSettings: {
			options,
		},
		helperText: "Helper text",
		instructionText: "Instruction text",
	},
	{
		name: "mdSize",
		label: "Size md",
		type: "dropdown",
		size: "md",
		inputSettings: {
			options,
		},
		helperText: "Helper text",
		instructionText: "Instruction text",
	},
	{
		name: "lgSize",
		label: "Size lg",
		type: "dropdown",
		size: "lg",
		inputSettings: {
			options,
		},
		helperText: "Helper text",
		instructionText: "Instruction text",
	},
];

export const KitchenSink = (): ReactElement => {
	const controller = useForm();
	const { state, handleSubmit } = controller;

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				{...controller}
				buttons={renderButtons(handleSubmit)}
				title="Form title"
				description="Form description"
				fields={kitchenSinkFields}
			/>
		</>
	);
};
