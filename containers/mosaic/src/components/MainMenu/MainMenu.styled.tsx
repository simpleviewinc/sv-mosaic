import theme from "@root/theme";
import styled from "styled-components";
import { Column, Row } from "../common";
import ChevronRight from "@mui/icons-material/ChevronRight";
import Button from "../Button";

export const StyledMainMenu = styled.nav<{
	$hidden?: boolean;
	$collapsed?: boolean;
	$zIndex?: number;
}>(({ $collapsed, $hidden, $zIndex }) => `
	--collapse-duration: 0.15s;
	--collapse-timing-fn: ease-in-out;
	--collapsed-width: 56px;
	--expanded-width: 200px;

	color: ${theme.color.gray[100]};
	height: 100%;
	line-height: ${theme.line.tight};
	position: relative;
	display: flex;
	transition-duration: var(--collapse-duration);
	transition-timing-function: var(--collapse-timing-fn);
	transition-property: margin-right;

	${$hidden ? "" : `
		margin-right: ${$collapsed ? "var(--collapsed-width)" : "var(--expanded-width)"};
	`}

	${$zIndex === undefined ? "" : `
		z-index: ${$zIndex};
	`}
`);

export const StyledBackdrop = styled.div`
	position: absolute;
	left: 0;
	top: 0;
	height: 100%;
	width: 100vw;
`;

export const StyledMenuFloat = styled.div<{ $hidden?: boolean }>`
	display: flex;
	height: 100%;

	${({ $hidden }) => $hidden ? "" : `
		position: absolute;
	`}
`;

export const StyledMainMenuBottom = styled.div`
	margin-top: auto;
	border-top: 1px solid ${theme.color.gray[800]};
`;

export const StyledMainMenuFlyout = styled.div`
	overflow: hidden;
	width: var(--expanded-width);
`;

export const StyledMainMenuPanel = styled(Column)<{
	$rootPanel?: boolean;
	$collapsed?: boolean;
}>(({ $rootPanel, $collapsed }) => `
	padding: ${theme.spacing(1, 0, 0)};
	background-color: ${$rootPanel ? theme.color.gray[925] : theme.color.gray[900]};
	overflow: hidden;
	transition-duration: var(--collapse-duration);
	transition-timing-function: var(--collapse-timing-fn);
	transition-property: width;
	height: 100%;

	${!$rootPanel ? "" : $collapsed ? `
		width: var(--collapsed-width);
	` : `
		width: var(--expanded-width);
	`}
`);

export const StyledGroupHeader = styled(Row).attrs({ $align: "center" })<{ $collapsed?: boolean }>`
	color: ${theme.color.gray[500]};
	padding: ${({ $collapsed }) => $collapsed ? theme.spacing(0, 4) : theme.spacing(0, 3, 0, 6)};
	font-size: ${theme.fontSize.body.lg};
	height: 40px;
	flex: none;
	transition-duration: var(--collapse-duration);
	transition-timing-function: var(--collapse-timing-fn);
	transition-property: padding-left;
`;

export const StyledPanelHeaderIcon = styled(Button)`
	&& {
		button {
			padding: ${theme.spacing(1)};
			height: ${theme.spacing(5)};
			width: ${theme.spacing(5)};
			color: ${theme.color.gray[100]};

			&:hover {
				background-color: ${theme.color.gray[925]};
			}

			&:focus-visible {
				outline-color: ${theme.color.gray[100]};
			}
		}

		svg {
			font-size: 16px;
			line-height: 16px;
		}
	}
`;

export const StyledPanelBack = styled(StyledPanelHeaderIcon)`
	margin-left: ${theme.spacing(-1)};
	margin-right: ${theme.spacing(2)};
`;

export const StyledPanelClose = styled(StyledPanelHeaderIcon)`
	margin-left: auto;
`;

export const StyledList = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	overflow: auto;
	width: 200px;
`;

export const StyledLabel = styled.div<{ $invisible?: boolean }>`
	margin-right: ${theme.spacing(1)};
	white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
	transition-duration: var(--collapse-duration);
	transition-timing-function: var(--collapse-timing-fn);
	transition-property: opacity;

	${({ $invisible }) => !$invisible ? "" : `
		opacity: 0;
	`}
`;

export const StyledListItem = styled(Row).attrs({ as: "li", $justify: "stretch" })``;

export const StyledListItemButton = styled.button<{
	$isActive?: boolean;
	$rootPanel?: boolean;
	$collapsed?: boolean;
}>(({ $isActive, $rootPanel, $collapsed }) => `
	all: unset;
	box-sizing: border-box;
	padding: ${$collapsed ? theme.spacing(0, 4) : theme.spacing(0, 3, 0, 6)};
	display: flex;
	height: 40px;
	align-items: center;
	cursor: pointer;
	width: 100%;
	transition-duration: var(--collapse-duration);
	transition-timing-function: var(--collapse-timing-fn);
	transition-property: padding-left;

	${!$isActive ? "" : `
		background-color: ${$rootPanel ? theme.color.gray[950] : theme.color.gray[925]};
		box-shadow: 0 0 20px rgba(0, 0, 0, ${$rootPanel ? "0.25" : "0.19"}) inset;
	`}

	&:hover {
		background-color: ${$rootPanel ? theme.color.gray[950] : theme.color.gray[925]};
	}

	&:focus-visible {
		outline: 2px solid ${$isActive ? theme.color.gold[600] : theme.color.white};
		outline-offset: -6px;
	}
`);

export const StyledIcon = styled.div<{
	$isActive?: boolean;
	$isPlaceholder?: boolean;
	$collapsed?: boolean;
}>`
	margin-right: ${theme.spacing(2)};
	font-size: ${theme.fontSize.icon.md};
	transition-duration: var(--collapse-duration);
	transition-timing-function: var(--collapse-timing-fn);
	transition-property: opacity;

	${({ $isActive }) => !$isActive ? "" : `
		color: ${theme.color.gold[600]};
	`}

	${({ $collapsed }) => !$collapsed ? "" : `
		width: var(--collapsed-width);
		margin: ${theme.spacing(0, -3, 0, -4)};
		padding: ${theme.spacing("9px", 4)};
	`}

	${({ $isPlaceholder, $collapsed }) => !$isPlaceholder ? "" : `
		position: absolute;
		opacity: ${$collapsed ? "1" : "0"};
		z-index: 1;
	`}
`;

export const StyledExpand = styled(ChevronRight)`
	color: ${theme.color.gray[600]};
	margin-left: auto;
	font-size: ${theme.fontSize.icon.md};
`;
