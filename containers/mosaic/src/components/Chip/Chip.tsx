import type { ReactElement, HTMLAttributes } from "react";
import React, { useRef } from "react";

import ClearIcon from "@mui/icons-material/Clear";

import type { ChipsProps } from "./ChipTypes";
import { StyledChip, StyledDeletableChip } from "./Chip.styled";
import testIds from "@root/utils/testIds";

const Chip = ({
	children,
	selected = false,
	onDelete,
	...props
}: ChipsProps & HTMLAttributes<HTMLDivElement>): ReactElement => {
	const ref = useRef<HTMLDivElement>();
	const { label } = props;
	const common = {
		...props,
		color: "default",
		title: label,
		ref,
		"data-testid": testIds.CHIP,
	} as const;

	return onDelete ? (
		<StyledDeletableChip
			deleteIcon={<ClearIcon data-testid={testIds.CHIP_DELETE_ICON} />}
			onDelete={onDelete}
			{...common}
		/>
	) : (
		<StyledChip
			{...common}
			$selected={selected}
			aria-selected={selected}
		/>
	);
};

export default Chip;
