import styled from "styled-components";
import theme from "@root/theme";
import Paper from "@mui/material/Paper";

export const StyledPaper = styled(Paper)`
	&.MuiPaper-root {
		background-color: white;
		border: 1px solid ${theme.newColors.grey2["100"]};
		max-width: 620px;
		border-radius: 5px;
		box-shadow: 0px 2px 6px ${theme.newColors.almostBlack["20"]};
	}
`;
// Reference:
// https://github.com/Patil2099/material-ui/blob/89d9e960cdba5a84a3416fdc0c76bafce1053053/docs/src/pages/components/popper/ScrollPlayground.js

export const PopperSx = {
	zIndex: 2000,
	"&[data-popper-placement*='bottom']": {
		"& .MuiPopper-arrow": {
			top: 0,
			left: 0,
			marginTop: "-0.9em",
			width: "3em",
			height: "1em",
			"&::before": {
				borderWidth: "0 1em 1em 1em",
				borderColor: `transparent transparent ${theme.colors.white} transparent`,
			},
		},
	},
	"&[data-popper-placement*='top']": {
		"& .MuiPopper-arrow": {
			bottom: 0,
			left: 0,
			marginBottom: "-0.9em",
			width: "3em",
			height: "1em",
			"&::before": {
				borderWidth: "1em 1em 0 1em",
				borderColor: `${theme.colors.white} transparent transparent transparent`,
			},
		},
	},
};

export const Arrow = styled.div`
	position: absolute;
	font-size: 7px;
	width: 3em;
	height: 3em;
	&:before {
		content: "";
		margin: auto;
		display: block;
		width: 0;
		height: 0;
		border-style: solid;
  }
`;

export const ContentWrapper = styled.div`
	font-family: ${theme.fontFamily};
	padding: 24px 32px;
`;

export const StyledHr = styled.hr`
	border-left: none;
	border-top: 1px solid ${theme.newColors.grey2["100"]};
	margin: 16px -32px;
`;
