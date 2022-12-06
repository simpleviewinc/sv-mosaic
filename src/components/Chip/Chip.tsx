import * as React from "react";
import { ReactElement, HTMLAttributes } from "react";

// Material UI
import ClearIcon from "@mui/icons-material/Clear";

// Types and styles
import { ChipsProps } from "./ChipTypes";
import { StyledChip, StyledDeletableChip, StyledLabel } from "./Chip.styled";

const Chip = (props: ChipsProps & HTMLAttributes<HTMLDivElement>): ReactElement => {
	const { label, required, disabled, selected, onDelete, onClick } = props;

	return onDelete ? (
		<StyledDeletableChip
			label={<StyledLabel>{label}</StyledLabel>}
			{...props}
			required={required}
			disabled={disabled}
			selected={selected}
			deleteIcon={<ClearIcon data-testid='delete-icon-test-id' />}
			onDelete={onDelete}
			data-testid="delete-chip-testid"
		/>
	) : (
		<StyledChip
			label={<StyledLabel>{label}</StyledLabel>}
			{...props}
			required={required}
			disabled={disabled}
			selected={selected}
			clickable
			disableRipple
			onClick={onClick}
			data-testid="chip-testid"
		/>
	);
};

export default Chip;
