import theme from "@root/theme";
import { createTheme } from "@mui/material/styles";

export const customTheme = createTheme({
	palette: {
		primary: {
			main: theme.newColors.realTeal["100"],
		},
	},
});
