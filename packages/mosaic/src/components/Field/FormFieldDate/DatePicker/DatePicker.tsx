import type { ReactElement } from "react";
import type { FieldRef, PickerChangeHandlerContext, DateValidationError } from "@mui/x-date-pickers/models";

import React, { useCallback, useEffect, useMemo, useRef } from "react";
import format from "date-fns/format";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV2";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

import type { DatePickerProps } from ".";

import { DatePickerTextField, popperSx } from "./DatePicker.styled";
import { DATE_FORMAT_FULL } from "@root/constants";
import { createContainedBlurHandler } from "../../utils/createContainedBlurHandler";
import { getIsPartiallyFilled } from "../../utils/getIsPartiallyFilled";
import { isValid } from "date-fns";

const DatePicker = (props: DatePickerProps): ReactElement => {
	const { fieldDef, onChange, value = null, onBlur, disabled, inputRef, id, error, flushRef } = props;

	const containerRef = useRef<HTMLDivElement>(null);
	const fieldRef = useRef<FieldRef<Date | null>>(null);
	const openRef = useRef(false);
	const valueRef = useRef(value);
	valueRef.current = value;

	const syncPartialFillState = useCallback((
		date: Date | null,
		keyboardInputValue?: string,
	) => {
		const sections = fieldRef.current?.getSections() ?? [];
		onChange?.(date, keyboardInputValue, {
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
		// Prefer valueRef: onClose runs in the same tick as onChange after a calendar
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

	useEffect(() => () => {
		handleBlur.cancel();
	}, [handleBlur]);

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

	const handleChange = (newValue: Date | null, context: PickerChangeHandlerContext<DateValidationError>) => {
		const keyboardInputValue = context.source !== "view" && isValid(newValue)
			? format(newValue, DATE_FORMAT_FULL)
			: undefined;

		valueRef.current = newValue;
		syncPartialFillState(newValue, keyboardInputValue);
	};

	return (
		<LocalizationProvider dateAdapter={AdapterDateFns}>
			<div ref={containerRef} onBlur={handleBlur} data-testid="date-picker-test-id">
				<DesktopDatePicker
					format={DATE_FORMAT_FULL}
					value={value}
					onChange={handleChange}
					onOpen={handleOpen}
					onClose={handleClose}
					minDate={fieldDef?.inputSettings?.minDate}
					maxDate={fieldDef?.inputSettings?.maxDate}
					disabled={disabled}
					inputRef={inputRef as React.Ref<HTMLInputElement>}
					slots={{ textField: DatePickerTextField }}
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
