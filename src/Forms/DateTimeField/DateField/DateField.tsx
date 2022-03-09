/* eslint-disable use-isnan */
import * as React from 'react';
import { ReactElement, memo, useState, useEffect } from 'react';

// Components
import DatePicker from '../DatePicker';
import TimePicker from '../TimePicker';
import HelperText from '@root/components/Field/HelperText';

// Styles
import { DateTimePickerWrapper } from '../DateField/DateField.styled';
import { DateTimeInputRow } from '../DateTimeInput/DateTimeInput.styled';
import { DisabledDateTimeValue } from '../DatePicker/DatePicker.styled';
import { MosaicFieldProps } from '@root/components/Field';
import { DateTimeInputDef } from '../DateTimeInput';


const Datefield = (props: MosaicFieldProps<DateTimeInputDef, string>): ReactElement => {

	const {
		fieldDef,
		onChange,
		value,
		onBlur,
		error,
	} = props;

	const {required, disabled, inputSettings: {showTime}} = fieldDef || {}; 
	
	//const [dateTimeField, setDateTimeField] = useState(null);
	
	const [dateInput, setDateInput] = useState(null);
	const [timeInput, setTimeInput] = useState(null); 
	

	useEffect(() => {
		setDateInput(value || null)
		setTimeInput(value || null)
	}, [])

	const handleOnChange = async (position, date) => {

		let newValue = value;
		position === 0 ? setDateInput(date) : setTimeInput(date)

		if (!isNaN(date?.valueOf())) {
			
			const dateString = date.toISOString();
			
			if (!showTime) {
				newValue = dateString;
				setDateInput(newValue);
			} else {
				
				if (!newValue) {
					position === 0 ? setDateInput(dateString) : setTimeInput(dateString);
					if (required) {
						if (position === 0 && timeInput) {
							const splitTimeInput = timeInput.split('T') || [];
							const splitDate = dateString.split('T') || [];
							newValue = `${splitDate[0]}T${splitTimeInput[1]}`
						} else if (position === 1 && dateInput) {
							const splitDateInput = dateInput.split('T') || [];
							const splitDate = dateString.split('T') || [];
							newValue = `${splitDateInput[0]}T${splitDate[1]}`
						} else {
							newValue = undefined;
						}
					} else {
						newValue = dateString;
					}
				} else {
					const splitNewValue = newValue.split('T') || [];
					const splitDate = dateString.split('T') || [];
					
					if (position === 0) {
						newValue = `${splitDate[0]}T${splitNewValue[1]}`
						setDateInput(newValue)
					} else {
						newValue = `${splitNewValue[0]}T${splitDate[1]}`
						setTimeInput(newValue)
					}
				}
			}
		} else {
			
			if (showTime && dateInput && position === 1) {
				newValue = !required ? dateInput : undefined
				setDateInput(dateInput)
			} else if (showTime && timeInput && position === 0) {
				newValue = !required ? timeInput : undefined
				setTimeInput(timeInput)
			} else {
				newValue = undefined;
			}
		}

		await onChange(newValue);
	}	

	return (
		<DateTimeInputRow>
			{!disabled ? (
				<>
					<DateTimePickerWrapper>
						<DatePicker
							error={error}
							onChange={(d) => handleOnChange(0, d)}
							fieldDef={{
								name: fieldDef?.name,
								label: '',
								inputSettings: {
									placeholder: 'MM / DD / YYYY'
								},
								required: fieldDef?.required,
							}}
							value={dateInput}
							onBlur={onBlur}
						/>
						<HelperText>Month, Day, Year</HelperText>
					</DateTimePickerWrapper>
					{showTime &&
						<DateTimePickerWrapper>
							<TimePicker
								error={error}
								onChange={(d) => handleOnChange(1, d)}
								fieldDef={{
									name: fieldDef?.name,
									label: '',
									inputSettings: {
										placeholder: '00:00 AM/PM'
									}
								}}
								value={timeInput}
								onBlur={onBlur}
							/>
							<HelperText>Hour, Minute, AM or PM</HelperText>
						</DateTimePickerWrapper>
					}	
				</>
			) : (
				<>
					<DisabledDateTimeValue>
						{value ? value : 'MM / DD / YYYY'}
					</DisabledDateTimeValue>
					{showTime &&
						<DisabledDateTimeValue>
							{value ? value
							: '00:00 AM/PM'}
						</DisabledDateTimeValue>
					}
				</>
			)}
		</DateTimeInputRow>
	);
};

export default memo(Datefield);
