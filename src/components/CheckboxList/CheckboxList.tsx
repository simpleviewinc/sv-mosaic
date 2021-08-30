import * as React from 'react';
import { useMemo, useCallback, ReactElement } from 'react';
import { xor } from 'lodash';

import Checkbox from '@root/components/Checkbox';
import { useStateRef } from '@root/utils/reactTools';
import { CheckboxListProps } from './CheckboxListTypes';
import FormGroup from '@material-ui/core/FormGroup';

function CheckboxList(props: CheckboxListProps): ReactElement {
	const checkedRef = useStateRef(props.checked);

	const handleToggle = useCallback(
		(value: string) => () => {
			// toggle the item in the array
			const newChecked = xor(checkedRef.current, [value]);
			props.onChange(newChecked);
		},
		[checkedRef, props.onChange]
	);

	const callbacks = useMemo(() => {
		return props.options.map((option) => handleToggle(option.value));
	}, [props.options, handleToggle]);

	return (
		<FormGroup className={`${props.className} listItem`}>
			{props.options.map((option, i) => {
				const checked = props.checked.indexOf(option.value) !== -1;

				return (
					<Checkbox
						className={checked ? 'checked' : ''}
						checked={checked}
						label={option.label}
						disabled={props.disabled}
						key={option.value}
						onClick={callbacks[i]}
					/>
				);
			})}
		</FormGroup>
	);
}
export default CheckboxList;
