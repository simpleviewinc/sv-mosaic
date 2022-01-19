import * as React from 'react';
import { ReactElement } from 'react';

// Components
import TimePicker from '../TimePicker';

// Styles
import { DisabledDateTimeValue } from '../DatePicker/DatePicker.styled';
import { MosaicFieldProps } from '@root/components/Field';

const TimeInput = (props: MosaicFieldProps<any>): ReactElement => {
	const {
		error,
		fieldDef,
		onChange,
		value
	} = props;

	return (
		<>
			{!fieldDef?.disabled ? (
				<TimePicker
					error={error}
					fieldDef={{
						name: fieldDef?.name,
						label: '',
						required: fieldDef?.required,
						inputSettings: {
							placeholder: '00:00 AM/PM'
						},
					}}
					onChange={onChange}
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
