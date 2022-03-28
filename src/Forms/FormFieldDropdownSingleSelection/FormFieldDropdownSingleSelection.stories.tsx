import * as React from "react";
import { ReactElement, useCallback, useMemo } from "react";
import { boolean, select, withKnobs, text } from "@storybook/addon-knobs";

// Components
import { DropdownSingleSelectionDef } from ".";
import { FieldDef } from "@root/components/Field";
import Form from "../Form/Form";

// Utils
import { Sizes } from "../../theme/sizes";
import { useForm } from "../Form/formUtils";

export default {
	title: "Forms|FormFieldDropdownSingleSelection",
	decorators: [withKnobs],
};

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const options = [
	{ title: "The Shawshank Redemption", value: 1994 },
	{ title: "The Godfather", value: 1972 },
	{ title: "The Godfather: Part II", value: 1974 },
	{ title: "The Dark Knight", value: 2008 },
	{ title: "12 Angry Men", value: 1957 },
	{ title: "Schindler's List", value: 1993 },
	{ title: "Pulp Fiction", value: 1994 },
	{ title: "The Lord of the Rings: The Return of the King", value: 2003 },
	{ title: "The Good, the Bad and the Ugly", value: 1966 },
	{ title: "Fight Club", value: 1999 },
	{ title: "The Lord of the Rings: The Fellowship of the Ring", value: 2001 },
	{ title: "Star Wars: Episode V - The Empire Strikes Back", value: 1980 },
	{ title: "Forrest Gump", value: 1994 },
	{ title: "Inception", value: 2010 },
	{ title: "The Lord of the Rings: The Two Towers", value: 2002 },
	{ title: "One Flew Over the Cuckoo's Nest", value: 1975 },
	{ title: "Goodfellas", value: 1990 },
	{ title: "The Matrix", value: 1999 },
	{ title: "Seven Samurai", value: 1954 },
	{ title: "Star Wars: Episode IV - A New Hope", value: 1977 },
	{ title: "City of God", value: 2002 },
	{ title: "Se7en", value: 1995 },
];

const onCancel = () => {
	alert("Cancelling form, going back to previous site");
};

export const Playground = (): ReactElement => {
	const {
		state,
		dispatch,
		events,
		registerFields,
		registerOnSubmit,
	} = useForm();

	const size = select(
		"Size",
		[Sizes.xs, Sizes.sm, Sizes.md, Sizes.lg],
		Sizes.sm
	);
	const placeholder = text("Placeholder", "placeholder");
	const disabled = boolean("Disabled", false);
	const required = boolean("Required", false);
	const helperText = text("Helper text", "Helper text");
	const instructionText = text("Instruction text", "Instruction text");
	const label = text("Label", "Label");

	const fields = useMemo(
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
						options,
						size,
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
		]
	);

	useMemo(() => {
		registerFields(fields);
	}, [fields, registerFields]);

	const onSubmit = useCallback(
		(data) => {
			alert(
				"Form submitted with the following data: " +
          JSON.stringify(data, null, " ")
			);
		},
		[state.validForm]
	);

	useMemo(() => {
		registerOnSubmit(onSubmit);
	}, [onSubmit, registerOnSubmit]);

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				title={text("Title", "Form Title")}
				description={text("Description", "This is a description example")}
				state={state}
				fields={fields}
				dispatch={dispatch}
				events={events}
				onCancel={onCancel}
				onSubmit={onSubmit}
			/>
		</>
	);
};

const kitchenSinkFields = [
	{
		name: "dropdown",
		label: "Regular example",
		type: "dropdown",
		size: Sizes.md,
		inputSettings: {
			options,
			size: Sizes.md,
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
		size: Sizes.md,
		inputSettings: {
			options,
			size: Sizes.md,
			placeholder: "placeholder"
		},
		helperText: "Helper text",
		instructionText: "Instruction text",
	},
	{
		name: "xsSize",
		label: "Size xs",
		type: "dropdown",
		size: Sizes.xs,
		inputSettings: {
			options,
			size: Sizes.xs,
		},
		helperText: "Helper text",
		instructionText: "Instruction text",
	},
	{
		name: "smSize",
		label: "Size sm",
		type: "dropdown",
		size: Sizes.sm,
		inputSettings: {
			options,
			size: Sizes.sm,
		},
		helperText: "Helper text",
		instructionText: "Instruction text",
	},
	{
		name: "mdSize",
		label: "Size md",
		type: "dropdown",
		size: Sizes.md,
		inputSettings: {
			options,
			size: Sizes.md,
		},
		helperText: "Helper text",
		instructionText: "Instruction text",
	},
	{
		name: "lgSize",
		label: "Size lg",
		type: "dropdown",
		size: Sizes.lg,
		inputSettings: {
			options,
			size: Sizes.lg,
		},
		helperText: "Helper text",
		instructionText: "Instruction text",
	},
] as FieldDef<DropdownSingleSelectionDef>[];

export const KitchenSink = (): ReactElement => {
	const {
		state,
		dispatch,
		events,
		registerFields,
		registerOnSubmit,
	} = useForm();

	useMemo(() => {
		registerFields(kitchenSinkFields);
	}, [kitchenSinkFields, registerFields]);

	const onSubmit = useCallback(
		(data) => {
			alert(
				"Form submitted with the following data: " +
					JSON.stringify(data, null, " ")
			);
		},
		[state.validForm]
	);

	useMemo(() => {
		registerOnSubmit(onSubmit);
	}, [onSubmit, registerOnSubmit]);

	const onCancel = () => {
		alert("Cancelling form, going back to previous site");
	};

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				title='Form title'
				description='Form description'
				state={state}
				fields={kitchenSinkFields}
				dispatch={dispatch}
				events={events}
				onCancel={onCancel}
				onSubmit={onSubmit}
			/>
		</>
	);
};
