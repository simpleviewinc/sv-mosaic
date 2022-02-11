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
	// CategoryTitle,
	CheckboxListWrapper,
	InputWrapper,
	// OptionsCheckedModalWrapper,
	StyledInput
} from './AdvancedSelection.styled';
import AddIcon from '@material-ui/icons/Add';
import CheckboxList from '@root/components/CheckboxList';
import ChipList from './ChipList';
import { optionsWithCategory } from './AdvancedSelectionTypes';

const AdvancedSelectionModal = (props): ReactElement => {
	const {
		value,
		fieldDef,
		onChange,
		isModalOpen,
		isMobileView,
		handleCloseModal,
	} = props;

	const [options, setOptions] = useState<optionsWithCategory[]>([]);
	const [filteredOptions, setFilteredOptions] = useState<optionsWithCategory[]>([]);
	const [firstLoad, setFirstLoad] = useState<boolean>(false);
	const [canLoadMore, setCanLoadMore] = useState<boolean>(true);

	const { state, dispatch, registerFields, registerOnSubmit } = useForm();

	useEffect(() => {
		if (value.length > 0 && isModalOpen)
			dispatch(
				actions.setFieldValue({
					name: 'checkboxList',
					value: value,
				})
			);
	}, [value, isModalOpen]);

	useEffect(() => {
		const setInternalOptions = async () => {
			if (fieldDef?.inputSettings?.checkboxOptions && fieldDef?.inputSettings?.getOptions) {
				let newOptions = fieldDef?.inputSettings?.checkboxOptions;

				const getCb = await fieldDef?.inputSettings?.getOptions({
					offset: 0,
					filter: null,
					limit: fieldDef?.inputSettings?.getOptionsLimit ? fieldDef?.inputSettings?.getOptionsLimit + 1 : null,
				});

				if (getCb.length > fieldDef?.inputSettings?.getOptionsLimit) {
					getCb.pop();
					setCanLoadMore(true)
				} else {
					setCanLoadMore(false);
				}

				newOptions = newOptions.concat(getCb);

				setOptions(options.concat(newOptions));
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
			// setFilteredPage(0);
			a();
		}
	}, [state?.data?.searchInput]);

	const filteredList = useMemo(() => {
		if (state?.data?.searchInput) {
			const trimmedFilter = state?.data?.searchInput?.trim().toLowerCase();
			return filteredOptions.filter(
				(option) => state?.data?.searchInput === '' ||
					option.label.toLowerCase().includes(trimmedFilter) /*||*/
				// (fieldDef?.inputSettings?.groupByCategory &&
				// 	option.category?.toLowerCase().includes(trimmedFilter)
				// )

			);
		}
		return options;
	}, [
		options,
		filteredOptions,
		state?.data?.searchInput,
		// fieldDef?.inputSettings?.groupByCategory
	]);

	// 	/**
	//    * Fills a Map with the options ensuring that categories
	//    * are not repeated.
	//    */
	// 	const optionsWithCategories = useMemo(() => {
	// 		if (fieldDef?.inputSettings?.groupByCategory) {
	// 			const categories = new Map();
	// 			filteredList.forEach((checkOption) => {
	// 				if (!categories.has(checkOption.category)) {
	// 					const categoryOptions = [checkOption];
	// 					categories.set(checkOption.category, categoryOptions);
	// 				} else {
	// 					const categoryOptions = categories.get(checkOption.category);
	// 					categoryOptions.push(checkOption);
	// 					categories.set(checkOption.category, categoryOptions);
	// 				}
	// 			});
	// 			return categories;
	// 		}
	// 	}, [fieldDef?.inputSettings?.groupByCategory, filteredList]);

	useEffect(() => {
		if (!isModalOpen) {
			onChange(state?.data.checkboxList);
		}
	}, [isModalOpen, state?.data.checkboxList]);

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

			await dispatch(
				actions.setFieldValue({
					name: 'checkboxList',
					value: checked,
				})
			);
		};

		const updateOptionsList = () => {
			// if (state?.data?.searchInput?.length > 0) {
			// 	getMoreOptions();
			// 	setFilteredPage(filteredPage + 1);
			// } else {
			getMoreOptions();
			// }
		}

		// if (fieldDef?.inputSettings?.groupByCategory && optionsWithCategories instanceof Map) {
		// 	return Array.from(optionsWithCategories).map(([category, value]) => (
		// 		<CheckboxListWrapper key={`${category}-${value}`}>
		// 			<OptionsCheckedModalWrapper key={`${category}-${value}`} isModalOpen={isModalOpen}>
		// 				{category && <CategoryTitle>{category}</CategoryTitle>}
		// 				<CheckboxList
		// 					options={value}
		// 					checked={props.value}
		// 					onChange={onChangeCheckBoxList}
		// 					disabled={fieldDef?.disabled}
		// 				/>
		// 			</OptionsCheckedModalWrapper>
		// 		</CheckboxListWrapper>
		// 	));
		// } else {
		return (
			<>
				<CheckboxListWrapper>
					<CheckboxList
						options={filteredList}
						checked={props.value}
						onChange={onChangeCheckBoxList}
						disabled={fieldDef?.disabled}
					/>
				</CheckboxListWrapper>
				<br />
				<Button
					buttonType='secondary'
					disabled={fieldDef?.disabled || !canLoadMore}
					onClick={updateOptionsList}
				>
					{canLoadMore ? 'Load more' : "Can't load more options"}
				</Button>
			</>
		);
		// }
	};

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
		const createOption = async () => {
			const newOption: optionsWithCategory = {
				category: 'New Options',
				value: `${props.value}_${options?.length}`,
				label: props.value,
			};

			await fieldDef?.inputSettings?.createNewOption(newOption);
			setFilteredOptions([...filteredOptions, newOption]);
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
				{props.value && fieldDef?.inputSettings?.createNewOption && (
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

	const deleteSelectedOption = (newOptions) => {
		dispatch(
			actions.setFieldValue({
				name: 'checkboxList',
				value: newOptions,
			})
		);
	}

	const fields = useMemo(
		() => (
			[
				{
					name: "listOfChips",
					type: () => <ChipList
						disabled={fieldDef?.disabled}
						getSelected={fieldDef?.inputSettings?.getSelected}
						isModalOpen={isModalOpen}
						isMobileView={isMobileView}
						selectedOptions={state?.data?.checkboxList}
						deleteSelectedOption={deleteSelectedOption}
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
		fieldDef
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

		onChange(state.data.checkboxList);
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

		dispatch(
			actions.setFieldValue({ name: 'searchInput', value: undefined })
		);

		if (value?.length === 0) {
			dispatch(
				actions.setFieldValue({ name: 'checkboxList', value: undefined })
			);
			onChange(undefined);
		}
	};

	const getMoreOptions = async () => {
		if (fieldDef?.inputSettings?.getOptions) {
			let newOptions = [];
			newOptions = await fieldDef?.inputSettings?.getOptions({
				offset: filteredList ? filteredList.length : 0,
				limit: fieldDef?.inputSettings?.getOptionsLimit ? fieldDef?.inputSettings?.getOptionsLimit + 1 : null,
				filter: state?.data?.searchInput ? state?.data?.searchInput : undefined,
			});

			if (newOptions.length > fieldDef?.inputSettings?.getOptionsLimit) {
				newOptions.pop();
				setCanLoadMore(true)
			} else {
				setCanLoadMore(false);
			}

			if (!state?.data?.searchInput) {
				setOptions(options.concat(newOptions));
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