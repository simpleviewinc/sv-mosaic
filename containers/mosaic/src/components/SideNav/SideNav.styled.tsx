import styled from "styled-components";
import theme from "../../theme";
import type { MosaicCSSContainer } from "@root/types";
import { containerQuery } from "@root/utils/css";
import Button from "../Button";

export const StyledSideNav = styled.nav<{ $collapse?: MosaicCSSContainer }>`
	font-weight: ${theme.weight.medium};

	${({ $collapse }) => $collapse ? `
		border-bottom: 1px solid ${theme.color.gray[300]};
		padding: ${theme.spacing(0, 6)};

		${containerQuery($collapse.minWidth, $collapse.name)}  {
			border-bottom: 0;
			border-right: 1px solid ${theme.color.gray[300]};
			width: 200px;
			padding: 0;
			overflow: auto;
			flex: none;
		}
	` : `
		border-right: 1px solid ${theme.color.gray[300]};
		width: 200px;
		overflow: auto;
		flex: none;
	`}
`;

export const StyledSidenavGroup = styled.ul<{ $collapse?: MosaicCSSContainer }>`
	list-style: none;
	margin: 0;
	padding: 0;
	border-bottom: 1px solid ${theme.color.gray[300]};
	display: flex;

	&:last-child{
		border-bottom: 0;
	}

	${({ $collapse }) => $collapse ? `
		gap: ${theme.spacing(2)};
		border-bottom: 0;

		${containerQuery($collapse.minWidth, $collapse.name)} {
			flex-direction: column;
			gap: 0;
		}
	` : `
		flex-direction: column;
	`}
`;

export const StyledSideNavItem = styled.li`
	position: relative;
	display: flex;
	align-items: center;
`;

export const StyledSidenavItemButton = styled.button<{
	$isActive?: boolean;
	$collapse?: MosaicCSSContainer;
}>(({ $collapse, $isActive }) => `
	all: unset;
	color: inherit;
	cursor: pointer;
	padding: ${theme.spacing(1, 2, 2)};
	display: flex;
	align-items: center;
	gap: ${theme.spacing(2)};
	text-decoration: none;
	flex: 1;

	&:hover {
		background-color: ${theme.color.gray[50]};
	}

	${$isActive ? `
		&:focus-visible {
			outline: 4px solid ${theme.color.gold[400]};
			outline-offset: -4px;
		}
	` : `
		&:focus-visible {
			outline: 2px solid ${theme.color.black};
			outline-offset: -6px;
		}
	`}

	${!$collapse ? `
		border-left: 4px solid transparent;
		padding: ${theme.spacing(0, 4)};
		height: 44px;
	` : `
		border-bottom: 4px solid transparent;
	`};

	${$collapse && $isActive && `
		border-bottom-color: ${theme.color.gold[400]};
	`};

	${!$collapse && $isActive && `
		background-color: ${theme.color.gray[50]};
		border-left-color: ${theme.color.gold[400]};
		box-shadow:
			0 0 6px 0 rgba(0, 0, 0, 0.04) inset,
			0 -1px 0 0 rgba(0, 0, 0, 0.02) inset;

		&:hover {
			background-color: ${theme.color.gray[100]};
		}
	`};

	${$collapse && `
		${containerQuery($collapse.minWidth, $collapse.name)} {
			align-items: center;
			border-bottom: 0;
			border-left: 4px solid transparent;
			display: flex;
			padding: ${theme.spacing(0, 4)};
			height: 44px;
		}
	`}

	${$collapse && $isActive && `
		${containerQuery($collapse.minWidth, $collapse.name)} {
			background-color: ${theme.color.gray[50]};
			border-left-color: ${theme.color.gold[400]};
			box-shadow:
				0 0 6px 0 rgba(0, 0, 0, 0.04) inset,
				0 -1px 0 0 rgba(0, 0, 0, 0.02) inset;

			&:hover {
				background-color: ${theme.color.gray[100]};
			}
		}
	`}

	.MuiSvgIcon-root:first-child {
		font-size: ${theme.fontSize.icon.sm};
	}
`);

export const StyledLink = styled.span`
	width: auto;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;

export const StyledActionButton = styled(Button)`
	position: absolute;
	right: 0;
	margin: ${theme.spacing(0, 1)};
`;
