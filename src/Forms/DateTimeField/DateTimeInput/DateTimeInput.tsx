import * as React from 'react';
import { ReactElement } from 'react';

// Styled Components
import { DateTimeInputProps } from './DateTimeInputTypes';
import Field from '@root/components/Field';
import DatePicker from '../DatePicker';
import {
	DateFormatSpan,
	DateTimePickerWrapper,
} from '../SingleDateCalendar/SingleDateCalendar.styled';
import TimePicker from '../TimePicker';
import { DateTimeInputRow } from './DateTimeInput.styled';

const DateRangeCalendar = (props: DateTimeInputProps): ReactElement => {
	const {
		label,
		required,
		disabled,
		instructionText,
		error,
		errorText,
		dateValue,
		onChangeDate,
		onChangeTime,
		timeValue,
	} = props;

	return (
		<Field
			label={label}
			required={required}
			disabled={disabled}
			error={error}
			errorText={errorText}
			instructionText={instructionText}
		>
			<DateTimeInputRow>
				<DateTimePickerWrapper>
					<DatePicker onChange={onChangeDate} value={dateValue}/>
					<DateFormatSpan>Month, Day, Year</DateFormatSpan>
				</DateTimePickerWrapper>
				<DateTimePickerWrapper>
					<TimePicker onChange={onChangeTime} value={timeValue}/>
					<DateFormatSpan>Hour, Minute, AM or PM</DateFormatSpan>
				</DateTimePickerWrapper>
			</DateTimeInputRow>
		</Field>
	);
};

export default DateRangeCalendar;
