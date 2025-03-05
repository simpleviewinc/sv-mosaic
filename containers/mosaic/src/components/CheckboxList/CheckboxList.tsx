import type { ReactElement, HTMLAttributes, ChangeEventHandler } from "react";

import React, { useMemo } from "react";
import { useId, useCallback } from "react";
import toggle from "@root/utils/array/toggle";

import type { CheckboxListProps } from "./CheckboxListTypes";

import Checkbox from "@root/components/Checkbox";
import { arrayChunks } from "@root/utils/array";
import { StyledFormGroup, StyledGrid } from "./CheckboxList.styled";

const CheckboxList = (props: CheckboxListProps & Omit<HTMLAttributes<HTMLInputElement>, "onChange">): ReactElement => {
	const fallbackId = useId();
	const {
		className,
		checked,
		disabled,
		id = fallbackId,
		onBlur,
		onChange,
		options,
		style,
		itemsPerColumn = 8,
	} = props;

	const handleToggle = useCallback<ChangeEventHandler<HTMLInputElement>>(({ target }) => {
		const { value } = target;
		const option = options.find((option) => option.value === value);

		if (!option) {
			return;
		}

		const newChecked = toggle(checked || [], [option], (option) => option.value);
		onChange(newChecked);
	}, [checked, onChange, options]);

	const columns = useMemo<CheckboxListProps["options"][]>(() => {
		if (options.length > itemsPerColumn * 2) {
			return arrayChunks(options, 3);
		}

		if (options.length > itemsPerColumn) {
			return arrayChunks(options, 2);
		}

		return [options];
	}, [itemsPerColumn, options]);

	return (
		<StyledFormGroup
			className={`${className ?? ""} listItem`}
			onBlur={onBlur}
			style={style}
		>
			<StyledGrid>
				{columns.map((options, index) => (
					<div key={index}>
						{(options || []).map(({ value, label }, i) => (
							<div key={value}>
								<Checkbox
									checked={(checked || []).some((option) => option.value === value)}
									label={label}
									disabled={disabled}
									id={`${id}-${i}`}
									onChange={handleToggle}
									value={value}
								/>
							</div>
						))}
					</div>
				))}
			</StyledGrid>
		</StyledFormGroup>
	);
};
export default CheckboxList;
