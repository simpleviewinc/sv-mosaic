import * as React from "react";
import type { ReactElement } from "react";
import type { PickerChangeHandlerContext, TimeValidationError } from "@mui/x-date-pickers/models";
import { useCallback, useMemo, useRef } from "react";

import format from "date-fns/format";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV2";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { renderTimeViewClock } from "@mui/x-date-pickers/timeViewRenderers";

// Styles
import { customTheme } from "./TimePicker.styled";
import type { MosaicFieldProps } from "@root/components/Field";
import type { TimePickerDef, TimePickerData } from "./TimePickerTypes";
import { ThemeProvider } from "@mui/material/styles";
import { MosaicPickersTextField } from "../../FormFieldText/FormFieldTextPickers.styled";
import { TIME_FORMAT_FULL } from "@root/constants";
import { createContainedBlurHandler } from "../../utils/createContainedBlurHandler";

const TimeFieldPicker = (props: MosaicFieldProps<"timePicker", TimePickerDef, TimePickerData>): ReactElement => {
	const { fieldDef, onChange, value = null, onBlur, disabled, inputRef, id, error } = props;

	const containerRef = useRef<HTMLDivElement>(null);
	const handleBlur = useMemo(
		() => createContainedBlurHandler(containerRef, onBlur),
		[onBlur],
	);

	const handleClose = useCallback(async () => {
		onBlur && onBlur();
	}, [onBlur]);

	const handleChange = (newValue: Date | null, context: PickerChangeHandlerContext<TimeValidationError>) => {
		const keyboardInputValue = context.source !== "view" && newValue
			? format(newValue, TIME_FORMAT_FULL)
			: undefined;

		onChange(newValue, keyboardInputValue);
	};

	return (
		<LocalizationProvider dateAdapter={AdapterDateFns} localeText={{ fieldMeridiemPlaceholder: () => "AM/PM" }}>
			<ThemeProvider theme={customTheme}>
				<div ref={containerRef}>
					<TimePicker
						value={value}
						onChange={handleChange}
						onClose={handleClose}
						disabled={disabled}
						closeOnSelect
						viewRenderers={{ hours: renderTimeViewClock, minutes: renderTimeViewClock }}
						inputRef={inputRef as React.Ref<HTMLInputElement>}
						slots={{ textField: MosaicPickersTextField }}
						slotProps={{
							textField: {
								id,
								onBlur: handleBlur,
								required: Boolean(fieldDef.required),
								disabled,
								error: Boolean(error),
								inputProps: {
									"aria-label": fieldDef.label,
								},
							},
						}}
					/>
				</div>
			</ThemeProvider>
		</LocalizationProvider>
	);
};

export default TimeFieldPicker;
