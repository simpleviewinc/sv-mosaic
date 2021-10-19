import * as React from "react";
import { useState, useMemo, useCallback, ReactElement } from "react";
import {
	boolean,
	withKnobs,
	text
} from '@storybook/addon-knobs';
import { Meta } from '@storybook/addon-docs/blocks';

// Components
import FormFieldCheckbox from '.';

export default {
	title : "Forms|FormFieldCheckbox",
	decorators: [withKnobs],
} as Meta;

export const example = (): ReactElement => {
	const [checked, setChecked] = useState([]);

	const onChange = useCallback(checked => {
		setChecked(checked);
	}, [setChecked]);
	
	const options = useMemo(() => [
		{
			label : "Label 1",
			value : "label_1"
		},
		{
			label : "Label 2",
			value : "label_2"
		},
		{
			label : "Label 3",
			value : "label_3"
		}
	], []);

	return (
		<>
			<span>Checked: {checked.join(", ")}</span>
			<FormFieldCheckbox
				label={text('Label', 'Label')}
				inputSettings={{
					value: checked,
					options

				}}
				required={boolean('Required', false)}
				disabled={boolean('Disabled', false)}
				error={boolean('Error', false)}
				instructionText={text('Instruction text', 'Instruction text')}
				errorText={text('Error text', 'Error text')}
				onChange={onChange}
			/>
		</>
	)
}