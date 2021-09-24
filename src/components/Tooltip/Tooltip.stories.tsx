import * as React from 'react';
import { ReactElement } from 'react';
import { boolean, withKnobs, text } from '@storybook/addon-knobs';
import { Meta } from '@storybook/addon-docs/blocks';

// Components
import Tooltip from './Tooltip';

export default {
	title: 'Components/Tooltip',
	decorators: [withKnobs],
} as Meta;

export const Example = (): ReactElement => (
	<Tooltip text='test' description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec iaculis quam adipiscing elit. Quisque'}>
		<p style={{marginTop: '400px'}}>HOLA</p>
	</Tooltip>
);