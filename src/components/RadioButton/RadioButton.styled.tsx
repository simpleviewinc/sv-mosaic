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

export const StyledFormControlLabel = styled(FormControlLabel)`
  opacity: ${(pr) => (pr.disabled ? 0.5 : 1)};

  &.MuiFormControlLabel-root {
    margin: 0;
  }

  .MuiFormControlLabel-label {
    color: ${theme.colors.label};
    font-family: ${theme.fontFamily};
    font-size: 16px;
  }

  .MuiFormControlLabel-label.Mui-disabled {
    color: ${theme.colors.label};
  }
`;
