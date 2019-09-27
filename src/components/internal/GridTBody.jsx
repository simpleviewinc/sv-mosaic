import React from "react";
import styled from "styled-components";

import Checkbox from "../Checkbox.jsx";
import ButtonRow from "../ButtonRow.jsx";
import Button from "../Button.jsx";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const StyledTBody = styled.tbody`
	& > tr > td.bold {
		font-weight: 600;
	}
	
	& > tr > td:last-child {
		text-align: right;
	}
`

function GridTBody(props) {
	// jsvalidator.validate(
	
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
						<tr key={row.id}>
							{ props.bulkActions &&
								<td key="_bulk">
									<Checkbox
										checked={props.checked[i] === true}
										onClick={checkboxClick(i)}
									/>
								</td>
							}
							{
								props.columns.map(column => {
									let data = row[column.name];
									if (data !== undefined && column.transforms !== undefined) {
										for(let [key, transform] of Object.entries(column.transforms)) {
											data = transform(data);
										}
									}
									
									return (
										<td
											key={column.name}
											className={column.style === "bold" ? "bold" : undefined}
										>{data}</td>
									);
								})
							}
							<td>
								<ButtonRow>
									{
										props.primaryActions && 
										props.primaryActions.map((action, i) => {
											return (
												<Button
													key={`primary_{i}`}
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
							</td>
						</tr>
					)
				})
			}
		</StyledTBody>
	)
}

export default GridTBody;