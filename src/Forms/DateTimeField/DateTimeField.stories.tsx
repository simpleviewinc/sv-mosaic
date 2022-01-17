import * as React from 'react';
import { ReactElement, useCallback, useMemo, useState } from 'react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { Meta } from '@storybook/addon-docs/blocks';

// Components
import DatePicker from './DatePicker';
import DateRangeCalendar from './DateRangeCalendar';
import SingleCalendar from './SingleDateCalendar';
import TimePicker from './TimePicker';
import TimeInput from './TimeInput';
import DateTimeInput from './DateTimeInput';
import Field, { FieldDef } from '@root/components/Field';
import Form from '../Form/Form';
import { useForm } from '../Form/formUtils';

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

	return (
		<TimePicker
			fieldDef={{
				label: '',
			}}
			onChange={handleDateChange}
			value={selectedDate}
		/>
	);
};

export const DatePickerExample = (): ReactElement => {
	const [selectedDate, setSelectedDate] = useState(new Date());

	const handleDateChange = (date: Date | null) => {
		setSelectedDate(date);
	};

	return (
		<DatePicker
			fieldDef={{
				label: '',
			}}
			onChange={handleDateChange}
			value={selectedDate}
		/>
	);
};

export const SingleCalendarExample = (): ReactElement => {
	const error = text('Error text', '');
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
			fieldDef={{
				label: text('Label', 'Label'),
				required,
				disabled,
				instructionText: !disabled && instructionText,
				helperText: !disabled && 'Month, Day, Year',
			}}
			error={error}
		>
			<SingleCalendar
				fieldDef={{
					label: '',
					disabled,
					required,
				}}
				error={error}
				onChange={handleDateChange}
				value={selectedDate}
			/>
		</Field>
	);
};

export const DateRangeCalendarExample = (): ReactElement => {
	const disabled = boolean('Disabled', false);
	const error = text('Error text', '');
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
			fieldDef={{
				label: text('Label', 'Label'),
				required,
				disabled,
				instructionText: !disabled && instructionText,
			}}
			error={error}
		>
			<DateRangeCalendar
				error={error}
				fieldDef={{
					label: '',
					disabled,
					required
				}}
			// fromValue={selectedDateFrom}
			// onChangeFrom={handleDateChangeFrom}
			// onChangeTo={handleDateChangeTo}
			// toValue={selectedDateTo}
			/>
		</Field>
	);
};

export const TimeInputExample = (): ReactElement => {
	const disabled = boolean('Disabled', false);
	const error = text('Error text', '');
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
			fieldDef={{
				label: text('Label', 'Time input'),
				required,
				disabled,
				instructionText: !disabled && instructionText,
				helperText: !disabled && 'Hour, Minute, AM or PM',
			}}
			error={error}
		>
			<TimeInput
				fieldDef={{
					label: '',
					disabled,
					required,
				}}
				error={error}
				onChange={handleTimeChange}
				value={selectedTime}
			/>
		</Field>
	);
};

export const DateTimeInputExample = (): ReactElement => {
	const disabled = boolean('Disabled', false);
	const error = text('Error text', '');
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
			fieldDef={{
				label: text('Label', 'Label'),
				required,
				disabled,
				instructionText: !disabled && instructionText
			}}
			error={error}
		>
			<DateTimeInput
				fieldDef={{
					label: '',
					disabled,
					required,
				}}
				error={error}
			// dateValue={selectedDate}
			// onChangeDate={handleDateChange}
			// onChangeTime={handleTimeChange}
			// timeValue={selectedTime}
			/>
		</Field>
	);
};

export const FormExample = (): ReactElement => {
	const { state, dispatch, events, registerFields, registerOnSubmit } = useForm();

	const disabled = boolean('Disabled', false);
	const required = boolean('Required', false);

	const fields = useMemo(
		() =>
			[
				{
					name: "date",
					label: "Single Date Picker",
					type: "date",
					required,
					disabled,
					inputSettings: {
						disabled,
					},
					helperText: 'Helper text',
					instructionText: 'Instruction text',
				},
				{
					name: "dateRange",
					label: "Date Range",
					type: "dateRange",
					required,
					disabled,
					inputSettings: {
						disabled,
					},
					helperText: 'Helper text',
					instructionText: 'Instruction text',
				},
				{
					name: "time",
					label: "Single Time Picker",
					type: "time",
					required,
					disabled,
					inputSettings: {
						disabled,
					},
					helperText: 'Helper text',
					instructionText: 'Instruction text',
				},
				{
					name: "dateTime",
					label: "Date and Time Picker",
					type: "dateTime",
					required,
					disabled,
					inputSettings: {
						disabled,
					},
					helperText: 'Helper text',
					instructionText: 'Instruction text',
				},
			] as unknown as FieldDef[],
		[required, disabled]
	);

	useMemo(() => {
		registerFields(fields);
	}, [fields, registerFields]);

	const onSubmit = useCallback((data) => {
		alert('Form submitted with the following data: ' + JSON.stringify(data, null, " "));
	}, [state.validForm]);

	useMemo(() => {
		registerOnSubmit(onSubmit);
	}, [onSubmit, registerOnSubmit]);

	const onCancel = () => {
		alert('Cancelling form, going back to previous site');
	};

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				title={text('Title', 'Form Title')}
				description={text('Description', 'This is a description example')}
				state={state}
				fields={fields}
				dispatch={dispatch}
				events={events}
				onCancel={onCancel}
				onSubmit={onSubmit}
			/>
		</>
	);
};