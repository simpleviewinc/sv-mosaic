import * as React from "react";
import { useMemo, useCallback, ReactElement, HTMLAttributes } from "react";
import { xor } from "lodash";

import Checkbox from "@root/components/Checkbox";
import { useStateRef } from "@root/utils/reactTools";
import { CheckboxListProps } from "./CheckboxListTypes";
import FormGroup from "@material-ui/core/FormGroup";

const CheckboxList = (props: CheckboxListProps & HTMLAttributes<HTMLInputElement>): ReactElement => {
	const checkedRef = useStateRef(props.checked);

	const handleToggle = useCallback(
		(value: string | { [key: string]: unknown; }) => () => {
			// toggle the item in the array
			const newChecked = xor(checkedRef.current, [value]);
			// TODO: Review with Owen
			//props.onChange(newChecked.length > 0 ? newChecked : undefined);
			props.onChange(newChecked);
		},
		[checkedRef, props.onChange]
	);

	const callbacks = useMemo(() => {
		return props?.options?.map((option) => handleToggle(option.value));
	}, [props.options, handleToggle]);

	return (
		<FormGroup className={`${props.className} listItem`} onBlur={props.onBlur} style={props.style}>
			{props?.options?.map((option, i) => {
				const checked = props?.checked?.length > 0 ? props.checked?.filter(o => o === option.value).length > 0 : false;

				return (
					<Checkbox
						className={checked ? "checked" : ""}
						checked={checked}
						label={option.label}
						disabled={props.disabled}
						key={`${option.value}-${i}`}
						onClick={callbacks[i]}
					/>
				);
			})}
		</FormGroup>
	);
}
export default CheckboxList;
