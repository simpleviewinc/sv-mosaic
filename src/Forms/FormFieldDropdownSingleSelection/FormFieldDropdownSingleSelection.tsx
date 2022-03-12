import * as React from 'react';
import { useState, memo } from "react";
import {
	StyledAutocomplete,
	StyledDisabledDropdownText,
	StyledPopper,
	SingleDropdownWrapper,
} from "./FormFieldDropdownSingleSelection.styled";
import { MosaicFieldProps } from '@root/components/Field';
import { DropdownSingleSelectionDef } from "./FormFieldDropdownSingleSelectionTypes";

// Components
import InputWrapper from '../../components/InputWrapper';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import TextField from '@material-ui/core/TextField';

const DropdownSingleSelection = (props: MosaicFieldProps<DropdownSingleSelectionDef, string>) => {
	const {
		fieldDef,
		error,
		onChange,
		onBlur,
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
		setDropDownValue(option);
		onChange && await onChange(option?.value)
	}

	return (
		<>
			{!fieldDef?.disabled ?
				<SingleDropdownWrapper innerWidth={fieldDef?.size}>
					<StyledAutocomplete
						value={dropDownValue}
						onOpen={handleOpen}
						onClose={handleOpen}
						data-testid="autocomplete-test-id"
						options={fieldDef?.inputSettings?.options}
						getOptionLabel={(option) => option?.title ? option.title : ''}
						onChange={(_event, option) => onDropDownChange(option)}
						error={(fieldDef?.required && error) ? error : undefined}
						renderInput={renderInput}
						PopperComponent={StyledPopper}
						popupIcon={<ExpandMoreIcon />}
						onBlur={(e) => onBlur && onBlur(e.target.value)}
						open={isOpen}
					/>
				</SingleDropdownWrapper>
				:
				<StyledDisabledDropdownText
					data-testid="disabled-text-test-id"
				>
					{(!dropDownValue || dropDownValue?.title.trim() === '') ?
						fieldDef?.inputSettings?.placeholder : dropDownValue.title
					}
				</StyledDisabledDropdownText>
			}
		</>
	);
};

export default memo(DropdownSingleSelection);
