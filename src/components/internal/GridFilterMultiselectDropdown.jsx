import React, { useState, useEffect } from "react";
import GridFilterDropdown from "../GridFilterDropdown.jsx";
import styled from "styled-components";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Chip from "@material-ui/core/Chip";
import InputBase from "@material-ui/core/InputBase";
import Checkbox from "@material-ui/core/Checkbox";
import { debounce } from "lodash";
import jsvalidator from "jsvalidator";

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SearchIcon from "@material-ui/icons/Search";
import HelpIcon from '@material-ui/icons/Help';

import Button from "../Button.jsx";
import ButtonRow from "../ButtonRow.jsx";
import theme from "../../utils/theme.js";

const StyledWrapper = styled.div`
	& {
		display: flex;
		max-height: 400px;
		min-width: 600px;
	}
	
	& > .options > .searchBar {
		position: sticky;
		top: 0;
		display: flex;
		align-items: center;
		padding-left: 14px;
		z-index: 1;
		background: white;
	}
	
	& > .options > .searchBar > svg {
		padding-right: 8px;
	}
	
	& > .options {
		overflow-y: scroll;
		flex: 2;
		position: relative;
		transition: opacity .5s;
	}
	
	& > .options.disabled {
		opacity: .4;
		pointer-events: none;
	}
	
	& > .options .listItem {
		padding-top: 0px;
		padding-bottom: 0px;
	}
	
	& > .options .listItemIcon {
		min-width: auto;
	}
	
	& > .options .checked {
		color: ${theme.colors.blue};
	}
	
	& > .selected {
		padding: 0px 15px 0px 15px;
		width: 200px;
		overflow-y: auto;
	}
	
	& .comparisonDropdown {
		margin-bottom: 1rem;
	}
	
	& .MuiChip-root {
		display: flex;
		background-color: ${theme.colors.blue}13;
		margin-bottom: 4px;
	}
	
	& .MuiChip-root:focus {
		background-color: ${theme.colors.blue}13;
	}
	
	& .MuiChip-label {
		flex: 1;
	}
	
	& .loadContainer {
		padding-right: 10px;
	}
`

const PopoverP = styled.p`
	margin: 0px;
`

const limit = 25;

function GridFilterMultiselectDropdown(props) {
	jsvalidator.validate(props, {
		type : "object",
		schema : [
			{
				name : "state",
				type : "object",
				required : true
			},
			{
				name : "setState",
				type : "function",
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
				name : "getSelected",
				type : "function",
				required : true
			},
			{
				name : "onClose",
				type : "function",
				required : true
			},
			{
				name : "anchorEl",
				type : "object"
			}
		],
		allowExtraKeys : false,
		throwOnInvalid : true
	});
	
	const [options, setOptions] = useState([]);
	const [selected, setSelected] = useState([]);
	const [hasMore, setHasMore] = useState(false);
	const [skip, setSkip] = useState(0);
	const [keyword, setKeyword] = useState(undefined);
	const [comparison, setComparison] = useState(props.state.comparison || "in");
	const activeComparison = props.comparisons ? props.comparisons.find(val => val.value === comparison) : undefined;
	
	const selectedValues = selected.map(val => val.value);
	
	useEffect(() => {
		async function fetchData() {
			const options = await props.getOptions({ limit, skip });
			setOptions(options.docs);
			setHasMore(options.hasMore === true);
			setSkip(skip + limit);
			
			const selected = await props.getSelected(props.state.value);
			setSelected(selected);
		}
		
		fetchData();
	}, []);
	
	const onClear = function() {
		setSelected([]);
		setComparison("in");
		setKeyword(undefined);
		setSkip(0);
		setHasMore(false);
	}
	
	const onApply = function() {
		props.setState({
			value : selectedValues,
			comparison
		});
		props.onClose();
	}
	
	const handleToggle = option => () => {
		const currentIndex = selected.findIndex(val => val.value === option.value);
		const newSelected = [...selected];
		
		if (currentIndex === -1) {
			newSelected.push(option);
		} else {
			newSelected.splice(currentIndex, 1);
		}
		
		setSelected(newSelected);
	}
	
	const loadMore = function() {
		async function fetchData() {
			const newOptions = await props.getOptions({ limit, skip, keyword });
			setOptions([...options, ...newOptions.docs]);
			setHasMore(newOptions.hasMore === true);
			setSkip(skip + limit);
		}
		
		fetchData();
	}
	
	const debouncedSetKeyword = debounce(function(value) {
		async function fetchData() {
			const newOptions = await props.getOptions({ limit, skip : 0, keyword : value });
			setOptions(newOptions.docs);
			setHasMore(newOptions.hasMore === true);
			setKeyword(value === "" ? undefined : value);
			setSkip(limit);
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
						setSelected([]);
					}
					
					setComparison(comparison.value);
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
	
	const optionsDisabled = ["exists", "not_exists"].includes(comparison);
	
	return (
		<GridFilterDropdown
			anchorEl={props.anchorEl}
			onClose={props.onClose}
			onApply={onApply}
			onClear={onClear}
		>
			<StyledWrapper>
				<div className={`options ${optionsDisabled ? "disabled" : "" }`}>
					<div className="searchBar">
						<SearchIcon/>
						<InputBase
							placeholder="Keyword..."
							onChange={keywordChange}
						/>
					</div>
					<List
						dense
					>
						{
							options.map(option => {
								const checked = selectedValues.indexOf(option.value) !== -1;
								
								return (
									<ListItem
										className="listItem"
										key={option.value}
										dense
										button
										onClick={handleToggle(option)}
									>
										<ListItemIcon className="listItemIcon">
											<Checkbox
												className={checked ? "checked" : ""}
												color="default"
												edge="start"
												checked={checked}
												disableRipple
											/>
										</ListItemIcon>
										<ListItemText primary={option.label}/>
									</ListItem>
								)
							})
						}
					</List>
					{ hasMore &&
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
							selected.map(option => {
								return (
									<Chip
										key={option.value}
										label={option.label}
										onDelete={handleToggle(option)}
									/>
								)
							})
						}
					</div>
				</div>
			</StyledWrapper>
		</GridFilterDropdown>
	);
}

export default GridFilterMultiselectDropdown;