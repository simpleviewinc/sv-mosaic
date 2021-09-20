import styled from 'styled-components';
import { ButtonType } from './ButtonTypes';
import theme from '@root/theme';

type StateColors = {
  regular: string;
  hover: string;
};

const typeColors: { [key in ButtonType]: StateColors } = {
  contained: {
    regular: theme.colors.simplyGold,
    hover: theme.colors.simplyGoldHover,
  },
  text: {
    regular: "transparent",
    hover: "#dbdbdb",
  },
  secondary: {
    regular: "#000",
    hover: "#3d3d3d",
  },
};

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  /* Add margin in case of loading or icon */
  & > *:nth-child(1) {
    margin-left: ${(pr) => (pr.withText ? 7 : 0)}px;
  }
  font-size: 15px;
  border: none;
  cursor: pointer;
  background-color: ${(pr) => typeColors[pr.type].regular};
  padding: 0 16px;
  height: 40px;
  color: ${(pr) =>
    pr.type === "text" ? typeColors["contained"].regular : theme.colors.almostBlack};
  ${(pr) =>
    pr.disabled
      ? `
        background-color: #a6a6a6;
        color: #5e5e5e;
        cursor: not-allowed;
        &:hover {
            background-color: #a6a6a6 !important;
            color: #5e5e5e !important;
        }
    `
      : ""}
  border-radius: 0;
  outline: none;

  &:hover {
    background-color: ${(pr) => typeColors[pr.type].hover};
  }
`

export const StyledIcon = styled.div`
  height: 20px;
`;