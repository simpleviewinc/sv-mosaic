import * as React from 'react';
import { ReactElement, useState, useEffect, memo } from 'react';
import { MosaicFieldProps } from '@root/components/Field';

// Components
import TimePicker from '../TimePicker';

// Styles
import { DisabledDateTimeValue } from '../DatePicker/DatePicker.styled';

const TimeInput = (props: MosaicFieldProps<any, Date>): ReactElement => {

	const [timeField, setTimeField] = useState(undefined);
	
	const {
		fieldDef,
		onChange,
		value,
		onBlur,
		error
	} = props;

	useEffect(() => {
		if (value) {
			setTimeField(value)
		} else {
			setTimeField(Date.now());
			setTimeField(null);
		}
	}, [value]);


	return (
		<>
			{!fieldDef?.disabled ? (
				<TimePicker
					fieldDef={{
						name: fieldDef?.name,
						label: '',
						required: fieldDef?.required,
						inputSettings: {
							placeholder: '00:00 AM/PM'
						},
					}}
					onChange={onChange}
					value={timeField}
					onBlur={onBlur}
					error={error}
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

export default memo(TimeInput);
