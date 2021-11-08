import * as React from 'react';
import { ReactElement } from 'react';

// Styled Components
import { TimeInputProps } from './TimeInputTypes';
import Field from '@root/components/Field';
import TimePicker from '../TimePicker';
import { DateFormatSpan, DateTimePickerWrapper } from '../SingleDateCalendar/SingleDateCalendar.styled';

const TimeInput = (props: TimeInputProps): ReactElement => {
	const {
		label,
		required,
		disabled,
		instructionText,
		error,
		errorText,
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
			<DateTimePickerWrapper>
				<TimePicker />
				<DateFormatSpan>Month, Day, Year</DateFormatSpan>
			</DateTimePickerWrapper>
		</Field>
	);
};

export default TimeInput;
