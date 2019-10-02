import React, { useState, useEffect, useCallback } from "react";
import jsvalidator from "jsvalidator";
import styled from "styled-components";

import GridCheckbox from "./internal/GridCheckbox.jsx";
import GridViewList from "./internal/GridViewList.jsx";
import GridViewGrid from "./internal/GridViewGrid.jsx";
import TitleBar from "./internal/TitleBar.jsx";
import ButtonRow from "./ButtonRow.jsx";
import Button from "./Button.jsx";
import GridViewSwitcher from "./internal/GridViewSwitcher.jsx";
import GridPager from "./internal/GridPager.jsx";
import GridLimit from "./internal/GridLimit.jsx";
import GridFilters from "./internal/GridFilters.jsx";
import theme from "../utils/theme.js";

const StyledWrapper = styled.div`
	font-family: ${theme.fontFamily};
	font-weight: 400;
	font-size: 14px;
	
	& > .headerRow {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
	& > .headerRow > .right {
		display: flex;
		align-items: center;
	}
`;

function Grid(props) {
	jsvalidator.validate(props, {
		type : "object",
		schema : [
			{
				name : "title",
				type : "string"
			},
			{
				name : "columns",
				type : "array",
				schema : {
					type : "object",
					schema : [
						{
							name : "name",
							type : "string",
							required : true
						},
						{
							name : "column",
							type : "string"
						},
						{
							name : "label",
							type : "string"
						},
						{
							name : "style",
							type : "string",
							enum : ["bold"]
						},
						{
							name : "sortable",
							type : "boolean"
						},
						{
							name : "transforms",
							type : "array",
							schema : {
								type : "function"
							}
						}
					],
					allowExtraKeys : false
				}
			},
			{
				name : "filters",
				type : "array"
			},
			{
				name : "primaryActions",
				type : "array"
			},
			{
				name : "bulkActions",
				type : "array"
			},
			{
				name : "additionalActions",
				type : "array"
			},
			{
				name : "buttons",
				type : "array"
			},
			{
				name : "view",
				type : "string",
				enum : ["list", "grid"]
			},
			{
				name : "views",
				type : "array",
				schema : {
					type : "string",
					enum : ["list", "grid"]
				}
			},
			{
				name : "data",
				type : "array"
			},
			{
				name : "count",
				type : "number"
			},
			{
				name : "sort",
				type : "object",
				schema : [
					{ name : "name", type : "string" },
					{ name : "dir", type : "string", enum : ["asc", "desc"] }
				],
				allowExtraKeys : false
			},
			{
				name : "limit",
				type : "number"
			},
			{
				name : "skip",
				type : "number"
			},
			{
				name : "onSkipChange",
				type : "function"
			},
			{
				name : "onLimitChange",
				type : "function"
			},
			{
				name : "onSortChange",
				type : "function"
			},
			{
				name : "onViewChange",
				type : "function"
			}
		],
		allowExtraKeys : false,
		throwOnInvalid : true
	});
	
	// declare the hooks
	const [state, setState] = useState({
		checked : []
	});
	
	const onCheckAllClick = function() {
		const allChecked = state.checked.every(val => val === true);
		
		setState({
			...state,
			checked : state.checked.map(val => !allChecked)
		});
	}
	
	const onBulkActionClick = function(action) {
		const checkedData = props.data.filter((val, i) => state.checked[i] === true);
		action.onClick({ data : checkedData });
	}
	
	const onCheckboxClick = function(i) {
		const newChecked = [...state.checked];
		newChecked[i] = !newChecked[i];
		
		setState({
			...state,
			checked : newChecked
		});
	}
	
	const onActionClick = function(action, row) {
		action.onClick({ data : row });
	}
	
	useEffect(() => {
		setState({
			...state,
			checked : props.data.map(val => false)
		});
	}, [props.data]);
	
	const View = props.view === "list" ? GridViewList : GridViewGrid;
	
	return (
		<StyledWrapper>
			<div className="headerRow">
				<TitleBar title={props.title} buttons={props.buttons}></TitleBar>
				
			</div>
			<div className="headerRow">
				<div className="left">
					<GridFilters/>
				</div>
				<div className="right">
					{ props.views &&
						<GridViewSwitcher
							view={props.view}
							views={props.views}
							onViewChange={props.onViewChange}
						/>
					}
					<GridLimit
						limit={props.limit}
						onLimitChange={props.onLimitChange}
					/>
					<GridPager
						limit={props.limit}
						skip={props.skip}
						count={props.count}
						onSkipChange={props.onSkipChange}
					/>
				</div>
			</div>
			<View
				checked={state.checked}
				columns={props.columns}
				bulkActions={props.bulkActions}
				sort={props.sort}
				data={props.data}
				additionalActions={props.additionalActions}
				primaryActions={props.primaryActions}
				onSortChange={props.onSortChange}
				onBulkActionClick={onBulkActionClick}
				onCheckAllClick={onCheckAllClick}
				onActionClick={onActionClick}
				onCheckboxClick={onCheckboxClick}
			/>
		</StyledWrapper>
	)
}

export default Grid;