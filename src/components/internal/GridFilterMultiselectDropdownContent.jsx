import React, { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import Chip from "@material-ui/core/Chip";
import InputBase from "@material-ui/core/InputBase";
import { debounce, xor } from "lodash";
import jsvalidator from "jsvalidator";

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SearchIcon from "@material-ui/icons/Search";
import HelpIcon from '@material-ui/icons/Help';

import GridFilterDropdownButtons from "../GridFilterDropdownButtons.jsx";
import Button from "../Button.jsx";
import ButtonRow from "../ButtonRow.jsx";
import Spinner from "../Spinner.jsx";
import CheckboxList from "../CheckboxList.jsx";
import theme from "../../utils/theme.js";

const StyledWrapper = styled.div`
	& > .topBlock {
		display: flex;
		height: 400px;
		width: 600px;
	}
	
	& > .topBlock > .options > .searchBar {
		position: sticky;
		top: 0;
		display: flex;
		align-items: center;
		padding-left: 14px;
		z-index: 1;
		background: white;
	}
	
	& > .topBlock > .options > .searchBar > svg {
		padding-right: 8px;
	}
	
	& > .topBlock > .options > .searchBar > .input {
		font-family: ${theme.fontFamily};
		line-height: 2rem;
	}
	
	& > .topBlock > .options {
		overflow-y: scroll;
		flex: 2;
		position: relative;
		transition: opacity .5s;
		padding-right: 10px;
	}
	
	& > .topBlock > .options.disabled {
		opacity: .4;
		pointer-events: none;
	}
	
	& > .topBlock > .options .listItem {
		padding-top: 0px;
		padding-bottom: 0px;
	}
	
	& > .topBlock > .options .listItemIcon {
		min-width: auto;
	}
	
	& > .topBlock > .options > .spinner {
		margin-top: 10px;
		margin-bottom: 10px;
	}
	
	& > .topBlock > .options .checked {
		color: ${theme.colors.blue};
	}
	
	& > .topBlock > .selected {
		padding: 0px 0px 0px 15px;
		width: 200px;
		overflow-y: auto;
	}
	
	& .comparisonDropdown {
		margin-bottom: 1rem;
	}
	
	& .chip {
		display: flex;
		background-color: ${theme.colors.blue}13;
		margin-bottom: 4px;
		justify-content: space-between;
		font-family: ${theme.fontFamily};
		height: 33px;
	}
	
	& .chip:focus {
		background-color: ${theme.colors.blue}13;
	}
	
	& .chip > span {
		flex: 1;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
		display: block;
	}
`

const PopoverP = styled.p`
	margin: 0px;
`

const limit = 25;

function GridFilterMultiselectDropdownContent(props) {
	jsvalidator.validate(props, {
		type : "object",
		schema : [
			{
				name : "value",
				type : "array"
			},
			{
				name : "comparison",
				type : "string",
				required : true
			},
			{
				name : "comparisons",
				type : "array"
			},
			{
				name : "getOptions",
				type : "function",
				required : true
			},
			{
				name : "selected",
				type : "array",
				required : true
			},
			{
				name : "isOpen",
				type : "boolean",
				required : true
			},
			{
				name : "onClose",
				type : "function",
				required : true
			},
			{
				name : "onApply",
				type : "function",
				required : true
			}
		],
		allowExtraKeys : false,
		throwOnInvalid : true
	});
	
	const [state, setState] = useState({
		options : [],
		selected : props.selected.map(val => val.value),
		hasMore : false,
		skip : 0,
		keyword : undefined,
		comparison : props.comparison,
		loaded : false
	});
	
	// we need to combine the options we are querying for and the selected options that are passed in
	// since if they have already selected an item not in the current page, it won't be in the queried options
	const allOptions = [...props.selected, ...state.options];
	
	// mark the active comparison
	const activeComparison = props.comparisons ? props.comparisons.find(val => val.value === state.comparison) : undefined;
	
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
			skip : 0,
			hasMore : false
		});
	}
	
	const onApply = function() {
		props.onApply({
			value : state.selected,
			comparison : state.comparison
		});
	}
	
	const handleToggle = option => () => {
		const newSelected = xor(state.selected, [option.value]);
		setState({
			...state,
			selected : newSelected
		});
	}
	
	const loadMore = function() {
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
		}
		
		fetchData();
	}
	
	const debouncedSetKeyword = debounce(function(value) {
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
		
		comparisonDropdown = (
			<div className="comparisonDropdown">
				<h5>Comparison</h5>
				<ButtonRow>
					<Button
						label={activeComparison.label}
						variant="outlined"
						color="gray"
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
								<b>In</b> - The row must match one of selected option.<br/>
								<b>Not in</b> - The row must match none of the selected options.<br/>
								<b>All</b> - The row must match all of the selected options.<br/>
								<b>Exists</b> - The row must have a value for this filter.<br/>
								<b>Not Exists</b> - The row must not have a value for this filter.<br/>
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
	
	const onChange = function(selected) {
		setState({
			...state,
			selected : selected
		});
	}
	
	return (
		<StyledWrapper>
			<div className="topBlock">
				<div className={`options ${optionsDisabled ? "disabled" : "" }`}>
					<div className="searchBar">
						<SearchIcon/>
						<InputBase
							className="input"
							placeholder="Keyword..."
							onChange={keywordChange}
						/>
					</div>
					{
						!showList &&
						<Spinner className="spinner"/>
					}
					{
						showList &&
						<CheckboxList
							checked={state.selected}
							options={state.options}
							onChange={onChange}
						/>
					}
					{
						state.hasMore &&
						<div className="loadContainer">
							<Button
								label="Load more..."
								color="blue"
								variant="outlined"
								fullWidth={true}
								onClick={loadMore}
							/>
						</div>
					}
				</div>
				<div className="selected">
					{comparisonDropdown}
					<h5>Selected Options</h5>
					<div className="chips">
						{
							showList &&
							state.selected.map(value => {
								const option = allOptions.find(val => val.value === value);
								
								if (option === undefined) { return null; }
								
								return (
									<Chip
										className="chip"
										key={option.value}
										label={option.label}
										onDelete={handleToggle(option)}
									/>
								)
							})
						}
					</div>
				</div>
			</div>
			<GridFilterDropdownButtons
				onApply={onApply}
				onClear={onClear}
				onCancel={props.onClose}
			/>
		</StyledWrapper>
	);
}

export default GridFilterMultiselectDropdownContent;