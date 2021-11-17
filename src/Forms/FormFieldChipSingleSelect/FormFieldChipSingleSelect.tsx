// React
import * as React from 'react';
import { HTMLAttributes, ReactElement, useState } from 'react';

// Components
import Chip from '../../components/Chip';

//Types and styles
import { FormFieldChipSingleSelectProps } from './FormFieldChipSingleSelectTypes';
import { StyledChipGroup } from './FormFieldChipSingleSelect.styled';

const FormFieldChipSingleSelect = (props: FormFieldChipSingleSelectProps & HTMLAttributes<HTMLInputElement>): ReactElement => {
	const {
		required,
		disabled = false,
		error,
		onChange,
		onBlur,
		inputSettings
	} = props;

	const [internalOptions, setInternalOptions] = useState([...inputSettings?.options]);

	const updateSelectedOption = (option) => {

		let newOptions = [...internalOptions];

		newOptions = newOptions.map((o) => (
				o.value === option.value ? 
					{...o, selected: !o.selected} 
					: 
					{...o, selected: o.selected = false}
			)
		);

		let selectedOption = newOptions.find(o => o.selected === true);

		setInternalOptions(newOptions);
		// onSelect(newOptions);
		onChange(selectedOption);
	}

	const errorWithMessage = error?.trim().length > 0;

	return (
		<StyledChipGroup
			error={(errorWithMessage || (errorWithMessage && required))}
			onBlur={onBlur}
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
	);
}

export default FormFieldChipSingleSelect;