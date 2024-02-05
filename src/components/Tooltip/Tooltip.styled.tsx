import styled from "styled-components";
import theme from "@root/theme";
import Popper from "@mui/material/Popper";

export const TooltipPopper: any = styled(Popper)`
	z-index: 1500;
	background: ${theme.newColors.almostBlack["100"]};
	color: white;
	padding: 8px;
	border-radius: 4px;
	color: white;
	font-family: ${theme.fontFamily};
	font-size: 12px;
	max-width: 12rem;
	pointer-events: none;

	&[data-popper-placement="bottom-start"] .arrow,
	&[data-popper-placement="bottom"] .arrow,
	&[data-popper-placement="bottom-end"] .arrow {
		border-bottom-color: ${theme.newColors.almostBlack["100"]};
		border-top: 0;
		top: -5px;
	}

	&[data-popper-placement="top-start"] .arrow,
	&[data-popper-placement="top"] .arrow,
	&[data-popper-placement="top-end"] .arrow {
		border-top-color: ${theme.newColors.almostBlack["100"]};
		border-bottom: 0;
		bottom: -5px;
	}

	&[data-popper-placement="bottom-start"] .arrow,
	&[data-popper-placement="top-start"] .arrow{
		left: 5px;
	}

	&[data-popper-placement="bottom"] .arrow,
	&[data-popper-placement="top"] .arrow{
		left: 50%;
		transform: translateX(-50%);
	}

	&[data-popper-placement="bottom-end"] .arrow,
	&[data-popper-placement="top-end"] .arrow{
		right: 5px;
	}

	&[data-popper-placement="left-start"] .arrow,
	&[data-popper-placement="left"] .arrow,
	&[data-popper-placement="left-end"] .arrow {
		border-left-color: ${theme.newColors.almostBlack["100"]};
		border-right: 0;
		right: -5px;
	}

	&[data-popper-placement="right-start"] .arrow,
	&[data-popper-placement="right"] .arrow,
	&[data-popper-placement="right-end"] .arrow {
		border-right-color: ${theme.newColors.almostBlack["100"]};
		border-left: 0;
		left: -5px;
	}

	&[data-popper-placement="left-start"] .arrow,
	&[data-popper-placement="right-start"] .arrow{
		top: 5px;
	}

	&[data-popper-placement="left"] .arrow,
	&[data-popper-placement="right"] .arrow{
		top: 50%;
		transform: translateY(-50%);
	}

	&[data-popper-placement="left-end"] .arrow,
	&[data-popper-placement="right-end"] .arrow{
		bottom: 5px;
	}
`;

export const TooltipArrow = styled.div`
	border: 5px solid transparent;
	position: absolute;
`
