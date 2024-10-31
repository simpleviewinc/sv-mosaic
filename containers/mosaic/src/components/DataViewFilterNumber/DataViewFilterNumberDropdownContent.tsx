import type { ReactElement } from "react";

import React, { useCallback, useMemo } from "react";

import type { SectionDef } from "@root/components/Form";
import type { FieldDef } from "@root/components/Field";
import type { DataViewFilterNumberDropdownContentProps } from "./DataViewFilterNumberTypes";

import { BREAKPOINTS } from "@root/theme/theme";
import DataViewFilterDropdownButtons from "@root/components/DataViewFilterDropdownButtons";
import Form, { useForm } from "@root/components/Form";
import { StyledMainContent } from "./DataViewFilterNumber.styled";
import { VALIDATE_NUMBER_RANGE } from "@root/utils/form/validators";
import testIds from "@root/utils/testIds";

const sections: SectionDef[] = [
	{
		fields: [[["min"], ["max"]]],
		gridMinWidth: BREAKPOINTS.sm,
	},
];

export default function DataViewFilterNumberDropdownContent({
	args,
	data: {
		min: initialMin,
		max: initialMax,
	} = {},
	onChange,
	onClose,
}: DataViewFilterNumberDropdownContentProps): ReactElement {
	const controller = useForm();
	const {
		state: {
			data: {
				min,
				max,
			},
			errors,
		},
		methods: {
			setFormValues,
		},
	} = controller;

	const getFormValues = useCallback(async () => {
		return {
			min: initialMin,
			max: initialMax,
		};
	}, [initialMin, initialMax]);

	const onClear = useCallback(() => {
		setFormValues({
			values: {
				min : undefined,
				max : undefined,
			},
		});
	}, [setFormValues]);

	const onApply = useCallback(() => {
		if (!min && !max) {
			onChange(undefined);
		} else {
			onChange({ min, max });
		}

		onClose();
	}, [max, min, onChange, onClose]);

	const fields = useMemo<FieldDef[]>(() => [
		{
			name: "min",
			type: "number",
			label: "Minimum",
			size: "full",
			inputSettings: args,
			validators: [
				{ fn: VALIDATE_NUMBER_RANGE, options: { maxName: "max" } },
			],
			validates: ["max"],
		},
		{
			name: "max",
			type: "number",
			label: "Maximum",
			size: "full",
			inputSettings: args,
			validators: [
				{ fn: VALIDATE_NUMBER_RANGE, options: { minName: "min" } },
			],
			validates: ["min"],
		},
	], [args]);

	const disableApply = Object.values(errors).filter(Boolean).length > 0;

	return (
		<StyledMainContent data-testid={testIds.DATA_VIEW_FILTER_NUMBER_CONTENT}>
			<Form
				{...controller}
				fields={fields}
				sections={sections}
				fullHeight={false}
				spacing="compact"
				getFormValues={getFormValues}
			/>
			<DataViewFilterDropdownButtons
				onApply={onApply}
				onClear={onClear}
				disableApply={disableApply}
			/>
		</StyledMainContent>
	);
}
