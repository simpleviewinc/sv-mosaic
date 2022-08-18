import styled from "styled-components";
// Material UI
import IconButton from "@mui/material/IconButton";
// Utils
import theme from "../../theme";
export const StyledIconButton = styled(IconButton) `
  &.MuiIconButton-root {
    padding: 4px;

    &.Mui-disabled {
      color: ${theme.colors.almostBlack};
      opacity: 0.5;
    }
  }

  svg {
    font-size: 24px;
  }

  color: ${theme.colors.gray600};

  &:hover {
    color: ${theme.colors.almostBlack};
  }
`;
