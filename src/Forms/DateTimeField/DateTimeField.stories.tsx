import * as React from 'react';
import { ReactElement } from 'react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { Meta } from '@storybook/addon-docs/blocks';

// Components
import DatePicker from './DatePicker';
import DateRangeCalendar from './DateRangeCalendar';
import SingleCalendar from './SingleDateCalendar';
import TimePicker from './TimePicker';
import TimeInput from './TimeInput';

export default {
	title: 'Forms|DateTimeField',
	decorators: [withKnobs],
} as Meta;

export const TimePickerExample = () : ReactElement => {
	return (<TimePicker />)
};

export const DatePickerExample = () : ReactElement => {
	return (<DatePicker />)
};

export const SingleCalendarExample = (): ReactElement => {
	return (
		<SingleCalendar
			label={text('Label', 'Label')}
			error={boolean('Error', false)}
			errorText={text('Error text', '')}
			required={boolean('Required', false)}
			disabled={boolean('Disabled', false)}
			helperText={text('Helper text', 'Some helper text')}
			instructionText={text(
				'Instructional text',
				'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
			)}
		/>
	);
};

export const DateRangeCalendarExample = (): ReactElement => {
	return (
		<DateRangeCalendar
			label={text('Label', 'Label')}
			error={boolean('Error', false)}
			errorText={text('Error text', '')}
			required={boolean('Required', false)}
			disabled={boolean('Disabled', false)}
			helperText={text('Helper text', 'Some helper text')}
			instructionText={text(
				'Instructional text',
				'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
			)}
		/>
	);
};

export const TimeInputExample = (): ReactElement => {
	return (
		<TimeInput
			label={text('Label', 'Label')}
			error={boolean('Error', false)}
			errorText={text('Error text', '')}
			required={boolean('Required', false)}
			disabled={boolean('Disabled', false)}
			helperText={text('Helper text', 'Some helper text')}
			instructionText={text(
				'Instructional text',
				'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
			)}
		/>
	);
};

