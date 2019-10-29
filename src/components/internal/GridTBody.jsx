import React from "react";
import styled from "styled-components";
import jsvalidator from "jsvalidator";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';


import Checkbox from "../Checkbox.jsx";
import ButtonRow from "../ButtonRow.jsx";
import Button from "../Button.jsx";
import GridTd from "./GridTd.jsx";
import theme from "../../utils/theme.js";

import { transformColumn } from "../../utils/gridTools.js";

const StyledTBody = styled.tbody`
	& > tr {
		border-bottom: ${theme.borders.lightGray};
	}
	
	& > tr > td {
		padding: 5px 0px;
	}
	
	& > tr > td.bold {
		font-weight: 600;
	}
	
	& > tr > td > .transform_thumbnail {
		display: block;
	}
	
	& > tr > td:last-child {
		text-align: right;
	}
`

function GridTBody(props) {
	jsvalidator.validate(props, {
		type : "object",
		schema : [
			{
				name : "checked",
				type : "array",
				required : true
			},
			{
				name : "columns",
				type : "array",
				required : true
			},
			{
				name : "data",
				type : "array",
				required : true
			},
			{
				name : "primaryActions",
				type : "array"
			},
			{
				name : "additionalActions",
				type : "array"
			},
			{
				name : "bulkActions",
				type : "array"
			},
			{
				name : "onActionClick",
				type : "function",
				required : true
			},
			{
				name : "onCheckboxClick",
				type : "function",
				required : true
			}
		],
		allowExtraKeys : false,
		throwOnInvalid : true
	});
	
	const actionClick = (action, row) => () => {
		props.onActionClick(action, row);
	}
	
	const checkboxClick = (i) => () => {
		props.onCheckboxClick(i);
	}
	
	return (
		<StyledTBody>
			{
				props.data.map((row, i) => {
					return (
						<tr key={row.id || i}>
							{ props.bulkActions &&
								<GridTd key="_bulk">
									<Checkbox
										checked={props.checked[i] === true}
										onClick={checkboxClick(i)}
									/>
								</GridTd>
							}
							{
								props.columns.map(column => {
									const data = transformColumn(row, column);
									
									return (
										<GridTd
											key={column.name}
											className={column.style === "bold" ? "bold" : undefined}
										>
											{data}
										</GridTd>
									);
								})
							}
							<GridTd>
								<ButtonRow>
									{
										props.primaryActions && 
										props.primaryActions.map((action, i) => {
											return (
												<Button
													key={`primary_${i}`}
													{ ...action }
													onClick={actionClick(action, row)}
												/>
											)
										})
									}
									{
										props.additionalActions &&
										<Button
											key="additional"
											color="blue"
											variant="icon"
											mIcon={MoreHorizIcon}
											menuItems={props.additionalActions.map(action => {
												return {
													...action,
													onClick : actionClick(action, row)
												}
											})}
										/>
									}
								</ButtonRow>
							</GridTd>
						</tr>
					)
				})
			}
		</StyledTBody>
	)
}

export default GridTBody;