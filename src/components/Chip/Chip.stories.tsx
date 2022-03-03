import * as React from 'react';
import { ReactElement } from 'react';
import { boolean, withKnobs, text } from '@storybook/addon-knobs';
import { Meta } from '@storybook/addon-docs/blocks';
import styled from 'styled-components';

// Components
import Chip from './Chip';
import theme from '@root/theme';

export default {
	title: 'Components/Chip',
	decorators: [withKnobs],
} as Meta;

const KitchenSinkContainerChip = styled.div`
    font-family: ${theme.fontFamily};
`;

export const Playground = (): ReactElement => {
	const deletable = boolean('Deletable', false);

	return (
		deletable ?
			<Chip
				label={text('Label', 'Label')}
				disabled={boolean('Disabled', false)}
				selected={boolean('Selected', false)}
				onDelete={() => alert('Deleted')}
			/> :
			<Chip
				label={text('Label', 'Label')}
				disabled={boolean('Disabled', false)}
				selected={boolean('Selected', false)}
			/>
	)
};

export const KitchenSink = (): ReactElement => {
	const handleDelete = () => {
		alert(`Clicked on delete icon`);
	};

	return (
		<KitchenSinkContainerChip>
			<h1>Chip</h1>
			<h2>Basic Chip</h2>
			<Chip
				label={'Label'}
				disabled={false}
			/>
			<Chip
				label={'Label'}
				disabled={false}
				selected={true}
			/>
			<h2>Deletable Chip</h2>
			<Chip
				label={'Label'}
				disabled={false}
				onDelete={handleDelete}
			/>
			<h2>Disabled</h2>
			<Chip
				label={'Label'}
				disabled={true}
			/>
			<Chip
				label={'Label'}
				selected={true}
				disabled={true}
			/>
		</KitchenSinkContainerChip>
	);
};
