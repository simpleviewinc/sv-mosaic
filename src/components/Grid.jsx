import React, { useState, useEffect, useReducer } from "react";
import jsvalidator from "jsvalidator";
import styled from "styled-components";

import SettingsIcon from '@material-ui/icons/Settings';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import GridCheckbox from "./internal/GridCheckbox.jsx";
import GridTh from "./internal/GridTh.jsx";
import TitleBar from "./internal/TitleBar.jsx";
import ButtonRow from "./ButtonRow.jsx";
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
		buttons,
		primaryActions,
		additionalActions,
		bulkActions,
		columns
	} = props.config;
	
	const [state, dispatch] = useReducer(stateReducer, {
		checked : [],
		allChecked : false,
		anyChecked : false
	});
	
	const [additionalActionState, setAdditionalActionState] = useState({});
	
	useEffect(() => {
		dispatch({ type : "setChecked", data : data.map(val => false) });
	}, [data]);
	
	const headTds = [];
	
	if (bulkActions !== undefined) {
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
				action.onClick({ data : checkedData });
			}
			
			return {
				...action,
				onClick
			}
		});
		
		headTds.push(
			<th key="__bulk_actions" colSpan={columns.length} style={styles.th}>
				<ButtonRow buttons={buttons}/>
			</th>
		);
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
	
	headTds.push(<th key="__actions" style={styles.actionColumn}><Button color="black" variant="icon" mIcon={SettingsIcon}/></th>);
	
	const dataRows = data.map((rowData, i) => {
		const tds = [];
		
		if (bulkActions !== undefined) {
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
		
		const actionButtons = [];
		
		if (primaryActions !== undefined) {
			actionButtons.push(...primaryActions.map(action => {
				const onClick = function() {
					action.onClick({ data : rowData });
				}
				
				return {
					...action,
					onClick
				}
			}));
		}
		
		if (additionalActions !== undefined) {
			actionButtons.push({
				color : "blue",
				variant : "icon",
				mIcon : MoreHorizIcon,
				menuItems : additionalActions.map(item => {
					const onClick = function() {
						item.onClick({ data : rowData });
					}
					
					return {
						...item,
						onClick
					}
				})
			});
		}
		
		if (actionButtons.length > 0) {
			tds.push(
				<td key="__actions" style={styles.actionColumn}>
					<ButtonRow buttons={actionButtons}/>
				</td>
			);
		}
		
		return (
			<tr key={rowData.id} style={styles.tr}>
				{tds}
			</tr>
		)
	});
	
	return (
		<StyledWrapper>
			<TitleBar title={title} buttons={buttons}></TitleBar>
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