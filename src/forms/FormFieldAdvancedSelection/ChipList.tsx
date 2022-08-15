import Chip from "@root/components/Chip";
import * as React from "react";
import {
	memo,
	ReactElement,
	useState
} from "react";
import { ChipListPropsTypes } from ".";
import {
	ChipsWrapper,
	OptionsCheckedModalWrapper,
	ShowHideSpan,
	StyledExpandLessIcon,
	StyledExpandMoreIcon
} from "./AdvancedSelection.styled";

const MAX_CHIPS_TO_SHOW = 8;

const ChipList = (props: ChipListPropsTypes): ReactElement => {
	const {
		fieldDef,
	} = props;

	const [showMore, setShowMore] = useState(false);

	/**
	 * Called when the cross icon of a single chip is clicked.
	 * @param optionValue is used to filter the chip from the
	 * optionsChecked array.
	 */
	const onChipDelete = (optionValue: string) => {
		const filteredChips = fieldDef?.inputSettings?.selectedOptions.filter((option) => option.value !== optionValue);

		fieldDef?.inputSettings?.deleteSelectedOption(filteredChips);
	};

	/**
	 * Used to toggle the state of showMore to
	 * conditionally display 'X more' or 'Hide'.
	 */
	const handleShowMore = () => {
		setShowMore(!showMore);
	};

	return fieldDef?.inputSettings?.selectedOptions?.length > 0 && (
		<OptionsCheckedModalWrapper isModalOpen={fieldDef?.inputSettings?.isModalOpen}>
			<ChipsWrapper
				isModalOpen={fieldDef?.inputSettings?.isModalOpen}
				isMobileView={fieldDef?.inputSettings?.isMobileView}
				data-testid='as-chiplist'
			>
				{showMore ?
					fieldDef?.inputSettings?.selectedOptions?.map((option, idx) => (
						<Chip
							disabled={fieldDef?.disabled}
							key={`${option?.label}-${idx}`}
							label={option?.label}
							onDelete={() => onChipDelete(option?.value)}
						/>
					))
					:
					fieldDef?.inputSettings?.selectedOptions?.slice(0, MAX_CHIPS_TO_SHOW).map((option, idx) => (
						<Chip
							disabled={fieldDef?.disabled}
							key={`${option?.label}-${idx}`}
							label={option?.label}
							onDelete={() => onChipDelete(option?.value)}
						/>
					))
				}
			</ChipsWrapper>
			{fieldDef?.inputSettings?.selectedOptions.length > MAX_CHIPS_TO_SHOW && (
				<div onClick={handleShowMore}>
					{showMore ? (
						<ShowHideSpan>
							{"Hide"} <StyledExpandLessIcon />
						</ShowHideSpan>
					) : (
						<ShowHideSpan>
							{`${fieldDef?.inputSettings?.selectedOptions.length - MAX_CHIPS_TO_SHOW} more`}
							<StyledExpandMoreIcon />
						</ShowHideSpan>
					)}
				</div>
			)}
		</OptionsCheckedModalWrapper>
	);
}

export default memo(ChipList);
