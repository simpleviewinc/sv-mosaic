import Chip from "@root/components/Chip";
import * as React from "react";
import type {
	ReactElement } from "react";
import {
	memo,
	useState,
	forwardRef,
} from "react";
import type { ChipListPropsTypes } from ".";
import {
	ChipsWrapper,
	ShowHideSpan,
	StyledExpandLessIcon,
	StyledExpandMoreIcon,
} from "./AdvancedSelection.styled";
import { EMPTY_ARRAY } from "@root/constants/stable";

const MAX_CHIPS_TO_SHOW = 8;

const ChipList = forwardRef<HTMLDivElement, ChipListPropsTypes>((props, ref): ReactElement => {
	const {
		fieldDef,
		value = EMPTY_ARRAY,
	} = props;

	const [showMore, setShowMore] = useState(false);

	/**
	 * Called when the cross icon of a single chip is clicked.
	 * @param optionValue is used to filter the chip from the
	 * optionsChecked array.
	 */
	const onChipDelete = (optionValue: string) => {
		const filteredChips = value.filter((option) => option.value !== optionValue);

		fieldDef?.inputSettings?.deleteSelectedOption(filteredChips);
	};

	/**
	 * Used to toggle the state of showMore to
	 * conditionally display 'X more' or 'Hide'.
	 */
	const handleShowMore = () => {
		setShowMore(!showMore);
	};

	const itemsToShow = showMore ? value : value.slice(0, MAX_CHIPS_TO_SHOW);

	return value.length > 0 && (
		<div ref={ref}>
			<ChipsWrapper data-testid="as-chiplist">
				{itemsToShow.map((option, idx) => (
					<Chip
						disabled={fieldDef?.disabled}
						key={`${option?.label}-${idx}`}
						label={option?.label}
						onDelete={() => onChipDelete(option?.value)}
					/>
				))}
			</ChipsWrapper>
			{value.length > MAX_CHIPS_TO_SHOW && (
				<div onClick={handleShowMore}>
					{showMore ? (
						<ShowHideSpan role="button">
							Hide
							{" "}
							<StyledExpandLessIcon />
						</ShowHideSpan>
					) : (
						<ShowHideSpan role="button">
							{`${value.length - MAX_CHIPS_TO_SHOW} more`}
							<StyledExpandMoreIcon />
						</ShowHideSpan>
					)}
				</div>
			)}
		</div>
	);
});

ChipList.displayName = "ChipList";

export default memo(ChipList);
