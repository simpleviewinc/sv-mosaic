import type { HTMLAttributes } from "react";
import React, { useState, memo, useCallback } from "react";
import Skeleton from "@mui/material/Skeleton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import type { AutocompleteRenderInputParams } from "@mui/material/Autocomplete";

import type { MosaicFieldProps } from "@root/components/Field";
import type { MosaicLabelValue } from "@root/types";
import type { DropdownData, DropdownInputSettings } from "./FormFieldDropdownTypes";

import useOptions from "@root/utils/hooks/useOptions/useOptions";
import { StyledPopper, StyledPopperPaper, StyledPopperListbox } from "@root/components/common";
import { StyledTextField } from "../FormFieldText/FormFieldText.styled";
import testIds from "@root/utils/testIds";
import { StyledPopperListboxOption } from "@root/components/common/StyledPopperListboxOption";
import { StyledAutocomplete } from "./FormFieldDropdown.styled";

const isOptionEqualToValue = (option: MosaicLabelValue, value: MosaicLabelValue) => {
	if (value?.value === "") {
		return true;
	}

	return option.value === value?.value;
};

const getOptionKey = (option: MosaicLabelValue) => option.value;

const renderOption = (props: HTMLAttributes<HTMLLIElement>, option: MosaicLabelValue) => (
	<StyledPopperListboxOption {...props} className={`${props.className || ""} Mos-listboxOption`}>
		{option.label}
	</StyledPopperListboxOption>
);

const componentsProps = { popupIndicator: { disableRipple: true, className: "Mos-DropdownChevron" } };

const FormFieldDropdown = (props: MosaicFieldProps<"dropdown", DropdownInputSettings, DropdownData>) => {
	const {
		fieldDef,
		onChange,
		onBlur,
		value,
		disabled,
		inputRef,
		id,
		skeleton,
	} = props;

	const {
		label,
		required,
		inputSettings: {
			options: providedOptions,
			placeholder,
		} = {},
	} = fieldDef;

	const { options, loading } = useOptions({
		from: providedOptions,
		add: value ? [value] : undefined,
	});

	const [isOpen, setIsOpen] = useState(false);

	const renderInput = useCallback((params: AutocompleteRenderInputParams) => {
		return (
			<StyledTextField
				{...params}
				data-testid="textfield-test-id"
				variant="outlined"
				placeholder={placeholder}
				required={typeof required === "object" ? required.asterisk : required}
				inputProps={{
					...params.inputProps,
					ref: (el: HTMLInputElement) => {
						if (inputRef) {
							inputRef.current = el;
						}

						if (typeof params.inputProps.ref === "function") {
							params.inputProps.ref(el);
						} else {
							// @ts-expect-error It's not read only, TS only thinks it is.
							params.inputProps.ref.current = el;
						}
					},
					id,
					"aria-label": label,
				}}
			/>
		);
	}, [placeholder, label, required, id, inputRef]);

	const handleOpen = () => {
		setIsOpen(!isOpen);
	};

	const onDropDownChange = useCallback(async (_: unknown, option: MosaicLabelValue) => {
		onChange && (await onChange(option ? option : undefined));
	}, [onChange]);

	if (skeleton || loading) {
		return (
			<Skeleton
				data-testid={testIds.FORM_FIELD_SKELETON}
				variant="rectangular"
				width="100%"
				height={43}
			/>
		);
	}

	return (
		<div data-testid="dropdown-single-selection-test-id">
			<StyledAutocomplete
				value={value || null}
				onOpen={handleOpen}
				onClose={handleOpen}
				data-testid="autocomplete-test-id"
				options={options}
				getOptionKey={getOptionKey}
				isOptionEqualToValue={isOptionEqualToValue}
				onChange={onDropDownChange}
				renderInput={renderInput}
				ListboxComponent={StyledPopperListbox}
				PopperComponent={StyledPopper}
				PaperComponent={StyledPopperPaper}
				renderOption={renderOption}
				popupIcon={<ExpandMoreIcon />}
				componentsProps={componentsProps}
				onBlur={(e) => onBlur && onBlur((e.target as HTMLInputElement).value)}
				open={isOpen}
				disabled={disabled}
			/>
		</div>
	);
};

export default memo(FormFieldDropdown);
