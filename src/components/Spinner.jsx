import React from "react";
import CircularProgress from '@material-ui/core/CircularProgress';

import theme from "../utils/theme.js";

function Spinner(props) {
	return (
		<CircularProgress style={{ color : theme.colors.blue }} size={30} className={props.className}/>
	)
}

export default Spinner;