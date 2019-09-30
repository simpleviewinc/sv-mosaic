import React from "react";
import styled from "styled-components";
import Checkbox from "../Checkbox.jsx";

import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import ButtonRow from "../ButtonRow.jsx";
import Button from "../Button.jsx";
import { transformColumn } from "../../utils/gridTools.js";
import theme from "../../utils/theme.js";

const StyledDiv = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-column-gap: 8px;
	grid-row-gap: 20px;
	
	& > .cell {
		min-width: 0;
	}
	
	& > .cell.checked > .image > .checkboxContainer {
		opacity: 1;
	}
	
	& > .cell > img {
		max-width: 100%;
		min-width: 100%;
	}
	
	& > .cell h2 {
		margin: 0;
		font-size: 14px;
		font-weight: normal;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}
	
	& > .cell h3 {
		margin: 0;
		font-weight: normal;
		font-size: 12px;
		color: ${theme.colors.lightGray};
	}
	
	& > .cell .image {
		position: relative;
	}
	
	& > .cell > .image > .checkboxContainer {
		opacity: 0;
		position: absolute;
		top: 0px;
		left: 0px;
		transition: opacity 150ms;
	}
	
	& > .cell > .image:hover > .checkboxContainer {
		opacity: 1;
	}
	
	& > .cell > .image > .checkboxContainer > .mask {
		position: absolute;
		top: 0px;
		left: 0px;
		right: 0px;
		bottom: 0px;
		background: white;
	}
	
	& > .cell > .image > .checkboxContainer > .checkbox {
		padding: 4px;
	}
	
	& > .cell .image img {
		width: 100%;
	}
	
	& > .cell .info {
		display: flex;
		justify-content: space-between;
		align-items: center;
		max-width: 100%;
	}
	
	& > .cell > .info > .left {
		min-width: 0;
	}
	
	& > .cell > .info > .right {
		flex-shrink: 0;
	}
`

function GridGridView(props) {
	const imageColumn = props.columns.find(val => val.name === "image");
	const primaryColumn = props.columns.find(val => val.name === "primary");
	const secondaryColumn = props.columns.find(val => val.name === "secondary");
	
	const actionClick = (action, row) => () => {
		props.onActionClick(action, row);
	}
	
	const checkboxClick = (i) => () => {
		props.onCheckboxClick(i);
	}
	
	return (
		<StyledDiv>
			{
				props.data.map((row, i) => {
					return (
						<div
							className={`
								cell
								${props.checked[i] === true ? "checked" : ""}
							`}
							key={row.id}
						>
							<div className="image">
								<div className="checkboxContainer">
									<div className="mask"/>
									<Checkbox
										className="checkbox"
										checked={props.checked[i] === true}
										onClick={checkboxClick(i)}
									/>
								</div>
								{transformColumn(row, imageColumn)}
							</div>
							<div className="info">
								<div className="left">
									<h2>{transformColumn(row, primaryColumn)}</h2>
									<h3>{transformColumn(row, secondaryColumn)}</h3>
								</div>
								<div className="right">
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
								</div>
							</div>
						</div>
					)
				})
			}
		</StyledDiv>
	)
}

export default GridGridView;