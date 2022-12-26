import styled from "styled-components";

// Material UI
import Switch from "@mui/material/Switch";

// Utils
import theme from "@root/theme";

export const StyledSwitch = styled(Switch)`
  margin-right: 2px;
  && {
    width: 60px;
    height: 40px;
  }

  .MuiSwitch-colorPrimary,
  .MuiSwitch-colorPrimary.Mui-disabled {
    color: white;
  }

  .MuiSwitch-colorPrimary.Mui-checked,
  .MuiSwitch-colorPrimary.Mui-disabled.Mui-checked {
    color: ${theme.newColors.simplyGold["100"]};
  }

  .MuiSwitch-colorPrimary {
    padding: 10px;

    &:hover {
      background-color: ${theme.newColors.simplyGrey["20"]};
    }
  }

  .MuiSwitch-colorPrimary {
    &.Mui-checked {
      &:hover {
        background-color: ${theme.newColors.simplyGold["20"]};
      }
    }
  }

  .MuiSwitch-track {
    background-color: ${theme.newColors.simplyGrey["100"]};
    opacity: 1;
    height: 14px;
    width: 34px;
    margin: auto 0px;
  }

  .MuiSwitch-colorPrimary.Mui-checked + .MuiSwitch-track {
    background-color: ${theme.newColors.simplyGold["40"]};
    opacity: 1;
  }

  .MuiSwitch-colorPrimary.Mui-disabled.Mui-checked + .MuiSwitch-track {
    background-color: ${theme.newColors.simplyGold["40"]};
  }

  .MuiSwitch-switchBase.Mui-disabled + .MuiSwitch-track {
    background-color: ${theme.newColors.simplyGrey["100"]};
    opacity: 0.5;
  }
`;
