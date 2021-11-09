import * as React from 'react';
import { ReactElement, useState } from 'react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { Meta } from '@storybook/addon-docs/blocks';

// Components
import DatePicker from './DatePicker';
import DateRangeCalendar from './DateRangeCalendar';
import SingleCalendar from './SingleDateCalendar';
import TimePicker from './TimePicker';
import TimeInput from './TimeInput';
import DateTimeInput from './DateTimeInput';
import Field from '@root/components/Field';

export default {
	title: 'Forms|DateTimeField',
	decorators: [withKnobs],
} as Meta;

export const TimePickerExample = (): ReactElement => {
	const [selectedDate, setSelectedDate] = useState<Date | null>(
		new Date('2014-08-18T21:11:54')
	);

	const handleDateChange = (date: Date | null) => {
		setSelectedDate(date);
	};

	return <TimePicker onChange={handleDateChange} value={selectedDate} />;
};

export const DatePickerExample = (): ReactElement => {
	const [selectedDate, setSelectedDate] = useState(new Date());

	const handleDateChange = (date: Date | null) => {
		setSelectedDate(date);
	};

	return <DatePicker onChange={handleDateChange} value={selectedDate} />;
};

export const SingleCalendarExample = (): ReactElement => {
	const error = boolean('Error', false);
	const disabled = boolean('Disabled', false);
	const [selectedDate, setSelectedDate] = useState(new Date());

	const handleDateChange = (date: Date | null) => {
		setSelectedDate(date);
	};

	return (
		<Field
			label={text('Label', 'Label')}
			error={error}
			errorText={text('Error text', '')}
			required={boolean('Required', false)}
			disabled={disabled}
			instructionText={!disabled && text(
				'Instructional text',
				'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
			)}
			helperText={!disabled && 'Month, Day, Year'}
		>
			<SingleCalendar
				disabled={disabled}
				onChange={handleDateChange}
				value={selectedDate}
			/>
		</Field>
	);
};

export const DateRangeCalendarExample = (): ReactElement => {
	const [selectedDateFrom, setSelectedDateFrom] = useState(new Date());
	const [selectedDateTo, setSelectedDateTo] = useState(new Date());

	const handleDateChangeFrom = (date: Date | null) => {
		setSelectedDateFrom(date);
	};

	const handleDateChangeTo = (date: Date | null) => {
		setSelectedDateTo(date);
	};

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
			fromValue={selectedDateFrom}
			onChangeFrom={handleDateChangeFrom}
			onChangeTo={handleDateChangeTo}
			toValue={selectedDateTo}
		/>
	);
};

export const TimeInputExample = (): ReactElement => {
	const error = boolean('Error', false);
	const disabled = boolean('Disabled', false);
	const [selectedTime, setSelectedTime] = useState<Date | null>(
		new Date('2014-08-18T21:11:54')
	);

	const handleTimeChange = (date: Date | null) => {
		setSelectedTime(date);
	};

	return (
		<Field
			label={text('Label', 'Time Input')}
			error={error}
			errorText={text('Error text', '')}
			required={boolean('Required', false)}
			disabled={disabled}
			instructionText={!disabled && text(
				'Instructional text',
				'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
			)}
			helperText={!disabled && 'Hour, Minute, AM or PM'}
		>
			<TimeInput
				disabled={disabled}
				onChange={handleTimeChange}
				value={selectedTime}
			/>
		</Field>
	);
};

export const DateTimeInputExample = (): ReactElement => {
	const [selectedDate, setSelectedDate] = useState(new Date());
	const [selectedTime, setSelectedTime] = useState(new Date());

	const handleDateChangeFrom = (date: Date | null) => {
		setSelectedDate(date);
	};

	const handleDateChangeTo = (date: Date | null) => {
		setSelectedTime(date);
	};

	return (
		<DateTimeInput
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
			dateValue={selectedDate}
			onChangeDate={handleDateChangeFrom}
			onChangeTime={handleDateChangeTo}
			timeValue={selectedTime}
		/>
	);
};
