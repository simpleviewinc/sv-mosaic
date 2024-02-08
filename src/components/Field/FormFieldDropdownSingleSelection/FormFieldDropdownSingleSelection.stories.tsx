import * as React from "react";
import { ReactElement, useMemo } from "react";
import { boolean, select, withKnobs, text } from "@storybook/addon-knobs";
import { FieldDef } from "@root/components/Field";
import { renderButtons } from "@root/utils/storyUtils";

// Components
import Form, { useForm } from "@root/components/Form";
import { getOptions } from "@root/utils/getOptions";

export default {
	title: "FormFields/FormFieldDropdownSingleSelection",
	decorators: [withKnobs],
};

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

export const Playground = (): ReactElement => {
	const controller = useForm();
	const { state, dispatch } = controller;

	const size = select(
		"Size",
		["xs", "sm", "md", "lg"],
		"sm",
	);
	const placeholder = text("Placeholder", "placeholder");
	const disabled = boolean("Disabled", false);
	const required = boolean("Required", false);
	const helperText = text("Helper text", "Helper text");
	const instructionText = text("Instruction text", "Instruction text");
	const label = text("Label", "Label");
	const optionsOrigin = select(
		"Options Origin",
		["Local", "DB"],
		"Local",
	);

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
				buttons={renderButtons(dispatch)}
				title={text("Title", "Form Title")}
				description={text("Description", "This is a description example")}
				fields={fields}
			/>
		</>
	);
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
	const { state, dispatch } = controller;

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				{...controller}
				buttons={renderButtons(dispatch)}
				title="Form title"
				description="Form description"
				fields={kitchenSinkFields}
			/>
		</>
	);
};
