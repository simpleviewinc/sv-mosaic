import React from "react";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import Checkbox from "../Checkbox.jsx";
import GridTd from "./GridTd.jsx";
import ButtonRow from "../ButtonRow.jsx";
import Button from "../Button.jsx";
import { transformColumn } from "../../utils/gridTools.js";

function GridTr(props) {
	const onActionClick = (action) => () => {
		props.onActionClick(action, props.row);
	}
	
	return (
		<tr>
			{
				props.bulkActions &&
				<GridTd key="_bulk">
					<Checkbox
						checked={props.checked === true}
						onClick={props.onCheckboxClick}
					/>
				</GridTd>
			}
			{
				props.columns.map(column => {
					return (
						<GridTd
							key={column.name}
							className={column.style === "bold" ? "bold" : undefined}
						>
							{props.row[column.name]}
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
									onClick={onActionClick(action)}
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
									onClick : onActionClick(action)
								}
							})}
						/>
					}
				</ButtonRow>
			</GridTd>
		</tr>
	);
}

export default GridTr;