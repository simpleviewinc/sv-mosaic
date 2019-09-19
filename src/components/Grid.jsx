import React, { useState, useEffect } from "react";
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
						name : "getData",
						type : "function",
						required : true
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
										type : "object",
										schema : [
											{
												name : "name",
												type : "string"
											},
											{
												name : "args",
												type : "object"
											}
										],
										allowExtraKeys : false
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
					},
					{
						name : "sort",
						type : "object",
						schema : [
							{ name : "name", type : "string" },
							{ name : "dir", type : "string", enum : ["asc", "desc"] }
						],
						allowExtraKeys : false
					}
				],
				allowExtraKeys : false
			}
		],
		allowExtraKeys : false,
		throwOnInvalid : true
	});
	
	const [tableData, setTableData] = useState([]);
	const [allChecked, setAllChecked] = useState(false);
	const [currentSort, setCurrentSort] = useState(props.config.sort);
	
	const config = props.config;
	
	async function fetchData() {
		const rawData = await props.config.getData({
			sort : currentSort
		});
		
		for(let [key, row] of Object.entries(rawData)) {
			if (row.id === undefined) {
				throw new Error("All data rows require a 'id' column.");
			}
		}
		
		const wrappedData = rawData.map(data => {
			return {
				checked : false,
				data
			}
		});
		
		setTableData(wrappedData);
	}
	
	useEffect(() => {
		fetchData();
	}, [currentSort]);
	
	useEffect(() => {
		const state = tableData.every(val => val.checked);
		setAllChecked(state);
	}, [tableData]);
	
	const primaryActions = props.config.actions.filter(val => val.type === "primary");
	const additionalActions = props.config.actions.filter(val => val.type === "additional");
	const bulkActions = props.config.actions.filter(val => val.type === "bulk");
	
	const topButtons = config.buttons ? config.buttons.map(val => ({ name : val.name, ...val.buttonOptions })) : undefined;
	
	const headTds = [];
	
	if (bulkActions.length > 0) {
		const clickHandler = function() {
			tableData.forEach(val => {
				val.checked = !allChecked;
			});
			setTableData(tableData.slice());
		};
		
		headTds.push(
			<GridTh key="__bulk">
				<GridCheckbox checked={allChecked} onClick={clickHandler}></GridCheckbox>
			</GridTh>
		);
	}
	
	const checkedData = tableData.filter(val => val.checked);
	if (checkedData.length > 0) {
		const buttons = bulkActions.map(action => {
			const onClick = function() {
				action.handler({ data : checkedData });
			}
			
			return {
				name : action.name,
				onClick,
				...action.buttonOptions
			}
		});
		
		const buttonBar = <GridButtonBar buttons={buttons}></GridButtonBar>
		
		headTds.push(<th key="__bulk_actions" colSpan={props.config.columns.length} style={styles.th}>{buttonBar}</th>);
	} else {
		headTds.push(...props.config.columns.map(column => {
			const label = column.label || column.name;
			const onClick = function() {
				setCurrentSort({
					name : column.name,
					dir : currentSort.name === column.name ? flipDir(currentSort.dir) : "asc"
				});
			}
			
			return (
				<GridTh
					key={column.name}
					sortable={column.sortable}
					active={column.name === currentSort.name}
					activeDir={currentSort.dir}
					onClick={column.sortable ? onClick : undefined}
				>{label}</GridTh>
			)
		}));
	}
	
	headTds.push(<th key="__actions" style={styles.actionColumn}><Button faIcon={faCog}></Button></th>);
	
	const dataRows = tableData.map(rowData => {
		const tds = [];
		
		if (bulkActions.length > 0) {
			const clickHandler = function() {
				rowData.checked = !rowData.checked;
				setTableData(tableData.slice());
			};
			
			tds.push(<td key="__bulk"><GridCheckbox checked={rowData.checked} onClick={clickHandler}></GridCheckbox></td>);
		}
		
		tds.push(...props.config.columns.map((column, i) => {
			let data = rowData.data[column.name];
			if (data !== undefined && column.transforms !== undefined) {
				for(let [key, transform] of Object.entries(column.transforms)) {
					data = column_transforms[transform.name](data);
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
				color : theme.colors.blue
			});
		}
		
		const buttonBar = <GridButtonBar buttons={primaryActionButtons}></GridButtonBar>
		
		tds.push(
			<td key="__actions" style={styles.actionColumn}>
				{buttonBar}
			</td>
		);
		
		return (
			<tr key={rowData.data.id} style={styles.tr}>
				{tds}
			</tr>
		)
	});
	
	return (
		<StyledWrapper>
			<TitleBar title={config.title} buttons={topButtons}></TitleBar>
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