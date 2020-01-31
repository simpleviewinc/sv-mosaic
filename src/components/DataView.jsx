import React, { useState, useEffect, useMemo } from "react";
import jsvalidator from "jsvalidator";
import styled from "styled-components";

import DataViewViewList from "./internal/DataViewViewList.jsx";
import DataViewViewGrid from "./internal/DataViewViewGrid.jsx";
import TitleBar from "./internal/TitleBar.jsx";
import ButtonRow from "./ButtonRow.jsx";
import Button from "./Button.jsx";
import DataViewViewSwitcher from "./internal/DataViewViewSwitcher.jsx";
import DataViewPager from "./internal/DataViewPager.jsx";
import DataViewLimit from "./internal/DataViewLimit.jsx";
import DataViewFilters from "./internal/DataViewFilters.jsx";
import theme from "../utils/theme.js";
import { transformRows } from "../utils/dataViewTools";

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
	
	&.loading {
		opacity: .5;
		pointer-events: none;
	}
`;

const actionValidation = {
	type : "object",
	schema : [
		{ name : "name", type : "string", required : true },
		{ name : "onClick", type : "function", required : true },
		{ name : "show", type : "any" },
		{ name : "label", type : "string" },
		{ name : "color", type : "string" },
		{ name : "variant", type : "string" },
		{ name : "mIcon", type : "object" }
	],
	allowExtraKeys : false
}

const additionalActionValidation = {
	type : "object",
	schema : [
		{ name : "name", type : "string", required : true },
		{ name : "onClick", type : "function", required : true },
		{ name : "show", type : "any" },
		{ name : "label", type : "string" }
	],
	allowExtraKeys : false
}

function DataView(props) {
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
				name : "filter",
				type : "object"
			},
			{
				name : "activeFilters",
				type : "array",
				schema : {
					type : "string"
				}
			},
			{
				name : "activeColumns",
				type : "array",
				schema : {
					type : "string"
				}
			},
			{
				name : "primaryActions",
				type : "array",
				schema : actionValidation
			},
			{
				name : "bulkActions",
				type : "array",
				schema : actionValidation
			},
			{
				name : "additionalActions",
				type : "array",
				schema : actionValidation
			},
			{
				name : "buttons",
				type : "array"
			},
			{
				name : "view",
				type : "string",
				enum : ["list", "grid"],
				required : true // TODO: not make this required!
			},
			{
				name : "savedView",
				type : "object",
				schema : [
					{ name : "id", type : "string" },
					{ name : "label", type : "string" },
					{ name : "type", type : "string", enum : ["default", "shared", "mine"] },
					{ name : "state", type : "object" }
				],
				allowExtraKeys : false
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
				name : "limitOptions",
				type : "array",
				schema : {
					type : "number"
				}
			},
			{
				name : "skip",
				type : "number"
			},
			{
				name : "loading",
				type : "boolean"
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
			},
			{
				name : "onActiveFiltersChange",
				type : "function"
			},
			{
				name : "onColumnsChange",
				type : "function"
			},
			{
				name : "onSavedViewSave",
				type : "function"
			},
			{
				name : "onSavedViewChange",
				type : "function"
			},
			{
				name : "onSavedViewRemove",
				type : "function"
			},
			{
				name : "onSavedViewGetOptions",
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
	
	const savedViewEnabled = 
		props.onSavedViewSave !== undefined &&
		props.onSavedViewChange !== undefined &&
		props.onSavedViewGetOptions !== undefined &&
		props.onSavedViewRemove !== undefined &&
		props.savedView !== undefined
	;
	
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
	
	const View = props.view === "list" ? DataViewViewList : DataViewViewGrid;
	
	// generate an array of columns based on the ones that are marked active
	const activeColumnObjs = useMemo(() => {
		return props.activeColumns.map(name => {
			const column = props.columns.find(val => val.name === name);
			return column;
		});
	}, [props.activeColumns, props.columns]);
	
	// execute the transforms in the rows
	const transformedData = useMemo(() => {
		return transformRows(props.data, props.view === "list" ? activeColumnObjs : props.columns);
	}, [props.data, props.view, props.columns, activeColumnObjs]);
	
	const savedViewState = {
		limit : props.limit,
		sort : props.sort,
		view : props.view,
		filter : props.filter,
		activeFilters : props.activeFilters,
		activeColumns : props.activeColumns
	}
	
	const savedViewCallbacks = {
		onSave : props.onSavedViewSave,
		onChange : props.onSavedViewChange,
		onGetOptions : props.onSavedViewGetOptions,
		onRemove : props.onSavedViewRemove
	}
	
	const limitOptions = useMemo(() => {
		return props.limitOptions || [
			25,
			50,
			100
		]
	}, [props.limitOptions]);
	
	return (
		<StyledWrapper className={`
			${ props.loading ? "loading" : "" }
		`}>
			<div className="headerRow">
				<TitleBar
					title={props.title}
					buttons={props.buttons}
					savedViewEnabled={savedViewEnabled}
					savedView={props.savedView}
					savedViewState={savedViewState}
					savedViewCallbacks={savedViewCallbacks}
				/>
			</div>
			<div className="headerRow">
				<div className="left">
					{
						props.filters &&
						<DataViewFilters
							loading={props.loading}
							filter={props.filter}
							filters={props.filters}
							activeFilters={props.activeFilters}
							onActiveFiltersChange={props.onActiveFiltersChange}
						/>
					}
				</div>
				<div className="right">
					{
						props.views !== undefined &&
						<DataViewViewSwitcher
							view={props.view}
							views={props.views}
							onViewChange={props.onViewChange}
						/>
					}
					{
						props.onLimitChange !== undefined &&
						<DataViewLimit
							limit={props.limit}
							options={limitOptions}
							onLimitChange={props.onLimitChange}
						/>
					}
					{
						props.onSkipChange !== undefined &&
						<DataViewPager
							limit={props.limit}
							skip={props.skip}
							count={props.count}
							onSkipChange={props.onSkipChange}
						/>
					}
				</div>
			</div>
			<div className={`
				viewContainer
			`}>
				<View
					checked={state.checked}
					columns={activeColumnObjs}
					allColumns={props.columns}
					bulkActions={props.bulkActions}
					sort={props.sort}
					data={transformedData}
					additionalActions={props.additionalActions}
					primaryActions={props.primaryActions}
					onSortChange={props.onSortChange}
					onColumnsChange={props.onColumnsChange}
					onBulkActionClick={onBulkActionClick}
					onCheckAllClick={onCheckAllClick}
					onActionClick={onActionClick}
					onCheckboxClick={onCheckboxClick}
				/>
			</div>
			{
				props.loading === false && !props.data.length &&
				<div className="noResults">
					<p>No results were found.</p>
				</div>
			}
		</StyledWrapper>
	)
}

export default DataView;