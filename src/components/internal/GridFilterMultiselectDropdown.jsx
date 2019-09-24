import React, { useState, useEffect } from "react";
import GridFilterDropdown from "../GridFilterDropdown.jsx";
import styled from "styled-components";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Chip from '@material-ui/core/Chip';

import Checkbox from '@material-ui/core/Checkbox';

import Button from "../Button.jsx";
import theme from "../../utils/theme.js";

const StyledWrapper = styled.div`
	& {
		display: flex;
		max-height: 400px;
		min-width: 500px;
	}
	
	& > .options {
		overflow-y: scroll;
		flex: 2;
	}
	
	& > .selected {
		border-left: 1px solid #eee;
		padding: 0px 15px 0px 15px;
		flex: 1;
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

const limit = 25;

function GridFilterMultiselectDropdown(props) {
	const [options, setOptions] = useState([]);
	const [selected, setSelected] = useState([]);
	const [hasMore, setHasMore] = useState(false);
	const [skip, setSkip] = useState(0);
	
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
	}
	
	const onApply = function() {
		props.setState({
			value : selectedValues
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
			const newOptions = await props.getOptions({ limit : 25, skip });
			setOptions([...options, ...newOptions.docs]);
			setHasMore(newOptions.hasMore === true);
			setSkip(skip + limit);
		}
		
		fetchData();
	}
	
	return (
		<GridFilterDropdown
			anchorEl={props.anchorEl}
			onClose={props.onClose}
			onApply={onApply}
			onClear={onClear}
		>
			<StyledWrapper>
				<div className="options">
					<div className="searchBar">
						
					</div>
					<List
						dense
					>
						{
							options.map(option => {
								return (
									<ListItem
										key={option.value}
										dense
										button
										onClick={handleToggle(option)}
									>
										<ListItemIcon>
											<Checkbox
												edge="start"
												checked={selectedValues.indexOf(option.value) !== -1}
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
					<h5>Selected Options</h5>
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
			</StyledWrapper>
		</GridFilterDropdown>
	);
}

export default GridFilterMultiselectDropdown;