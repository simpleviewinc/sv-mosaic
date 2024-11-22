import * as React from "react";
import type { ReactElement } from "react";
import { useState, useEffect, memo } from "react";

// Components
import RadioButton from "@root/components/RadioButton";

// Types and styles
import type { MosaicFieldProps } from "@root/components/Field";
import type { RadioInputSettings, RadioData } from "./FormFieldRadioTypes";
import { StyledRadioGroup } from "./FormFieldRadio.styled";
import type { MosaicLabelValue } from "@root/types";
import { FormFieldRadioSkeleton } from "./FormFieldRadioSkeleton";

const FormFieldRadio = (props: MosaicFieldProps<"radio", RadioInputSettings, RadioData>): ReactElement => {
	const {
		fieldDef,
		onChange,
		value,
		onBlur,
		disabled,
		skeleton,
	} = props;

	const [internalOptions, setInternalOptions] = useState([]);
	// true: options
	// false: getOptions
	const [origin, setOrigin] = useState(undefined);

	useEffect(() => {
		const populateOptions = async () => {
			if (fieldDef?.inputSettings?.options) {
				setInternalOptions(fieldDef.inputSettings.options);
				setOrigin(true);
			} else if (fieldDef?.inputSettings?.getOptions) {
				const newOptions = await fieldDef.inputSettings.getOptions();
				setInternalOptions(newOptions);
				setOrigin(false);
			}
		};
		populateOptions();
	}, [fieldDef?.inputSettings?.options, fieldDef?.inputSettings?.getOptions]);

	useEffect(() => {
		if (value && origin === false) {
			if (!internalOptions.find((o) => o?.value === value?.value))
				setInternalOptions([...internalOptions, value]);
		}
	}, [internalOptions, value, origin]);

	const listOfRadios = (
		<>
			{internalOptions.map((option) => (
				<RadioButton
					disabled={disabled}
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
	};

	if (skeleton) {
		return <FormFieldRadioSkeleton />;
	}

	return (
		<StyledRadioGroup
			onChange={(e) => onChange && updateSelectedOption(e.target.value)}
			value={value ? value.value : ""}
			onBlur={(e) => onBlur && onBlur((e.target as HTMLInputElement).value)}
		>
			{listOfRadios}
		</StyledRadioGroup>
	);
};

export default memo(FormFieldRadio);
