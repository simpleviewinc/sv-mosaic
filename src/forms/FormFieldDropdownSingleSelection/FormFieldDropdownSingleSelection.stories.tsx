import * as React from "react";
import { useMemo } from "react";
import { FieldDef } from "@root/components/Field";
import FormFieldDropdownSingleSelection, { DropdownSingleSelectionDef } from ".";
import { excludedFormFieldsControls, onCancel, renderButtons } from "@root/utils/storyUtils";
import { ComponentMeta } from "@storybook/react";

// Components
import Form, { useForm } from "@root/components/Form";

export default {
	title: "FormFields/FormFieldDropdownSingleSelection",
	component: Form,
	argTypes: {
		size: {
			options: ["xs", "sm", "md", "lg"],
			control: "select",
		},
	},
} as ComponentMeta<typeof FormFieldDropdownSingleSelection>;

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const options = [
	{ label: "The Shawshank Redemption", value: "1994" },
	{ label: "The Godfather", value: "1972" },
	{ label: "The Godfather: Part II", value: "1974" },
	{ label: "The Dark Knight", value: "2008" },
	{ label: "12 Angry Men", value: "1957" },
	{ label: "Schindler's List", value: "1993" },
	{ label: "Pulp Fiction", value: "1994" },
	{ label: "The Lord of the Rings: The Return of the King", value: "2003" },
	{ label: "The Good, the Bad and the Ugly", value: "1966" },
	{ label: "Fight Club", value: "1999" },
	{ label: "The Lord of the Rings: The Fellowship of the Ring", value: "2001" },
	{ label: "Star Wars: Episode V - The Empire Strikes Back", value: "1980" },
	{ label: "Forrest Gump", value: "1994" },
	{ label: "Inception", value: "2010" },
	{ label: "The Lord of the Rings: The Two Towers", value: "2002" },
	{ label: "One Flew Over the Cuckoo's Nest", value: "1975" },
	{ label: "Goodfellas", value: "1990" },
	{ label: "The Matrix", value: "1999" },
	{ label: "Seven Samurai", value: "1954" },
	{ label: "Star Wars: Episode IV - A New Hope", value: "1977" },
	{ label: "City of God", value: "2002" },
	{ label: "Se7en", value: "1995" },
];

const Template = (args) => {
	const { state, dispatch } = useForm();
	const {
		size,
		placeholder,
		required,
		fields,
		helperText,
		instructionText,
		label,
		disabled,
		optionsArgs
	} = args;

	const playgroundFields = useMemo(
		() =>
			[
				{
					name: "dropdown",
					label,
					type: "dropdown",
					required,
					disabled,
					size,
					inputSettings: {
						options: optionsArgs,
						placeholder,
					},
					helperText,
					instructionText,
				},
			] as FieldDef<DropdownSingleSelectionDef>[],
		[
			required,
			disabled,
			size,
			placeholder,
			options,
			helperText,
			instructionText,
			label,
			optionsArgs
		]
	);

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				buttons={renderButtons(dispatch)}
				title="Form Title"
				description="This is a description example"
				state={state}
				fields={fields ? fields : playgroundFields }
				dispatch={dispatch}
				onCancel={onCancel}
			/>
		</>
	);
};

export const Playground = Template.bind({});
Playground.parameters = { controls: { exclude: excludedFormFieldsControls } };
Playground.args = {
	label: "Label",
	required: false,
	disabled: false,
	instructionText: "Instruction text",
	helperText: "Helper text",
	size: "sm",
	placeholder: "placeholder",
	optionsArgs: options
};

const kitchenSinkFields = [
	{
		name: "dropdown",
		label: "Regular example",
		type: "dropdown",
		size: "md",
		inputSettings: {
			options,
			placeholder: "placeholder"
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
			placeholder: "placeholder"
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
] as FieldDef<DropdownSingleSelectionDef>[];

export const KitchenSink = Template.bind({});
KitchenSink.parameters = { controls: { exclude: excludedFormFieldsControls } };
KitchenSink.args = {
	fields: kitchenSinkFields,
};
