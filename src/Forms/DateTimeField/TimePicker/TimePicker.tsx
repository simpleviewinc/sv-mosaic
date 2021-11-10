import * as React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { useState } from 'react';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { TimePickerProps } from './TimePickerTypes';

// Components
import ScheduleIcon from '@material-ui/icons/Schedule';

// Styles
import { ThemeProvider } from '@material-ui/core/styles';
import { customTheme, StyledTimePicker } from './TimePicker.styled';
import { DatePickerWrapper } from '../DatePicker/DatePicker.styled';

const TimePicker = (props: TimePickerProps) => {
	const { error, required, onChange, placeholder, value } = props;

	const [isPickerOpen, setIsPickerOpen] = useState(false);

	const handleOpenState = () => {
		setIsPickerOpen(!isPickerOpen);
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
							placeholder: placeholder,
							required: required,
						}}
						error={error}
						invalidDateMessage={null}
						maxDateMessage={null}
						minDateMessage={null}
					/>
				</DatePickerWrapper>
			</ThemeProvider>
		</MuiPickersUtilsProvider>
	);
};

export default TimePicker;
