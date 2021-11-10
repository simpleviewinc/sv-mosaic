import * as React from 'react';
import { ReactElement } from 'react';

// Styled Components
import { DateRangeCalendarProps } from './DateRangeCalendarTypes';
import DatePicker from '../DatePicker';
import {
	DateRangeCalendarWrapper,
	StyledSpan,
} from './DateRangeCalendar.styled';
import { DateTimePickerWrapper } from '../SingleDateCalendar/SingleDateCalendar.styled';
import HelperText from '@root/components/HelperText';
import { DisabledDateTimeValue } from '../DatePicker/DatePicker.styled';

const DateRangeCalendar = (props: DateRangeCalendarProps): ReactElement => {
	const { error, disabled, fromValue, onChangeFrom, onChangeTo, required, toValue } = props;

	const dateFormatText = <HelperText>Month, Day, Year</HelperText>;
	const toText = <StyledSpan disabled={disabled}>To</StyledSpan>;

	return (
		<DateRangeCalendarWrapper>
			{!disabled ? (
				<>
					<DateTimePickerWrapper>
						<DatePicker error={error} onChange={onChangeFrom} placeholder='Start' required={required} value={fromValue} />
						{dateFormatText}
					</DateTimePickerWrapper>
					{toText}
					<DateTimePickerWrapper>
						<DatePicker error={error} onChange={onChangeTo} placeholder='End' required={required} value={toValue} />
						{dateFormatText}
					</DateTimePickerWrapper>
				</>
			) : (
				<>
					<DisabledDateTimeValue>
						{fromValue ? fromValue.toLocaleDateString('en-US') : 'Start'}
					</DisabledDateTimeValue>
					{toText}
					<DisabledDateTimeValue>
						{toValue ? toValue.toLocaleDateString('en-US') : 'End'}
					</DisabledDateTimeValue>
				</>
			)}
		</DateRangeCalendarWrapper>
	);
};

export default DateRangeCalendar;
