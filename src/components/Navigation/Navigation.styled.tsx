import styled from "styled-components";
import theme from "../../theme";

export const SideNav = styled.nav`
  background: white;
  border: 2px solid ${theme.colors.gray200};
  display: flex;
  flex-direction: column;
  width: 200px;
  max-height: 500px;
  overflow-y: auto;
`;

export const LinkWrapper = styled.div`
  align-items: center;
  display: flex;  
	background-color: ${(pr) =>
		pr.idx === pr.selectedLink ? theme.colors.gray200 : ""};
  border-left: ${(pr) =>
		pr.idx === pr.selectedLink ? "4px solid #FCB731" : "4px solid transparent"};
	height: 49px;
	padding-left: 24px;

  span {
    font-weight: ${(pr) =>
		pr.idx === pr.selectedLink ? theme.fontWeight.semiBold : ""};
  }

	&:hover {
		.MuiSvgIcon-root:not(:first-child) {
			display: block;
			color: ${theme.colors.gray600}
		margin-right: 12px;
		margin-left: auto;
		width: 16px;
		}
	}

	.MuiSvgIcon-root:first-child {
		color: ${theme.colors.almostBlack}
		margin-right: 12px;
		width: 16px;
	}

	.MuiSvgIcon-root:not(:first-child) {
		display: none
	}

  &:hover {
    background-color: ${theme.colors.gray100};
  }
`;

export const SidebarWrap = styled.div`
  font-family: ${theme.fontFamily};
	div:last-child {
		border-bottom: 0;
	}
`;

export const StyledLink = styled.span`
  color: ${theme.colors.almostBlack};
  font-size: 14px;
`;

export const SectionWrapper = styled.div`
	border-bottom: 2px solid ${theme.colors.gray200};
`;
