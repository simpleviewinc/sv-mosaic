import styled from 'styled-components';

// Material UI
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';

import theme from '../../utils/theme.js';

export const StyledRadioButton = styled(Radio)`
  &.MuiRadio-colorSecondary {
    color: ${theme.colors.almostBlack};
    &.Mui-checked {
      color: ${theme.colors.simplyGold};
    }
  }
`;

export const StyledFormControlLabel = styled(FormControlLabel)`
  .MuiFormControlLabel-label {
    font-family: ${theme.fontFamily};
    font-size: 16px;
  }

  .MuiFormControlLabel-label.Mui-disabled {
    color: ${theme.colors.labelDisabled};
  }
`;
