import React from "react";
import { StyledCheckboxIcon, StyledCheckboxOutline } from "./Checkbox.styled";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";

const CheckboxIcon = ({
	checked,
	indeterminate,
}: {
	checked?: boolean;
	indeterminate?: boolean;
}) => {
	return (
		<StyledCheckboxIcon>
			{indeterminate ? (
				<IndeterminateCheckBoxIcon />
			) : checked ? (
				<CheckBoxIcon />
			) : (
				<StyledCheckboxOutline />
			)}
		</StyledCheckboxIcon>
	);
};

export default CheckboxIcon;
