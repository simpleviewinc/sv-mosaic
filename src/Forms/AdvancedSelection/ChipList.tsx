import Chip from '@root/components/Chip';
import * as React from 'react';
import { memo, ReactElement, useMemo, useState } from 'react';
import { actions } from '../Form/formUtils';
import {
	ChipsWrapper,
	OptionsCheckedModalWrapper,
	ShowHideSpan,
	StyledExpandLessIcon,
	StyledExpandMoreIcon
} from './AdvancedSelection.styled';

const MAX_CHIPS_TO_SHOW = 8;

const ChipList = (props): ReactElement => {
	const {
		value,
		state,
		dispatch,
		fieldDef,
		isModalOpen,
		isMobileView,
		mapListOfOptions,
		advancedSelectValue,
	} = props;

	const [showMore, setShowMore] = useState(false);

	/**
   * Called when the cross icon of a single chip is clicked.
   * @param optionValue is used to filter the chip from the
   * optionsChecked array.
   */
	const onChipDelete = (optionValue) => {
		const filteredChips = state.data.checkboxList.filter((option) => option !== optionValue)

		dispatch(
			actions.setFieldValue({
				name: 'checkboxList',
				value: filteredChips,
			})
		);
	};

	/**
   * Used to toggle the state of showMore to
   * conditionally display 'X more' or 'Hide'.
   */
	const handleShowMore = () => {
		setShowMore(!showMore);
	};

	/**
   * JSX element with the list of selected options displayed
   * as chips.
   */
	const chips = useMemo(() => {
		let optionsChecked = [];
		if (isModalOpen) {
			optionsChecked = mapListOfOptions(state?.data?.checkboxList);
		}

		if (advancedSelectValue) {
			optionsChecked = mapListOfOptions(advancedSelectValue);
		}

		if (optionsChecked?.length > 0) {
			return optionsChecked?.map((option, idx) => (
				<Chip
					disabled={fieldDef?.disabled}
					key={`${option.label}-${idx}`}
					label={option.label}
					onDelete={() => onChipDelete(option.value)}
				/>
			));
		}
		return optionsChecked;
	}, [isModalOpen, advancedSelectValue, state.data.checkboxList, fieldDef?.disabled]);

	return state?.data?.checkboxList?.length > 0 && (
		<OptionsCheckedModalWrapper isModalOpen={isModalOpen}>
			<ChipsWrapper isModalOpen={isModalOpen} isMobileView={isMobileView}>
				{showMore ? chips : chips?.slice(0, MAX_CHIPS_TO_SHOW)}
			</ChipsWrapper>
			{state?.data.checkboxList?.length > MAX_CHIPS_TO_SHOW && (
				<div onClick={handleShowMore}>
					{showMore ? (
						<ShowHideSpan>
							{'Hide'} <StyledExpandLessIcon />
						</ShowHideSpan>
					) : (
						<ShowHideSpan>
							{`${state?.data.checkboxList?.length - MAX_CHIPS_TO_SHOW} more`}
							<StyledExpandMoreIcon />
						</ShowHideSpan>
					)}
				</div>
			)}
		</OptionsCheckedModalWrapper>
	);
}

export default memo(ChipList);