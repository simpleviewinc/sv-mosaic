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
		new Date('2018-01-01T00:00:00.000Z')
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
	const errorText = text('Error text', '');
	const instructionText = text(
		'Instruction text',
		'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
	);
	const disabled = boolean('Disabled', false);
	const required = boolean('Required', false);
	const [selectedDate, setSelectedDate] = useState(new Date());

	const handleDateChange = (date: Date | null) => {
		setSelectedDate(date);
	};

	return (
		<Field
			label={text('Label', 'Label')}
			error={error}
			errorText={errorText}
			required={required}
			disabled={disabled}
			instructionText={!disabled && instructionText}
			helperText={!disabled && 'Month, Day, Year'}
		>
			<SingleCalendar
				error={error && errorText.trim().length > 0}
				disabled={disabled}
				onChange={handleDateChange}
				required={required}
				value={selectedDate}
			/>
		</Field>
	);
};

export const DateRangeCalendarExample = (): ReactElement => {
	const disabled = boolean('Disabled', false);
	const error = boolean('Error', false);
	const errorText = text('Error text', '');
	const instructionText = text(
		'Instruction text',
		'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
	);
	const required = boolean('Required', false);
	const [selectedDateFrom, setSelectedDateFrom] = useState(new Date());
	const [selectedDateTo, setSelectedDateTo] = useState(new Date());

	const handleDateChangeFrom = (date: Date | null) => {
		setSelectedDateFrom(date);
	};

	const handleDateChangeTo = (date: Date | null) => {
		setSelectedDateTo(date);
	};

	return (
		<Field
			label={text('Label', 'Label')}
			required={required}
			disabled={disabled}
			error={error}
			errorText={errorText}
			instructionText={!disabled && instructionText}
		>
			<DateRangeCalendar
				error={error && errorText.trim().length > 0}
				disabled={disabled}
				fromValue={selectedDateFrom}
				onChangeFrom={handleDateChangeFrom}
				onChangeTo={handleDateChangeTo}
				required={required}
				toValue={selectedDateTo}
			/>
		</Field>
	);
};

export const TimeInputExample = (): ReactElement => {
	const disabled = boolean('Disabled', false);
	const error = boolean('Error', false);
	const errorText = text('Error text', '');
	const instructionText = text(
		'Instruction text',
		'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
	);
	const required = boolean('Required', false);
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
			errorText={errorText}
			required={required}
			disabled={disabled}
			instructionText={!disabled && instructionText}
			helperText={!disabled && 'Hour, Minute, AM or PM'}
		>
			<TimeInput
				error={error && errorText.trim().length > 0}
				disabled={disabled}
				onChange={handleTimeChange}
				required={required}
				value={selectedTime}
			/>
		</Field>
	);
};

export const DateTimeInputExample = (): ReactElement => {
	const disabled = boolean('Disabled', false);
	const error = boolean('Error', false);
	const errorText = text('Error text', '');
	const instructionText = text(
		'Instruction text',
		'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
	);
	const required = boolean('Required', false);
	const [selectedDate, setSelectedDate] = useState(new Date());
	const [selectedTime, setSelectedTime] = useState(new Date());

	const handleDateChange = (date: Date | null) => {
		setSelectedDate(date);
	};

	const handleTimeChange = (date: Date | null) => {
		setSelectedTime(date);
	};

	return (
		<Field
			label={text('Label', 'Label')}
			required={required}
			disabled={disabled}
			error={error}
			errorText={errorText}
			instructionText={!disabled && instructionText}
		>
			<DateTimeInput
				error={error && errorText.trim().length > 0}
				disabled={disabled}
				required={required}
				dateValue={selectedDate}
				onChangeDate={handleDateChange}
				onChangeTime={handleTimeChange}
				timeValue={selectedTime}
			/>
		</Field>
	);
};
