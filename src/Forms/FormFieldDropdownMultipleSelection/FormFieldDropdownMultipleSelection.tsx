// React
import * as React from "react";
import { ReactElement, useState } from "react";

// Material UI
import TextField from "@material-ui/core/TextField";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

// Components
import Chip from "../../components/Chip";
import Checkbox from "../../components/Checkbox";
import HelperText from "../../components/HelperText";
import InputWrapper from "../../components/InputWrapper";
import { Label } from "@root/components/Typography";

// Types
import { FormFieldDropdownMultipleSelectionTypes } from "./FormFieldDropdownMultipleSelectionTypes";
import {
	ChipsWrapper,
	FieldWrapper,
	StyledAutocomplete,
	StyledPopper,
	StyledInstructionText,
	StyledDisabledDropdownText,
} from "./FormFieldDropdownMultipleSelection.styled";

// Theme
import { Sizes } from "../../theme/sizes";

const FormFieldDropdownMultipleSelection = (
	props: FormFieldDropdownMultipleSelectionTypes
): ReactElement => {
	const {
		disabled,
		helperText,
		instructionText,
		label,
		error,
		errorText,
		required,
		options,
		placeholder,
		size = Sizes.md,
	} = props;

	const [selectedOptions, setSelectedOptions] = useState([]);

	const onDelete = (label) => () => {
		setSelectedOptions((value) => value.filter((v) => v.label !== label));
	};

	const renderInput = (params) => (
		<InputWrapper>
			<TextField {...params} variant='outlined' placeholder={placeholder} />
			<StyledInstructionText>{instructionText}</StyledInstructionText>
		</InputWrapper>
	);

	const listOfChips = (
		<ChipsWrapper size={size}>
			{selectedOptions.map((v) => (
				<Chip
					disabled={disabled}
					key={v.label}
					label={v.label}
					onDelete={onDelete(v.label)}
				/>
			))}
		</ChipsWrapper>
	);

	const errorField = error && required;

	return (
		<FieldWrapper error={errorField}>
			<Label disabled={disabled} required={required}>{label}</Label>
			{!disabled ? (
				<>
					<StyledAutocomplete
						data-testid='autocomplete-test'
						disabled={disabled}
						error={errorField}
						multiple
						options={options}
						getOptionLabel={(option) => option.label}
						renderOption={(option, { selected }) => (
							<>
								<Checkbox checked={selected} />
								{option.label}
							</>
						)}
						popupIcon={<ExpandMoreIcon />}
						PopperComponent={StyledPopper}
						onChange={(_e, newValue) => setSelectedOptions(newValue)}
						renderTags={() => null}
						renderInput={renderInput}
						size={size}
						value={selectedOptions}
					/>
					{selectedOptions.length > 0 && listOfChips}
					{errorText && errorField ? (
						<HelperText error>{errorText}</HelperText>
					) : (
						<HelperText>{helperText}</HelperText>
					)}
				</>
			) : (
				<>
					<StyledDisabledDropdownText>
						{selectedOptions.length === 0 && placeholder}
					</StyledDisabledDropdownText>
					{listOfChips}
				</>
			)}
		</FieldWrapper>
	);
};

export default FormFieldDropdownMultipleSelection;
