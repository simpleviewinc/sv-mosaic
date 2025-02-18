import * as React from "react";
import type { ReactElement } from "react";
import { useCallback, useState } from "react";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

// Styles
import { customTheme } from "./TimePicker.styled";
import { DatePickerWrapper } from "../../FormFieldDate/DatePicker/DatePicker.styled";
import type { MosaicFieldProps } from "@root/components/Field";
import type { TimePickerDef, TimePickerData } from "./TimePickerTypes";
import { ThemeProvider } from "@mui/material/styles";
import { StyledTextField } from "../../FormFieldText/FormFieldText.styled";

const TimeFieldPicker = (props: MosaicFieldProps<"timePicker", TimePickerDef, TimePickerData>): ReactElement => {
	const { fieldDef, onChange, value = null, onBlur, disabled, inputRef, id, error } = props;

	const [isPickerOpen, setIsPickerOpen] = useState(false);

	const handleOpenState = useCallback(async () => {
		setIsPickerOpen((isPickerOpen) => {
			if (isPickerOpen && onBlur) {
				onBlur();
			}

			return !isPickerOpen;
		});
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
