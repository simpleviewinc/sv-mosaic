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
		}
		populateOptions();
	}, [
		fieldDef?.inputSettings?.options,
		fieldDef?.inputSettings?.getOptions
	])

	useEffect(() => {
		if (value && origin === false) {
			value.forEach((optionValue) => {
				if (!internalOptions.find((o) => o?.value === optionValue?.value))
					setInternalOptions([...internalOptions, optionValue]);
			})
		}

		setChecked(value?.map(selectedOption => selectedOption?.value));

	}, [internalOptions, value, origin]);

	const internalOnChange = (checkedOptions: string[], cb:(val:MosaicLabelValue[])=>void) => {
		const newCheckedOptions = checkedOptions?.map(checkedOption => internalOptions.find(option => option?.value === checkedOption));
		if (cb) {
			cb(newCheckedOptions)
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
