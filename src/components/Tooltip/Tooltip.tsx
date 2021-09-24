import * as React from 'react';
import { ReactElement } from 'react';
import { TooltipProps } from '.';
import { StyledAdvancedTooltip, StyledDefaultTooltip } from './Tooltip.styled';

const Tooltip = (props: TooltipProps): ReactElement => {
	const {
		text,
		children,
		description,
	} = props;

	if(!description) {
		return(
			<StyledDefaultTooltip
				title={ text }
			>
				{children}
			</StyledDefaultTooltip>
		);
	} else {
		return(
			<StyledAdvancedTooltip
				title={ description }
				arrow
				placement={'top-start'}
				PopperProps={{
					disablePortal: true,
				}}
			>
				{children}
			</StyledAdvancedTooltip>
		);
	}
}

export default Tooltip;