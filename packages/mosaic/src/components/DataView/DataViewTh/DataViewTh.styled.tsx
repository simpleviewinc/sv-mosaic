import theme from "@root/theme";
import styled from "styled-components";

export const StyledTh = styled.th`
	background-color: ${theme.color.gray[100]};
	color: ${theme.color.gray[800]};
	font-weight: ${theme.weight.medium};
	border: 0;
	border-bottom: 1px solid ${theme.color.gray[300]};
	height: 40px;
	padding: 8px;
	position: sticky;
	text-align: left;
	top: 0;
	white-space: nowrap;
	z-index: 2;

	${/* Borders on sticky elements don't carry through, so we put them on the :after element */""}
	&:after {
		content: "";
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		pointer-events: none;
	}

	& > .columnHeader {
		display: inline-flex;
		align-items: center;
		gap: ${theme.spacing(2)};
	}

	&.sortable > .columnHeader {
		cursor: pointer;
	}

	& > .columnHeader > .icon {
		visibility: hidden;
		font-size: ${theme.fontSize.icon.sm};
	}

	&.active > .columnHeader > .icon {
		visibility: visible;
	}

	&.active > .columnHeader:hover > .icon {
		color: black;
	}

	& > .columnHeader:hover > .icon {
		visibility: visible;
	}

	&.bulk {
		width: 52px;
	}
`;
