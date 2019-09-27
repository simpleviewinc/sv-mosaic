import React, { useState, useEffect, useCallback } from "react";
import jsvalidator from "jsvalidator";
import styled from "styled-components";

import GridCheckbox from "./internal/GridCheckbox.jsx";
import GridTHead from "./internal/GridTHead.jsx";
import GridTBody from "./internal/GridTBody.jsx";
import TitleBar from "./internal/TitleBar.jsx";
import ButtonRow from "./ButtonRow.jsx";
import Button from "./Button.jsx";
import theme from "../utils/theme.js";

const StyledWrapper = styled.div`
	font-family: ${theme.fontFamily};
	font-weight: 400;
	font-size: 14px;
	
	> table {
		width: 100%;
		border-collapse: collapse;
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
				name : "data",
				type : "array"
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
				name : "dispatch",
				type : "function",
				required : true
			}
		],
		allowExtraKeys : false,
		throwOnInvalid : true
	});
	
	// declare the hooks
	const [state, setState] = useState({
		checked : []
	});
	
	const onSortClick = function(sort) {
		props.dispatch({
			type : "sort",
			data : sort
		});
	}
	
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
	
	return (
		<StyledWrapper>
			<TitleBar title={props.title} buttons={props.buttons}></TitleBar>
			<table>
				<GridTHead
					checked={state.checked}
					columns={props.columns}
					bulkActions={props.bulkActions}
					sort={props.sort}
					onSortClick={onSortClick}
					onBulkActionClick={onBulkActionClick}
					onCheckAllClick={onCheckAllClick}
				/>
				<GridTBody
					checked={state.checked}
					columns={props.columns}
					data={props.data}
					bulkActions={props.bulkActions}
					additionalActions={props.additionalActions}
					primaryActions={props.primaryActions}
					onActionClick={onActionClick}
					onCheckboxClick={onCheckboxClick}
				/>
			</table>
		</StyledWrapper>
	)
}

export default Grid;