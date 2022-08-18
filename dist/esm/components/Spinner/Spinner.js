import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import theme from "../../theme";
function Spinner(props) {
    return (React.createElement(CircularProgress, { style: { color: theme.colors.blue }, size: 30, className: props.className }));
}
export default Spinner;
