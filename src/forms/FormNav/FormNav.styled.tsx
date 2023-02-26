import styled from "styled-components";

// Utils
import theme from "@root/theme";

export const NavItems = styled.div`
  display: flex;
  overflow: hidden;
  scroll-behavior: smooth;
  width: 100%;
  white-space: nowrap;
  gap: 40px;

  &.BIG_DESKTOP {
	gap: 0px;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    overflow-y: auto;
  }
`;

export const LinksWrapper = styled.div`
  &.highlight {
    border-bottom: 4px solid ${theme.newColors.simplyGold["100"]};
  }

  &.highlight > a {
    color: ${theme.newColors.almostBlack["100"]};
    font-weight: ${theme.fontWeight.medium};
  }

  a {
    color: ${theme.newColors.grey3["100"]};
    display: inline-block;
    font-family: ${theme.fontFamily};
    font-size: 14px;
    text-align: center;
    text-decoration: none;
    padding-bottom: 12px;
    max-width: 100%;
    text-overflow: ellipsis;
    display: inline-block;
    overflow: hidden;
  }

  &.BIG_DESKTOP {
	border-left: 4px solid transparent;
	border-right: 4px solid transparent;

    &.highlight {
      border-bottom: none;
      border-left: 4px solid ${theme.newColors.simplyGold["100"]};
    }

    &.highlight {
      background-color: ${theme.newColors.grey2["100"]};
    }

    a {
      border-bottom: 0px;
      padding: 16px 24px 16px 24px;
    }
  }
`;

export const FormNavRow = styled.div`
  align-items: center;
  display: flex;
  overflow: hidden;
  position: relative;

  &:after {
    content: "";
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

  &.BIG_DESKTOP {
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
  &.DESKTOP,
  &.DRAWER,
  &.MOBILE,
  &.RESPONSIVE {
	overflow: hidden;
	width: 100%;
  }

  &.BIG_DESKTOP {
    height: 100%;
	max-width: 250px;
    border-right: 2px solid ${theme.newColors.grey2["100"]};
  }
`;

export const IconWrapper = styled.div`
  height: 24px;
`;
