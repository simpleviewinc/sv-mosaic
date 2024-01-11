import * as React from "react";
import { ReactElement, useCallback, useState } from "react";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import TextField from "@mui/material/TextField";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

// Styles
import { customTheme } from "./TimePicker.styled";
import { DatePickerWrapper } from "../../FormFieldDate/DatePicker/DatePicker.styled";
import { MosaicFieldProps } from "@root/components/Field";
import { TimePickerDef, TimePickerData  } from "./TimePickerTypes";
import { ThemeProvider } from "@mui/material/styles";

const TimeFieldPicker = (props: MosaicFieldProps<"timePicker", TimePickerDef, TimePickerData>): ReactElement => {
	const { fieldDef, onChange, value = null, onBlur, disabled } = props;

	const [isPickerOpen, setIsPickerOpen] = useState(false);

	const handleOpenState = useCallback(async () => {
		setIsPickerOpen((isPickerOpen) => {
			if (isPickerOpen && onBlur) {
				onBlur();
			}

			return !isPickerOpen
		});
	}, [onBlur]);

	const renderInput = (params) => (
		<TextField
			{...params}
			onBlur={onBlur}
			required={fieldDef.required}
			disabled={disabled}
			inputProps={{
				...params.inputProps,
				placeholder: fieldDef?.inputSettings?.placeholder,
			}}
		/>
	);

	return (
		<LocalizationProvider dateAdapter={AdapterDateFns}>
			<ThemeProvider theme={customTheme}>
				<DatePickerWrapper $isPickerOpen={isPickerOpen} $disabled={disabled}>
					<TimePicker
						value={value}
						onChange={onChange}
						renderInput={renderInput}
						onOpen={handleOpenState}
						onClose={handleOpenState}
						disabled={disabled}
					/>
				</DatePickerWrapper>
			</ThemeProvider>
		</LocalizationProvider>
	);
};

export default TimeFieldPicker;
