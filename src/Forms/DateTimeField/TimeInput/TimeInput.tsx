import * as React from 'react';
import { ReactElement } from 'react';
import { TimeInputProps } from './TimeInputTypes';

// Components
import TimePicker from '../TimePicker';

// Styles
import { DisabledDateTimeValue } from '../DatePicker/DatePicker.styled';

const TimeInput = (props: TimeInputProps): ReactElement => {
	const { error, required, disabled, onChange, value } = props;

	return (
		<>
			{!disabled ? (
				<TimePicker
					error={error}
					required={required}
					onChange={onChange}
					placeholder='00:00 AM/PM'
					value={value}
				/>
			) : (
				<DisabledDateTimeValue>
					{value
						? value.toLocaleString('en-US', {
							hour: 'numeric',
							minute: 'numeric',
							hour12: true,
						})
						: '00:00 AM/PM'}
				</DisabledDateTimeValue>
			)}
		</>
	);
};

export default TimeInput;
