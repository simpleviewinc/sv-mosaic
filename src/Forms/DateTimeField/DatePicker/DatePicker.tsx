import * as React from 'react';
import { ReactElement } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { DatePickerProps, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { ThemeProvider } from '@material-ui/core/styles';

// Styles
import { customTheme, StyledDatePicker } from './DatePicker.styled';

const DatePicker = (props: DatePickerProps): ReactElement => {
	const {
		onChange,
		value
	} = props;

	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<ThemeProvider theme={customTheme}>
				<StyledDatePicker
					disableToolbar
					variant='inline'
					format='MM/dd/yyyy'
					margin='normal'
					id='date-picker-inline'
					value={value}
					onChange={onChange}
					inputVariant='outlined'
					KeyboardButtonProps={{
						'aria-label': 'change date',
					}}
					PopoverProps={{
						anchorOrigin: {
							vertical: "bottom",
							horizontal: "center",
						},
						transformOrigin: {
							vertical: "top",
							horizontal: "center",
						},
					}}
					invalidDateMessage={null}
					maxDateMessage={null}
					minDateMessage={null}
				/>
			</ThemeProvider>
		</MuiPickersUtilsProvider>
	);
};

export default DatePicker;
