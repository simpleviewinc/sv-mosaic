import type { ReactElement } from "react";

import React from "react";
import { memo } from "react";

import type { MosaicFieldProps } from "@root/components/Field";
import type { RadioInputSettings, RadioData } from "./FormFieldRadioTypes";
import type { MosaicLabelValue } from "@root/types";

import useOptions from "@root/utils/hooks/useOptions/useOptions";
import RadioButton from "@root/components/RadioButton";
import { StyledRadioGroup } from "./FormFieldRadio.styled";
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

	const {
		inputSettings: {
			options: providedOptions,
		} = {},
	} = fieldDef;

	const { options, loading } = useOptions({
		from: providedOptions,
		add: value ? [value] : undefined,
	});

	const _onChange = (value: string) => {
		const option: MosaicLabelValue = options.find(option => option.value === value);
		onChange(option);
	};

	if (skeleton || loading) {
		return <FormFieldRadioSkeleton />;
	}

	return (
		<StyledRadioGroup
			onChange={({ target: { value } }) => _onChange(value)}
			value={value ? value.value : ""}
			onBlur={onBlur}
		>
			{options.map(option => (
				<RadioButton
					disabled={disabled}
					key={option.label}
					label={option.label}
					value={option.value}
				/>
			))}
		</StyledRadioGroup>
	);
};

export default memo(FormFieldRadio);
