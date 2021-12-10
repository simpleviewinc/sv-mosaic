import * as React from 'react';
import { ChangeEvent, memo, ReactElement, useCallback, useEffect, useMemo, useState } from 'react';
import { AdvancedSelectionProps } from './AdvancedSelectionTypes';

// Components
import AddIcon from '@material-ui/icons/Add';
import Button from '@root/forms/Button';
import Chip from '@root/components/Chip';
import CheckboxList from '@root/components/CheckboxList';
import Modal from '@root/components/Modal';

// Styles
import { BREAKPOINTS } from '@root/theme/theme';
import {
	AdvancedSelectionWrapper,
	CategoryTitle,
	CheckboxListWrapper,
	ChipsWrapper,
	InputWrapper,
	OptionsCheckedModalWrapper,
	ShowHideSpan,
	StyledExpandLessIcon,
	StyledExpandMoreIcon,
	StyledField,
	StyledInput,
} from './AdvancedSelection.styled';
import { useForm } from '../Form/formUtils';
import { FieldDefProps } from '@root/components/Field';

const MAX_CHIPS_TO_SHOW = 8;

const AdvancedSelection = (props: AdvancedSelectionProps): ReactElement => {
	const {
		checkboxOptions,
		disabled,
		error,
		helperText,
		instructionText,
		label,
		modalTitle,
		groupByCategory = false,
		onChange,
		required,
	} = props;

	const modalReducer = useForm();

	// State variables
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [optionsChecked, setOptionsChecked] = useState([]);
	const [savedOptions, setSavedOption] = useState([]);
	const [showMore, setShowMore] = useState(false);
	const [inputValue, setInputValue] = useState('');
	const [options, setOptions] = useState(checkboxOptions);
	const [isMobileView, setIsMobileView] = useState(false);

	useEffect(() => {
		const setResponsiveness = () => {
			setIsMobileView(window.innerWidth < BREAKPOINTS.mobile);
		};

		setResponsiveness();
		window.addEventListener('resize', setResponsiveness);

		return () => {
			window.removeEventListener('resize', setResponsiveness);
		};
	}, []);

	const filteredList = options.filter(
		(d) =>
			inputValue === '' ||
			d.label.toLowerCase().includes(inputValue.trim().toLowerCase()) ||
			d.category?.toLowerCase().includes(inputValue.trim().toLowerCase())
	);

	/**
   * Fills a Map with the options ensuring that categories
   * are not repeated.
   */
	const optionsWithCategories = useMemo(() => {
		if (groupByCategory) {
			const categories = new Map();
			filteredList.forEach((checkOption) => {
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
	}, [groupByCategory, filteredList]);

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
		const selectedOptions = options.filter((option) => {
			return optionsChecked.indexOf(option.value) >= 0;
		});

		onChange(selectedOptions);
		setIsModalOpen(false);
	};

	/**
   * Closes the modal and checks, if there are no
   * saved options then, empties the optionsChecked array, otherwise
   * optionsChecked remains with the last savedOptions.
   */
	const handleClose = () => {
		setIsModalOpen(false);
		setInputValue('');
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

	useEffect(() => {
		if (!isModalOpen) {
			const selectedOptions = options.filter((option) => {
				return optionsChecked.indexOf(option.value) >= 0;
			});

			onChange(selectedOptions);
			setSavedOption(optionsChecked);
		}
	}, [isModalOpen, optionsChecked, options])

	/**
   * JSX element with the list of selected options displayed
   * as chips.
   */
	const chips = optionsChecked.map((option, idx) => {
		const chipLabel = options.find(
			(checkedOption) => checkedOption.value === option
		);

		return (
			<Chip
				disabled={disabled}
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
	const showCheckboxList = (props) => {
		if (groupByCategory && optionsWithCategories instanceof Map) {
			return Array.from(optionsWithCategories).map(([category, value]) => (
				<CheckboxListWrapper>
					<OptionsCheckedModalWrapper key={`${category}-${value}`} isModalOpen={isModalOpen}>
						{category && <CategoryTitle>{category}</CategoryTitle>}
						<CheckboxList
							options={value}
							checked={optionsChecked}
							onChange={onChangeCheckBoxList}
						/>
					</OptionsCheckedModalWrapper>
				</CheckboxListWrapper>
			));
		} else {
			return (
				<CheckboxListWrapper>
					<CheckboxList
						options={filteredList}
						checked={optionsChecked}
						onChange={onChangeCheckBoxList}
					/>
				</CheckboxListWrapper>
			);
		}
	};

	/**
   * @returns the list of chips and the 'X more' or 'Hide' text
   * if the selected options are greater than MAX_CHIPS_TO_SHOW
   */
	const showListOfChips = useCallback(() => {
		return (
			<OptionsCheckedModalWrapper isModalOpen={isModalOpen}>
				<ChipsWrapper isModalOpen={isModalOpen} isMobileView={isMobileView}>
					{showMore ? chips : chips.slice(0, MAX_CHIPS_TO_SHOW)}
				</ChipsWrapper>
				{optionsChecked.length > MAX_CHIPS_TO_SHOW && (
					<div onClick={handleShowMore}>
						{showMore ? (
							<ShowHideSpan>
								{'Hide'} <StyledExpandLessIcon />
							</ShowHideSpan>
						) : (
							<ShowHideSpan>
								{`${optionsChecked.length - MAX_CHIPS_TO_SHOW} more`}
								<StyledExpandMoreIcon />
							</ShowHideSpan>
						)}
					</div>
				)}
			</OptionsCheckedModalWrapper>
		);
	}, [optionsChecked, showMore, isMobileView, disabled, isModalOpen]);


	/**
   * Handler for the input element
   * @param e input change event
   */
	const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};

	/**
   * Adds an options to the list.
   */
	const createOption = () => {
		const currentOptions = [...options];
		currentOptions.push({
			category: 'New Options',
			value: `${inputValue}_${currentOptions.length}`,
			label: inputValue,
		});
		setOptions(currentOptions);
	};

	const searchInput = () => (
		<InputWrapper isMobileView={isMobileView}>
			<StyledInput
				type='text'
				placeholder='Search...'
				onChange={onInputChange}
				value={inputValue}
			/>
			{inputValue && (
				<Button
					buttonType='blueText'
					disabled={disabled}
					icon={AddIcon}
					onClick={createOption}
				>
					Create
				</Button>
			)}
		</InputWrapper>
	);

	const fields = useMemo(() => [
		{
			name: "listOfChips",
			type: showListOfChips,
		},
		{
			name: "searchInput",
			type: searchInput,
		},
		{
			name: "checkbox",
			type: showCheckboxList,
		},
	] as FieldDefProps[], []);

	useMemo(() => {
		modalReducer?.registerFields(fields);
	}, [fields, modalReducer?.registerFields]);

	return (
		<>
			{optionsChecked.length > 0 && !isModalOpen ? (
				<StyledField
					label={label}
					error={error}
					required={required}
					disabled={disabled}
					instructionText={instructionText}
					helperText={helperText}
					type='advancedSelection'
					className='advanced_selection'
				>
					<AdvancedSelectionWrapper>
						<Button
							buttonType='blueText'
							disabled={disabled}
							icon={AddIcon}
							onClick={handleOpenModal}
						>
							Add Element
						</Button>
						{showListOfChips}
					</AdvancedSelectionWrapper>
				</StyledField>
			) : (
				<Button
					buttonType='secondary'
					disabled={disabled}
					onClick={handleOpenModal}
				>
					ADD ELEMENT
				</Button>
			)}
			<Modal
				title={modalTitle}
				state={modalReducer?.state}
				dispatch={modalReducer?.dispatch}
				fields={fields}
				open={isModalOpen}
				onCancel={handleClose}
				onSubmit={handleSave}
				submitButtonAttrs={{ children: 'Save' }}
				cancelButtonAttrs={{ children: 'Cancel' }}
			/>
			{/* <Modal
				dialogTitle={modalTitle}
				open={isModalOpen}
				onClose={handleClose}
				primaryAction={handleSave}
				primaryBtnLabel='Save'
				secondaryAction={handleClose}
				secondaryBtnLabel='Cancel'
			>
				{optionsChecked.length > 0 && showListOfChips}
				{searchInput}
				{checkboxList}
			</Modal> */}
		</>
	);
};

export default memo(AdvancedSelection);
