import styled from "styled-components";

// Utils
import theme from "@root/theme";

export const NavItems = styled.div`
  display: flex;
  overflow: hidden;
  scroll-behavior: smooth;
  width: 100%;
  white-space: nowrap;

  &.BIG_DESKTOP {
    display: flex;
    flex-direction: column;
    height: 100%;
    max-width: 250px;
    overflow-y: auto;
  }
`;

export const LinksWrapper = styled.div`
  margin-right: 40px;

  &.highlight > a {
    color: ${theme.newColors.almostBlack["100"]};
    border-bottom: 4px solid ${theme.newColors.simplyGold["100"]};
    font-weight: ${theme.fontWeight.medium};
  }

  a {
    color: ${theme.colors.gray600};
    display: inline-block;
    font-family: ${theme.fontFamily};
    font-size: 14px;
    text-align: center;
    text-decoration: none;
    padding-bottom: 12px;
  }

  &.BIG_DESKTOP {
    margin-right: 0;

    &.highlight > a {
      border-bottom: none;
      border-left: 4px solid ${theme.newColors.simplyGold["100"]};
    }

    &.highlight {
      background-color: ${theme.colors.gray200};
    }

    a {
      border-bottom: 0px;
      border-left: 4px solid transparent;
      padding: 16px 0 16px 24px;
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
  overflow: hidden;
  width: 100%;

  &.BIG_DESKTOP {
    height: 100%;
    width: 293px;
    border-right: 2px solid ${theme.colors.gray200};
  }
`;

export const IconWrapper = styled.div`
  height: 24px;
`;
