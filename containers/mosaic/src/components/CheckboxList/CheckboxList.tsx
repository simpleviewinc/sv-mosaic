import type { ReactElement, HTMLAttributes, ChangeEventHandler } from "react";

import React from "react";
import { useId, useCallback } from "react";
import toggle from "@root/utils/array/toggle";

import type { CheckboxListProps } from "./CheckboxListTypes";

import Checkbox from "@root/components/Checkbox";
import FormGroup from "@mui/material/FormGroup";

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

	return (
		<FormGroup className={`${className ?? ""} listItem`} onBlur={onBlur} style={style}>
			{(options || []).map(({ value, label }, i) => (
				<Checkbox
					checked={(checked || []).some((option) => option.value === value)}
					label={label}
					disabled={disabled}
					key={`${value}-${i}`}
					id={`${id}-${i}`}
					onChange={handleToggle}
					value={value}
				/>
			))}
		</FormGroup>
	);
};
export default CheckboxList;
