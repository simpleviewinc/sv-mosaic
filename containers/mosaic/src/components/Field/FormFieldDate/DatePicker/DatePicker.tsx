import type { ReactElement } from "react";

import React, { useState } from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

import type { DatePickerProps } from ".";

import { DatePickerTextField, popperSx } from "./DatePicker.styled";
import { DATE_FORMAT_FULL } from "@root/constants";

const DatePicker = (props: DatePickerProps): ReactElement => {
	const { fieldDef, onChange, value = null, onBlur, disabled, inputRef, id, error } = props;

	const [isPickerOpen, setIsPickerOpen] = useState(false);

	const handleOpenState = async () => {
		setIsPickerOpen(!isPickerOpen);

		if (isPickerOpen && onBlur) {
			onBlur();
		}
	};

	const renderInput = (params) => (
		<DatePickerTextField
			{...params}
			id={id}
			onBlur={onBlur}
			required={fieldDef.required}
			disabled={disabled}
			error={error}
			inputProps={{
				...params.inputProps,
				ref: inputRef,
				placeholder: fieldDef?.inputSettings?.placeholder,
				"aria-label": fieldDef.label,
			}}
		/>
	);

	return (
		<LocalizationProvider dateAdapter={AdapterDateFns}>
			<div data-testid="date-picker-test-id">
				<DesktopDatePicker
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
					maxDate={fieldDef?.inputSettings?.maxDate}
					disabled={disabled}
				/>
			</div>
		</LocalizationProvider>
	);
};

export default DatePicker;
