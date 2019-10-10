import React from "react";
import styled from "styled-components";
import jsvalidator from "jsvalidator";

import SettingsIcon from "@material-ui/icons/Settings";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

import ButtonRow from "../ButtonRow.jsx";
import Button from "../Button.jsx";
import Checkbox from "../Checkbox.jsx";

import theme from "../../utils/theme.js";

const StyledWrapper = styled.thead`
	& {
		text-align: left;
		border-bottom: 1px solid rgba(0, 0, 0, .15);
		border-top: 1px solid rgba(0, 0, 0, .05);
	}
	
	& > tr > th {
		text-align: left;
		font-weight: normal;
		padding: 5px 0px;
	}
	
	& > tr > th:last-child {
		text-align: right;
	}
	
	& .columnHeader {
		display: inline-flex;
		align-items: center;
	}
	
	& .columnHeader.sortable {
		cursor: pointer;
	}
	
	& .columnHeader > svg {
		visibility: hidden;
		font-size: 18px;
	}
	
	& .columnHeader.active > svg {
		visibility: visible;
	}
	
	& .columnHeader.active:hover > svg {
		color: black;
	}
	
	& .columnHeader:hover > svg {
		visibility: visible;
		color: ${theme.colors.lightGray};
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
			}
		],
		allowExtraKeys : false,
		throwOnInvalid : true
	});
	
	const bulkActionButtons = props.bulkActions ? props.bulkActions.map(action => {
		return {
			...action,
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
				{ props.bulkActions &&
					<th key="_bulk">
						<Checkbox
							checked={allChecked}
							onClick={props.onCheckAllClick}
						/>
					</th>
				}
				{ anyChecked &&
					<th key="__bulk_actions" colSpan={props.columns.length}>
						<ButtonRow buttons={bulkActionButtons}/>
					</th>
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
						
						const active = props.sort.name === column.name;
						const Icon = active && props.sort.dir === "desc" ? ArrowUpwardIcon : ArrowDownwardIcon;
						const clickDir = active ? flipDir(props.sort.dir) : "asc";
						
						return (
							<th key={column.name}>
								<span
									className={`
										columnHeader
										${column.sortable ? "sortable" : ""}
										${active ? "active" : ""}
									`}
									onClick={column.sortable ? onClick : undefined}
								>
									{column.label}
									
									{ column.sortable &&
										<Icon/>
									}
								</span>
							</th>
						);
					})
				}
				<th key="__actions"><Button color="gray" variant="icon" mIcon={SettingsIcon}/></th>
			</tr>
		</StyledWrapper>
	)
}

export default GridTHead;