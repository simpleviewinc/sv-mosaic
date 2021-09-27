
import * as React from 'react';
import styled from 'styled-components';

// Material UI
import { Tooltip } from '@material-ui/core';

import theme from '../../utils/theme.js';

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
		padding: 0px;
		margin-bottom: 8px;
		font-size: 12px;
		max-width: 280px;
		max-height: 46px;
		box-shadow: 0px 2px 6px #00000029;
		border: 1px solid ${theme.colors.gray200};
		left: -30px !important;
		border: 12px solid transparent;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	& .arrow {
		color: white;
		left: 21px !important;
		bottom: -12px !important;
	}
`;