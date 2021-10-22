import * as React from 'react';
import { ReactElement } from 'react';
import { text, withKnobs } from '@storybook/addon-knobs';

// Components
import AddressCard from './AddressCard';
import Address from './Address';

export default {
	title: 'Forms|Address',
	decorators: [withKnobs],
};

export const Example = (): ReactElement => {
	return <Address label={text('Label', 'Label')} />;
};

export const CardExample = (): ReactElement => {
	const address = {
		city: text('City', 'Fairfield'),
		country: text('Country', 'United States'),
		street: text('Street', '694 A St'),
		postalCode: text('C.P', '94535 - 2324'),
		state: text('State', 'CA'),
		type: text('Type', 'Billing'),
	};

	return <AddressCard address={address} />;
};
