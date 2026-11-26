import type { ReactElement } from "react";
import type { DateView, FieldRef, PickerChangeHandlerContext, DateValidationError } from "@mui/x-date-pickers/models";

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
	const { fieldDef, onChange, value = null, onBlur, disabled, inputRef, id, error, flushRef, instructionTextId } = props;

	const containerRef = useRef<HTMLDivElement>(null);
	const fieldRef = useRef<FieldRef<Date | null>>(null);
	const popperRef = useRef<HTMLDivElement>(null);
	const focusFrameRef = useRef<number | null>(null);
	const keyboardYearSelectionRef = useRef(false);
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
		if (focusFrameRef.current !== null) {
			window.cancelAnimationFrame(focusFrameRef.current);
		}
	}, [handleBlur]);

	const handleOpen = useCallback(() => {
		openRef.current = true;
	}, []);

	const handleClose = useCallback(() => {
		openRef.current = false;
		keyboardYearSelectionRef.current = false;
		if (focusFrameRef.current !== null) {
			window.cancelAnimationFrame(focusFrameRef.current);
			focusFrameRef.current = null;
		}
		notifyBlur();
	}, [notifyBlur]);

	const handlePopperKeyDownCapture = useCallback((event: React.KeyboardEvent<HTMLDivElement>) => {
		const target = event.target as HTMLElement;
		keyboardYearSelectionRef.current = target.getAttribute("role") === "radio"
			&& (event.key === " " || event.key === "Enter");
	}, []);

	const handlePopperKeyUpCapture = useCallback(() => {
		keyboardYearSelectionRef.current = false;
	}, []);

	// MUI leaves the focused year mounted while the day view fades in, so its
	// internal focus handoff can leave focus on the exiting year button.
	const handleViewChange = useCallback((view: DateView) => {
		if (view !== "day" || !keyboardYearSelectionRef.current) {
			return;
		}

		keyboardYearSelectionRef.current = false;
		if (focusFrameRef.current !== null) {
			window.cancelAnimationFrame(focusFrameRef.current);
		}

		focusFrameRef.current = window.requestAnimationFrame(() => {
			focusFrameRef.current = null;
			popperRef.current
				?.querySelector<HTMLElement>('[role="grid"] [role="gridcell"][tabindex="0"]:not([disabled])')
				?.focus();
		});
	}, []);

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
					onViewChange={handleViewChange}
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
								"aria-describedby": instructionTextId,
							},
						},
						popper: {
							ref: popperRef,
							sx: popperSx,
							onKeyDownCapture: handlePopperKeyDownCapture,
							onKeyUpCapture: handlePopperKeyUpCapture,
						},
					}}
				/>
			</div>
		</LocalizationProvider>
	);
};

export default DatePicker;
