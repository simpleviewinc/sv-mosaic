import * as React from "react";
import { ReactElement, useState } from "react";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import TextField from "@mui/material/TextField";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

// Styles
import { customTheme } from "./TimePicker.styled";
import { DatePickerWrapper } from "../DatePicker/DatePicker.styled";
import { MosaicFieldProps } from "@root/components/Field";
import { TimePickerDef } from "./TimePickerTypes";
import { ThemeProvider } from "@mui/material/styles";

const TimeFieldPicker = (props: MosaicFieldProps<"timePicker", TimePickerDef>): ReactElement => {
	const { error, fieldDef, onChange, value, onBlur } = props;

	const [isPickerOpen, setIsPickerOpen] = useState(false);

	const handleOpenState = async () => {
		setIsPickerOpen(!isPickerOpen);
		if (onBlur) await onBlur();
	};

	const renderInput = (params) => (
		<TextField
			{...params}
			onBlur={onBlur}
			required={fieldDef.required}
			inputProps={{
				...params.inputProps,
				placeholder: fieldDef?.inputSettings?.placeholder,
			}}
		/>
	);

	return (
		<LocalizationProvider dateAdapter={AdapterDateFns}>
			<ThemeProvider theme={customTheme}>
				<DatePickerWrapper isPickerOpen={isPickerOpen} error={!!error}>
					<TimePicker
						value={value}
						onChange={onChange}
						renderInput={renderInput}
						onOpen={handleOpenState}
						onClose={handleOpenState}
					/>
				</DatePickerWrapper>
			</ThemeProvider>
		</LocalizationProvider>
	);
};

export default TimeFieldPicker;
