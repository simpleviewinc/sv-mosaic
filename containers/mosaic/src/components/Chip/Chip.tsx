import type { ReactElement, HTMLAttributes } from "react";
import React, { useRef } from "react";

import ClearIcon from "@mui/icons-material/Clear";

import type { ChipsProps } from "./ChipTypes";
import { StyledChip, StyledChipDelete } from "./Chip.styled";
import testIds from "@root/utils/testIds";

declare module "@mui/material/Chip" {
	interface ChipOwnProps {
		disableRipple: boolean;
	}
}

const Chip = ({
	children,
	selected = false,
	onDelete,
	label,
	fullWidth,
	variant: providedVariant,
	...props
}: ChipsProps & HTMLAttributes<HTMLDivElement>): ReactElement => {
	const ref = useRef<HTMLDivElement>();
	const variant =
		providedVariant !== undefined ? providedVariant :
		(selected ? "primary" : "secondary");

	return (
		<StyledChip
			{...props}
			$variant={variant}
			aria-selected={selected}
			color="default"
			data-testid={testIds.CHIP}
			deleteIcon={(
				<StyledChipDelete
					type="button"
					data-testid={testIds.CHIP_DELETE_ICON}
					tabIndex={0}
				>
					<ClearIcon />
				</StyledChipDelete>
			)}
			label={label}
			onDelete={onDelete}
			ref={ref}
			tabIndex={onDelete ? -1 : undefined}
			title={label}
			$fullWidth={fullWidth}
			disableRipple={props.onClick ? true : undefined}
		/>
	);
};

export default Chip;
