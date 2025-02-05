import type { ReactElement, HTMLAttributes } from "react";
import React, { useRef } from "react";

import ClearIcon from "@mui/icons-material/Clear";

import type { ChipsProps } from "./ChipTypes";
import { StyledChip, StyledChipDelete } from "./Chip.styled";
import testIds from "@root/utils/testIds";

const Chip = ({
	children,
	selected = false,
	onDelete,
	label,
	...props
}: ChipsProps & HTMLAttributes<HTMLDivElement>): ReactElement => {
	const ref = useRef<HTMLDivElement>();

	return (
		<StyledChip
			{...props}
			$selected={selected}
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
		/>
	);
};

export default Chip;
