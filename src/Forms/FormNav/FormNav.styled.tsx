import styled from "styled-components";

// Utils
import theme from "@root/theme";

export const NavItems = styled.div`
  display: flex;
  overflow: hidden;
  scroll-behavior: smooth;
  width: 100%;
  white-space: nowrap;

  @media (min-width: 1718px) {
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow-y: scroll;
  }
`;

export const LinksWrapper = styled.div`
  margin-right: 40px;

  a {
    border-bottom: ${(pr) =>
		pr.idx === pr.selectedTabIdx ? "4px solid #FCB731" : ""};
    color: ${(pr) =>
		pr.idx === pr.selectedTabIdx
			? theme.colors.almostBlack
			: theme.colors.gray600};
    display: inline-block;
    font-family: ${theme.fontFamily};
    font-size: 14px;
    font-weight: ${(pr) =>
		pr.idx === pr.selectedTabIdx ? theme.fontWeight.medium : ""};
    text-align: center;
    text-decoration: none;
    padding-bottom: 12px;
  }

  @media (min-width: 1718px) {
    background-color: ${(pr) =>
		pr.idx === pr.selectedTabIdx ? theme.colors.gray200 : ""};
    margin-right: 0;

    a {
      border-bottom: 0px;
      border-left: ${(pr) =>
		pr.idx === pr.selectedTabIdx
			? "4px solid #FCB731"
			: "4px solid transparent"};
      padding: 16px 0 16px 24px;
    }
  }
`;

export const Section = styled.div`
  height: 100vh;
  padding-top: 130px;

  @media (max-width: 1075px){
    padding-top: 210px;
  }
`;

export const MainLayout = styled.div`
  display: flex;

  @media (max-width: 1718px) {
    flex-direction: column;
  }
`;

export const FormNavRow = styled.div`
  align-items: center;
  display: flex;
  overflow: hidden;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    bottom: 0px;
    pointer-events: none;
    background-image: linear-gradient(to right, #ffffff00 -10%, #ffffff 100%);
    width: 70px;
  }

  ${(pr) =>
		pr.scrollX !== 0 &&
    `
      &:before {
        content: '';
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;
        bottom: 0px;
        pointer-events: none;
        background-image: linear-gradient(to left, #ffffff00 -10%, #ffffff 100%);
        width: 70px;
      }
    `}

  svg {
    position: relative;
    z-index: 2;
  }

  @media (min-width: 1718px) {
    &:after {
      content: none;
    }

    svg {
      display: none;
    }

	height: 100%;
  }
`;

export const FormNavWrapper = styled.div`
  background: white;
  overflow: hidden;
  position: sticky;
  position: -webkit-sticky;
  top: 106px;
  width: 100%;

  @media (min-width: 1718px) {
    height: calc(100vh - 106px);
    width: 293px;
    border-right: 2px solid ${theme.colors.gray200};
  }
`;

export const IconWrapper = styled.div`
  height: 24px;
  padding-bottom: 16px;
`;
