import * as React from 'react';
import { ReactElement } from 'react';

// Components
import Tooltip from '@root/components/Tooltip';

// Types and styles
import { IconButtonProps } from './IconButtonTypes';
import { StyledIconButton } from './IconButton.styled';

const IconButton = (props: IconButtonProps): ReactElement => {
	const { disabled = false, icon, tooltipText, onClick } = props;

	const MaterialIcon = icon;

	return tooltipText && !disabled ? (
		<Tooltip text={tooltipText}>
			<StyledIconButton disabled={disabled} disableRipple onClick={onClick}>
				<MaterialIcon data-testid='icon-button-test' />
			</StyledIconButton>
		</Tooltip>
	) : (
		<StyledIconButton disabled={disabled} disableRipple onClick={onClick}>
			<MaterialIcon />
		</StyledIconButton>
	);
};

export default IconButton;
