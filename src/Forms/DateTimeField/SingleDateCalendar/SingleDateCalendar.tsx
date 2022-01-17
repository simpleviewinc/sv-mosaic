import { MosaicFieldProps } from '@root/components/Field';
import * as React from 'react';
import { ReactElement } from 'react';

// Components
import DatePicker from '../DatePicker';

// Styles
import { DisabledDateTimeValue } from '../DatePicker/DatePicker.styled';

const SingleDateCalendar = (props: MosaicFieldProps<any>): ReactElement => {
	const {
		error,
		fieldDef,
		onChange,
		value
	} = props;

	return (
		<>
			{!fieldDef?.disabled ? (
				<DatePicker
					error={error}
					fieldDef={{
						label: '',
						required: fieldDef?.required,
						inputSettings: {
							placeholder: 'MM / DD / YYYY'
						},
					}}
					onChange={onChange}
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
