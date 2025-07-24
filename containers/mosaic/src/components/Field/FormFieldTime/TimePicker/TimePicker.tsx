import * as React from "react";
import type { ReactElement } from "react";
import { useCallback } from "react";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

// Styles
import { customTheme } from "./TimePicker.styled";
import type { MosaicFieldProps } from "@root/components/Field";
import type { TimePickerDef, TimePickerData } from "./TimePickerTypes";
import { ThemeProvider } from "@mui/material/styles";
import { StyledTextField } from "../../FormFieldText/FormFieldText.styled";

const TimeFieldPicker = (props: MosaicFieldProps<"timePicker", TimePickerDef, TimePickerData>): ReactElement => {
	const { fieldDef, onChange, value = null, onBlur, disabled, inputRef, id, error } = props;

	const handleClose = useCallback(async () => {
		onBlur && onBlur();
	}, [onBlur]);

	const renderInput = (params) => (
		<StyledTextField
			{...params}
			id={id}
			onBlur={onBlur}
			required={fieldDef.required}
			disabled={disabled}
			error={error}
			inputProps={{
				...params.inputProps,
				placeholder: fieldDef?.inputSettings?.placeholder,
				ref: inputRef,
				"aria-label": fieldDef.label,
			}}
		/>
	);

	return (
		<LocalizationProvider dateAdapter={AdapterDateFns}>
			<ThemeProvider theme={customTheme}>
				<TimePicker
					value={value}
					onChange={onChange}
					renderInput={renderInput}
					onClose={handleClose}
					disabled={disabled}
				/>
			</ThemeProvider>
		</LocalizationProvider>
	);
};

export default TimeFieldPicker;
