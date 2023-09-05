import * as React from "react";
import { ReactElement, HTMLAttributes, useRef } from "react";

import ClearIcon from "@mui/icons-material/Clear";

import { ChipsProps } from "./ChipTypes";
import { StyledChip, StyledDeletableChip } from "./Chip.styled";

const Chip = (props: ChipsProps & HTMLAttributes<HTMLDivElement>): ReactElement => {
	const { label, required, disabled, selected, onDelete, onClick } = props;
	const ref = useRef<HTMLDivElement>();

	return onDelete ? (
		<StyledDeletableChip
			{...props}
			title={typeof label === "string" ? label : undefined}
			ref={ref}
			required={required}
			disabled={disabled}
			selected={selected}
			deleteIcon={<ClearIcon data-testid='delete-icon-test-id' />}
			onDelete={onDelete}
			data-testid="delete-chip-testid"
		/>
	) : (
		<StyledChip
			{...props}
			title={typeof label === "string" ? label : undefined}
			ref={ref}
			required={required}
			disabled={disabled}
			selected={selected}
			onClick={onClick}
			data-testid="chip-testid"
		/>
	)
};

export default Chip;
