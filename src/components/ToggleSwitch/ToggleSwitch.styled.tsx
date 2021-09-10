import styled from 'styled-components';

// Material UI
import Switch from '@material-ui/core/Switch';

// Utils
import theme from '@root/theme';

export const StyledSwitch = styled(Switch)`
  .MuiSwitch-colorSecondary,
  .MuiSwitch-colorSecondary.Mui-disabled {
    color: white;
  }

  .MuiSwitch-colorSecondary.Mui-checked,
  .MuiSwitch-colorSecondary.Mui-disabled.Mui-checked {
    color: ${theme.colors.simplyGold};
  }

  .MuiSwitch-colorSecondary {
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
