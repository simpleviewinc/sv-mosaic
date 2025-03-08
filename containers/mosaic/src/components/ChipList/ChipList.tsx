import type { ReactElement } from "react";

import React, { memo, useState, forwardRef, useCallback } from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

import type { ChipListProps } from "./ChipListTypes";

import Chip from "@root/components/Chip";
import { ChipsWrapper, ShowButton } from "./ChipList.styled";
import { EMPTY_ARRAY } from "@root/constants/stable";

const ChipList = forwardRef<HTMLDivElement, ChipListProps>((props, ref): ReactElement => {
	const {
		disabled,
		onDelete,
		chips = EMPTY_ARRAY,
		maxInitialChips = 8,
	} = props;

	const [showMore, setShowMore] = useState(false);

	const _onDelete = useCallback(
		(deletedValue: string) => onDelete(chips.filter((option) => option.value !== deletedValue)),
		[onDelete, chips],
	);

	const visibleChips = showMore ? chips : chips.slice(0, maxInitialChips);

	return chips.length > 0 && (
		<div ref={ref}>
			<ChipsWrapper data-testid="as-chiplist">
				{visibleChips.map((option, idx) => (
					<Chip
						disabled={disabled}
						key={`${option?.label}-${idx}`}
						label={option?.label}
						onDelete={() => _onDelete(option?.value)}
					/>
				))}
			</ChipsWrapper>
			{chips.length > visibleChips.length && (
				<ShowButton
					label={showMore ? "Show Less" : "Show More"}
					onClick={() => setShowMore(!showMore)}
					color="teal"
					variant="text"
					mIcon={showMore ? ExpandLess : ExpandMore}
				/>
			)}
		</div>
	);
});

ChipList.displayName = "ChipList";

export default memo(ChipList);
