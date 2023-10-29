import styled from "styled-components";
import theme from "../../theme";
import { MosaicCSSContainer } from "@root/types"
import { containerQuery } from "@root/utils/css";

export const StyledSideNav = styled.nav<{$collapse?: MosaicCSSContainer}>`
	${({$collapse}) => $collapse ? `
		border-bottom: 2px solid ${theme.newColors.grey2["100"]};
		padding: 0 24px;

		${containerQuery($collapse.minWidth, $collapse.name)}  {
			border-bottom: 0;
			border-right: 2px solid ${theme.newColors.grey2["100"]};
			width: 196px;
			min-width: 196px;
			padding: 0;
			overflow: auto;
		}
	` : `
		border-right: 2px solid ${theme.newColors.grey2["100"]};
		width: 196px;
		min-width: 196px;
		overflow: auto;
	`}
`;

export const LinksWrapper = styled.div<{$collapse?: MosaicCSSContainer}>`
	display: flex;

	${({$collapse}) => $collapse ? `
		gap: 40px;

		${containerQuery("xl", "FORM")} {
			flex-direction: column;
			gap: 0;
		}
	` : `
		flex-direction: column;
	`}
`;

export const LinkWrapper = styled.a<{$isActive?: boolean, $collapse?: MosaicCSSContainer}>`
	cursor: pointer;
	padding-bottom: 16px;
	display: flex;
	align-items: center;
	gap: 8px;

	${({$isActive}) => $isActive && `
		font-weight: ${theme.fontWeight.semiBold};
	`}

	${({$collapse}) => !$collapse ? `
		border-left: 3px solid transparent;
		padding: 12px 20px;
	` : `
		border-bottom: 4px solid transparent;
	`};

	${({$collapse, $isActive}) => $collapse && $isActive && `
		border-bottom-color: ${theme.newColors.simplyGold["100"]};
	`};

	${({$collapse, $isActive}) => !$collapse && $isActive && `
		background-color: ${theme.newColors.grey2["100"]};
		border-left-color: ${theme.newColors.simplyGold["100"]};
	`};

	${({$collapse}) => $collapse && `
		${containerQuery("xl", "FORM")} {
			align-items: center;
			border-bottom: 0;
			border-left: 3px solid transparent;
			display: flex;
			padding: 12px 20px;
		}
	`}

	${({$collapse, $isActive}) => $collapse && $isActive && `
		${containerQuery("xl", "FORM")} {
			background-color: ${theme.newColors.grey2["100"]};
			border-left-color: ${theme.newColors.simplyGold["100"]};
		}
	`}

	.MuiSvgIcon-root:first-child {
		color: ${theme.newColors.almostBlack["100"]};
		width: 16px;
		margin: -2px 0;
	}

	&:hover {
		.MuiSvgIcon-root:not(:first-child) {
			display: block;
			color: ${theme.newColors.grey3["100"]};
			margin-right: -12px;
			margin-left: auto;
			width: 16px;
		}
	}

	.MuiSvgIcon-root:not(:first-child) {
		display: none;
	}
`;

export const SidebarWrap = styled.div`
  	font-family: ${theme.fontFamily};
	div:last-child {
		border-bottom: 0;
	};
`;

export const StyledLink = styled.span`
	color: ${theme.newColors.almostBlack["100"]};
	font-size: 14px;
	width: auto;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	height: 20px;
`;

export const Badge = styled.span`
	color: ${theme.newColors.grey4["100"]};
	font-size: 10px;
	font-weight: ${theme.fontWeight.semiBold};
`;

export const BadgeWrapper = styled.div`
	align-items: center;
	background-color: ${theme.newColors.simplyGold["100"]};
	border-radius: 20px;
	display: flex;
	height: 20px;
	justify-content: center;
	min-width: 20px;
`;
