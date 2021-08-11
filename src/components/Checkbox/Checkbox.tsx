import * as React from "react";
import { memo } from "react";
import styled from "styled-components";
import { default as MUICheckbox } from "@material-ui/core/Checkbox";
import { default as MUIFormControlLabel } from "@material-ui/core/FormControlLabel";
import { CheckboxProps } from "./CheckboxTypes";

import theme from "@root/utils/theme";

const StyledCheckbox = styled(MUICheckbox)`
	&.checked {
		color: ${theme.colors.simplyGold};
	}

	& > span > svg {
		font-size: 24px;
	}
`

const Checkbox = (props: CheckboxProps) => (
	<MUIFormControlLabel
		value="end"
		control={
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
		}
		disabled={props.disabled}
		label={props.label}
		labelPlacement="end"
	/>
	
);

export default memo(Checkbox);