import styled from "styled-components";

// Material UI
import Radio from "@mui/material/Radio";

import theme from "@root/theme";

export const StyledRadioButton = styled(Radio)`
  &.MuiRadio-colorPrimary {
    color: ${theme.newColors.almostBlack["100"]};

    &.Mui-checked {
      color: ${theme.newColors.simplyGold["100"]};
    }
  }

  &.MuiRadio-colorPrimary,
  &.MuiRadio-colorPrimary.Mui-checked {
    &:hover {
      background-color: ${theme.newColors.grey2["100"]};
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
