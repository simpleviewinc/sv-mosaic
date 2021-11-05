import * as React from 'react';
import { ReactElement } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Meta } from '@storybook/addon-docs/blocks';

// Components
import SingleCalendar from './SingleDateCalendar/SingleDateCalendar';

export default {
	title: 'Forms|DateTimeField',
	decorators: [withKnobs],
} as Meta;

export const SingleCalendarExample = (): ReactElement => {
	return <SingleCalendar />;
};
