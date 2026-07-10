import type { ReactElement } from "react";
import type { PickerChangeHandlerContext, DateValidationError } from "@mui/x-date-pickers/models";

import React, { useState } from "react";
import format from "date-fns/format";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV2";
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

	const handleChange = (newValue: Date | null, context: PickerChangeHandlerContext<DateValidationError>) => {
		const keyboardInputValue = context.source !== "view" && newValue
			? format(newValue, DATE_FORMAT_FULL)
			: undefined;

		onChange(newValue, keyboardInputValue);
	};

	return (
		<LocalizationProvider dateAdapter={AdapterDateFns}>
			<div data-testid="date-picker-test-id">
				<DesktopDatePicker
					format={DATE_FORMAT_FULL}
					value={value}
					onChange={handleChange}
					onOpen={handleOpenState}
					onClose={handleOpenState}
					minDate={fieldDef?.inputSettings?.minDate}
					maxDate={fieldDef?.inputSettings?.maxDate}
					disabled={disabled}
					inputRef={inputRef as React.Ref<HTMLInputElement>}
					slots={{ textField: DatePickerTextField }}
					slotProps={{
						textField: {
							id,
							onBlur,
							required: Boolean(fieldDef.required),
							disabled,
							error: Boolean(error),
							inputProps: {
								"aria-label": fieldDef.label,
							},
						},
						popper: {
							sx: popperSx,
						},
					}}
				/>
			</div>
		</LocalizationProvider>
	);
};

export default DatePicker;
