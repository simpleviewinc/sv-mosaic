import type { ReactElement, HTMLAttributes } from "react";

import * as React from "react";
import { useId, useMemo, useCallback } from "react";
import xorBy from "lodash/xorBy";

import type { CheckboxListProps } from "./CheckboxListTypes";
import type { MosaicLabelValue } from "@root/types";

import Checkbox from "@root/components/Checkbox";
import FormGroup from "@mui/material/FormGroup";

const CheckboxList = (props: CheckboxListProps & Omit<HTMLAttributes<HTMLInputElement>, "onChange">): ReactElement => {
	const fallbackId = useId();
	const id = props.id || fallbackId;

	const handleToggle = useCallback(
		(value: MosaicLabelValue | Record<string, unknown>) => () => {
			// toggle the item in the array
			const newChecked = xorBy(props.checked, [value], (option) => option.value);
			props.onChange(newChecked);
			props?.onChangeCb && props.onChangeCb(newChecked);
		},
		[props.checked, props.onChange, props.options],
	);

	const callbacks = useMemo(() => {
		return props?.options?.map((option) => handleToggle(option));
	}, [props.options, handleToggle]);

	return (
		<FormGroup className={`${props.className ?? ""} listItem`} onBlur={props.onBlur} style={props.style}>
			{props?.options?.map((option, i) => {
				const checked = props?.checked?.length > 0 ? props.checked?.filter(checkedOption => checkedOption.value === option.value).length > 0 : false;

				return (
					<Checkbox
						className={checked ? "checked" : ""}
						checked={checked}
						label={option.label}
						disabled={props.disabled}
						key={`${option.value}-${i}`}
						id={`${id}-${i}`}
						onClick={callbacks[i]}
						value={option.value}
					/>
				);
			})}
		</FormGroup>
	);
};
export default CheckboxList;
