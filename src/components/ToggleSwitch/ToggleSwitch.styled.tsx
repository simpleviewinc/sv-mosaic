import styled from 'styled-components';

// Material UI
import Switch from '@material-ui/core/Switch';

// Utils
import theme from '@root/theme';

export const StyledSwitch = styled(Switch)`
  margin-right: 2px;
  && {
    width: 60px;
    height: 40px;
  }

  .MuiSwitch-colorSecondary,
  .MuiSwitch-colorSecondary.Mui-disabled {
    color: white;
  }

  .MuiSwitch-colorSecondary.Mui-checked,
  .MuiSwitch-colorSecondary.Mui-disabled.Mui-checked {
    color: ${theme.colors.simplyGold};
  }

  .MuiSwitch-colorSecondary {
    padding: 10px;

    &:hover {
      background-color: ${theme.colors.simplyGrayOpacity};
    }
  }

  .MuiSwitch-colorSecondary {
    &.Mui-checked {
      &:hover {
        background-color: ${theme.colors.simplyGoldOpacity};
      }
    }
  }

  .MuiSwitch-track {
    background-color: ${theme.colors.simplyGray};
    opacity: 1;
    height: 14px;
    width: 34px;
    margin: auto 0px;
  }

  .MuiSwitch-colorSecondary.Mui-checked + .MuiSwitch-track {
    background-color: #fdb92459;
    opacity: 1;
  }

  .MuiSwitch-colorSecondary.Mui-disabled.Mui-checked + .MuiSwitch-track {
    background-color: #fdb92459;
  }

  .MuiSwitch-switchBase.Mui-disabled + .MuiSwitch-track {
    background-color: ${theme.colors.simplyGray};
    opacity: 0.5;
  }
`;
