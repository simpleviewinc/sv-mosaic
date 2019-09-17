import React, { useState, useEffect } from "react";
import jsvalidator from "jsvalidator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faEllipsisH, faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import * as column_transforms from "../internal/column_transforms.js";
import FAIcon from "./FAIcon.jsx";
import theme from "../internal/theme.js";

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
		padding: "8px 0px 8px 0px"
	},
	th : {
		padding: "8px 0px 8px 0px"
	},
	h1 : {
		fontSize : "24px",
		fontWeight: 600
	},
	"columnStyle-faded" : {
		color: "#999"
	},
	"columnStyle-bold" : {
		fontWeight: 600
	},
	thead : {
		textAlign : "left"
	}
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
									name : "faIcon",
									type : "object"
								},
								{
									name : "color",
									type : "string"
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
			}
		],
		allowExtraKeys : false,
		throwOnInvalid : true
	});
	
	const [tableData, setTableData] = useState([]);
	const [allChecked, setAllChecked] = useState(false);
	
	useEffect(() => {
		const fetchData = async function() {
			const rawData = await props.config.getData();
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
		
		fetchData();
	}, []);
	
	useEffect(() => {
		const state = tableData.every(val => val.checked);
		setAllChecked(state);
	}, [tableData]);
	
	const title = props.config.title ? <h1 style={styles.h1}>{props.config.title}</h1> : undefined;
	const primaryActions = props.config.actions.filter(val => val.type === "primary");
	const additionalActions = props.config.actions.filter(val => val.type === "additional");
	const bulkActions = props.config.actions.filter(val => val.type === "bulk");
	
	const headTds = [];
	
	if (bulkActions.length > 0) {
		const clickHandler = function() {
			tableData.forEach(val => {
				val.checked = !allChecked;
			});
			setTableData(tableData.slice());
		};
		
		headTds.push(<th key="__bulk" style={styles.th}><FontAwesomeIcon icon={allChecked ? faCheckSquare : faSquare} onClick={clickHandler}></FontAwesomeIcon></th>);
	}
	
	const hasCheckedRow = tableData.filter(val => val.checked).length > 0;
	if (hasCheckedRow) {
		const actionButtons = bulkActions.map(action => {
			return <FontAwesomeIcon key={action.name} icon={action.faIcon}></FontAwesomeIcon>
		});
		
		headTds.push(<th key="__bulk_actions" colSpan={props.config.columns.length} style={styles.th}>{actionButtons}</th>);
	} else {
		headTds.push(...props.config.columns.map(column => {
			return <th key={column.name} style={styles.th}>{column.label || column.name}</th>
		}));
	}
	
	headTds.push(<th key="__actions"><FontAwesomeIcon icon={faCog}></FontAwesomeIcon></th>);
	
	const dataRows = tableData.map(rowData => {
		const tds = [];
		
		if (bulkActions.length > 0) {
			const clickHandler = function() {
				rowData.checked = !rowData.checked;
				setTableData(tableData.slice());
			};
			
			tds.push(<td key="__bulk"><FontAwesomeIcon icon={rowData.checked ? faCheckSquare : faSquare} onClick={clickHandler}></FontAwesomeIcon></td>);
		}
		
		tds.push(...props.config.columns.map((column, i) => {
			let data = rowData.data[column.name];
			if (data !== undefined && column.transforms !== undefined) {
				for(let [key, transform] of Object.entries(column.transforms)) {
					data = column_transforms[transform.name](data);
				}
			}
			
			const style = column.style !== undefined ? styles[`columnStyle-${column.style}`] : undefined;
			
			return <td key={column.name} style={styles.td}>{data}</td>
		}));
		
		const actionButtons = primaryActions.map(action => {
			return <FontAwesomeIcon key={action.name} icon={action.faIcon} color={action.color}></FontAwesomeIcon>
		});
		
		if (additionalActions.length > 0) {
			actionButtons.push(<FontAwesomeIcon key="__additional" icon={faEllipsisH} color={theme.colors.blue}></FontAwesomeIcon>);
		}
		
		tds.push(<td key="__actions">{actionButtons}</td>);
		
		return (
			<tr key={rowData.data.id} style={styles.tr}>
				{tds}
			</tr>
		)
	});
	
	return (
		<div>
			{title}
			<table style={styles.table}>
				<thead style={styles.thead}>
					<tr style={styles.tr}>
						{headTds}
					</tr>
				</thead>
				<tbody>
					{dataRows}
				</tbody>
			</table>
		</div>
	)
}

export default Grid;