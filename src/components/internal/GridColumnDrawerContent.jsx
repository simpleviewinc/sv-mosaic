import React, { useState } from "react";
import styled from "styled-components";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

import Button from "../Button";
import theme from "../../utils/theme.js";
import CheckboxList from "../CheckboxList.jsx";
import DrawerContent from "../DrawerContent.jsx";
import { useMosaicTranslation } from "@root/i18n";

const StyledWrapper = styled.div`
	display: flex;
	
	& > div > h2 {
		${theme.h2}
		padding-left: 15px;
		margin: 0 0 1rem 0;
	}
	
	& > .left {
		flex: 1;
		padding-right: 20px;
		width: 200px;
	}
	
	& > .left .listItem {
		margin: 3px 0px;
		background: white;
	}
	
	& > .right {
		flex: 1;
		width: 200px;
	}
	
	& > .right > .item {
		background: white;
		line-height: 42px;
		margin: 3px 0px;
		display: flex;
		justify-content: space-between;
		padding-left: 15px;
	}
	
	& > .right > .item > .buttons {
		text-align: right;
	}
`

function GridColumnDrawerContent(props) {
	const [state, setState] = useState({
		activeColumns : props.columns.map(val => val.name)
	});

	const { t } = useMosaicTranslation();
	
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
	}).sort((a, b) => {
		return a.label.localeCompare(b.label)
	});
	
	return (
		<DrawerContent
			title={t("mosaic:DataView.table_settings")}
			background="gray"
			onApply={saveColumns}
			onClose={props.onClose}
			onCancel={props.onClose}
		>
			<StyledWrapper>
				<div className="left">
					<h2>{t("mosaic:DataView.columns")}</h2>
					<CheckboxList
						options={columnOptions}
						checked={state.activeColumns}
						onChange={onColumnsChange}
					/>
				</div>
				<div className="right">
					<h2>{t("mosaic:DataView.column_order")}</h2>
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
			</StyledWrapper>
		</DrawerContent>
	)
}

export default GridColumnDrawerContent;