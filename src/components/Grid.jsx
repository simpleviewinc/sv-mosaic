import React, { useState, useEffect } from "react";
import jsvalidator from "jsvalidator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faEllipsisH, faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import styled from "styled-components";

import * as column_transforms from "../utils/column_transforms.js";
import GridCheckbox from "./internal/GridCheckbox.jsx";
import GridTh from "./internal/GridTh.jsx";
import Button from "./Button.jsx";
import theme from "../utils/theme.js";

const StyledWrapper = styled.div`
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
	},
	actionColumn : {
		textAlign : "right"
	},
	primaryActionButton : {
		paddingLeft: "20px"
	},
	bulkButton : {
		marginRight: "5px"
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
					},
					{
						name : "defaultSort",
						type : "string"
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
		
		headTds.push(
			<GridTh key="__bulk">
				<GridCheckbox checked={allChecked} onClick={clickHandler}></GridCheckbox>
			</GridTh>
		);
	}
	
	const hasCheckedRow = tableData.filter(val => val.checked).length > 0;
	if (hasCheckedRow) {
		const actionButtons = bulkActions.map(action => {
			return (
				<span key={action.name} style={styles.bulkButton}>
					<Button faIcon={action.faIcon} border={true}></Button>
				</span>
			);
		});
		
		headTds.push(<th key="__bulk_actions" colSpan={props.config.columns.length} style={styles.th}>{actionButtons}</th>);
	} else {
		headTds.push(...props.config.columns.map(column => {
			const label = column.label || column.name;
			
			return (
				<GridTh
					key={column.name}
					sortable={column.sortable}
					active={column.name === props.config.defaultSort}
					onClick=
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
			
			return <td key={column.name} style={styles.td}>{data}</td>
		}));
		
		const actionButtons = primaryActions.map(action => {
			return (
				<span key={action.name} style={styles.primaryActionButton}>
					<Button faIcon={action.faIcon} color={action.color}></Button>
				</span>
			);
		});
		
		if (additionalActions.length > 0) {
			actionButtons.push(
				<span key="__additional" style={styles.primaryActionButton}>
					<Button faIcon={faEllipsisH} color={theme.colors.blue}></Button>
				</span>
			);
		}
		
		tds.push(<td key="__actions" style={styles.actionColumn}>{actionButtons}</td>);
		
		return (
			<tr key={rowData.data.id} style={styles.tr}>
				{tds}
			</tr>
		)
	});
	
	return (
		<StyledWrapper>
			{title}
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