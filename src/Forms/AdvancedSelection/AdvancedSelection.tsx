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
import { actions, useForm } from '../Form/formUtils';
import { FieldDefProps } from '@root/components/Field';

const MAX_CHIPS_TO_SHOW = 8;

const AdvancedSelection = (props: AdvancedSelectionProps): ReactElement => {
	const {
		inputSettings,
		disabled,
		error,
		helperText,
		instructionText,
		label,
		onChange,
		required,
		value,
	} = props;

	const modalReducer = useForm();

	// State variables
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [showMore, setShowMore] = useState(false);
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

	const filteredList = useMemo(() => {
		if (modalReducer?.state?.data.searchInput) {
			return inputSettings?.checkboxOptions?.filter(
				(d) =>
					modalReducer?.state?.data.searchInput === '' ||
					d.label.toLowerCase().includes(modalReducer?.state?.data.searchInput?.trim().toLowerCase()) ||
					d.category?.toLowerCase().includes(modalReducer?.state?.data.searchInput?.trim().toLowerCase())
			);
		}
		return inputSettings?.checkboxOptions;
	}, [modalReducer?.state?.data.searchInput, inputSettings?.checkboxOptions]);

	/**
   * Fills a Map with the options ensuring that categories
   * are not repeated.
   */
	const optionsWithCategories = useMemo(() => {
		if (inputSettings?.groupByCategory) {
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
	}, [inputSettings?.groupByCategory, filteredList]);

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
		setIsModalOpen(false);
		// setSavedOption(modalReducer?.state?.data['checkboxList']);
		// setSavedOption(optionsChecked);
		// const selectedOptions = options.filter((option) => {
		// 	return modalReducer?.state?.data['checkboxList'].indexOf(option.value) >= 0;
		// });
		// const selectedOptions = options.filter((option) => {
		// 	return optionsChecked.indexOf(option.value) >= 0;
		// });

		onChange(modalReducer?.state?.data['checkboxList']);
	};

	useMemo(() => {
		modalReducer?.registerOnSubmit(handleSave);
	}, [handleSave, modalReducer?.registerOnSubmit]);

	/**
   * Closes the modal and checks, if there are no
   * saved options then, empties the optionsChecked array, otherwise
   * optionsChecked remains with the last savedOptions.
   */
	const handleClose = () => {
		setIsModalOpen(false);
		modalReducer?.dispatch(
			actions.setFieldValue({ name: 'searchInput', value: undefined })
		);
		if (value?.length === 0) {
			modalReducer?.dispatch(
				actions.setFieldValue({ name: 'checkboxList', value: undefined })
			);
			onChange([]);
		}
	};

	/**
   * Creates and array with the checked options
   * @param checked
   */
	const onChangeCheckBoxList = async (checked) => {
		await modalReducer?.dispatch(
			actions.setFieldValue({
				name: 'checkboxList',
				value: checked,
			})
		);
	};

	/**
   * Called when the cross icon of a single chip is clicked.
   * @param label is used to filter the chip from the
   * optionsChecked array.
   */
	const onChipDelete = (label) => {
		const filteredChips = modalReducer?.state.data['checkboxList'].filter((option) => option.label !== label)

		modalReducer?.dispatch(
			actions.setFieldValue({
				name: 'checkboxList',
				value: filteredChips,
			})
		);
	};

	useEffect(() => {
		if (!isModalOpen) {
			// const selectedOptions = options.filter((option) => {
			// 	return modalReducer?.state?.data['checkboxList']?.indexOf(option.value) >= 0;
			// });
			// const selectedOptions = options.filter((option) => {
			// 	return optionsChecked.indexOf(option.value) >= 0;
			// });

			onChange(modalReducer?.state?.data['checkboxList']);
		}
	}, [isModalOpen, modalReducer?.state?.data['checkboxList']]);

	/**
   * JSX element with the list of selected options displayed
   * as chips.
   */
	const chips = useMemo(() => {
		if (isModalOpen)
			return modalReducer?.state?.data?.checkboxList?.map((option, idx) => (
				<Chip
					disabled={disabled}
					key={`${option.label}-${idx}`}
					label={option.label}
					onDelete={() => onChipDelete(option.label)}
				/>
			));

		if (value)
			return value?.map((option, idx) => (
				<Chip
					disabled={disabled}
					key={`${option.label}-${idx}`}
					label={option.label}
					onDelete={() => onChipDelete(option.label)}
				/>
			));

		return [];
	}, [isModalOpen, value, modalReducer.state.data.checkboxList]);

	/**
   * Renders a checkbox list for each category if groupByCategory is true
   * otherwise just displays a single checkbox list with all the options
   * @returns a list of CheckboxList or a single Checkboxlist
   */
	const showCheckboxList = useCallback(() => {
		if (inputSettings?.groupByCategory && optionsWithCategories instanceof Map) {
			return Array.from(optionsWithCategories).map(([category, value]) => (
				<CheckboxListWrapper>
					<OptionsCheckedModalWrapper key={`${category}-${value}`} isModalOpen={isModalOpen}>
						{category && <CategoryTitle>{category}</CategoryTitle>}
						<CheckboxList
							options={value}
							checked={modalReducer?.state?.data?.checkboxList}
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
						checked={modalReducer?.state?.data?.checkboxList}
						onChange={onChangeCheckBoxList}
					/>
				</CheckboxListWrapper>
			);
		}
	}, [
		inputSettings?.groupByCategory,
		optionsWithCategories,
		isModalOpen,
		modalReducer?.state?.data?.checkboxList,
		modalReducer?.state?.data?.searchInput,
		filteredList
	]);

	/**
   * @returns the list of chips and the 'X more' or 'Hide' text
   * if the selected options are greater than MAX_CHIPS_TO_SHOW
   */
	const showListOfChips = useCallback(() => {
		return modalReducer?.state?.data?.checkboxList?.length > 0 ? (
			<OptionsCheckedModalWrapper isModalOpen={isModalOpen}>
				<ChipsWrapper isModalOpen={isModalOpen} isMobileView={isMobileView}>
					{showMore ? chips : chips?.slice(0, MAX_CHIPS_TO_SHOW)}
				</ChipsWrapper>
				{modalReducer?.state?.data['checkboxList']?.length > MAX_CHIPS_TO_SHOW && (
					<div onClick={handleShowMore}>
						{showMore ? (
							<ShowHideSpan>
								{'Hide'} <StyledExpandLessIcon />
							</ShowHideSpan>
						) : (
							<ShowHideSpan>
								{`${modalReducer?.state?.data['checkboxList']?.length - MAX_CHIPS_TO_SHOW} more`}
								<StyledExpandMoreIcon />
							</ShowHideSpan>
						)}
					</div>
				)}
			</OptionsCheckedModalWrapper>
		)
			:
			(
				<></>
			);
	}, [
		modalReducer?.state?.data?.checkboxList,
		isModalOpen,
		showMore,
		chips
	]);


	/**
   * Handler for the input element
   * @param e input change event
   */
	const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		modalReducer?.dispatch(
			actions.setFieldValue({
				name: 'searchInput',
				value: e.target.value
			})
		);
	};

	/**
   * Adds an options to the list.
   */
	const createOption = () => {
		const newOption = {
			category: 'New Options',
			value: `${modalReducer?.state?.data.searchInput}_${inputSettings?.checkboxOptions?.length}`,
			label: modalReducer?.state?.data.searchInput,
		};

		inputSettings?.updateOptionsCb ? inputSettings?.updateOptionsCb(newOption) : undefined;
		// setOptions(currentOptions);
	};

	const searchInput = useCallback(() => (
		<InputWrapper isMobileView={isMobileView}>
			<StyledInput
				type='text'
				placeholder='Search...'
				onChange={onInputChange}
				value={modalReducer?.state?.data.searchInput}
			/>
			{(modalReducer?.state?.data.searchInput && inputSettings?.updateOptionsCb) && (
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
	), [
		isMobileView,
		modalReducer?.state?.data?.searchInput,
		disabled,
		AddIcon,
	]);

	const fields = useMemo(() => [
		{
			name: "listOfChips",
			type: showListOfChips
		},
		{
			name: "searchInput",
			type: searchInput,
		},
		{
			name: "checkboxList",
			type: showCheckboxList,
		},
	] as FieldDefProps[],
		[
			props,
			searchInput,
			showCheckboxList,
			showListOfChips,
		]);

	useMemo(() => {
		modalReducer?.registerFields(fields);
	}, [fields, modalReducer?.registerFields]);

	return (
		<>
			{modalReducer?.state?.data['checkboxList']?.length > 0 && !isModalOpen ? (
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
							style={{ marginBottom: '8px' }}
						>
							Add Element
						</Button>
						{showListOfChips()}
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
				title={inputSettings?.modalTitle}
				state={modalReducer?.state}
				dispatch={modalReducer?.dispatch}
				fields={fields}
				open={isModalOpen}
				onCancel={handleClose}
				onSubmit={handleSave}
				submitButtonAttrs={{ children: 'Save' }}
				cancelButtonAttrs={{ children: 'Cancel' }}
			/>
		</>
	);
};

export default memo(AdvancedSelection);
