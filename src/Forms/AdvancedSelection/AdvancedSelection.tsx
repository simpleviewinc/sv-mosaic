import * as React from 'react';
import { ReactElement, useMemo, useState } from 'react';
import { AdvancedSelectionProps } from './AdvancedSelectionTypes';

// Components
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

const MAX_CHIPS_MODAL = 4;

const AdvancedSelection = (props: AdvancedSelectionProps): ReactElement => {
	const { checkboxOptions, inputTitle, groupByCategory = false } = props;

	// State variables
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [optionsChecked, setOptionsChecked] = useState([]);
	const [showMore, setShowMore] = useState(false);

	const handleShowMore = () => {
		setShowMore(!showMore);
	};

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
		return checkboxOptions;
	}, [groupByCategory, checkboxOptions]);

	const handleOpenModal = () => {
		setIsModalOpen(true);
	};

	const handleClose = () => {
		setIsModalOpen(false);
	};

	const onChange = (checked) => {
		setOptionsChecked(checked);
	};

	const handleSaveSelection = () => {
		console.log('Save selection');
	};

	const onChipDelete = (label) => {
		setOptionsChecked((options) =>
			options.filter((option) => option !== label)
		);
	};

	const listOfChips = optionsChecked.map((option, idx) => {
		const chipLabel = checkboxOptions.find(
			(element) => element.value === option
		);

		return (
			<Chip
				key={`${option}-${idx}`}
				label={chipLabel.label}
				onDelete={() => onChipDelete(option)}
			/>
		);
	});

	const listOfOptions = () => {
		if (groupByCategory && optionsWithCategories instanceof Map) {
			console.log('Options with category:', optionsWithCategories);

			return Array.from(optionsWithCategories).map(([key, value]) => {
				return (
					<div key={`${key}-${value}`}>
						{key && <span>{key}</span>}
						<CheckboxList
							options={value}
							checked={optionsChecked}
							onChange={onChange}
						/>
					</div>
				);
			});
		} else {
			return (
				<CheckboxList
					options={optionsWithCategories}
					checked={optionsChecked}
					onChange={onChange}
				/>
			);
		}
	};

	const getRenderedItems = () => {
		if (showMore) {
			return listOfChips;
		}
		return listOfChips.slice(0, MAX_CHIPS_MODAL);
	};

	return (
		<>
			<Button buttonType='secondary' onClick={handleOpenModal}>
        ADD ELEMENT
			</Button>
			<Modal
				dialogTitle={inputTitle}
				open={isModalOpen}
				onClose={handleClose}
				primaryAction={handleSaveSelection}
				primaryBtnLabel='Save'
				secondaryAction={handleClose}
				secondaryBtnLabel='Cancel'
			>
				{optionsChecked.length > 0 && (
					<OptionsCheckedModalWrapper>
						<ChipsWrapper>{getRenderedItems()}</ChipsWrapper>
						{optionsChecked.length > 4 && (
							<div onClick={handleShowMore}>
								{showMore ? (
									<ShowHideSpan>
										{'Hide'} <StyledExpandLessIcon />
									</ShowHideSpan>
								) : (
									<ShowHideSpan>
										{`${optionsChecked.length - MAX_CHIPS_MODAL} more`} <StyledExpandMoreIcon />
									</ShowHideSpan>
								)}
							</div>
						)}
					</OptionsCheckedModalWrapper>
				)}
				<StyledInput type='text' placeholder='Search...' />
				{listOfOptions()}
			</Modal>
		</>
	);
};

export default AdvancedSelection;
