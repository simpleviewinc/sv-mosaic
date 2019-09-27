import React from "react";
import styled from "styled-components";
import MUICheckbox from "@material-ui/core/Checkbox";

import theme from "../utils/theme.js";

const StyledCheckbox = styled(MUICheckbox)`
	&.checked {
		color: ${theme.colors.blue};
	}
`

function Checkbox(props) {
	return (
		<StyledCheckbox
			className={props.checked ? "checked" : undefined}
			color="default"
			edge="start"
			checked={props.checked}
			onClick={props.onClick}
			disableRipple
		/>
	);
}

export default Checkbox;