import * as React from "react";
import type { ReactElement } from "react";
import type { FieldRef, PickerChangeHandlerContext, TimeValidationError } from "@mui/x-date-pickers/models";
import { useCallback, useEffect, useMemo, useRef } from "react";

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
import { getIsPartiallyFilled } from "../../utils/getIsPartiallyFilled";
import { isValid } from "date-fns";

export interface TimePickerChangeOptions {
	isPartiallyFilled?: boolean;
}

type TimePickerProps = Omit<MosaicFieldProps<"timePicker", TimePickerDef, TimePickerData>, "onChange"> & {
	onChange?: (time: Date | null, keyboardInputValue?: string, options?: TimePickerChangeOptions) => void;
};

const TimeFieldPicker = (props: TimePickerProps): ReactElement => {
	const { fieldDef, onChange, value = null, onBlur, disabled, inputRef, id, error, flushRef } = props;

	const containerRef = useRef<HTMLDivElement>(null);
	const fieldRef = useRef<FieldRef<Date | null>>(null);
	const openRef = useRef(false);
	const valueRef = useRef(value);
	valueRef.current = value;

	const syncPartialFillState = useCallback((
		time: Date | null,
		keyboardInputValue?: string,
	) => {
		const sections = fieldRef.current?.getSections() ?? [];
		onChange?.(time, keyboardInputValue, {
			isPartiallyFilled: getIsPartiallyFilled(sections),
		});
	}, [onChange]);

	useEffect(() => {
		if (!flushRef) {
			return;
		}

		flushRef.current = () => {
			syncPartialFillState(valueRef.current);
		};

		return () => {
			flushRef.current = null;
		};
	}, [flushRef, syncPartialFillState]);

	const notifyBlur = useCallback(() => {
		// Prefer valueRef: onClose runs in the same tick as onChange after a picker
		// selection, before React re-renders with the new `value` prop.
		syncPartialFillState(valueRef.current);
		onBlur?.();
	}, [onBlur, syncPartialFillState]);

	const handleBlur = useMemo(
		() => createContainedBlurHandler(containerRef, notifyBlur, {
			isFocusStillContained: () => openRef.current,
		}),
		[notifyBlur],
	);

	const handleOpen = useCallback(() => {
		openRef.current = true;
	}, []);

	const handleClose = useCallback(() => {
		openRef.current = false;
		notifyBlur();
	}, [notifyBlur]);

	const handleClear = useCallback(() => {
		valueRef.current = null;
		onChange?.(null, undefined, { isPartiallyFilled: false });
	}, [onChange]);

	const handleChange = (newValue: Date | null, context: PickerChangeHandlerContext<TimeValidationError>) => {
		const keyboardInputValue = context.source !== "view" && isValid(newValue)
			? format(newValue, TIME_FORMAT_FULL)
			: undefined;

		valueRef.current = newValue;
		syncPartialFillState(newValue, keyboardInputValue);
	};

	return (
		<LocalizationProvider dateAdapter={AdapterDateFns} localeText={{ fieldMeridiemPlaceholder: () => "AM/PM" }}>
			<ThemeProvider theme={customTheme}>
				<div ref={containerRef} onBlur={handleBlur}>
					<TimePicker
						format={TIME_FORMAT_FULL}
						value={value}
						onChange={handleChange}
						onOpen={handleOpen}
						onClose={handleClose}
						disabled={disabled}
						closeOnSelect
						viewRenderers={{ hours: renderTimeViewClock, minutes: renderTimeViewClock }}
						inputRef={inputRef as React.Ref<HTMLInputElement>}
						slots={{ textField: MosaicPickersTextField }}
						slotProps={{
							field: {
								clearable: true,
								onClear: handleClear,
								// Supported by the field at runtime; omitted from PickerFieldSlotProps typing.
								// @ts-expect-error unstableFieldRef is not in PickerFieldSlotProps
								unstableFieldRef: fieldRef,
							},
							textField: {
								id,
								required: Boolean(fieldDef.required),
								disabled,
								error: error ? true : undefined,
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
