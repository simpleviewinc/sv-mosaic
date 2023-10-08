import * as React from "react";
import { ReactElement, useState } from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import { DatePickerProps } from ".";

// Styles
import {
	DatePickerWrapper,
	popperSx,
} from "./DatePicker.styled";
import { DATE_FORMAT_FULL } from "@root/constants";

const DateFieldPicker = (props: DatePickerProps): ReactElement => {
	const { fieldDef, onChange, value = null, onBlur } = props;

	const [isPickerOpen, setIsPickerOpen] = useState(false);

	const handleOpenState = async () => {
		setIsPickerOpen(!isPickerOpen);

		if (onBlur) {
			await onBlur();
		}
	};

	const renderInput = (params) => (
		<TextField
			{...params}
			onBlur={onBlur}
			required={fieldDef.required}
			disabled={fieldDef?.disabled}
			inputProps={{
				...params.inputProps,
				placeholder: fieldDef?.inputSettings?.placeholder,
			}}
		/>
	);

	return (
		<LocalizationProvider dateAdapter={AdapterDateFns}>
			<DatePickerWrapper data-testid="date-picker-test-id" $isPickerOpen={isPickerOpen} $disabled={fieldDef?.disabled}>
				<DatePicker
					renderInput={renderInput}
					inputFormat={DATE_FORMAT_FULL}
					value={value}
					onChange={onChange}
					onOpen={handleOpenState}
					onClose={handleOpenState}
					PopperProps={{
						sx: popperSx,
					}}
					minDate={fieldDef?.inputSettings?.minDate}
					disabled={fieldDef?.disabled}
				/>
			</DatePickerWrapper>
		</LocalizationProvider>
	);
};

export default DateFieldPicker;
