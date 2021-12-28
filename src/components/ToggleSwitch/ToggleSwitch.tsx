import * as React from 'react';
import { ReactElement, HTMLAttributes } from 'react';

// Types and styles
import { ToggleSwitchProps } from './ToggleSwitchTypes';
import { StyledSwitch } from './ToggleSwitch.styled';
import StyledFormControlLabel from '@root/components/StyledFormControlLabel';

const ToggleSwitch = (
	props: ToggleSwitchProps & HTMLAttributes<HTMLInputElement>
): ReactElement => {
	const {
		checked,
		label,
		labelPlacement = 'end',
		required = false,
		disabled = false,
		onChange,
	} = props;

	return (
		<StyledFormControlLabel
			label={label}
			labelPlacement={labelPlacement}
			disabled={disabled}
			control={
				<StyledSwitch
					checked={checked}
					onChange={onChange}
					required={required}
				/>
			}
		/>
	);
};

export default ToggleSwitch;
