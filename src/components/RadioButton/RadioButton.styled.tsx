import styled from 'styled-components';

// Material UI
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';

import theme from '../../utils/theme.js';

export const StyledRadioButton = styled(Radio)`
  &.MuiRadio-colorSecondary {
    color: ${theme.colors.almostBlack};
    &:hover {
      background-color: ${theme.colors.grayHover};
    }

    &.Mui-checked {
      color: ${pr => pr.disabled ? theme.colors.simplyGoldDisabled : theme.colors.simplyGold};
      &:hover {
        background-color: ${theme.colors.grayHover};
      }
    }
  }
`;

export const StyledFormControlLabel = styled(FormControlLabel)`
  .MuiFormControlLabel-label {
    color: ${theme.colors.label};
    font-family: ${theme.fontFamily};
    font-size: 16px;
  }

  .MuiFormControlLabel-label.Mui-disabled {
    color: ${theme.colors.label};
    opacity: .5;
  }
`;
