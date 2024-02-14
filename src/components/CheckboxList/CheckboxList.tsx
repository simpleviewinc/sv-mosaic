import * as React from "react";
import { useMemo, useCallback, ReactElement, HTMLAttributes } from "react";
import xorBy from "lodash/xorBy";

import Checkbox from "@root/components/Checkbox";
import { useStateRef } from "@root/utils/reactTools";
import { CheckboxListProps } from "./CheckboxListTypes";
import FormGroup from "@mui/material/FormGroup";
import { MosaicLabelValue } from "@root/types";

const CheckboxList = (props: CheckboxListProps & HTMLAttributes<HTMLInputElement>): ReactElement => {
	const checkedRef = useStateRef(props.checked);

	const handleToggle = useCallback(
		(value: MosaicLabelValue | { [key: string]: unknown }) => () => {
			// toggle the item in the array
			const newChecked = xorBy(checkedRef.current, [value], (option) => option.value);
			props.onChange(newChecked);
			props?.onChangeCb && props.onChangeCb(newChecked);
		},
		[checkedRef, props.onChange, props.options],
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
						onClick={callbacks[i]}
						value={option.value}
					/>
				);
			})}
		</FormGroup>
	);
};
export default CheckboxList;
