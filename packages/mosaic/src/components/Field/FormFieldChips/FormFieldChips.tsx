import type { ReactElement } from "react";

import React from "react";
import { memo } from "react";

import type { MosaicFieldProps } from "@root/components/Field";
import type { ChipData, FormFieldChipsInputSettings } from "./FormFieldChipsTypes";

import useOptions from "@root/utils/hooks/useOptions/useOptions";
import Chip from "../../Chip";
import { StyledChipGroup } from "./FormFieldChips.styled";
import { FormFieldChipsSkeleton } from "./FormFieldChipsSkeleton";

const FormFieldChips = (props: MosaicFieldProps<"chip", FormFieldChipsInputSettings, ChipData>): ReactElement => {
	const {
		fieldDef,
		error,
		onChange,
		onBlur,
		value,
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

	if (skeleton || loading) {
		return <FormFieldChipsSkeleton />;
	}

	return (
		<StyledChipGroup
			$error={Boolean(error)}
			onBlur={onBlur}
			role="listbox"
		>
			{options.map((option) => (
				<Chip
					key={option.value}
					label={option.label}
					disabled={disabled}
					selected={value && value.value === option.value}
					onClick={async () => onChange(option)}
					role="option"
				/>
			))}
		</StyledChipGroup>
	);
};

export default memo(FormFieldChips);
