import * as React from "react";
import { ReactElement, memo, useEffect, useState } from "react";

// Types and styles
import { MosaicFieldProps } from "@root/components/Field";
import { FormFieldCheckboxDef } from "./FormFieldCheckboxTypes";
import { StyledCheckboxList } from "./FormFieldCheckbox.styled";
import { MosaicLabelValue } from "@root/types";

const FormFieldCheckbox = (
	props: MosaicFieldProps<FormFieldCheckboxDef, MosaicLabelValue[]>
): ReactElement => {
	const {
		fieldDef,
		onChange,
		onBlur,
		value
	} = props;

	const [internalOptions, setInternalOptions] = useState<MosaicLabelValue[]>([]);
	const [checked, setChecked] = useState<string[]>([]);

	useEffect(() => {
		const populateOptions = async () => {
			if (fieldDef?.inputSettings?.options) {
				setInternalOptions(fieldDef.inputSettings.options);
			} else  if (fieldDef?.inputSettings?.getOptions) {
				const newOptions = await fieldDef.inputSettings.getOptions();
				setInternalOptions(newOptions);
			}
		}
		populateOptions();
	}, [fieldDef?.inputSettings?.options, fieldDef?.inputSettings?.getOptions])

	useEffect(() => {
		if (value?.length > 0) {
			value.forEach((optionValue) => {
				if (!internalOptions.find((o) => o?.value === optionValue?.value))
					setInternalOptions([...internalOptions, optionValue]);
			})
		}

		setChecked(value?.map(selectedOption => selectedOption.value));

	}, [internalOptions, value]);

	const internalOnChange = (myNewValues: string[], cb:(val:MosaicLabelValue[])=>void) => {
		const checkedOptions = myNewValues?.map(checkedOption => internalOptions.find(option => option.value === checkedOption));
		if (cb) {
			cb(checkedOptions)
		}
	}

	return (
		<StyledCheckboxList
			disabled={fieldDef?.disabled}
			checked={checked}
			options={internalOptions}
			onChange={(val) => internalOnChange(val, onChange)}
			onChangeCb={(val) => internalOnChange(val, fieldDef.onChangeCb)}
			onBlur={onBlur}
			style={fieldDef.style}
			className={fieldDef.className}
		/>
	);
};

export default memo(FormFieldCheckbox);
