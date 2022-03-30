import * as React from "react";
import { ReactElement, HTMLAttributes } from "react";

// Material UI
import ClearIcon from "@material-ui/icons/Clear";

// Types and styles
import { ChipsProps } from "./ChipTypes";
import { StyledChip, StyledDeletableChip, StyledLabel } from "./Chip.styled";

const Chip = (props: ChipsProps & HTMLAttributes<HTMLDivElement>): ReactElement => {
	const { label, required, disabled, selected, onDelete, onClick } = props;

	return onDelete ? (
		<StyledDeletableChip
			label={<StyledLabel>{label}</StyledLabel>}
			required={required}
			disabled={disabled}
			selected={selected}
			deleteIcon={<ClearIcon data-testid='delete-icon-test-id' />}
			onDelete={onDelete}
		/>
	) : (
		<StyledChip
			label={<StyledLabel>{label}</StyledLabel>}
			required={required}
			disabled={disabled}
			selected={selected}
			clickable
			disableRipple
			onClick={onClick}
		/>
	);
};

export default Chip;
