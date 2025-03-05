import React, { useState, memo } from "react";
import TextField from "@mui/material/TextField";
import Skeleton from "@mui/material/Skeleton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import type { MosaicFieldProps } from "@root/components/Field";
import type { MosaicLabelValue } from "@root/types";
import type { CustomPopperProps, DropdownData, DropdownInputSettings } from "./FormFieldDropdownTypes";

import useOptions from "@root/utils/hooks/useOptions/useOptions";
import useMountWarning from "@root/utils/hooks/useMountWarning/useMountWarning";
import InputWrapper from "../../InputWrapper";
import { StyledAutocomplete, StyledPopper, SingleDropdownWrapper } from "./FormFieldDropdown.styled";
import testIds from "@root/utils/testIds";

const FormFieldDropdown = (props: MosaicFieldProps<"dropdown", DropdownInputSettings, DropdownData>) => {
	const {
		fieldDef,
		error,
		onChange,
		onBlur,
		value,
		disabled,
		inputRef,
		id,
		skeleton,
	} = props;

	const {
		inputSettings: {
			getOptions: optionsAsync,
			options: providedOptions = optionsAsync,
		} = {},
	} = fieldDef;

	useMountWarning(
		`The \`getOptions\` input setting (provided to the \`${fieldDef.name}\` field) is deprecated and will be removed in future versions. Use the \`options\` input setting instead.`,
		Boolean(optionsAsync),
	);

	const { options, loading } = useOptions({
		from: providedOptions,
		add: value ? [value] : undefined,
	});

	const [isOpen, setIsOpen] = useState(false);

	const renderInput = (params) => {
		return (
			<InputWrapper>
				<TextField
					{...params}
					data-testid="textfield-test-id"
					variant="outlined"
					placeholder={fieldDef?.inputSettings?.placeholder}
					required={fieldDef?.required}
					inputProps={{
						...params.inputProps,
						ref: (el) => {
							if (inputRef) {
								inputRef.current = el;
							}

							params.inputProps.ref.current = el;
						},
						id,
						"aria-label": fieldDef.label,
					}}
				/>
			</InputWrapper>
		);
	};

	const handleOpen = () => {
		setIsOpen(!isOpen);
	};

	const onDropDownChange = async (option: MosaicLabelValue) => {
		onChange && (await onChange(option ? option : undefined));
	};

	const isOptionEqualToValue = (option: MosaicLabelValue, value: MosaicLabelValue) => {
		if (value?.value === "") {
			return true;
		}

		return option.value === value?.value;
	};

	const CustomPopper = (props: CustomPopperProps) => {
		return <StyledPopper $value={value?.value === ""} {...props} />;
	};

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
		<SingleDropdownWrapper data-testid="dropdown-single-selection-test-id" $innerWidth={fieldDef?.size}>
			<StyledAutocomplete
				value={value || null}
				onOpen={handleOpen}
				onClose={handleOpen}
				data-testid="autocomplete-test-id"
				options={options}
				getOptionLabel={(option: MosaicLabelValue) => option.label}
				getOptionKey={(option: MosaicLabelValue) => option.value}
				isOptionEqualToValue={isOptionEqualToValue}
				onChange={(_event, option) => onDropDownChange(option as MosaicLabelValue)}
				$error={Boolean(error)}
				renderInput={renderInput}
				PopperComponent={CustomPopper}
				popupIcon={<ExpandMoreIcon />}
				onBlur={(e) => onBlur && onBlur((e.target as HTMLInputElement).value)}
				open={isOpen}
				disabled={disabled}
			/>
		</SingleDropdownWrapper>
	);
};

export default memo(FormFieldDropdown);
