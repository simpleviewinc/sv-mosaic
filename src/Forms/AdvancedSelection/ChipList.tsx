import Chip from '@root/components/Chip';
import * as React from 'react';
import {
	memo,
	ReactElement,
	useEffect,
	useState
} from 'react';
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
		disabled,
		isModalOpen,
		getSelected,
		isMobileView,
		selectedOptions,
		deleteSelectedOption,
	} = props;

	const [showMore, setShowMore] = useState(false);
	const [chipsToRender, setChipsToRender] = useState([]);

	/**
   * Called when the cross icon of a single chip is clicked.
   * @param optionValue is used to filter the chip from the
   * optionsChecked array.
   */
	const onChipDelete = (optionValue) => {
		const filteredChips = selectedOptions.filter((option) => option !== optionValue);

		deleteSelectedOption(filteredChips);
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
	useEffect(() => {
		const test = async () => {
			let optionsChecked = await getSelected(selectedOptions);

			setChipsToRender(optionsChecked);
		}

		test();
	}, [
		disabled,
		getSelected,
		selectedOptions,
	]);

	return selectedOptions?.length > 0 && (
		<OptionsCheckedModalWrapper isModalOpen={isModalOpen}>
			<ChipsWrapper
				isModalOpen={isModalOpen}
				isMobileView={isMobileView}
				data-testid='as-chiplist'
			>
				{showMore ?
					chipsToRender.map((option, idx) => (
						<Chip
							disabled={disabled}
							key={`${option.label}-${idx}`}
							label={option.label}
							onDelete={() => onChipDelete(option.value)}
						/>
					))
					:
					chipsToRender.slice(0, MAX_CHIPS_TO_SHOW).map((option, idx) => (
						<Chip
							disabled={disabled}
							key={`${option.label}-${idx}`}
							label={option.label}
							onDelete={() => onChipDelete(option.value)}
						/>
					))
				}
			</ChipsWrapper>
			{selectedOptions.length > MAX_CHIPS_TO_SHOW && (
				<div onClick={handleShowMore}>
					{showMore ? (
						<ShowHideSpan>
							{'Hide'} <StyledExpandLessIcon />
						</ShowHideSpan>
					) : (
						<ShowHideSpan>
							{`${selectedOptions.length - MAX_CHIPS_TO_SHOW} more`}
							<StyledExpandMoreIcon />
						</ShowHideSpan>
					)}
				</div>
			)}
		</OptionsCheckedModalWrapper>
	);
}

export default memo(ChipList);