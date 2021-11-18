import * as React from 'react';
import { ReactElement, useState } from 'react';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';

// Components
import ColorPicker from './ColorPicker';
import Field from '@root/components/Field';

export default {
	title: 'Forms|ColorPicker',
	decorators: [withKnobs],
};

export const Example = (): ReactElement => {
	const disabled = boolean('Disabled', false);
	const [color, setColor] = useState({
		r: 0,
		g: 141,
		b: 168,
		a: 1,
	});

	const handleColorChange = (color) => {
		setColor(color.rgb);
	};

	return (
		<Field
			label={text('Label', 'Label')}
			error={boolean('Error', false)}
			errorText={text('Error text', '')}
			required={boolean('Required', false)}
			disabled={disabled}
			instructionText={text('Instruction text', 'Instruction text')}
			helperText={text('Helper text', 'Helper text')}
		>
			<ColorPicker
				color={color}
				disabled={disabled}
				onChange={handleColorChange}
			/>
		</Field>
	);
};
