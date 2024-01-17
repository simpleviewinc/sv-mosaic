import * as React from "react";
import { useState, memo, useEffect } from "react";
import {
	StyledAutocomplete,
	StyledPopper,
	SingleDropdownWrapper,
} from "./FormFieldDropdownSingleSelection.styled";
import { MosaicFieldProps } from "@root/components/Field";
import { CustomPopperProps, DropdownData, DropdownSingleSelectionInputSettings } from "./FormFieldDropdownSingleSelectionTypes";

// Components
import InputWrapper from "../../InputWrapper";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import TextField from "@mui/material/TextField";
import { MosaicLabelValue } from "@root/types";

const DropdownSingleSelection = (props: MosaicFieldProps<"dropdown", DropdownSingleSelectionInputSettings, DropdownData>) => {
	const {
		fieldDef,
		error,
		onChange,
		onBlur,
		value,
		disabled
	} = props;

	const [isOpen, setIsOpen] = useState(false);
	const [internalOptions, setInternalOptions] = useState([]);
	// true: options
	// false: getOptions
	const [origin, setOrigin] = useState(undefined);

	useEffect(() => {
		const populateOptions = async () => {
			if (fieldDef?.inputSettings?.options) {
				setInternalOptions(fieldDef.inputSettings.options);
				setOrigin(true);
			} else if (fieldDef?.inputSettings?.getOptions) {
				const newOptions = await fieldDef.inputSettings.getOptions();
				setInternalOptions(newOptions);
				setOrigin(false);
			}
		}
		populateOptions();
	}, [fieldDef?.inputSettings?.options, fieldDef?.inputSettings?.getOptions])

	useEffect(() => {
		if (value && origin === false) {
			if (!internalOptions.find((o) => o?.value === value?.value))
				setInternalOptions([...internalOptions, value]);
		}
	}, [internalOptions, value, origin]);

	const renderInput = (params) => (
		<InputWrapper>
			<TextField
				{...params}
				data-testid="textfield-test-id"
				variant="outlined"
				placeholder={fieldDef?.inputSettings?.placeholder}
				required={fieldDef?.required}
			/>
		</InputWrapper>
	);

	const handleOpen = () => {
		setIsOpen(!isOpen)
	}

	const onDropDownChange = async (option: MosaicLabelValue) => {
		onChange && (await onChange(option ? option : undefined));
	}

	const isOptionEqualToValue = (option: MosaicLabelValue, value: MosaicLabelValue) => {
		if (value?.value === "") {
			return true;
		}

		return option.value === value?.value
	}

	const CustomPopper = (props: CustomPopperProps) => {
		return <StyledPopper $value={value?.value === ""} {...props} />;
	};

	return (
		<SingleDropdownWrapper data-testid="dropdown-single-selection-test-id" $innerWidth={fieldDef?.size}>
			<StyledAutocomplete
				value={value || null}
				onOpen={handleOpen}
				onClose={handleOpen}
				data-testid="autocomplete-test-id"
				options={internalOptions}
				getOptionLabel={(option) => (option as MosaicLabelValue)?.label ? (option as MosaicLabelValue).label : ""}
				isOptionEqualToValue={isOptionEqualToValue}
				onChange={(_event, option) => onDropDownChange(option as MosaicLabelValue)}
				$error={(fieldDef?.required && error) ? !!error : undefined}
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

export default memo(DropdownSingleSelection);
