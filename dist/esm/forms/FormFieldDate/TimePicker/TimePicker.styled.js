import theme from "../../../theme";
import { createTheme } from "@mui/material/styles";
export const customTheme = createTheme({
    palette: {
        primary: {
            main: theme.colors.blueTeal,
        },
    },
});
