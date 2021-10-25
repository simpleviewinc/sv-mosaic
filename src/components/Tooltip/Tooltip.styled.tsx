import * as React from 'react';
import styled from 'styled-components';

// Material UI
import { Tooltip } from '@material-ui/core';

import theme from '@root/theme';

export const StyledDefaultTooltip = styled(props => (
	<Tooltip
		classes={{ popper: props.className, tooltip: "tooltip" }}
		{...props}
	/>
))`
	& .tooltip {
		background-color: ${theme.colors.almostBlack};
		color: white;
		padding: 4px 8px;
		margin-top: 4px;
		font-size: 12px; 
	}
`;

export const StyledAdvancedTooltip = styled(props => (
	<Tooltip
		classes={{ popper: props.className, tooltip: "tooltip", arrow: 'arrow' }}
		{...props}
	/>
))`
	& .tooltip {
		background-color: white;
		color: ${theme.colors.gray600};
		padding: 12px;
		margin-bottom: 8px;
		font-size: 12px;
		max-width: 280px;
		box-shadow: 0px 2px 6px #00000029;
		border: 1px solid ${theme.colors.gray200};
		left: ${pr => pr.placement !== 'top' ? '-30px !important' : ''};
	}

	& .arrow {
		color: white;
		left: ${pr => pr.placement !== 'top' ? '32px !important' : ''};
	}
`;
