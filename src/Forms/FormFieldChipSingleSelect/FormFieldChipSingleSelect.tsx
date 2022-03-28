// React
import * as React from "react";
import { ReactElement, useState } from "react";

// Components
import Chip from "../../components/Chip";

//Types and styles
import { MosaicFieldProps } from "@root/components/Field";
import { FormFieldChipSingleSelectDef } from "./FormFieldChipSingleSelectTypes";
import { StyledChipGroup } from "./FormFieldChipSingleSelect.styled";

const FormFieldChipSingleSelect = (props: MosaicFieldProps<FormFieldChipSingleSelectDef>): ReactElement => {
	const {
		fieldDef,
		error,
		onChange,
		onBlur,
	} = props;
	
	const { required } = fieldDef || null;

	const [internalOptions, setInternalOptions] = useState([...fieldDef?.inputSettings?.options]);
	
	const updateSelectedOption = (option) => {
		
		let newOptions = [...internalOptions];

		newOptions = newOptions.map((o) => (
			o.value === option.value ?
				{ ...o, selected: required && o.selected ? o.selected : !o.selected }
				:
				{ ...o, selected: o.selected = false }
		)
		);

		const selectedOption = newOptions.find(o => o.selected === true);

		setInternalOptions(newOptions);
		onChange(selectedOption?.value || undefined);
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
						disabled={fieldDef?.disabled}
						selected={option.selected}
						onClick={() => updateSelectedOption(option)}
					/>
				)
			}
		</StyledChipGroup>
	);
}

export default FormFieldChipSingleSelect;