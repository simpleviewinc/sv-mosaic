import * as React from "react";
import type { ReactElement } from "react";
import type { PickerChangeHandlerContext, TimeValidationError } from "@mui/x-date-pickers/models";
import { useCallback } from "react";

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
import { StyledTextField } from "../../FormFieldText/FormFieldText.styled";
import { TIME_FORMAT_FULL } from "@root/constants";

const TimeFieldPicker = (props: MosaicFieldProps<"timePicker", TimePickerDef, TimePickerData>): ReactElement => {
	const { fieldDef, onChange, value = null, onBlur, disabled, inputRef, id, error } = props;

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
		<LocalizationProvider dateAdapter={AdapterDateFns}>
			<ThemeProvider theme={customTheme}>
				<TimePicker
					enableAccessibleFieldDOMStructure={false}
					value={value}
					onChange={handleChange}
					onClose={handleClose}
					disabled={disabled}
					closeOnSelect
					viewRenderers={{ hours: renderTimeViewClock, minutes: renderTimeViewClock }}
					inputRef={inputRef as React.Ref<HTMLInputElement>}
					slots={{ textField: StyledTextField }}
					slotProps={{
						textField: {
							id,
							onBlur,
							required: Boolean(fieldDef.required),
							disabled,
							error: Boolean(error),
							placeholder: fieldDef?.inputSettings?.placeholder,
							inputProps: {
								"aria-label": fieldDef.label,
							},
						},
					}}
				/>
			</ThemeProvider>
		</LocalizationProvider>
	);
};

export default TimeFieldPicker;
