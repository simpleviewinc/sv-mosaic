// React
import * as React from 'react';
import { ReactElement, useState } from 'react';

// Components
import Field from '@root/components/Field';
import Chip from '../../components/Chip';

//Types and styles
import { FormFieldChipSingleSelectProps } from './FormFieldChipSingleSelectTypes';
import { StyledChipGroup } from './FormFieldChipSingleSelect.styled';

const FormFieldChipSingleSelect = (props: FormFieldChipSingleSelectProps): ReactElement => {
	const {
		options,
		label,
		required,
		disabled,
		instructionText,
		helperText,
		error,
		errorText,
		onSelect,
	} = props;

	const [internalOptions, setInternalOptions] = useState([...options]);

	const updateSelectedOption = (option) => {

		let newOptions = [...internalOptions];

		newOptions = newOptions.map((o) => (
			o.value === option.value ? 
				{...o, selected: !o.selected} 
				: 
				{...o, selected: o.selected = false}
		)
		);

		setInternalOptions(newOptions);
		onSelect(newOptions);
	}

	const errorWithMessage = error && errorText.trim().length > 0;

	return (
		<Field
			label={label}
			required={required}
			disabled={disabled}
			error={error}
			errorText={errorText}
			helperText={helperText}
			instructionText={instructionText}
		>
			<StyledChipGroup
				error={(errorWithMessage || (errorWithMessage && required))}
			>
				{
					internalOptions.map(
						(option) => <Chip
							key={option.value}
							label={option.label}
							disabled={disabled}
							selected={option.selected}
							onClick={() => updateSelectedOption(option)}
						/>
					)
				}
			</StyledChipGroup>
		</Field>
	);
}

export default FormFieldChipSingleSelect;