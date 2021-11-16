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
		required = false,
		disabled = false,
		onChange,
		onBlur,
	} = props;

	return (
		<StyledFormControlLabel
			label={label}
			labelPlacement='end'
			disabled={disabled}
			control={
				<StyledSwitch
					onBlur={onBlur}
					checked={checked}
					onChange={(e) => onChange(e.target.checked)}
					required={required}
				/>
			}
		/>
	);
};

export default ToggleSwitch;
