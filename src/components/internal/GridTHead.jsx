import React from "react";
import styled from "styled-components";
import jsvalidator from "jsvalidator";
import { pick } from "lodash";

import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

import ButtonRow from "../ButtonRow.jsx";
import Checkbox from "../Checkbox.jsx";
import { DataViewColumnControl } from "./DataViewColumnControl";

import theme from "../../utils/theme.js";

const StyledWrapper = styled.thead`
	text-align: left;
`

const StyledTh = styled.th`
	font-size: 14px;
	text-align: left;
	font-weight: 400;
	padding: 5px 0px;
	height: 40px;
	color: ${theme.colors.gray700};
	position: sticky;
	top: 0;
	z-index: 1;
	background-color: ${theme.colors.gray200};
	white-space: nowrap;

	${/* Borders on sticky elements don't carry through, so we put them on the :after element */""}
	&:after {
		content: "";
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		border-bottom: ${theme.borders.gray200};
		pointer-events: none;
	}
	
	& > .columnHeader {
		display: inline-flex;
		align-items: center;
	}

	&.paddingRight {
		padding-right: 12px;
	}

	&.paddingLeft {
		padding-left: 12px;
	}

	&.sortable > .columnHeader {
		cursor: pointer;
	}
	
	& > .columnHeader > .icon {
		visibility: hidden;
		font-size: 18px;
		margin-left: 0.25rem;
		margin-top: 1px;
	}
	
	&.active {
		color: ${theme.colors.gray800};
		font-weight: 700;
	}

	&.active:after {
		border-bottom: 1px solid ${theme.colors.gray800};
	}
	
	&.active > .columnHeader > .icon {
		visibility: visible;
	}
	
	&.active > .columnHeader:hover > .icon {
		color: black;
	}
	
	& > .columnHeader:hover > .icon {
		visibility: visible;
		color: ${theme.colors.gray600};
	}
	
	&.bulk {
		width: 52px;
	}
`

function flipDir(sort) {
	return sort === "asc" ? "desc" : "asc";
}

function GridTHead(props) {
	jsvalidator.validate(props, {
		type : "object",
		schema : [
			{
				name : "checked",
				type : "array",
				required : true
			},
			{
				name : "bulkActions",
				type : "array",
			},
			{
				name : "columns",
				type : "array"
			},
			{
				name : "allColumns",
				type : "array"
			},
			{
				name : "sort",
				type : "object"
			},
			{
				name : "onSortChange",
				type : "function"
			},
			{
				name : "onCheckAllClick",
				type : "function"
			},
			{
				name : "onBulkActionClick",
				type : "function"
			},
			{
				name : "onColumnsChange",
				type : "function"
			}
		],
		allowExtraKeys : false,
		throwOnInvalid : true
	});
	
	const bulkActionButtons = props.bulkActions ? props.bulkActions.map(action => {
		const buttonArgs = pick(action, ["label", "color", "variant", "mIcon"]);
		
		return {
			...buttonArgs,
			onClick : function() {
				props.onBulkActionClick(action);
			}
		}
	}) : undefined;
	
	const allChecked = props.checked.length > 0 && props.checked.every(val => val === true);
	const anyChecked = props.checked.length > 0 && props.checked.some(val => val === true);
	
	return (
		<StyledWrapper>
			<tr>
				{
					props.bulkActions &&
					<StyledTh key="_bulk" className="bulk">
						<Checkbox
							checked={allChecked}
							onClick={props.onCheckAllClick}
						/>
					</StyledTh>
				}
				{
					anyChecked &&
					<StyledTh key="_bulk_actions" colSpan={props.columns.length + 1}>
						<ButtonRow buttons={bulkActionButtons}/>
					</StyledTh>
				}
				{
					!anyChecked &&
					<StyledTh key="_actions" className={`
						paddingRight
						${ !props.bulkActions ? "paddingLeft" : "" }
					`}>
						{
							props.onColumnsChange !== undefined &&
							<DataViewColumnControl
								onChange={props.onColumnsChange}
								columns={props.columns}
								allColumns={props.allColumns}
							/>
						}
						{
							// We need to indent the actions by 11px to align with the buttons underneath
							!props.onColumnsChange &&
							<span style={{paddingLeft: "11px"}}>Actions</span>
						}
					</StyledTh>
				}
				{
					!anyChecked &&
					props.columns.map(column => {
						const onClick = function() {
							props.onSortChange({
								name : column.name,
								dir : clickDir
							});
						};
						
						let active;
						let Icon;
						let clickDir;
						
						if (column.sortable) {
							active = props.sort.name === column.name;
							Icon = active && props.sort.dir === "desc" ? ArrowDownwardIcon : ArrowUpwardIcon;
							clickDir = active ? flipDir(props.sort.dir) : "asc";
						}
						
						return (
							<StyledTh
								key={column.name}
								className={`
									${column.sortable ? "sortable" : ""}
									${active ? "active" : ""}
									paddingRight
								`}
							>
								<span
									className="columnHeader"
									onClick={column.sortable ? onClick : undefined}
								>
									{column.label}
									
									{ column.sortable &&
										<Icon className="icon"/>
									}
								</span>
							</StyledTh>
						);
					})
				}
			</tr>
		</StyledWrapper>
	)
}

export default GridTHead;