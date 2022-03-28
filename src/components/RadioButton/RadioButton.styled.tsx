import styled from "styled-components";

// Material UI
import Radio from "@material-ui/core/Radio";

import theme from "../../utils/theme.js";

export const StyledRadioButton = styled(Radio)`
  &.MuiRadio-colorSecondary {
    color: ${theme.colors.almostBlack};

    &.Mui-checked {
      color: ${theme.colors.simplyGold};
    }
  }

  &.MuiRadio-colorSecondary,
  &.MuiRadio-colorSecondary.Mui-checked {
    &:hover {
      background-color: ${theme.colors.grayHover};
    }
  }

  &.MuiRadio-root {
    margin-right: 2px;
    padding: 10px;
  }

  & svg {
    height: 20px;
    width: 20px;
  }
`;
