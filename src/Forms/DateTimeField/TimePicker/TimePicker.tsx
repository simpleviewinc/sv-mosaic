import * as React from 'react';
import { useState } from 'react';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import ScheduleIcon from '@material-ui/icons/Schedule';
import DateFnsUtils from '@date-io/date-fns';
import { ThemeProvider } from '@material-ui/core/styles';

// Styles
import { customTheme, StyledTimePicker } from './TimePicker.styled';

const TimePicker = () => {
	const [selectedDate, setSelectedDate] = useState<Date | null>(
		new Date('2014-08-18T21:11:54')
	);

	const handleDateChange = (date: Date | null) => {
		setSelectedDate(date);
	};

	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<ThemeProvider theme={customTheme}>
				<StyledTimePicker
					inputVariant='outlined'
					variant='inline'
					value={selectedDate}
					onChange={handleDateChange}
					keyboardIcon={<ScheduleIcon />}
				/>
			</ThemeProvider>
		</MuiPickersUtilsProvider>
	);
};

export default TimePicker;
