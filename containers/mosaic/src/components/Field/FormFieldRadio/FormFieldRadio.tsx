import type { ReactElement } from "react";

import React from "react";
import { memo } from "react";

import type { MosaicFieldProps } from "@root/components/Field";
import type { RadioInputSettings, RadioData } from "./FormFieldRadioTypes";
import type { MosaicLabelValue } from "@root/types";

import useMountWarning from "@root/utils/hooks/useMountWarning/useMountWarning";
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
			getOptions: optionsAsync,
			options: providedOptions = optionsAsync,
		} = {},
	} = fieldDef;

	useMountWarning(
		`The \`getOptions\` input setting (provided to the \`${fieldDef.name}\` field) is deprecated and will be removed in future versions. Use the \`options\` input setting instead.`,
		Boolean(optionsAsync),
	);

	const { options, loading } = useOptions({
		from: providedOptions,
		add: value ? [value] : undefined,
	});

	const _onChange = (value: string) => {
		const option: MosaicLabelValue = options.find(option => option.value === value);

		if (!option) {
			return;
		}

		onChange(option);
	};

	if (skeleton || loading) {
		return <FormFieldRadioSkeleton />;
	}

	return (
		<StyledRadioGroup
			onChange={({ target: { value } }) => _onChange(value)}
			value={value ? value.value : ""}
			onBlur={(e) => onBlur && onBlur((e.target as HTMLInputElement).value)}
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
