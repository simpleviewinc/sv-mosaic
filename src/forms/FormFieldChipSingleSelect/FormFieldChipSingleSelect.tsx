// React
import * as React from "react";
import { ReactElement, useEffect, useState } from "react";

// Components
import Chip from "../../components/Chip";

//Types and styles
import { MosaicFieldProps } from "@root/components/Field";
import { FormFieldChipSingleSelectDef } from "./FormFieldChipSingleSelectTypes";
import { StyledChipGroup } from "./FormFieldChipSingleSelect.styled";
import { MosaicLabelValue } from "@root/types";

const FormFieldChipSingleSelect = (props: MosaicFieldProps<FormFieldChipSingleSelectDef>): ReactElement => {
	const {
		fieldDef,
		error,
		onChange,
		onBlur,
		value,
	} = props;

	const { required } = fieldDef || null;

	const [internalOptions, setInternalOptions] = useState([]);
	const [prepopulated, setPrepouplated] = useState(false);

	useEffect(() => {
		if (fieldDef?.inputSettings?.options) {
			setInternalOptions(fieldDef.inputSettings.options);

		} else if (fieldDef?.inputSettings?.getOptions) {
			getNewOptions().then((newOptions) => setInternalOptions(newOptions));

		} else {
			throw new Error("You must provide an options array or the getOptions method");
		}

		setPrepouplated(false);
	}, [fieldDef.inputSettings]);

	useEffect(() => {
		if (value && !prepopulated) {
			findSelectedOption([...internalOptions].find((o) => o.value === value.value));
			setPrepouplated(true);
		}
	}, [value, prepopulated, internalOptions]);

	useEffect(() => {
		if (value) {
			if (!internalOptions.find((o) => o?.value === value?.value)) {
				setInternalOptions([...internalOptions, value]);
				setPrepouplated(false);
			}
		}
	}, [internalOptions]);

	const getNewOptions = async () => {
		const newOptions = await fieldDef.inputSettings.getOptions()
		return newOptions
	}

	const findSelectedOption = (option: MosaicLabelValue) => {
		let newOptions = [...internalOptions];

		newOptions = newOptions.map((o) => (
			o?.value === option?.value ?
				{ ...o, selected: required && o.selected ? o.selected : !o.selected }
				:
				{ ...o, selected: o.selected = false }
		));

		const selectedOption = newOptions.find(o => o.selected === true);

		setInternalOptions(newOptions);

		return selectedOption;
	}

	const updateSelectedOption = (option: MosaicLabelValue) => {
		const selectedOption = findSelectedOption(option);
		setPrepouplated(true);
		onChange(selectedOption?.value ?
			{
				label: selectedOption.label,
				value: selectedOption.value
			} : undefined);
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
