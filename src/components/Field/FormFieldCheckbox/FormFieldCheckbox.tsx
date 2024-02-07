import * as React from "react";
import { ReactElement, memo, useEffect, useState } from "react";

// Types and styles
import { MosaicFieldProps } from "@root/components/Field";
import { FormFieldCheckboxInputSettings, CheckboxData } from "./FormFieldCheckboxTypes";
import { StyledCheckboxList } from "./FormFieldCheckbox.styled";
import { MosaicLabelValue } from "@root/types";

const FormFieldCheckbox = (
	props: MosaicFieldProps<"checkbox", FormFieldCheckboxInputSettings, CheckboxData>,
): ReactElement => {
	const {
		fieldDef,
		onChange,
		onBlur,
		value,
		disabled,
	} = props;

	const [internalOptions, setInternalOptions] = useState<MosaicLabelValue[]>([]);
	const [checked, setChecked] = useState<MosaicLabelValue[]>([]);
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
	}, [
		fieldDef?.inputSettings?.options,
		fieldDef?.inputSettings?.getOptions,
	]);

	useEffect(() => {
		if (value && origin === false) {
			value.forEach((optionValue) => {
				if (!internalOptions.find((o) => o?.value === optionValue?.value))
					setInternalOptions([...internalOptions, optionValue]);
			});
		}
		setChecked(value);

	}, [internalOptions, value, origin]);

	const internalOnChange = (checkedOptions: MosaicLabelValue[], cb:(val:MosaicLabelValue[]) => void) => {
		const newCheckedOptions = checkedOptions?.map(checkedOption => internalOptions.find(option => option?.value === checkedOption.value));
		if (cb) {
			cb(newCheckedOptions);
		}
	};

	return (
		<StyledCheckboxList
			disabled={disabled}
			checked={checked}
			options={internalOptions}
			onChange={(val) => internalOnChange(val, onChange)}
			onChangeCb={(val) => internalOnChange(val as MosaicLabelValue[], fieldDef.onChangeCb)}
			onBlur={onBlur}
			style={fieldDef.style}
			className={fieldDef.className}
		/>
	);
};

export default memo(FormFieldCheckbox);
