import { MosaicFieldProps } from '@root/components/Field';
import * as React from 'react';
import { ReactElement, useState, useEffect } from 'react';

// Components
import DatePicker from '../DatePicker';

// Styles
import { DisabledDateTimeValue } from '../DatePicker/DatePicker.styled';

const SingleDateCalendar = (props: MosaicFieldProps<any>): ReactElement => {

	const [dateField, setDateField] = useState(undefined);

	const {
		fieldDef,
		onChange,
		value,
		onBlur
	} = props;


	useEffect(() => {
		if (value) {
			setDateField(value);
		} else {
			setDateField(Date.now());
			setDateField(null);
		}
	}, [value]);

	return (
		<>
			{!fieldDef?.disabled ? (
				<DatePicker
					fieldDef={{
						name: fieldDef?.name,
						label: '',
						required: fieldDef?.required,
						inputSettings: {
							placeholder: 'MM / DD / YYYY'
						},
					}}
					onChange={onChange}
					onBlur={onBlur}
					value={dateField}
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
