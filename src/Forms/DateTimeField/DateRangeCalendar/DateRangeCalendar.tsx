import * as React from 'react';
import { ReactElement, useState } from 'react';

// Styled Components
import { DateRangeCalendarProps } from './DateRangeCalendarTypes';
import DatePicker from '../DatePicker';
import {
	DateRangeCalendarWrapper,
	StyledSpan,
} from './DateRangeCalendar.styled';
import { DateTimePickerWrapper } from '../SingleDateCalendar/SingleDateCalendar.styled';
import HelperText from '@root/components/Field/HelperText';
import { DisabledDateTimeValue } from '../DatePicker/DatePicker.styled';

const DateRangeCalendar = (props: DateRangeCalendarProps): ReactElement => {
	const { 
		error,
		disabled,
		fromValue,
		onChangeFrom,
		onChangeTo,
		required,
		toValue,
		value,
		onChange,
	} = props;

	const dateFormatText = <HelperText>Month, Day, Year</HelperText>;
	const toText = <StyledSpan disabled={disabled}>To</StyledSpan>;

	const handleOnChange = (position, date) => {
		let newDates = {...value};
		if(position === 0) {
			newDates = {
				...newDates,
				from: date
			}
		} else {
			newDates = {
				...newDates,
				to: date
			}
		}

		onChange(newDates);
	}

	return (
		<DateRangeCalendarWrapper>
			{!disabled ? (
				<>
					<DateTimePickerWrapper>
						<DatePicker error={error} onChange={(d) => handleOnChange(0, d)} placeholder='Start' required={required} value={value?.from} />
						{dateFormatText}
					</DateTimePickerWrapper>
					{toText}
					<DateTimePickerWrapper>
						<DatePicker error={error} onChange={(d) => handleOnChange(1, d)} placeholder='End' required={required} value={value?.to} />
						{dateFormatText}
					</DateTimePickerWrapper>
				</>
			) : (
				<>
					<DisabledDateTimeValue>
						{value?.from ? value?.from.toLocaleDateString('en-US') : 'Start'}
					</DisabledDateTimeValue>
					{toText}
					<DisabledDateTimeValue>
						{value?.to ? value?.to.toLocaleDateString('en-US') : 'End'}
					</DisabledDateTimeValue>
				</>
			)}
		</DateRangeCalendarWrapper>
	);
};

export default DateRangeCalendar;
