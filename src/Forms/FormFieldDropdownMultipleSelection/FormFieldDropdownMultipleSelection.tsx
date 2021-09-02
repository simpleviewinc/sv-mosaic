// React
import * as React from 'react';
import { ReactElement, useState, Fragment } from 'react';

// Material UI
import TextField from '@material-ui/core/TextField';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// Components
import Chip from '../../components/Chip';
import Checkbox from '../../components/Checkbox';
import HelperText from '../../components/HelperText';
import InputWrapper from '../../components/InputWrapper';

// Types
import { FormFieldDropdownMultipleSelectionTypes } from './FormFieldDropdownMultipleSelectionTypes';
import {
	ChipsWrapper,
	FieldWrapper,
	StyledAutocomplete,
	StyledPopper,
	StyledInstructionText,
	StyledLabel,
	StyledDisabledDropdownText,
} from './FormFieldDropdownMultipleSelection.styled';

// Theme
import { Sizes } from '../../theme/sizes';

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

	return (
		<>
			{!disabled ? (
				<FieldWrapper error={error && required}>
					<StyledLabel required={props.required}>{label}</StyledLabel>
					<StyledAutocomplete
						data-testid='autocomplete-test'
						disabled={disabled}
						multiple
						options={options}
						getOptionLabel={(option) => option.label}
						renderOption={(option, { selected }) => (
							<Fragment>
								<Checkbox checked={selected} />
								{option.label}
							</Fragment>
						)}
						PopperComponent={StyledPopper}
						popupIcon={<ExpandMoreIcon />}
						onChange={(_e, newValue) => setSelectedOptions(newValue)}
						renderTags={() => null}
						renderInput={renderInput}
						size={size}
						value={selectedOptions}
					/>
					{selectedOptions && listOfChips}
					{errorText && error && required ? (
						<HelperText error>{errorText}</HelperText>
					) : (
						<HelperText>{helperText}</HelperText>
					)}
				</FieldWrapper>
			) : (
				<FieldWrapper error={error && required}>
					<StyledDisabledDropdownText>
						{selectedOptions.length > 0
							? 'Selected options'
							: 'No options selected'}
					</StyledDisabledDropdownText>
					{selectedOptions && listOfChips}
				</FieldWrapper>
			)}
		</>
	);
};

export default FormFieldDropdownMultipleSelection;
