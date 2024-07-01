import Chip from "@root/components/Chip";
import * as React from "react";
import {
	memo,
	ReactElement,
	useState,
	forwardRef,
} from "react";
import { ChipListPropsTypes } from ".";
import {
	ChipsWrapper,
	ShowHideSpan,
	StyledExpandLessIcon,
	StyledExpandMoreIcon,
} from "./AdvancedSelection.styled";

const MAX_CHIPS_TO_SHOW = 8;

const ChipList = forwardRef<HTMLDivElement, ChipListPropsTypes>((props, ref): ReactElement => {
	const {
		fieldDef,
		value,
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

	return value?.length > 0 && (
		<div ref={ref}>
			<ChipsWrapper
				$isMobileView={fieldDef?.inputSettings?.isMobileView}
				data-testid="as-chiplist"
			>
				{showMore ? (
					value?.map((option, idx) => (
						<Chip
							disabled={fieldDef?.disabled}
							key={`${option?.label}-${idx}`}
							label={option?.label}
							onDelete={() => onChipDelete(option?.value)}
						/>
					))
				) : (
					value?.slice(0, MAX_CHIPS_TO_SHOW).map((option, idx) => (
						<Chip
							disabled={fieldDef?.disabled}
							key={`${option?.label}-${idx}`}
							label={option?.label}
							onDelete={() => onChipDelete(option?.value)}
						/>
					))
				)}
			</ChipsWrapper>
			{value.length > MAX_CHIPS_TO_SHOW && (
				<div onClick={handleShowMore}>
					{showMore ? (
						<ShowHideSpan>
							Hide
							{" "}
							<StyledExpandLessIcon />
						</ShowHideSpan>
					) : (
						<ShowHideSpan>
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
