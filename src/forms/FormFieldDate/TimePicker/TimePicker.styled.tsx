import styled from "styled-components";
import theme from "@root/theme";
import { StyledInputPicker } from "../DatePicker/DatePicker.styled";
import { createTheme } from "@material-ui/core/styles";
import { KeyboardTimePicker } from "@material-ui/pickers";
import { Sizes } from "@root/theme/sizes";

export const customTheme = createTheme({
	palette: {
		primary: {
			main: theme.colors.blueTeal,
		},
	},
	overrides: {
		MuiPickersBasePicker: {
			container: {
				width: Sizes.sm,
			},
			pickerView: {
				minWidth: Sizes.sm,
			},
		},
		MuiPickersTimePickerToolbar: {
			toolbarAmpmLeftPadding: {
				paddingLeft: "0",
			},
		},
	},
});

export const StyledTimePicker = styled(KeyboardTimePicker)`
  ${StyledInputPicker}
`;
