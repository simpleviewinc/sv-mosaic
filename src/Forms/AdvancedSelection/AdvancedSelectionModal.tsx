import { FieldDef } from '@root/components/Field';
import Modal from '@root/components/Modal';
import * as React from 'react';
import {
	ChangeEvent,
	memo,
	ReactElement,
	useCallback,
	useEffect,
	useMemo,
	useState
} from 'react';
import Button from '../Button';
import { actions, useForm } from '../Form/formUtils';
import {
	CategoryTitle,
	CheckboxListWrapper,
	InputWrapper,
	OptionsCheckedModalWrapper,
	StyledInput
} from './AdvancedSelection.styled';
import AddIcon from '@material-ui/icons/Add';
import CheckboxList from '@root/components/CheckboxList';
import Chip from '@root/components/Chip';
import ChipList from './ChipList';
import { BREAKPOINTS } from '@root/theme/theme';
import { optionsWithCategory } from './AdvancedSelectionTypes';

const AdvancedSelectionModal = (props): ReactElement => {
	const {
		value,
		fieldDef,
		onChange,
		isModalOpen,
		handleCloseModal,
	} = props;

	const [isMobileView, setIsMobileView] = useState(false);
	const [options, setOptions] = useState<optionsWithCategory[]>([]);
	const [checkedFullInfo, setCheckedFullInfo] = useState<optionsWithCategory[]>([]);
	const [filteredOptions, setFilteredOptions] = useState<optionsWithCategory[]>([]);
	const [filteredPage, setFilteredPage] = useState<number>(0);
	const [firstLoad, setFirstLoad] = useState<boolean>(false);
	const [currentPage, setCurrentPage] = useState<number>(0);

	const { state, dispatch, registerFields, registerOnSubmit } = useForm();

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

	useEffect(() => {
		const setInternalOptions = async () => {
			if (fieldDef?.inputSettings?.checkboxOptions && fieldDef?.inputSettings?.getOptions) {
				let newOptions = fieldDef?.inputSettings?.checkboxOptions;

				newOptions = newOptions.concat(await fieldDef?.inputSettings?.getOptions({
					currentPage,
					filter: null,
					limit: fieldDef?.inputSettings?.getOptionsLimit ? fieldDef?.inputSettings?.getOptionsLimit : null,
					groupByCategory: fieldDef?.inputSettings?.groupByCategory ? fieldDef?.inputSettings?.groupByCategory : undefined,
				}));

				setOptions(options.concat(newOptions));
				setCurrentPage(currentPage + 1);
				setFirstLoad(true);

			} else if (fieldDef?.inputSettings?.checkboxOptions) {
				setOptions(options.concat(fieldDef?.inputSettings?.checkboxOptions));
				setFirstLoad(true);

			} else if (fieldDef?.inputSettings?.getOptions) {
				await getMoreOptions();

				setFirstLoad(true);
			}
		}

		if (isModalOpen && !firstLoad)
			setInternalOptions();
	}, [
		isModalOpen,
		fieldDef?.inputSettings?.checkboxOptions,
		fieldDef?.inputSettings?.getOptions,
		fieldDef?.inputSettings?.getOptionsLimit
	]);

	const debounce = (func, timeout = 300) => {
		let timer;
		return (...args) => {
			clearTimeout(timer);
			timer = setTimeout(() => { func.apply(this, args); }, timeout);
		};
	}

	const a = debounce(() => getMoreOptions());

	useEffect(() => {
		if (state?.data?.searchInput?.length > 0) {
			setFilteredPage(0);
			a();
		}
	}, [state?.data?.searchInput]);

	// 	/**
	//    * Used to toggle the state of showMore to
	//    * conditionally display 'X more' or 'Hide'.
	//    */
	// 	 const handleShowMore = () => {
	// 		setShowMore(!showMore);
	// 	};

	const filteredList = useMemo(() => {
		if (state?.data?.searchInput) {
			const trimmedFilter = state?.data?.searchInput?.trim().toLowerCase();
			return filteredOptions.filter(
				(option) => state?.data?.searchInput === '' ||
					option.label.toLowerCase().includes(trimmedFilter) ||
					(fieldDef?.inputSettings?.groupByCategory &&
						option.category?.toLowerCase().includes(trimmedFilter)
					)

			);
		}
		return options;
	}, [
		options,
		filteredOptions,
		state?.data?.searchInput,
		fieldDef?.inputSettings?.groupByCategory
	]);

	/**
   * Fills a Map with the options ensuring that categories
   * are not repeated.
   */
	const optionsWithCategories = useMemo(() => {
		if (fieldDef?.inputSettings?.groupByCategory) {
			const categories = new Map();
			filteredList/*options*/.forEach((checkOption) => {
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
	}, [fieldDef?.inputSettings?.groupByCategory, filteredList]);

	// 	/**
	//    * Called when the cross icon of a single chip is clicked.
	//    * @param optionValue is used to filter the chip from the
	//    * optionsChecked array.
	//    */
	// 	 const onChipDelete = (optionValue) => {
	// 		const filteredChips = state.data['checkboxList'].filter((option) => option !== optionValue)

	// 		dispatch(
	// 			actions.setFieldValue({
	// 				name: 'checkboxList',
	// 				value: filteredChips,
	// 			})
	// 		);
	// 	};

	useEffect(() => {
		if (!isModalOpen) {
			onChange(state?.data['checkboxList']);
		}
	}, [isModalOpen, state?.data['checkboxList']]);

	/**
	* Renders a checkbox list for each category if groupByCategory is true
	* otherwise just displays a single checkbox list with all the options
	* @returns a list of CheckboxList or a single Checkboxlist
	*/
	const showCheckboxList = (props): ReactElement[] | ReactElement => {
		/**
		 * Creates and array with the checked options
		 * @param checked
		 */
		const onChangeCheckBoxList = async (checked) => {
			if (state?.data?.searchInput?.length > 0) {
				setCheckedFullInfo(mapListOfOptions(checked, filteredList));
			} else {
				setCheckedFullInfo(mapListOfOptions(checked, options));
			};

			await dispatch(
				actions.setFieldValue({
					name: 'checkboxList',
					value: checked,
				})
			);
		};

		const updateOptionsList = () => {
			if (state?.data?.searchInput?.length > 0) {
				getMoreOptions();
				setFilteredPage(filteredPage + 1);
			} else {
				getMoreOptions();
			}
		}

		if (fieldDef?.inputSettings?.groupByCategory && optionsWithCategories instanceof Map) {
			return Array.from(optionsWithCategories).map(([category, value]) => (
				<CheckboxListWrapper key={`${category}-${value}`}>
					<OptionsCheckedModalWrapper key={`${category}-${value}`} isModalOpen={isModalOpen}>
						{category && <CategoryTitle>{category}</CategoryTitle>}
						<CheckboxList
							options={value}
							checked={props.value}
							onChange={onChangeCheckBoxList}
							disabled={fieldDef?.disabled}
						/>
					</OptionsCheckedModalWrapper>
				</CheckboxListWrapper>
			));
		} else {
			return (
				<>
					<CheckboxListWrapper>
						<CheckboxList
							options={filteredList/*options*/}
							checked={props.value}
							onChange={onChangeCheckBoxList}
							disabled={fieldDef?.disabled}
						/>
					</CheckboxListWrapper>
					<br />
					<Button
						buttonType='secondary'
						disabled={fieldDef?.disabled}
						onClick={updateOptionsList}
					>
						Load more
					</Button>
				</>
			);
		}
	};

	/**
	 * Maps over a list of options.
	 * @param options to map over.
	 * @returns an array of options objects
	 * with a label/value structure.
	 */
	const mapListOfOptions = (optionsParam, list = checkedFullInfo) => {
		if (!optionsParam) return;

		return optionsParam.map((option) =>
			list/*options*/.find((o) => o.value === option)
		);
	};

	// 	/**
	//    * JSX element with the list of selected options displayed
	//    * as chips.
	//    */
	// 	 const chips = useMemo(() => {
	// 		let optionsChecked = [];
	// 		if (isModalOpen) {
	// 			optionsChecked = mapListOfOptions(state?.data?.checkboxList);
	// 		}

	// 		if (value) {
	// 			optionsChecked = mapListOfOptions(value);
	// 		}

	// 		if (optionsChecked?.length > 0) {
	// 			return optionsChecked?.map((option, idx) => (
	// 				<Chip
	// 					disabled={fieldDef?.disabled}
	// 					key={`${option.label}-${idx}`}
	// 					label={option.label}
	// 					onDelete={() => onChipDelete(option.value)}
	// 				/>
	// 			));
	// 		}
	// 		return optionsChecked;
	// 	}, [isModalOpen, value, modalReducer.state.data.checkboxList, fieldDef?.disabled]);

	// /**
	// * @returns the list of chips and the 'X more' or 'Hide' text
	// * if the selected options are greater than MAX_CHIPS_TO_SHOW
	// */
	// const showListOfChips = useCallback((): ReactElement => {
	// 	return state?.data?.checkboxList?.length > 0 && (
	// 		<OptionsCheckedModalWrapper isModalOpen={isModalOpen}>
	// 			<ChipsWrapper isModalOpen={isModalOpen} isMobileView={isMobileView}>
	// 				{showMore ? chips : chips?.slice(0, MAX_CHIPS_TO_SHOW)}
	// 			</ChipsWrapper>
	// 			{state?.data['checkboxList']?.length > MAX_CHIPS_TO_SHOW && (
	// 				<div onClick={handleShowMore}>
	// 					{showMore ? (
	// 						<ShowHideSpan>
	// 							{'Hide'} <StyledExpandLessIcon />
	// 						</ShowHideSpan>
	// 					) : (
	// 						<ShowHideSpan>
	// 							{`${state?.data['checkboxList']?.length - MAX_CHIPS_TO_SHOW} more`}
	// 							<StyledExpandMoreIcon />
	// 						</ShowHideSpan>
	// 					)}
	// 				</div>
	// 			)}
	// 		</OptionsCheckedModalWrapper>
	// 	)
	// }, [
	// 	state?.data?.checkboxList,
	// 	isModalOpen,
	// 	showMore,
	// 	chips,
	// 	fieldDef?.disabled
	// ]);

	const searchInput = useCallback((props): ReactElement => {
		/**
		 * Handler for the input element
		 * @param e input change event
		 */
		const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
			dispatch(
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
			const newOption: optionsWithCategory = {
				category: 'New Options',
				value: `${props.value}_${options?.length}`,
				label: props.value,
			};

			setOptions([...options, newOption]);
		};

		return (
			<InputWrapper isMobileView={isMobileView}>
				<StyledInput
					type='text'
					placeholder='Search...'
					onChange={onInputChange}
					value={props.value ? props.value : ''}
					disabled={fieldDef?.disabled}
				/>
				{value /*&& fieldDef?.inputSettings?.updateOptionsCb*/ && (
					<Button
						buttonType='blueText'
						disabled={fieldDef?.disabled}
						icon={AddIcon}
						onClick={createOption}
					>
						Create
					</Button>
				)}
			</InputWrapper>
		)
	}, [fieldDef?.disabled, options]);

	const fields = useMemo(
		() => (
			[
				{
					name: "listOfChips",
					type: () => <ChipList
						state={state}
						dispatch={dispatch}
						fieldDef={fieldDef}
						isModalOpen={isModalOpen}
						isMobileView={isMobileView}
						mapListOfOptions={mapListOfOptions}
						advancedSelectValue={value}
					/>
				},
				{
					name: "searchInput",
					type: searchInput,
				},
				{
					name: "checkboxList",
					type: showCheckboxList,
				},
			] as FieldDef[]
		), [
		searchInput,
		showCheckboxList,
		// showListOfChips,
		fieldDef?.disabled
	]
	);

	useMemo(() => {
		registerFields(fields);
	}, [fields, registerFields]);

	/**
   * Modal is closed when the Save button is clicked.
   */
	const handleSave = () => {
		handleCloseModal();
		// setIsModalOpen(false);

		onChange(state?.data['checkboxList']);
	};

	useMemo(() => {
		registerOnSubmit(handleSave);
	}, [handleSave, registerOnSubmit]);

	/**
   * Closes the modal and checks, if there are no
   * saved options then, empties the optionsChecked array, otherwise
   * optionsChecked remains with the last savedOptions.
   */
	const handleClose = () => {
		handleCloseModal();
		// setIsModalOpen(false);
		dispatch(
			actions.setFieldValue({ name: 'searchInput', value: undefined })
		);
		if (value?.length === 0) {
			dispatch(
				actions.setFieldValue({ name: 'checkboxList', value: undefined })
			);
			onChange([]);
		}
	};

	const getMoreOptions = async () => {
		if (fieldDef?.inputSettings?.getOptions) {
			let newOptions = [];
			newOptions = await fieldDef?.inputSettings?.getOptions({
				currentPage: !state?.data?.searchInput ? currentPage : filteredPage,
				limit: fieldDef?.inputSettings?.getOptionsLimit ? fieldDef?.inputSettings?.getOptionsLimit : null,
				filter: state?.data?.searchInput ? state?.data?.searchInput : undefined,
				groupByCategory: fieldDef?.inputSettings?.groupByCategory ? fieldDef?.inputSettings?.groupByCategory : undefined,
			});

			if (!state?.data?.searchInput) {
				setOptions(options.concat(newOptions));
				setCurrentPage(currentPage + 1);
			} else {
				if (newOptions.length > options.length)
					setFilteredOptions(options.concat(newOptions));
				else
					setFilteredOptions(newOptions);
			}
		}
	}

	return (
		<Modal
			title={fieldDef?.inputSettings?.modalTitle}
			state={state}
			dispatch={dispatch}
			fields={fields}
			open={isModalOpen}
			onCancel={handleClose}
			onSubmit={handleSave}
			submitButtonAttrs={{ children: 'Save' }}
			cancelButtonAttrs={{ children: 'Cancel' }}
		/>
	);
};

export default memo(AdvancedSelectionModal);