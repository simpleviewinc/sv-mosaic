import * as React from 'react';
import { ReactElement } from 'react';
import { TimeInputProps } from './TimeInputTypes';

// Components
import TimePicker from '../TimePicker';

// Styles
import { DisabledDateTimeValue } from '../DatePicker/DatePicker.styled';

const TimeInput = (props: TimeInputProps): ReactElement => {
	const { disabled, onChange, value } = props;

	return (
		<>
			{!disabled ? (
				<TimePicker onChange={onChange} value={value} />
			) : (
				<DisabledDateTimeValue>
					{value.toLocaleString('en-US', {
						hour: 'numeric',
						minute: 'numeric',
						hour12: true,
					})}
				</DisabledDateTimeValue>
			)}
		</>
	);
};

export default TimeInput;
