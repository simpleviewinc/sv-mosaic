import React, { useState, useEffect, useReducer } from "react";
import jsvalidator from "jsvalidator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faEllipsisH, faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import styled from "styled-components";

import * as column_transforms from "../utils/column_transforms.js";
import GridCheckbox from "./internal/GridCheckbox.jsx";
import GridButtonBar from "./internal/GridButtonBar.jsx";
import GridTh from "./internal/GridTh.jsx";
import TitleBar from "./internal/TitleBar.jsx";
import DropdownList from "./internal/DropdownList.jsx";
import Button from "./Button.jsx";
import theme from "../utils/theme.js";

const StyledWrapper = styled.div`
	font-family: ${theme.fontFamily};
	font-weight: 400;
	
	> table {
		width: 100%;
		border-collapse: collapse;
	}
`;

const styles = {
	table : {
		width : "100%",
		borderCollapse: "collapse"
	},
	tr : {
		borderBottom: "0px",
		borderTop: "1px solid #eee",
	},
	td : {
		padding: "8px 0px 8px 0px",
		fontWeight: 200
	},
	th : {
		padding: "8px 0px 8px 0px"
	},
	"columnStyle-faded" : {
		color: theme.colors.lightGray
	},
	"columnStyle-bold" : {
		fontSize: "14px",
		fontWeight: 400
	},
	thead : {
		textAlign : "left"
	},
	actionColumn : {
		textAlign : "right"
	},
	primaryActionButton : {
		paddingLeft: "20px"
	},
	bulkButton : {
		marginRight: "5px",
		display: "inline-block"
	}
}

function flipDir(sort) {
	return sort === "asc" ? "desc" : "asc";
}

function stateReducer(state, { type, data }) {
	console.log("stateReducer", state);
	
	const newState = {
		checked : state.checked.slice(),
	}
	
	switch (type) {
		case "check": {
			newState.checked[data] = !newState.checked[data];
			break;
		}
		case "checkAll": {
			newState.checked = newState.checked.map(val => data);
			break;
		}
		case "setChecked": {
			newState.checked = data;
			break;
		}
		default: {
			throw new Error("Unrecognized reducer action.");
		}
	}
	
	newState.allChecked = newState.checked.length > 0 && newState.checked.every(val => val === true);
	newState.anyChecked = newState.checked.some(val => val === true);
	
	return newState;
}

function Grid(props) {
	jsvalidator.validate(props, {
		type : "object",
		schema : [
			{
				name : "config",
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
									enum : ["bold", "faded"]
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
						name : "actions",
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
									name : "type",
									type : "string",
									enum : ["primary", "bulk", "additional"],
									required : true
								},
								{
									name : "buttonOptions",
									type : "object",
								},
								{
									name : "handler",
									type : "function",
									required : true
								}
							],
							allowExtraKeys : false
						}
					},
					{
						name : "buttons",
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
									name : "buttonOptions",
									type : "object",
								},
								{
									name : "handler",
									type : "function",
									required : true
								}
							],
							allowExtraKeys : false
						}
					}
				],
				allowExtraKeys : false
			},
			{
				name : "data",
				type : "array",
				schema : {
					type : "object",
					schema : [
						{ name : "id", type : "string", required : true }
					],
					allowExtraKeys : true
				}
			},
			{
				name : "sharedState",
				type : "object",
				schema : [
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
					}
				],
				allowExtraKeys : false
			},
			{
				name : "setSharedState",
				type : "function"
			}
		],
		allowExtraKeys : false,
		throwOnInvalid : true
	});
	
	const {
		config,
		data,
		sharedState,
		setSharedState,
	} = props;
	
	const {
		title,
		actions,
		buttons,
		columns
	} = props.config;
	
	const [state, dispatch] = useReducer(stateReducer, {
		checked : [],
		allChecked : false,
		anyChecked : false
	});
	
	const [additionalActionRow, setAdditionalActionRow] = useState(undefined);
	
	useEffect(() => {
		dispatch({ type : "setChecked", data : data.map(val => false) });
	}, [data]);
	
	const primaryActions = actions.filter(action => action.type === "primary");
	const additionalActions = actions.filter(action => action.type === "additional");
	const bulkActions = actions.filter(action => action.type === "bulk");
	
	const topButtons = buttons ? buttons.map(button => ({ name : button.name, ...button.buttonOptions })) : undefined;
	
	const headTds = [];
	
	if (bulkActions.length > 0) {
		const clickHandler = function() {
			// set all of the checkboxes to a specific state
			dispatch({ type : "checkAll", data : !state.allChecked });
		};
		
		headTds.push(
			<GridTh key="__bulk">
				<GridCheckbox checked={state.allChecked} onClick={clickHandler}></GridCheckbox>
			</GridTh>
		);
	}
	
	if (state.anyChecked === true) {
		const buttons = bulkActions.map(action => {
			const onClick = function() {
				const checkedData = data.filter((val, i) => state.checked[i] === true);
				action.handler({ data : checkedData });
			}
			
			return {
				name : action.name,
				onClick,
				...action.buttonOptions
			}
		});
		
		const buttonBar = <GridButtonBar buttons={buttons}></GridButtonBar>
		
		headTds.push(<th key="__bulk_actions" colSpan={columns.length} style={styles.th}>{buttonBar}</th>);
	} else {
		headTds.push(...columns.map(column => {
			const label = column.label || column.name;
			const onClick = function() {
				setSharedState({
					...sharedState,
					sort : {
						name : column.name,
						dir : sharedState.sort.name === column.name ? flipDir(sharedState.sort.dir) : "asc"
					}
				});
			}
			
			return (
				<GridTh
					key={column.name}
					sortable={column.sortable}
					active={column.name === sharedState.sort.name}
					activeDir={sharedState.sort.dir}
					onClick={column.sortable ? onClick : undefined}
				>{label}</GridTh>
			)
		}));
	}
	
	headTds.push(<th key="__actions" style={styles.actionColumn}><Button name="__actions" faIcon={faCog}></Button></th>);
	
	const dataRows = data.map((rowData, i) => {
		const tds = [];
		
		if (bulkActions.length > 0) {
			const clickHandler = function() {
				dispatch({ type : "check", data : i });
			};
			
			tds.push(<td key="__bulk"><GridCheckbox checked={state.checked[i] === true} onClick={clickHandler}></GridCheckbox></td>);
		}
		
		tds.push(...columns.map((column, i) => {
			let data = rowData[column.name];
			if (data !== undefined && column.transforms !== undefined) {
				for(let [key, transform] of Object.entries(column.transforms)) {
					data = transform(data);
				}
			}
			
			const style = column.style !== undefined ? styles[`columnStyle-${column.style}`] : undefined;
			
			return (
				<td
					key={column.name}
					style={{...styles.td,...style}}
				>{data}</td>
			);
		}));
		
		const primaryActionButtons = primaryActions.map(val => ({ name : val.name, ...val.buttonOptions }));
		
		if (additionalActions.length > 0) {
			primaryActionButtons.push({
				name : "__additional",
				faIcon : faEllipsisH,
				color : theme.colors.blue,
				dropdownList : additionalActions.map(action => {
					const onClick = function() {
						action.handler({ data : rowData });
					}
					
					return {
						name : action.name,
						label : "Something Special",
						onClick
					}
				})
			});
		}
		
		// let additionalActionDropdown;
		// if (additionalActionRow !== undefined) {
		// 	const items = additionalActions.map(action => {
		// 		return {
		// 			name : action.name,
		// 			label : action.label,
		// 			onClick : action.handler
		// 		}
		// 	});
			
		// 	additionalActionDropdown = <DropdownList items={items}></DropdownList>
		// }
		
		const buttonBar = <GridButtonBar buttons={primaryActionButtons}></GridButtonBar>
		
		tds.push(
			<td key="__actions" style={styles.actionColumn}>
				{buttonBar}
			</td>
		);
		
		return (
			<tr key={rowData.id} style={styles.tr}>
				{tds}
			</tr>
		)
	});
	
	return (
		<StyledWrapper>
			<TitleBar title={title} buttons={topButtons}></TitleBar>
			<table>
				<thead style={styles.thead}>
					<tr style={styles.tr}>
						{headTds}
					</tr>
				</thead>
				<tbody>
					{dataRows}
				</tbody>
			</table>
		</StyledWrapper>
	)
}

export default Grid;