import * as React from 'react';
import { ReactElement } from 'react';
import { DateTimeInputProps } from './DateTimeInputTypes';

// Components
import DatePicker from '../DatePicker';
import HelperText from '@root/components/Field/HelperText';
import TimePicker from '../TimePicker';

// Styles Components
import { DateTimePickerWrapper } from '../SingleDateCalendar/SingleDateCalendar.styled';
import { DateTimeInputRow } from './DateTimeInput.styled';
import { DisabledDateTimeValue } from '../DatePicker/DatePicker.styled';

const DateTimeInput = (props: DateTimeInputProps): ReactElement => {
	const {
		error,
		disabled,
		dateValue,
		onChangeDate,
		onChangeTime,
		timeValue,
		required,
	} = props;

	return (
		<DateTimeInputRow>
			{!disabled ? (
				<>
					<DateTimePickerWrapper>
						<DatePicker
							error={error}
							onChange={onChangeDate}
							placeholder='Start'
							required={required}
							value={dateValue}
						/>
						<HelperText>Month, Day, Year</HelperText>
					</DateTimePickerWrapper>
					<DateTimePickerWrapper>
						<TimePicker
							error={error}
							onChange={onChangeTime}
							placeholder='00:00 AM/PM'
							value={timeValue}
						/>
						<HelperText>Hour, Minute, AM or PM</HelperText>
					</DateTimePickerWrapper>
				</>
			) : (
				<>
					<DisabledDateTimeValue>
						{dateValue ? dateValue.toLocaleDateString('en-US') : 'Start'}
					</DisabledDateTimeValue>
					<DisabledDateTimeValue>
						{timeValue
							? timeValue.toLocaleString('en-US', {
								hour: 'numeric',
								minute: 'numeric',
								hour12: true,
							})
							: '00:00 AM/PM'}
					</DisabledDateTimeValue>
				</>
			)}
		</DateTimeInputRow>
	);
};

export default DateTimeInput;
