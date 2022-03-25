import * as React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { ReactElement, useState } from 'react';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

// Components
import ScheduleIcon from '@material-ui/icons/Schedule';

// Styles
import { ThemeProvider } from '@material-ui/core/styles';
import { customTheme, StyledTimePicker } from './TimePicker.styled';
import { DatePickerWrapper } from '../DatePicker/DatePicker.styled';
import { MosaicFieldProps } from '@root/components/Field';
import { TimePickerDef } from './TimePickerTypes';

const TimePicker = (props: MosaicFieldProps<TimePickerDef>): ReactElement => {
	const {
		error,
		fieldDef,
		onChange,
		value,
		onBlur
	} = props;

	const [isPickerOpen, setIsPickerOpen] = useState(false);

	const handleOpenState = async () => {
		setIsPickerOpen(!isPickerOpen);
		await onBlur();
	};

	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<ThemeProvider theme={customTheme}>
				<DatePickerWrapper isPickerOpen={isPickerOpen}>
					<StyledTimePicker
						inputVariant='outlined'
						variant='inline'
						value={value}
						onChange={onChange}
						keyboardIcon={<ScheduleIcon />}
						onOpen={handleOpenState}
						onClose={handleOpenState}
						PopoverProps={{
							anchorOrigin: {
								vertical: 'bottom',
								horizontal: 'center',
							},
							transformOrigin: {
								vertical: 'top',
								horizontal: 'center',
							},
						}}
						InputProps={{
							placeholder: fieldDef?.inputSettings?.placeholder,
							required: fieldDef?.required,
						}}
						error={!!error}
						invalidDateMessage={null}
						maxDateMessage={null}
						minDateMessage={null}
						onBlur={onBlur}
					/>
				</DatePickerWrapper>
			</ThemeProvider>
		</MuiPickersUtilsProvider>
	);
};

export default TimePicker;
