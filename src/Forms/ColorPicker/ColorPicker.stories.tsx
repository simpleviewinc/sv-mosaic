import * as React from 'react';
import { ReactElement, useState } from 'react';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import theme from '@root/theme';
import { ColorResult } from 'react-color';

// Components
import ColorPicker from './ColorPicker';
import Field from '@root/components/Field';

export default {
	title: 'Forms|ColorPicker',
	decorators: [withKnobs],
};

export const Example = (): ReactElement => {
	const disabled = boolean('Disabled', false);
	const [color, setColor] = useState(theme.colors.blueTeal);

	const handleColorChange = (color: ColorResult) => {
		setColor(color.hex);
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
