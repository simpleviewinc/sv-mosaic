import * as React from 'react';
import { ReactElement } from 'react';
import { TooltipProps } from '.';
import { StyledAdvancedTooltip, StyledDefaultTooltip } from './Tooltip.styled';

const Tooltip = (props: TooltipProps): ReactElement => {
	const {
		text,
		children,
		type,
	} = props;

	return type !== 'advanced' ? (
		<StyledDefaultTooltip
			title={ text }
			PopperProps={{
				disablePortal: true,
			}}
			data-testid='tooltip-test-id'
		>
			{children}
		</StyledDefaultTooltip>
	) : (
		<StyledAdvancedTooltip
			title={ text }
			arrow
			placement={'top-start'}
			PopperProps={{
				disablePortal: true,
			}}
			data-testid='tooltip-test-id'
		>
			{children}
		</StyledAdvancedTooltip>
	);
}

export default Tooltip;