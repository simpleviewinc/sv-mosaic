import * as React from 'react';
import { ReactElement, useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

// Styles
import { ThemeProvider } from '@material-ui/core/styles';
import {
	customTheme,
	DatePickerWrapper,
	StyledDatePicker,
} from './DatePicker.styled';
import { MosaicFieldProps } from '@root/components/Field';

const DatePicker = (props: MosaicFieldProps<any>): ReactElement => {
	const {
		error,
		fieldDef,
		onChange,
		value,
	} = props;

	const [isPickerOpen, setIsPickerOpen] = useState(false);

	const handleOpenState = () => {
		setIsPickerOpen(!isPickerOpen);
	};

	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<ThemeProvider theme={customTheme}>
				<DatePickerWrapper isPickerOpen={isPickerOpen}>
					<StyledDatePicker
						disableToolbar
						error={!!error}
						variant='inline'
						format='MM/dd/yyyy'
						margin='normal'
						value={value}
						onChange={onChange}
						inputVariant='outlined'
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
						invalidDateMessage={null}
						maxDateMessage={null}
						minDateMessage={null}
					/>
				</DatePickerWrapper>
			</ThemeProvider>
		</MuiPickersUtilsProvider>
	);
};

export default DatePicker;
