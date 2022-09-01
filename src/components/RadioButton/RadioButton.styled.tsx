import styled from "styled-components";

// Material UI
import Radio from "@mui/material/Radio";

import theme from "@root/theme";

export const StyledRadioButton = styled(Radio)`
  &.MuiRadio-colorPrimary {
    color: ${theme.colors.almostBlack};

    &.Mui-checked {
      color: ${theme.colors.simplyGold};
    }
  }

  &.MuiRadio-colorPrimary,
  &.MuiRadio-colorPrimary.Mui-checked {
    &:hover {
      background-color: ${theme.colors.grayHover};
    }
  }

  &.MuiRadio-root {
    margin-right: 2px;
    padding: 10px;
  }

  & svg {
    height: ${theme.fieldSpecs.selectors.dimentions};
    width: ${theme.fieldSpecs.selectors.dimentions};
  }
`;
