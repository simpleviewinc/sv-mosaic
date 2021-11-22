import * as React from 'react';
import { ReactElement, useMemo, useState } from 'react';
import { AdvancedSelectionProps } from './AdvancedSelectionTypes';

// Components
import AddIcon from '@material-ui/icons/Add';
import Button from '@root/forms/Button';
import Chip from '@root/components/Chip';
import CheckboxList from '@root/components/CheckboxList';
import Modal from '@root/components/Modal';

// Styles
import {
	OptionsCheckedModalWrapper,
	ShowHideSpan,
	StyledExpandLessIcon,
	StyledExpandMoreIcon,
	StyledInput,
} from './AdvancedSelection.styled';
import { ChipsWrapper } from './AdvancedSelection.styled';

const CHIPS_TO_SHOW_ON_MODAL = 4;
const CHIPS_TO_SHOW_ON_SCREEN = 8;

const AdvancedSelection = (props: AdvancedSelectionProps): ReactElement => {
	const { checkboxOptions, modalTitle, groupByCategory = false } = props;

	// State variables
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [optionsChecked, setOptionsChecked] = useState([]);
	const [savedOptions, setSavedOption] = useState([]);
	const [showMore, setShowMore] = useState(false);

	/**
   * Fills a Map with the checkboxOptions ensuring that categories 
	 * are not repeated.
   */
	const optionsWithCategories = useMemo(() => {
		if (groupByCategory) {
			const categories = new Map();
			checkboxOptions.forEach((checkOption) => {
				if (!categories.has(checkOption.category)) {
					const categoryOptions = [checkOption];
					categories.set(checkOption.category, categoryOptions);
				} else {
					const categoryOptions = categories.get(checkOption.category);
					categoryOptions.push(checkOption);
					categories.set(checkOption.category, categoryOptions);
				}
			});
			return categories;
		}
	}, [groupByCategory, checkboxOptions]);

	/**
   * Used to toggle the state of showMore to
   * conditionally display 'X more' or 'Hide'.
   */
	const handleShowMore = () => {
		setShowMore(!showMore);
	};

	/**
   * Sets the open state of the modal to true.
   */
	const handleOpenModal = () => {
		setIsModalOpen(true);
	};

	/**
   * Modal is closed when the Save button is clicked.
   */
	const handleSave = () => {
		setSavedOption(optionsChecked);
		setIsModalOpen(false);
	};

	/**
   * Closes the modal and checks, if there are no
   * saved options then, empties the optionsChecked array, otherwise
   * optionsChecked remains with the last savedOptions.
   */
	const handleClose = () => {
		setIsModalOpen(false);
		if (savedOptions.length === 0) {
			setOptionsChecked([]);
		} else {
			setOptionsChecked(savedOptions);
		}
	};

	/**
   * Creates and array with the checked options
   * @param checked
   */
	const onChangeCheckBoxList = (checked) => {
		setOptionsChecked(checked);
	};

	/**
   * Called when the cross icon of a single chip is clicked.
   * @param label is used to filter the chip from the
   * optionsChecked array.
   */
	const onChipDelete = (label) => {
		setOptionsChecked((options) =>
			options.filter((option) => option !== label)
		);
	};

	/**
   * JSX element with the list of selected options displayed
   * as chips.
   */
	const listOfChips = optionsChecked.map((option, idx) => {
		const chipLabel = checkboxOptions.find(
			(checkedOption) => checkedOption.value === option
		);

		return (
			<Chip
				key={`${option}-${idx}`}
				label={chipLabel.label}
				onDelete={() => onChipDelete(option)}
			/>
		);
	});

	/**
   * Renders a checkbox list for each category if groupByCategory is true
	 * otherwise just displays a single checkbox list with all the options
   * @returns a list of CheckboxList or a single Checkboxlist
   */
	const listOfOptions = () => {
		if (groupByCategory && optionsWithCategories instanceof Map) {
			return Array.from(optionsWithCategories).map(([category, value]) => (
				<OptionsCheckedModalWrapper key={`${category}-${value}`}>
					{category && <span>{category}</span>}
					<CheckboxList
						options={value}
						checked={optionsChecked}
						onChange={onChangeCheckBoxList}
					/>
				</OptionsCheckedModalWrapper>
			));
		} else {

			return (
				<CheckboxList
					options={checkboxOptions}
					checked={optionsChecked}
					onChange={onChangeCheckBoxList}
				/>
			);
		}
	};

	/**
   * @param maxChipsToShow number of max chips to display
   * @returns the list of chips and the 'X more' or 'Hide' text
   * if the selected options are greater than the maxChipsToShow
   * param.
   */
	const chipsWrapper = (maxChipsToShow: number) => (
		<>
			<ChipsWrapper>
				{showMore ? listOfChips : listOfChips.slice(0, maxChipsToShow)}
			</ChipsWrapper>
			{optionsChecked.length > maxChipsToShow && (
				<div onClick={handleShowMore}>
					{showMore ? (
						<ShowHideSpan>
							{'Hide'} <StyledExpandLessIcon />
						</ShowHideSpan>
					) : (
						<ShowHideSpan>
							{`${optionsChecked.length - maxChipsToShow} more`}
							<StyledExpandMoreIcon />
						</ShowHideSpan>
					)}
				</div>
			)}
		</>
	);

	return (
		<>
			{optionsChecked.length > 0 && !isModalOpen ? (
				<div>
					<Button
						buttonType='blueText'
						icon={AddIcon}
						onClick={handleOpenModal}
					>
            Add Element
					</Button>
					{chipsWrapper(CHIPS_TO_SHOW_ON_SCREEN)}
				</div>
			) : (
				<Button buttonType='secondary' onClick={handleOpenModal}>
          ADD ELEMENT
				</Button>
			)}
			<Modal
				dialogTitle={modalTitle}
				open={isModalOpen}
				onClose={handleClose}
				primaryAction={handleSave}
				primaryBtnLabel='Save'
				secondaryAction={handleClose}
				secondaryBtnLabel='Cancel'
			>
				{optionsChecked.length > 0 && (
					<OptionsCheckedModalWrapper>
						{chipsWrapper(CHIPS_TO_SHOW_ON_MODAL)}
					</OptionsCheckedModalWrapper>
				)}
				<StyledInput type='text' placeholder='Search...' />
				{listOfOptions()}
			</Modal>
		</>
	);
};

export default AdvancedSelection;
