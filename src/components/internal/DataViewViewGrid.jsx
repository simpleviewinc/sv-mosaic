import React from "react";
import styled from "styled-components";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { pick } from "lodash";

import Checkbox from "../Checkbox.jsx";
import ButtonRow from "../ButtonRow.jsx";
import Button from "../Button.jsx";
import GridActionsButtonRow from "./GridActionsButtonRow.jsx";
import theme from "../../utils/theme.js";

const StyledDiv = styled.div`
	& > .bulkRow {
		margin-bottom: 4px;
	}
	
	& > .grid {
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		grid-column-gap: 8px;
		grid-row-gap: 20px;
	}
	
	& > .grid > .cell {
		min-width: 0;
	}
	
	& > .grid > .cell.checked > .image > .checkboxContainer {
		opacity: 1;
	}
	
	& > .grid > .cell.checked > .image > .checkboxContainer > .mask {
		opacity: 1;
		border: 2px solid rgba(255, 255, 255, .5);
		margin: 6px;
	}
	
	& > .grid > .cell > img {
		max-width: 100%;
		min-width: 100%;
	}
	
	& > .grid > .cell h2 {
		margin: 0;
		font-size: 14px;
		font-weight: normal;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}
	
	& > .grid > .cell h3 {
		margin: 0;
		font-weight: normal;
		font-size: 12px;
		color: ${theme.colors.gray600};
	}
	
	& > .grid > .cell .image {
		position: relative;
	}
	
	& > .grid > .cell > .image > .checkboxContainer {
		opacity: 0;
		position: absolute;
		top: 0px;
		left: 0px;
		transition: opacity 150ms;
	}
	
	& > .grid > .cell > .image:hover > .checkboxContainer {
		opacity: 1;
	}
	
	& > .grid > .cell > .image > .checkboxContainer > .mask {
		position: absolute;
		width: 18px;
		height: 18px;
		left: 4px;
		top: 4px;
		margin: 8px;
		background: white;
		border-radius: 3px;
		opacity: .8;
	}
	
	& > .grid > .cell .image img {
		width: 100%;
	}
	
	& > .grid > .cell .info {
		display: flex;
		justify-content: space-between;
		align-items: center;
		max-width: 100%;
	}
	
	& > .grid > .cell > .info > .left {
		min-width: 0;
	}
	
	& > .grid > .cell > .info > .right {
		flex-shrink: 0;
	}
`

function DataViewViewGrid(props) {
	// TODO VALIDATE PROPS
	
	const checkboxClick = (i) => () => {
		props.onCheckboxClick(i);
	}
	
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
		<StyledDiv>
			<div className="bulkRow">
				{
					props.bulkActions &&
					<Checkbox
						checked={allChecked}
						onClick={props.onCheckAllClick}
					/>
				}
				{
					anyChecked &&
					<ButtonRow buttons={bulkActionButtons}/>
				}
			</div>
			<div className="grid">
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
									{row.image}
								</div>
								<div className="info">
									<div className="left">
										<h2>{row.primary}</h2>
										<h3>{row.secondary}</h3>
									</div>
									<div className="right">
										<GridActionsButtonRow
											primaryActions={props.primaryActions}
											additionalActions={props.additionalActions}
											row={row}
										/>
									</div>
								</div>
							</div>
						)
					})
				}
			</div>
		</StyledDiv>
	)
}

export default DataViewViewGrid;