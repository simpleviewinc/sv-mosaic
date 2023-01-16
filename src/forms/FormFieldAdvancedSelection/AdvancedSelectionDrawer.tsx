import * as React from "react";
import { ButtonProps } from "@root/components/Button";
import { FieldDef } from "@root/components/Field";
import {
	ChangeEvent,
	memo,
	ReactElement,
	useCallback,
	useEffect,
	useMemo,
	useState,
	useRef
} from "react";
import Button from "../../components/Button";
import Form, { formActions, useForm } from "@root/components/Form";
import {
	InputWrapper,
	StyledInput,
} from "./AdvancedSelection.styled";
import AddIcon from "@mui/icons-material/Add";
import ChipList from "./ChipList";
import { FormFieldCheckboxDef } from "../FormFieldCheckbox";
import LoadMoreButton from "./LoadMoreButton";
import { AdvanceSelectionDrawerPropTypes } from ".";
import _ from "lodash";
import { MosaicLabelValue } from "@root/types";
import { FormDrawerWrapper } from "../shared/styledComponents";

const AdvancedSelectionDrawer = (props: AdvanceSelectionDrawerPropTypes): ReactElement => {
	const {
		value,
		fieldDef,
		onChange,
		isModalOpen,
		isMobileView,
		handleClose,
		handleUnsavedChanges,
		dialogOpen,
		handleDialogClose,
	} = props;

	const [options, setOptions] = useState<MosaicLabelValue[]>([]);
	const [canLoadMore, setCanLoadMore] = useState<boolean>(true);
	const [filteredOptions, setFilteredOptions] = useState<MosaicLabelValue[]>([]);
	const [checkboxListDisabled, setCheckboxListDisabled] = useState(fieldDef.disabled);
	const [topComponentDrawerHeight, setTopComponentDrawerHeight] = useState("0px");
	const [formLayoutPadding, setFormLayoutPadding] = useState("0px");

	const chipListRef:{ current?: HTMLDivElement } = useRef();
	const loadMoreButtonRef:{ current?: HTMLDivElement } = useRef();
	const searchInputRef:{ current?: HTMLDivElement } = useRef();

	const { state, dispatch } = useForm();

	const chipListHeight: string = chipListRef?.current?.offsetHeight
		? `${chipListRef?.current?.offsetHeight}px - 30px`
		: "0px";

	const loadMoreButtonMarginTop: string = loadMoreButtonRef?.current
		? window?.getComputedStyle(loadMoreButtonRef.current).getPropertyValue("margin-top")
		: "0px";

	const loadMoreButtonHeight: string = fieldDef?.inputSettings?.getOptions && loadMoreButtonRef?.current?.offsetHeight
		? `${loadMoreButtonRef?.current?.offsetHeight}px - ${loadMoreButtonMarginTop}`
		: "0px";

	const searchInputMarginTop: string = searchInputRef?.current
		? window?.getComputedStyle(searchInputRef.current).getPropertyValue("margin-top")
		: "0px";

	const searchInputMarginBottom: string = searchInputRef?.current
		? window?.getComputedStyle(searchInputRef.current).getPropertyValue("margin-bottom")
		: "0px";

	const searchInputHeight: string = searchInputRef?.current?.offsetHeight
		? `${searchInputRef?.current?.offsetHeight}px - ${searchInputMarginTop} - ${searchInputMarginBottom}`
		: "0px";

	useEffect(() => {
		if (state.data.listOfChips !== undefined) {
			handleUnsavedChanges(!_.isEqual([...value], state?.data?.listOfChips));
		}
	}, [state.data.listOfChips, value]);

	/**
	 * Reusable function that updates the "checkboxList" field by dispatching a new set of options.
	 * @param newOptions
	 */
	const dispatchCheckboxList = async (newOptions: MosaicLabelValue[]) => {
		await dispatch(
			formActions.setFieldValue({
				name: "checkboxList",
				value: newOptions
			})
		);
	};

	/**
	 * Reusable function that updates the "listOfChips" field by dispatching a new set of options.
	 * @param newOptions
	 */
	const dispatchChipList = async (newOptions: MosaicLabelValue[]) => {
		await dispatch(
			formActions.setFieldValue({
				name: "listOfChips",
				value: newOptions
			})
		);
	};

	const disableCheckboxList = useCallback((optionsToCompare: MosaicLabelValue[]) => {
		const selectLimit =  fieldDef?.inputSettings?.selectLimit;

		if (selectLimit === "" || isNaN(selectLimit) || selectLimit === undefined || selectLimit < 0) return;

		const disableList = selectLimit === 0 || optionsToCompare?.length >= selectLimit;
		setCheckboxListDisabled(disableList);

	}, [fieldDef?.inputSettings?.selectLimit]);

	/**
	 * Sets the selected options when the user
	 * wants to add more or remove one previously
	 * selected.
	 */
	useEffect(() => {
		let isMounted = true;
		if (value?.length > 0 && isModalOpen) {
			if (isMounted) {
				disableCheckboxList(value);
				dispatchChipList(value);
			}
		}

		return () => {
			isMounted = false;
		}
	}, [value, isModalOpen]);

	/**
	 * Loads the options provided  either from
	 * a database or locally.
	 */
	useEffect(() => {
		let isMounted = true;
		const setInternalOptions = async () => {
			if (fieldDef?.inputSettings?.options) {
				setOptions(options.concat(fieldDef?.inputSettings?.options));
				setFilteredOptions(filteredOptions.concat(fieldDef.inputSettings.options));
			} else if (fieldDef?.inputSettings?.getOptions) {
				await getMoreOptions();
			}
		}

		if (isMounted) {
			setInternalOptions();
		}

		return () => {
			isMounted = false;
		}
	}, [
		fieldDef?.inputSettings?.options,
		fieldDef?.inputSettings?.getOptions,
		fieldDef?.inputSettings?.getOptionsLimit
	]);

	const getMoreOptions = async (clicked = false) => {
		if (fieldDef?.inputSettings?.getOptions) {
			const searchInput = state?.data?.searchInput;

			let newOptions = [];
			if (clicked === true) {
				newOptions = await fieldDef?.inputSettings?.getOptions({
					offset: filteredList ? filteredList.length : 0,
					limit: fieldDef?.inputSettings?.getOptionsLimit ? +fieldDef?.inputSettings?.getOptionsLimit + 1 : null,
					filter: searchInput?.length > 0 ? searchInput : undefined,
				});
			} else {
				newOptions = await fieldDef?.inputSettings?.getOptions({
					offset: 0,
					limit: fieldDef?.inputSettings?.getOptionsLimit ? +fieldDef?.inputSettings?.getOptionsLimit + 1 : null,
					filter: searchInput?.length > 0 ? searchInput : undefined,
				});
			}

			if (newOptions.length > +fieldDef?.inputSettings?.getOptionsLimit) {
				newOptions.pop();
				setCanLoadMore(true);
			} else {
				setCanLoadMore(false);
			}

			if (!clicked && (searchInput?.trim() === "" || !searchInput)) {
				setOptions(newOptions);
			}

			if (clicked && (searchInput?.trim() === "" || !searchInput)) {
				setOptions(options.concat(newOptions));
			}

			if (!clicked && searchInput?.trim().length > 0) {
				setFilteredOptions(newOptions);
			}

			if (clicked && searchInput?.trim().length > 0) {
				setFilteredOptions(_.union(filteredOptions, newOptions));
			}
		}
	};

	const getMoreOptionsDebounced = _.debounce(getMoreOptions, 300);

	useEffect(() => {
		let isMounted = true;
		isMounted && getMoreOptionsDebounced();
		return () => {
			isMounted = false;
			getMoreOptionsDebounced.cancel();
		}
	}, [state.data.searchInput]);

	const loadMoreOptions = () => {
		getMoreOptions(true);
	}

	const filteredList = useMemo(() => {
		const searchInput = state?.data?.searchInput;

		if (searchInput) {
			const trimmedFilter = searchInput?.trim().toLowerCase();
			return filteredOptions.filter(
				(option) => searchInput === "" || option.label.toLowerCase().includes(trimmedFilter)
			);
		}

		return options;
	}, [
		options,
		filteredOptions,
		state?.data?.searchInput,
	]);

	const searchInput = useCallback((props): ReactElement => {
		const searchKeyword = props?.value?.trim();

		/**
		 * Handler for the input element
		 * @param e input change event
		 */
		const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
			dispatch(
				formActions.setFieldValue({
					name: "searchInput",
					value: e.target.value
				})
			);
		};

		/**
		 * Adds an options to the list.
		 */
		const createOption = async () => {
			const canBeCreated = searchKeyword.length > 0;
			if (canBeCreated) {
				const newOption = await fieldDef?.inputSettings?.createNewOption(searchKeyword);

				setFilteredOptions([...filteredOptions, newOption]);
				setOptions([...options, newOption]);
			}
		};

		return (
			<InputWrapper ref={searchInputRef} isMobileView={isMobileView} createNewOption={props.value && fieldDef?.inputSettings?.createNewOption}>
				<StyledInput
					type='text'
					placeholder='Search...'
					onChange={onInputChange}
					value={props?.value ?? ""}
					disabled={fieldDef?.disabled}
				/>
				{props.value && fieldDef?.inputSettings?.createNewOption && (
					<Button
						label='Create'
						variant='text'
						color='teal'
						disabled={fieldDef?.disabled}
						mIcon={AddIcon}
						onClick={createOption}
					/>
				)}
			</InputWrapper>
		)
	}, [fieldDef?.disabled, options]);

	const deleteSelectedOption = (newOptions: MosaicLabelValue[]) => {
		disableCheckboxList(newOptions);
		dispatchChipList(newOptions);
	}

	/**
	 * Function executed whenever the checkboxes are clicked.
	 * @param checkedOptions
	 */
	const checkboxListChanged = async (checkedOptions: MosaicLabelValue[]) => {
		const cleanCheckedOptions = checkedOptions.filter(checkedOption => checkedOption !== undefined);
		let fullOptions = [...cleanCheckedOptions];

		if (state.data?.listOfChips) {
			const chipsNotInList = state.data.listOfChips.filter(option => !filteredList.some(chip => chip.value === option.value));
			fullOptions = [...chipsNotInList, ...cleanCheckedOptions];
		}

		disableCheckboxList(fullOptions);
		dispatchChipList(fullOptions);
	};

	/**
	 * Whenever the state of the list of chips is updated
	 * its value is set to the checkbox list.
	 */
	useEffect(() => {
		dispatchCheckboxList(state.data.listOfChips);
	}, [state.data.listOfChips]);

	const fields = useMemo(
		() =>
			[
				{
					name: "listOfChips",
					type: ChipList,
					disabled: fieldDef?.disabled,
					ref: chipListRef,
					inputSettings: {
						isModalOpen,
						isMobileView,
						deleteSelectedOption,
					}
				},
				{
					name: "searchInput",
					type: searchInput,
				},
				{
					name: "checkboxList",
					type: "checkbox",
					disabled: fieldDef?.disabled || checkboxListDisabled,
					style: {
						height: `calc(100vh - ${topComponentDrawerHeight} - ${formLayoutPadding} - ${searchInputHeight} - ${chipListHeight} - ${loadMoreButtonHeight})`,
						overflowY: "auto",
						flexWrap: "nowrap",
						width: "100%",
					},
					className: "checkbox-list-field-wrapper",
					size: "100%",
					onChangeCb: checkboxListChanged,
					inputSettings: {
						options:
							(fieldDef?.inputSettings?.options && filteredList) ||
							(fieldDef?.inputSettings?.getOptions && (() => filteredList)),
					},
				} as FieldDef<FormFieldCheckboxDef>,
				{
					name: "loadMoreButton",
					type: LoadMoreButton,
					disabled: fieldDef?.disabled,
					ref: loadMoreButtonRef,
					inputSettings: {
						canLoadMore,
						getMoreOptions: loadMoreOptions,
						parentInputSettings: fieldDef?.inputSettings,
					},
				},
			] as FieldDef[],
		[
			filteredList,
			searchInput,
			fieldDef,
			canLoadMore,
			getMoreOptions,
			isModalOpen,
			isMobileView,
		]
	);

	/**
	 * Modal is closed when the Save button is clicked.
	 */
	const onSubmit = async () => {
		const { valid } = await dispatch(formActions.submitForm());
		if (!valid) return;

		await onChange(state?.data?.listOfChips);

		handleClose(true);
	};

	const buttons: ButtonProps[] = [
		{
			label: "Cancel",
			onClick: () => handleClose(),
			color: "gray",
			variant: "outlined"
		},
		{
			label: "Save",
			onClick: onSubmit,
			color: "yellow",
			variant: "contained"
		}
	];

	return (
		<FormDrawerWrapper className="advancedSelection">
			<Form
				title={fieldDef?.label}
				buttons={buttons}
				type='drawer'
				state={state}
				dispatch={dispatch}
				fields={fields}
				dialogOpen={dialogOpen}
				handleDialogClose={handleDialogClose}
				setTopComponentDrawerHeight={setTopComponentDrawerHeight}
				setFormLayoutPadding={setFormLayoutPadding}
			/>
		</FormDrawerWrapper>
	);
};

export default memo(AdvancedSelectionDrawer);
