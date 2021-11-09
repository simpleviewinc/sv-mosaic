import { createTheme } from '@material-ui/core/styles';
import theme from '@root/theme';
import styled from 'styled-components';
import { KeyboardTimePicker } from '@material-ui/pickers';

export const customTheme = createTheme({
	palette: {
		primary: {
			main: theme.colors.blueTeal,
		},
	},
	overrides: {
		MuiPickersBasePicker: {
			container : {
				width: '280px'
			},
			pickerView: {
				minWidth: '280px'
			}
		},

		/* MuiPopover: {
			paper: {
				top: '71px !important',
        left: '9px !important'
			},
		}, */
	}
});

export const StyledTimePicker = styled(KeyboardTimePicker)`
  width: 280px;

  & .MuiOutlinedInput-root {
    &:hover {
      background-color: ${theme.colors.gray200};
    }
    & fieldset {
      border-radius: 0;
      border: 1px solid ${theme.colors.simplyGray};
    }
    &.Mui-focused fieldset {
      border-color: ${theme.colors.almostBlack};
      border-width: 2px;
    }
  }

  input.MuiOutlinedInput-input {
    height: 14px;
  }
`;
