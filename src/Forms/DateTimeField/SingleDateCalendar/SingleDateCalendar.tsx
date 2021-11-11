import * as React from 'react';
import { ReactElement } from 'react';

// Components
import DatePicker, { DatePickerProps } from '../DatePicker';

// Styles
import { DisabledDateTimeValue } from '../DatePicker/DatePicker.styled';

const SingleDateCalendar = (props: DatePickerProps): ReactElement => {
	const { error, required, disabled, onChange, value } = props;

	return (
		<>
			{!disabled ? (
				<DatePicker
					error={error}
					required={required}
					onChange={onChange}
					placeholder='MM / DD / YYYY'
					value={value}
				/>
			) : (
				<DisabledDateTimeValue>
					{value ? value.toLocaleDateString('en-US') : 'MM / DD / YYYY'}
				</DisabledDateTimeValue>
			)}
		</>
	);
};

export default SingleDateCalendar;
