import type { ReactElement } from "react";

import React, { useState } from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker as DatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

import type { DatePickerProps } from ".";

import { DatePickerTextField, DatePickerWrapper, popperSx } from "./DatePicker.styled";
import { DATE_FORMAT_FULL } from "@root/constants";

const DateFieldPicker = (props: DatePickerProps): ReactElement => {
	const { fieldDef, onChange, value = null, onBlur, disabled, inputRef, id } = props;

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
			inputProps={{
				...params.inputProps,
				ref: inputRef,
				placeholder: fieldDef?.inputSettings?.placeholder,
			}}
		/>
	);

	return (
		<LocalizationProvider dateAdapter={AdapterDateFns}>
			<DatePickerWrapper data-testid="date-picker-test-id" $isPickerOpen={isPickerOpen} $disabled={disabled}>
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
					maxDate={fieldDef?.inputSettings?.maxDate}
					disabled={disabled}
				/>
			</DatePickerWrapper>
		</LocalizationProvider>
	);
};

export default DateFieldPicker;
