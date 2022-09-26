import * as React from "react";
import { ReactElement, useState, useEffect } from "react";

// Components
import RadioButton from "@root/components/RadioButton";

// Types and styles
import { MosaicFieldProps } from "@root/components/Field";
import { FormFieldRadioDef } from "./FormFieldRadioTypes";
import { StyledRadioGroup } from "./FormFieldRadio.styled";
import { MosaicLabelValue } from "@root/types";

const FormFieldRadio = (props: MosaicFieldProps<FormFieldRadioDef, MosaicLabelValue>): ReactElement => {
	const {
		fieldDef,
		onChange,
		value,
		onBlur,
	} = props;

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

	const getNewOptions = async () => {
		const newOptions = await fieldDef.inputSettings.getOptions();
		return newOptions;
	}

	const listOfRadios = (
		<>
			{internalOptions.map((option) => (
				<RadioButton
					disabled={fieldDef?.disabled}
					key={option.label}
					label={option.label}
					value={option.value}
				/>
			))}
		</>
	);

	const updateSelectedOption = (option: string) => {
		const selectedOption: MosaicLabelValue = internalOptions.find(o => o.value === option);
		onChange(selectedOption);
	}

	return (
		<StyledRadioGroup
			onChange={(e) => onChange && updateSelectedOption(e.target.value)}
			value={value?.value ?? ""}
			onBlur={(e) => onBlur && onBlur(e.target.value)}
		>
			{listOfRadios}
		</StyledRadioGroup>
	);
};

export default FormFieldRadio;
