import React, { useState } from "react";
import styled from "styled-components";
import jsvalidator from "jsvalidator";
import { pick } from "lodash";

import SettingsIcon from "@material-ui/icons/Settings";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

import ButtonRow from "../ButtonRow.jsx";
import Button from "../Button.jsx";
import Checkbox from "../Checkbox.jsx";
import GridColumnDrawer from "./GridColumnDrawer.jsx";

import theme from "../../utils/theme.js";

const StyledWrapper = styled.thead`
	text-align: left;
	background-color: ${theme.colors.gray200};
	border-top: ${theme.borders.lightGray};
`

const StyledTh = styled.th`
	font-size: 14px;
	text-align: left;
	font-weight: bold;
	padding: 5px 0px;
	height: 40px;
	color: ${theme.colors.gray700};
	border-bottom: 1px solid ${theme.colors.gray200};
	
	&:first-child {
		border-radius: 4px 0 0 4px
	}

	&:last-child {
		text-align: right;
		border-radius: 0 4px 4px 0;
	}
	
	& > .columnHeader {
		display: inline-flex;
		align-items: center;
		font-weight: 400;
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
		border-bottom: 1px solid #000;
	}

	&.active > .columnHeader {
		font-weight: bold;
	}
	
	&.active > .columnHeader > .icon {
		visibility: visible;
		color: ${theme.colors.gray600};

	}
	
	&.active > .columnHeader:hover > .icon {
		color: black;
	}
	
	& > .columnHeader:hover > .icon {
		visibility: visible;
		color: ${theme.colors.lightGray};
	}
	
	&.bulk {
		width: 52px;
		padding: 0 4px;
	}

	& .settings {
		margin-right: 4px;
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
	
	const [state, setState] = useState({
		gearOpen : false
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
	
	const gearClick = function() {
		setState({
			...state,
			gearOpen : !state.gearOpen
		});
	}
	
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
					<StyledTh key="_bulk_actions" colSpan={props.columns.length}>
						<ButtonRow buttons={bulkActionButtons}/>
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
							Icon = active && props.sort.dir === "desc" ? ArrowUpwardIcon : ArrowDownwardIcon;
							clickDir = active ? flipDir(props.sort.dir) : "asc";
						}
						
						return (
							<StyledTh
								key={column.name}
								className={`
									${column.sortable ? "sortable" : ""}
									${active ? "active" : ""}
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
				<StyledTh key="_actions">
					{
						props.onColumnsChange !== undefined &&
						<Button className="settings" color="gray" variant="icon" mIcon={SettingsIcon} onClick={gearClick}/>
					}
				</StyledTh>
			</tr>
			{
				props.onColumnsChange !== undefined &&
				<GridColumnDrawer
					open={state.gearOpen}
					columns={props.columns}
					allColumns={props.allColumns}
					onChange={props.onColumnsChange}
					onClose={gearClick}
				/>
			}
		</StyledWrapper>
	)
}

export default GridTHead;