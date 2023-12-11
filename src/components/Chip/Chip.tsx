/* eslint-disable react/no-children-prop */
import * as React from "react";
import { HTMLAttributes, useRef } from "react";

import ClearIcon from "@mui/icons-material/Clear";

import { ChipsProps } from "./ChipTypes";
import { StyledChip, StyledDeletableChip } from "./Chip.styled";

const Chip = (props: ChipsProps & HTMLAttributes<HTMLDivElement>) => {
	const { label, disabled, selected, onDelete, onClick } = props;
	const ref = useRef<HTMLDivElement>();

	return onDelete ? (
		<StyledDeletableChip
			{...props}
			color="default"
			children={props.children as null}
			title={typeof label === "string" ? label : undefined}
			ref={ref}
			disabled={disabled}
			deleteIcon={<ClearIcon data-testid='delete-icon-test-id' />}
			onDelete={onDelete}
			data-testid="delete-chip-testid"
		/>
	) : (
		<StyledChip
			{...props}
			color="default"
			children={props.children as null}
			title={typeof label === "string" ? label : undefined}
			ref={ref}
			disabled={disabled}
			$selected={selected}
			onClick={onClick}
			data-testid="chip-testid"
		/>
	)
};

export default Chip;
