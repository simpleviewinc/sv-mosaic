import * as React from "react";
import { ReactElement, useCallback, useMemo, useState } from "react";
import { boolean, select, withKnobs, text } from "@storybook/addon-knobs";

import FormFieldDropdownSingleSelection, { DropdownSingleSelectionDef } from ".";
import { Sizes } from "../../theme/sizes";
import Field, { FieldDef } from "@root/components/Field";
import Form from "../Form/Form";
import { useForm } from "../Form/formUtils";

export default {
	title: "Forms|FormFieldDropdownSingleSelection",
	decorators: [withKnobs]
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const options = [
	{ title: 'The Shawshank Redemption', year: 1994 },
	{ title: 'The Godfather', year: 1972 },
	{ title: 'The Godfather: Part II', year: 1974 },
	{ title: 'The Dark Knight', year: 2008 },
	{ title: '12 Angry Men', year: 1957 },
	{ title: "Schindler's List", year: 1993 },
	{ title: 'Pulp Fiction', year: 1994 },
	{ title: 'The Lord of the Rings: The Return of the King', year: 2003 },
	{ title: 'The Good, the Bad and the Ugly', year: 1966 },
	{ title: 'Fight Club', year: 1999 },
	{ title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
	{ title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
	{ title: 'Forrest Gump', year: 1994 },
	{ title: 'Inception', year: 2010 },
	{ title: 'The Lord of the Rings: The Two Towers', year: 2002 },
	{ title: "One Flew Over the Cuckoo's Nest", year: 1975 },
	{ title: 'Goodfellas', year: 1990 },
	{ title: 'The Matrix', year: 1999 },
	{ title: 'Seven Samurai', year: 1954 },
	{ title: 'Star Wars: Episode IV - A New Hope', year: 1977 },
	{ title: 'City of God', year: 2002 },
	{ title: 'Se7en', year: 1995 },
];

export const example = (): ReactElement => {
	const [selectedOption, setSelectedOption] = useState(null);

	const onChange = (option) => {
		setSelectedOption(option)
	}

	const label = text('Label', 'Label');
	const required = boolean('Required', false);
	const disabled = boolean('Disabled', false);
	const size = select('Size', [Sizes.xs, Sizes.sm, Sizes.md, Sizes.lg], Sizes.sm);
	const errorText = text('Error text', '');

	return (
		<Field
			fieldDef={{
				disabled,
				helperText: text('Helper text', ''),
				instructionText: text('Instruction text', 'Instruction text'),
				label,
				required,
				inputSettings: {
					size
				}
			}}
			error={errorText}			
		>
			<FormFieldDropdownSingleSelection
				fieldDef={{
					label,
					disabled,
					inputSettings: { 
						options,
						placeholder: text("Placeholder", "Placeholder example"),
						size: select('Size', [Sizes.xs, Sizes.sm, Sizes.md, Sizes.lg], Sizes.sm),
					}
				}}
				onChange={onChange}
				error={errorText}
				value={selectedOption}
			/>
		</Field>
	)
};

export const FormExample = (): ReactElement => {
	const { state, dispatch, events, registerFields, registerOnSubmit } = useForm();

	const size = select('Size', [Sizes.xs, Sizes.sm, Sizes.md, Sizes.lg], Sizes.sm);
	const placeholder = text('Placeholder', 'placeholder');
	const disabled = boolean('Disabled', false);
	const required = boolean('Required', false);

	const fields = useMemo(
		() =>
			[
				{
					name: "dropdown",
					label: "Regular example",
					type: "dropdown",
					required,
					disabled,
					size,
					inputSettings: {
						options,
						size,
						placeholder,
					},
					helperText: 'Helper text',
					instructionText: 'Instruction text',
				}
			] as unknown as FieldDef<DropdownSingleSelectionDef>[],
		[required, disabled, size, placeholder]
	);

	useMemo(() => {
		registerFields(fields);
	}, [fields, registerFields]);

	const onSubmit = useCallback((data) => {
		alert('Form submitted with the following data: ' + JSON.stringify(data, null, " "));
	}, [state.validForm]);

	useMemo(() => {
		registerOnSubmit(onSubmit);
	}, [onSubmit, registerOnSubmit]);

	const onCancel = () => {
		alert('Cancelling form, going back to previous site');
	};

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				title={text('Title', 'Form Title')}
				description={text('Description', 'This is a description example')}
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
