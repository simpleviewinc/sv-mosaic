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

	if (type !== 'advanced') {
		return (
			<StyledDefaultTooltip
				title={ text }
				PopperProps={{
					disablePortal: true,
				}}
				data-testid='tooltip-test-id'
			>
				{children}
			</StyledDefaultTooltip>
		);
	} else {
		return (
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
}

export default Tooltip;