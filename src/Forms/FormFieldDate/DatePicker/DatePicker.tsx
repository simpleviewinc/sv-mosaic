import * as React from 'react';
import { ReactElement, useState } from 'react';
import * as DateFnsUtils from '@date-io/date-fns';
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
		onBlur
	} = props;

	const [isPickerOpen, setIsPickerOpen] = useState(false);

	const handleOpenState = async () => {
		setIsPickerOpen(!isPickerOpen);
		await onBlur();
	};

	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils.default}>
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
						onBlur={onBlur}
					/>
				</DatePickerWrapper>
			</ThemeProvider>
		</MuiPickersUtilsProvider>
	);
};

export default DatePicker;
