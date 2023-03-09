import * as React from "react";
import { ReactElement, HTMLAttributes, useRef, useState, useEffect } from "react";

// Material UI
import ClearIcon from "@mui/icons-material/Clear";

// Types and styles
import { ChipsProps } from "./ChipTypes";
import { StyledChip, StyledDeletableChip, StyledLabel } from "./Chip.styled";
import Tooltip from "../Tooltip";


const Chip = (props: ChipsProps & HTMLAttributes<HTMLDivElement>): ReactElement => {
	const { label, required, disabled, selected, onDelete, onClick } = props;

	const [deletableChipWidth, setDeletableChipWidth] = useState(0);

	const deletableChipRef = useRef(null);

	useEffect(() => {
		setDeletableChipWidth(deletableChipRef?.current?.offsetWidth);
	}, [onDelete, label])

	return onDelete ? (
		<Tooltip text={deletableChipWidth >= 186 ? label : ""}>
			<StyledDeletableChip
				ref={deletableChipRef}
				label={<StyledLabel>{label}</StyledLabel>}
				{...props}
				required={required}
				disabled={disabled}
				selected={selected}
				deleteIcon={<ClearIcon data-testid='delete-icon-test-id' />}
				onDelete={onDelete}
				data-testid="delete-chip-testid"
			/>
		</Tooltip>
	) : (
		<StyledChip
			label={<StyledLabel>{label}</StyledLabel>}
			{...props}
			required={required}
			disabled={disabled}
			selected={selected}
			onClick={onClick}
			data-testid="chip-testid"
		/>
	);
};

export default Chip;
