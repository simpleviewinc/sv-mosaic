import styled from "styled-components";

// Material UI
import Radio from "@mui/material/Radio";

import theme from "@root/theme";

export const StyledRadioButton = styled(Radio)`
	padding: ${theme.spacing(2)};
	color: ${theme.color.black};

	svg {
		width: 18px;
		height: 18px;
	}

	&:hover {
		background-color: ${theme.color.translucent.grey[100]};
	}

	&.Mui-disabled {
		color: ${theme.color.gray[400]};
	}

	&.Mui-checked {
		color: ${theme.color.gold[500]};

		&.Mui-disabled {
			color: ${theme.color.gold[200]};
		}

		&:hover {
			background-color: ${theme.color.translucent.gold[100]};
		}
	}

	&.Mui-focusVisible {
		outline: 2px solid ${theme.color.gray[700]};
		outline-offset: -2px;
	}
`;

export const StyledRadioIcon = styled.span`
	width: 16px;
	height: 16px;
	border: 2px solid currentColor;
	border-radius: ${theme.rounded.full};
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const StyledRadioCheckedDot = styled.span`
	width: 8px;
	height: 8px;
	background-color: currentColor;
	border-radius: ${theme.rounded.full};
`;

export const StyledRequired = styled.span`
	display: inline-block;
	color: ${theme.color.red[600]};
	margin-left: ${theme.spacing(1)};
`;
