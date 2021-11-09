import * as React from 'react';
import { ReactElement } from 'react';
import { SingleDateCalendarProps } from './SingleDateCalendarTypes';

// Components
import DatePicker from '../DatePicker';

// Styles
import { DisabledDateTimeValue } from '../DatePicker/DatePicker.styled';

const SingleDateCalendar = (props: SingleDateCalendarProps): ReactElement => {
	const { disabled, onChange, value } = props;

	return (
		<>
			{!disabled ? (
				<DatePicker onChange={onChange} value={value} />
			) : (
				<DisabledDateTimeValue>
					{value.toLocaleDateString('en-US')}
				</DisabledDateTimeValue>
			)}
		</>
	);
};

export default SingleDateCalendar;
