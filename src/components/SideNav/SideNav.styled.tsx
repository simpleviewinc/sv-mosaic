import styled from "styled-components";
import theme from "../../theme";

export const SideNavStyle = styled.nav`
	background: white;
	border-right: 2px solid ${theme.newColors.grey2["100"]};
	display: flex;
	flex-direction: column;
	width: 196px;
	min-width: 196px;
	height: 100%;
	overflow-y: auto;
`;

export const LinkWrapper = styled.a`
	align-items: center;
	display: flex;
	gap: 8px;
	background-color: ${(pr) =>
		pr.idx === pr.selectedLink ? theme.newColors.grey2["100"] : ""};
		border-left: ${(pr) =>
		pr.idx === pr.selectedLink ? `4px solid ${theme.newColors.simplyGold["100"]}` : "4px solid transparent"};
	padding: 12px 20px;
	text-decoration: none;

	span {
		font-weight: ${(pr) =>
		pr.idx === pr.selectedLink ? theme.fontWeight.semiBold : ""};
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

	.MuiSvgIcon-root:first-child {
		color: ${theme.newColors.almostBlack["100"]};
		width: 16px;
	}

	.MuiSvgIcon-root:not(:first-child) {
		display: none;
	}

	&:hover {
		background-color: ${theme.newColors.grey2["100"]};
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

export const SectionWrapper = styled.div`
	border-bottom: 2px solid ${theme.newColors.grey2["100"]};
	cursor: pointer;
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
