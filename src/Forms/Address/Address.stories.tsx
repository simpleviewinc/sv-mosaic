import * as React from 'react';
import { ReactElement } from 'react';
import { text, withKnobs } from '@storybook/addon-knobs';

// Components
import Address from './Address';

export default {
	title: 'Forms|Address',
	decorators: [withKnobs],
};

export const Example = (): ReactElement => {
	return <Address label={text('Label', 'Label')} />;
};

