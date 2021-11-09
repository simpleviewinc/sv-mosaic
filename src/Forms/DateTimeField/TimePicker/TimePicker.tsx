import * as React from 'react';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { TimePickerProps } from './TimePickerTypes';

// Components
import ScheduleIcon from '@material-ui/icons/Schedule';

// Styles
import { ThemeProvider } from '@material-ui/core/styles';
import { customTheme, StyledTimePicker } from './TimePicker.styled';

const TimePicker = (props: TimePickerProps) => {
	const { onChange, value } = props;

	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<ThemeProvider theme={customTheme}>
				<StyledTimePicker
					inputVariant='outlined'
					variant='inline'
					value={value}
					onChange={onChange}
					keyboardIcon={<ScheduleIcon />}
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
				/>
			</ThemeProvider>
		</MuiPickersUtilsProvider>
	);
};

export default TimePicker;
