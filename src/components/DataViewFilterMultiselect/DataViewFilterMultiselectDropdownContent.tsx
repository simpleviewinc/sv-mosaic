import React, { useState, useEffect } from "react";
import debounce from "lodash/debounce";
import xor from "lodash/xor";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import HelpIcon from "@mui/icons-material/Help";
import AddIcon from "@mui/icons-material/Add";

import DataViewFilterDropdownButtons from "@root/components/DataViewFilterDropdownButtons";
import Button from "../Button";
import ButtonRow from "../ButtonRow";
import Spinner from "../Spinner";
import Chip from "@root/components/Chip";
import { SubtitleText } from "../Typography";
import { useMosaicTranslation } from "@root/i18n";
import { PopoverP, StyledHr, StyledVerticalHr, StyledWrapper, StyledComparisonHeader } from "./DataViewFilterMultiselect.styled";
import { StyledTextField } from "@root/components/Field/FormFieldText/FormFieldText.styled";
import InputAdornment from "@mui/material/InputAdornment";
import { DataViewFilterMultiselectDropdownContentProps } from "./DataViewFilterMultiselectTypes";
import CheckboxList from "../CheckboxList";

function DataViewFilterMultiselectDropdownContent(props: DataViewFilterMultiselectDropdownContentProps) {
	const [state, setState] = useState({
		options : [],
		selected : props.selected.map(val => val.value),
		hasMore : false,
		skip : 0,
		keyword : undefined,
		comparison : props.comparison,
		loaded : false,
		listOfChips: props.selected
	});

	const [showCreateOptionButton, setShowCreateOptionButton] = useState(false);

	const { t } = useMosaicTranslation();

	const limit = Math.abs(props.limit) || 25;

	// mark the active comparison
	const activeComparison = props.comparisons ? props.comparisons.find(val => val.value === state.comparison) : undefined;
	const disabled = state.selected.length >= props.selectLimit;

	useEffect(() => {
		async function fetchData() {
			const options = await props.getOptions({ limit, skip : state.skip });

			setState({
				...state,
				options : options.docs,
				hasMore : options.hasMore === true,
				skip : state.skip + limit,
				loaded : true
			});
		}

		fetchData();
	}, []);

	const onClear = function() {
		setState({
			...state,
			selected : [],
			comparison : "in",
			keyword : undefined,
			listOfChips: [],
		});
	}

	const onApply = function() {
		props.onApply({
			value : optionsDisabled ? [] : state.selected,
			comparison : state.comparison
		});
	}

	const handleToggle = option => () => {
		const newSelected = xor(state.selected, [option.value]);

		const newListOfChips = state.listOfChips.filter(chip => chip.value !== option.value);

		props.onChange?.(newListOfChips);

		setState({
			...state,
			selected : newSelected,
			listOfChips: newListOfChips
		});
	}

	const loadMore = function(e) {
		// stash the target to prevent issues with React event persistence in our async callback
		const target = e.currentTarget;

		async function fetchData() {
			const newOptions = await props.getOptions({
				limit,
				skip : state.skip,
				keyword : state.keyword
			});

			setState({
				...state,
				options : [...state.options, ...newOptions.docs],
				hasMore : newOptions.hasMore === true,
				skip : state.skip + limit
			});

			// By blurring on the target we prevent the browser from keeping our load more button in view
			// this ensures that our options scrollable maintains it's previous scroll position
			target.blur();
		}

		fetchData();
	}

	const debouncedSetKeyword = debounce(function(value) {
		setShowCreateOptionButton(!!props.createNewOption && value.trim().length > 0);

		async function fetchData() {
			const newOptions = await props.getOptions({
				limit,
				skip : 0,
				keyword : value
			});

			setState({
				...state,
				options : newOptions.docs,
				hasMore : newOptions.hasMore === true,
				keyword : value === "" ? undefined : value,
				skip : limit
			});
		}

		fetchData();
	}, 200);

	const keywordChange = function(e) {
		debouncedSetKeyword(e.target.value);
	}

	const createOption = async () => {
		const newOption = await props.createNewOption(state.keyword);
		setState({
			...state,
			options : [...state.options, newOption]
		});
	};

	let comparisonDropdown;

	if (props.comparisons) {
		const menuItems = props.comparisons.map(comparison => {
			return {
				label : comparison.label,
				onClick : function() {
					// for exists and not_exists we want to clear the value
					if (["exists", "not_exists"].includes(comparison.value) === true) {
						setState({
							...state,
							selected : []
						});
					}

					setState({
						...state,
						comparison : comparison.value
					});
				}
			}
		});

		const popoverP = {
			"In": "The row must match one of selected option.",
			"Not In": "The row must match none of the selected options.",
			"All": "The row must match all of the selected options.",
			"Exists": "The row must have a value for this filter.",
			"Not Exists": "The row must not have a value for this filter.",
		}

		comparisonDropdown = (
			<div className="comparisonDropdown">
				<StyledComparisonHeader>
					<SubtitleText tag="h3">
						{t("mosaic:DataView.comparison")}
					</SubtitleText>
				</StyledComparisonHeader>
				<ButtonRow>
					<Button
						label={activeComparison.label}
						variant="outlined"
						color="black"
						iconPosition="right"
						mIcon={ExpandMoreIcon}
						menuItems={menuItems}
					/>
					<Button
						variant="icon"
						color="blue"
						mIcon={HelpIcon}
						popover={
							<PopoverP>
								{
									menuItems.map((item, id) => (
										<span key={id}>
											<b>{item.label}</b> - {popoverP[item.label]}<br/>
										</span>
									))
								}
							</PopoverP>
						}
					/>
				</ButtonRow>
			</div>
		);
	}

	// if the user has chosen exists or not_exists then we need to disable the left panel since it isn't valid in that case
	const optionsDisabled = ["exists", "not_exists"].includes(state.comparison);

	// we want to avoid showing the list until the dropdown is fully open and the results are loaded from the db
	const showList = props.isOpen && state.loaded;

	const onChange = async function(selected) {
		const fullOptions = [...selected];
		props.onChange?.(fullOptions);
		setState({
			...state,
			selected : fullOptions.map(option => option.value),
			listOfChips: fullOptions
		});
	}

	return (
		<StyledWrapper>
			<div className="topBlock">
				<div className={`options ${optionsDisabled ? "disabled" : "" }`}>
					<StyledTextField
						autoComplete="off"
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<SearchIcon/>
								</InputAdornment>
							),
							endAdornment: showCreateOptionButton && (
								<InputAdornment position="end">
									<Button
										label='Create'
										variant='text'
										color='teal'
										className='realTeal-icon'
										mIcon={AddIcon}
										onClick={createOption}
									/>
								</InputAdornment>
							)
						}}
						className="searchBar"
						placeholder={props.placeholder || t("mosaic:common.keyword___")}
						autoFocus={true}
						onChange={keywordChange}
						fieldSize="100%"
					/>
					{
						!showList &&
						<Spinner className="spinner"/>
					}
					{
						showList &&
						<CheckboxList
							checked={optionsDisabled ? [] : state.listOfChips}
							options={state.options}
							onChange={onChange}
							disabled={disabled}
						/>
					}
					{
						state.hasMore &&
						<div className="loadContainer">
							<Button
								label={t("mosaic:common.load_more___")}
								color="blue"
								variant="outlined"
								fullWidth={true}
								onClick={loadMore}
							/>
						</div>
					}
				</div>
				<StyledVerticalHr/>
				<div className="selected">
					{comparisonDropdown}
					{
						!optionsDisabled &&
						<>
							<p className='selected-options-title'>{t("mosaic:DataView.selected_options")}</p>
							<div className="chips">
								{
									showList &&
									state.listOfChips?.length > 0 &&
									state.listOfChips.map(option => (
										<Chip
											className="chip"
											key={option.value}
											label={option.label}
											onDelete={handleToggle(option)}
										/>
									))
								}
							</div>
						</>
					}
				</div>
			</div>
			{
				!props.hideButtons &&
				<>
					<StyledHr/>
					<DataViewFilterDropdownButtons
						onApply={onApply}
						onClear={onClear}
					/>
				</>
			}
		</StyledWrapper>
	);
}

export default DataViewFilterMultiselectDropdownContent;
