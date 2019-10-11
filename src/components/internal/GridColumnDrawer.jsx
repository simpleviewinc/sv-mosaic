import React, { useState } from "react";
import styled from "styled-components";

import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

import ButtonRow from "../ButtonRow.jsx";
import Button from "../Button.jsx";
import Drawer from "../Drawer.jsx";
import CheckboxList from "../CheckboxList.jsx";

const DrawerContent = styled.div`
	display: flex;
	
	& > div > h2 {
		font-size: 14px;
	}
	
	& > .left {
		flex: 1;
		padding-right: 20px;
		width: 200px;
	}
	
	& > .left > h2 {
		padding-left: 14px;
	}
	
	& > .right {
		flex: 1;
		width: 200px;
	}
	
	& > .right > .item {
		line-height: 42px;
		display: flex;
		justify-content: space-between;
	}
	
	& > .right > .item > .buttons {
		text-align: right;
	}
`

function GridColumnDrawer(props) {
	console.log("drawer?", props);
	
	const [state, setState] = useState({
		activeColumns : props.columns.map(val => val.name)
	});
	
	const saveColumns = function() {
		props.onClose();
		props.onChange(state.activeColumns);
	}
	
	const onColumnsChange = function(data) {
		setState({
			...state,
			activeColumns : data
		});
	}
	
	const orderClick = (name, num) => () => {
		// changing the order is actually just swapping one element for another
		// so we find the elements current position and it's new position and swap the two names
		const index = state.activeColumns.indexOf(name);
		const newIndex = index + num;
		const swapValue = state.activeColumns[newIndex];
		
		state.activeColumns[index] = swapValue;
		state.activeColumns[newIndex] = name;
		
		setState({
			...state,
			activeColumns : [...state.activeColumns]
		});
	}
	
	const columnOptions = props.allColumns.map(column => {
		return {
			label : column.label,
			value : column.name
		}
	});
	
	return (
		<Drawer
			title="Table Settings"
			open={props.open}
			onClose={props.onClose}
			buttons={
				<ButtonRow>
					<Button
						label="cancel"
						color="gray"
						variant="text"
						onClick={props.onClose}
					/>
					<Button
						label="Apply"
						color="blue"
						variant="contained"
						onClick={saveColumns}
					/>
				</ButtonRow>
			}
		>
			<DrawerContent>
				<div className="left">
					<h2>Columns</h2>
					<CheckboxList
						options={columnOptions}
						checked={state.activeColumns}
						onChange={onColumnsChange}
					/>
				</div>
				<div className="right">
					<h2>Column Order</h2>
					{
						state.activeColumns.map((name, i) => {
							const column = props.allColumns.find(val => val.name === name);
							
							return (
								<div className="item" key={column.name}>
									<span>
										{column.label}
									</span>
									<span className="buttons">
										<Button
											mIcon={ArrowDownwardIcon}
											variant="icon"
											color="black"
											disabled={i === state.activeColumns.length - 1}
											onClick={orderClick(column.name, 1)}
										/>
										<Button
											mIcon={ArrowUpwardIcon}
											variant="icon"
											color="black"
											disabled={i === 0}
											onClick={orderClick(column.name, -1)}
										/>
									</span>
								</div>
							)
						})
					}
				</div>
			</DrawerContent>
		</Drawer>
	)
}

export default GridColumnDrawer;