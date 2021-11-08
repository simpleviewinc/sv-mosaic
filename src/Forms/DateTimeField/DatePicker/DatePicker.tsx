import * as React from 'react';
import { useState, ReactElement } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker,
} from '@material-ui/pickers';
import { ThemeProvider } from '@material-ui/core/styles';

// Styles
import { customTheme, useStyles } from './DatePicker.styled';

const DatePicker = (): ReactElement => {
	const classes = useStyles();
	const [selectedDate, setSelectedDate] = useState(new Date());

	const handleDateChange = (date: Date | null) => {
		setSelectedDate(date);
	};

	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<ThemeProvider theme={customTheme}>
				<KeyboardDatePicker
					className={classes.searchBarStyle}
					disableToolbar
					variant='inline'
					format='MM/dd/yyyy'
					margin='normal'
					id='date-picker-inline'
					value={selectedDate}
					onChange={handleDateChange}
					inputVariant='outlined'
					KeyboardButtonProps={{
						'aria-label': 'change date',
					}}
				/>
			</ThemeProvider>
		</MuiPickersUtilsProvider>
	);
};

export default DatePicker;
