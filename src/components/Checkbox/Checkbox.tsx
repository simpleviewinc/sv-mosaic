import * as React from "react";
import { memo } from "react";
import styled from "styled-components";
import { default as MUICheckbox, CheckboxProps as MUICheckboxProps } from "@material-ui/core/Checkbox";

import theme from "@root/utils/theme";

const StyledCheckbox = styled(MUICheckbox)`
	&.checked {
		color: ${theme.colors.blue};
	}

	& > span > svg {
		font-size: 24px;
	}
`

export interface CheckboxProps {
	checked: boolean
	className?: string
	edge?: MUICheckboxProps["edge"]
	onClick: MUICheckboxProps["onClick"]
}

function Checkbox(props: CheckboxProps) {
	return (
		<StyledCheckbox
			className={`
				${props.checked ? "checked" : ""}
				${props.className ? props.className : ""}
			`}
			color="default"
			edge={props.edge}
			checked={props.checked}
			onClick={props.onClick}
			disableRipple
		/>
	);
}

export default memo(Checkbox);