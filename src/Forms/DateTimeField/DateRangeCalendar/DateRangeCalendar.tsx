import * as React from 'react';
import { ReactElement } from 'react';

// Styled Components
import DatePicker from '../DatePicker';
import {
	DateRangeCalendarWrapper,
	StyledSpan,
} from './DateRangeCalendar.styled';
import { DateTimePickerWrapper } from '../SingleDateCalendar/SingleDateCalendar.styled';
import HelperText from '@root/components/Field/HelperText';
import { DisabledDateTimeValue } from '../DatePicker/DatePicker.styled';
import { MosaicFieldProps } from '@root/components/Field';

const DateRangeCalendar = (props: MosaicFieldProps<any>): ReactElement => {
	const {
		error,
		fieldDef,
		value,
		onChange,
	} = props;

	const dateFormatText = <HelperText>Month, Day, Year</HelperText>;
	const toText = <StyledSpan disabled={fieldDef?.disabled}>To</StyledSpan>;

	const handleOnChange = async (position, date) => {
		let newDates = { ...value };
		if (position === 0) {
			newDates = {
				...newDates,
				from: date
			}
		} else {
			newDates = {
				...newDates,
				to: date
			}
		}

		await onChange(newDates);
	}

	return (
		<DateRangeCalendarWrapper>
			{!fieldDef?.disabled ? (
				<>
					<DateTimePickerWrapper>
						<DatePicker
							error={error}
							onChange={(d) => handleOnChange(0, d)}
							fieldDef={{
								name: fieldDef?.name,
								label: '',
								required: fieldDef?.required,
								inputSettings: {
									placeholder: 'Start'
								}
							}}
							value={value?.from}
						/>
						{dateFormatText}
					</DateTimePickerWrapper>
					{toText}
					<DateTimePickerWrapper>
						<DatePicker
							error={error}
							onChange={(d) => handleOnChange(1, d)}
							fieldDef={{
								name: fieldDef?.name,
								label: '',
								required: fieldDef?.required,
								inputSettings: {
									placeholder: 'End'
								}
							}}
							value={value?.to}
						/>
						{dateFormatText}
					</DateTimePickerWrapper>
				</>
			) : (
				<>
					<DisabledDateTimeValue>
						{value?.from ? value?.from.toLocaleDateString('en-US') : 'Start'}
					</DisabledDateTimeValue>
					{toText}
					<DisabledDateTimeValue>
						{value?.to ? value?.to.toLocaleDateString('en-US') : 'End'}
					</DisabledDateTimeValue>
				</>
			)}
		</DateRangeCalendarWrapper>
	);
};

export default DateRangeCalendar;
