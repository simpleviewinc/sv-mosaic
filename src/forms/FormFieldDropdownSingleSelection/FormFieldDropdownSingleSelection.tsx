import * as React from "react";
import { useState, memo } from "react";
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
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import TextField from "@material-ui/core/TextField";

const DropdownSingleSelection = (props: MosaicFieldProps<DropdownSingleSelectionDef, string>) => {
	const {
		fieldDef,
		error,
		onChange,
		onBlur,
		value
	} = props;

	const [isOpen, setIsOpen] = useState(false);
	const [dropDownValue, setDropDownValue] = useState(null);

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

	const onDropDownChange = async (option) => {
		setDropDownValue(option)
		onChange && await onChange(option?.value);
	}
	
	const selectedOption = fieldDef?.inputSettings?.options.find(option => {
		return option.value === value;
	});

	const getOptionSelected = (option, value) => {
		if (value.value === "") {
			return true;
		}

		return option.value === value.value
	}

	const CustomPopper = (props: CustomPopperProps) => {
		return <StyledPopper value={value === ""} {...props} />;
	};

	return (
		<>
			{!fieldDef?.disabled ?
				<SingleDropdownWrapper innerWidth={fieldDef?.size}>
					<StyledAutocomplete
						value={{label: selectedOption?.label, value: value}}
						onOpen={handleOpen}
						onClose={handleOpen}
						data-testid="autocomplete-test-id"
						options={fieldDef?.inputSettings?.options}
						getOptionLabel={(option) => option?.label ? option.label : ""}
						getOptionSelected={getOptionSelected}
						onChange={(_event, option) => onDropDownChange(option)}
						error={(fieldDef?.required && error) ? error : undefined}
						renderInput={renderInput}
						PopperComponent={CustomPopper}
						popupIcon={<ExpandMoreIcon />}
						onBlur={(e) => onBlur && onBlur(e.target.value)}
						open={isOpen}
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
