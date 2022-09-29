import * as React from "react";
import { useState, memo, useEffect } from "react";
import {
	StyledAutocomplete,
	StyledDisabledDropdownText,
	StyledPopper,
	SingleDropdownWrapper,
} from "./FormFieldDropdownSingleSelection.styled";
import { MosaicFieldProps } from "@root/components/Field";
import { CustomPopperProps, DropdownSingleSelectionDef } from "./FormFieldDropdownSingleSelectionTypes";

// Components
import InputWrapper from "../../components/InputWrapper";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import TextField from "@mui/material/TextField";
import { MosaicLabelValue } from "@root/types";
import { getNewOptions } from "@root/utils/getOptions";

const DropdownSingleSelection = (props: MosaicFieldProps<DropdownSingleSelectionDef, MosaicLabelValue>) => {
	const {
		fieldDef,
		error,
		onChange,
		onBlur,
		value
	} = props;

	const [isOpen, setIsOpen] = useState(false);
	const [dropDownValue, setDropDownValue] = useState(null);

	const [internalOptions, setInternalOptions] = useState([]);

	useEffect(() => {
		if (fieldDef?.inputSettings?.options) {
			setInternalOptions(fieldDef.inputSettings.options);

		} else if (fieldDef?.inputSettings?.getOptions) {
			getNewOptions().then((newOptions) => setInternalOptions(newOptions));

		} else {
			throw new Error("You must provide an options array or the getOptions method");
		}
	}, [fieldDef.inputSettings]);

	useEffect(() => {
		if (value) {
			if (!internalOptions.find((o) => o?.value === value?.value))
				setInternalOptions([...internalOptions, value]);
		}
	}, [internalOptions, value]);

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
		setDropDownValue(option)
		onChange && (await onChange(option));
	}

	const selectedOption = internalOptions.find(option => {
		return option.value === value?.value;
	});

	const isOptionEqualToValue = (option: MosaicLabelValue, value: MosaicLabelValue) => {
		if (value?.value === "") {
			return true;
		}

		return option.value === value?.value
	}

	const CustomPopper = (props: CustomPopperProps) => {
		return <StyledPopper value={value?.value === ""} {...props} />;
	};

	return (
		<>
			{!fieldDef?.disabled ?
				<SingleDropdownWrapper data-testid="dropdown-single-selection-test-id" innerWidth={fieldDef?.size}>
					<StyledAutocomplete
						disablePortal={true}
						value={value}
						onOpen={handleOpen}
						onClose={handleOpen}
						data-testid="autocomplete-test-id"
						options={internalOptions}
						getOptionLabel={(option) => option?.label ? option.label : ""}
						isOptionEqualToValue={isOptionEqualToValue}
						onChange={(_event, option) => onDropDownChange(option)}
						error={(fieldDef?.required && error) ? error : undefined}
						renderInput={renderInput}
						PopperComponent={CustomPopper}
						popupIcon={<ExpandMoreIcon />}
						onBlur={(e) => onBlur && onBlur(e.target.value)}
						open={true}
					/>
				</SingleDropdownWrapper>
				:
				<StyledDisabledDropdownText
					data-testid="disabled-text-test-id"
				>
					{(!dropDownValue || dropDownValue?.label.trim() === "") ?
						fieldDef?.inputSettings?.placeholder : dropDownValue.label
					}
				</StyledDisabledDropdownText>
			}
		</>
	);
};

export default memo(DropdownSingleSelection);
