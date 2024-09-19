import * as React from "react";
import type { ReactElement } from "react";
import { memo, useEffect, useState } from "react";

// Types and styles
import type { MosaicFieldProps } from "@root/components/Field";
import type { FormFieldCheckboxInputSettings, CheckboxData } from "./FormFieldCheckboxTypes";
import { StyledCheckboxList } from "./FormFieldCheckbox.styled";
import type { MosaicLabelValue } from "@root/types";
import { FormFieldCheckboxSkeleton } from "./FormFieldCheckboxSkeleton";

const FormFieldCheckbox = (
	props: MosaicFieldProps<"checkbox", FormFieldCheckboxInputSettings, CheckboxData>,
): ReactElement => {
	const {
		fieldDef,
		onChange,
		onBlur,
		value,
		disabled,
		skeleton,
		id,
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

	if (skeleton) {
		return <FormFieldCheckboxSkeleton />;
	}

	return (
		<StyledCheckboxList
			disabled={disabled}
			checked={checked}
			options={internalOptions}
			onChange={(val) => internalOnChange(val as MosaicLabelValue[], onChange)}
			onChangeCb={(val) => internalOnChange(val as MosaicLabelValue[], fieldDef.onChangeCb)}
			onBlur={onBlur}
			style={fieldDef.style}
			className={fieldDef.className}
			id={id}
		/>
	);
};

export default memo(FormFieldCheckbox);
