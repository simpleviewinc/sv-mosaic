import * as React from 'react';
import { ReactElement } from 'react';
import { boolean, withKnobs, text } from '@storybook/addon-knobs';
import { Meta } from '@storybook/addon-docs/blocks';

// Components
import Chip from './Chip';

export default {
	title: 'Components/Chip',
	decorators: [withKnobs],
} as Meta;

export const Default = (): ReactElement => (
	<Chip
		label={text('Label', 'Label')}
		disabled={boolean('Disabled', false)}
		selected={boolean('Selected', false)}
	/>
);

export const DeletableChip = (): ReactElement => {
	const handleDelete = () => {
		alert(`Clicked on delete icon`);
	};

	return (
		<Chip
			label={text('Label', 'Label')}
			disabled={boolean('Disabled', false)}
			onDelete={handleDelete}
		/>
	);
};
