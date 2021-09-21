// React
import Field from '@root/components/Field';
import * as React from 'react';
import { ReactElement } from 'react';

// Components
import Chip from '../../components/Chip';

//Types and styles
import { FormFieldChipSingleSelectProps } from './FormFieldChipSingleSelectTypes';

const FormFieldChipSingleSelect = (props: FormFieldChipSingleSelectProps): ReactElement => {
	const {
		options,
		label,
		required,
		disabled,
		instructionText,
		helperText,
		error,
		errorText
	} = props;

	return(
		<Field
			label={label}
			required={required}
			disabled={disabled}
			error={error}
			errorText={errorText}
			helperText={helperText}
			instructionText={instructionText}
		>
			{
				options.map(
					(option) => <Chip
						label={option.label}
						disabled={disabled}
					/>
				)
			}
		</Field>
	);
}

export default FormFieldChipSingleSelect;