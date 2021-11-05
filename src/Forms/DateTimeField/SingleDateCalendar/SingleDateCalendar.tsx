import * as React from 'react';
import { useState, ReactElement } from 'react';
import { Input, TextFieldProps } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import { ThemeProvider } from '@material-ui/core/styles';

// Styled Components
import { customTheme } from './SingleDateCalendar.styled';

const SingleDateCalendar = () => {
	const [selectedDate, setSelectedDate] = useState(new Date());

	const renderInput = (props: TextFieldProps): ReactElement => (
		<Input
			type='text'
			onClick={props.onClick}
			value={props.value}
			onChange={props.onChange}
		/>
	);

	return (
		<div>
			<MuiPickersUtilsProvider utils={DateFnsUtils}>
				<ThemeProvider theme={customTheme}>
					<DatePicker
						open={true}
						format='MMMM d, yyyy'
						margin="normal"
						disableToolbar
						variant="inline"
						label='Basic example'
						value={selectedDate}
						onChange={setSelectedDate}
						TextFieldComponent={renderInput}
					/>
				</ThemeProvider>
			</MuiPickersUtilsProvider>
		</div>
	);
};

export default SingleDateCalendar;
