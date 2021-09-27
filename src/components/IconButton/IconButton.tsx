import * as React from 'react';
import { ReactElement } from 'react';

// Types and styles
import { IconButtonProps } from './IconButtonTypes';
import { StyledIconButton } from './IconButton.styled';
import Tooltip from '@material-ui/core/Tooltip';

const IconButton = (props: IconButtonProps): ReactElement => {
	const { disabled = false, icon, tooltipLabel, onClick } = props;

	const MaterialIcon = icon;

	return tooltipLabel && !disabled ? (
		<Tooltip title={tooltipLabel}>
			<StyledIconButton disabled={disabled} disableRipple onClick={onClick}>
				<MaterialIcon data-testid='icon-button-test'></MaterialIcon>
			</StyledIconButton>
		</Tooltip>
	) : (
		<StyledIconButton disabled={disabled} disableRipple onClick={onClick}>
			<MaterialIcon></MaterialIcon>
		</StyledIconButton>
	);
};

export default IconButton;
