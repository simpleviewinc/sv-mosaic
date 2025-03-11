import type { ReactElement } from "react";

import React, { memo, useState, forwardRef, useMemo } from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

import type { ChipListProps } from "./ChipListTypes";

import Chip from "@root/components/Chip";
import { ChipsWrapper, ShowButton } from "./ChipList.styled";
import { EMPTY_ARRAY } from "@root/constants/stable";
import testIds from "@root/utils/testIds";

const ChipList = forwardRef<HTMLDivElement, ChipListProps>((props, ref): ReactElement => {
	const {
		disabled,
		onDelete,
		options = EMPTY_ARRAY,
		maxInitialChips = 8,
	} = props;

	if (maxInitialChips < 1) {
		throw new Error("ChipList `maxInitialChips` prop must be more than 0.");
	}

	const [showMore, setShowMore] = useState(false);

	const _onDelete = useMemo(() => {
		if (!onDelete) {
			return;
		}

		return (deletedValue: string) => onDelete(options.filter((option) => option.value !== deletedValue));
	}, [onDelete, options]);

	const visibleChips = showMore ? options : options.slice(0, maxInitialChips);

	return (
		<div ref={ref}>
			<ChipsWrapper data-testid={testIds.CHIP_LIST}>
				{visibleChips.map((option, idx) => (
					<Chip
						disabled={disabled}
						key={`${option?.label}-${idx}`}
						label={option?.label}
						onDelete={_onDelete && (() => _onDelete(option?.value))}
					/>
				))}
			</ChipsWrapper>
			{options.length > maxInitialChips && (
				<ShowButton
					label={showMore ? "Show Less" : `Show ${options.length - maxInitialChips} More`}
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
